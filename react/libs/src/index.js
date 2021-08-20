/* Допоміжні бібліотеки добре підключати  окремо тільки для тих компонентів,
      яким вони потрібні, оскільки важкі ліби такі як JQuery забирають ресурси.
      Підключати треба в componentDidMount() бо вже компонент є в DOM, так само
      і динамічні дані підгружати слід в componentDidMount(). */

import React from 'react'
import { render } from 'react-dom'
import fetch from 'isomorphic-fetch'
import d3 from 'd3'



// Приклад з завантаженням даних за допомогою Fetch
class CountryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryNames: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch('https://restcountries.eu/rest/v1/all')
            .then(response => response.json())
            .then(json => json.map(country => country.name))
            .then(countryNames => this.setState({ countryNames, loading: false }));
    }

    render() {
        const { countryNames, loading } = this.state;
        return loading ?
            <div>Loading Country Names...</div> :
            !countryNames.length ?
                <div>No Country Names</div> :
                <ul>{countryNames.map((x, i) => <li key={i}>{x}</li>)}</ul>
    }
}



// Інший приклад з завантаженням ліби "D3"
const historicDatesForSkiing = [
    { year: 1879, event: 'Ski Manufacturing Begins' },
    { year: 1882, event: 'US Ski Club Founded'},
    { year: 1924, event: 'First Winter Olympics Held' },
    { year: 1926, event: 'First US Ski Shop Opens' },
    { year: 1932, event: 'North America\'s First Rope Tow Spins' },
    { year: 1936, event: 'First Chairlift Spins' },
    { year: 1949, event: 'Squaw Valley, Mad River Glen Open' },
    { year: 1958, event: 'First Gondola Spins' },
    { year: 1964, event: 'Plastic Buckle Boots Available' }
];

/* Створимо 2 компоненти додаткові, щоб роботу з UI робив реакт а не ліба */
const Canvas = ({children}) => <svg height="200" width="500">{children}</svg>;

const TimelineDot = ({position, txt}) => <g transform={`translate(${position}, 0)`}>
    <circle cy={160} r={5} style={{fill: 'blue'}} />
    <text y={115} x={-95} transform="rotate(-45)" style={{fontSize: '10px'}}>{txt}</text>
</g>;
/* --------------------- */

class Timeline extends React.Component {
    constructor(props) {
        const { data=[] } = props;
        const times = d3.extent(data.map(d => d.year));
        const range = [50, 450];
        super(props);
        this.scale = d3.time.scale().domain(times).range(range);
        this.state = { data, times, range };
    }

    /* Цей код стає не потрібним, оскільки з UI має працюваим реакт
    componentDidMount() {
        let group;
        const { data, times, range } = this.state;
        const { target } = this.refs;
        d3.select(target).append('svg').attr('height', 200).attr('width', 500);
        group = d3.select(target.children[0]).selectAll('g').data(data).enter()
            .append('g').attr('transform', (d, i) => `translate(${this.scale(d.year)}, 0)`);
        group.append('circle').attr('cy', 160).attr('r', 5).style('fill', 'blue');
        group.append('text').text(d => `${d.year} - ${d.event}`)
            .style('font-size', 10).attr('y', 115).attr('x', -95)
            .attr('transform', 'rotate(-45)');
    }

    render() {
        return <div className="timeline">
            <h1>{this.props.name}</h1>
            <div ref="target"></div>
        </div>
    }
    */

    render() {
        const { data } = this.state;
        const { scale } = this;
        return <div className="timeline">
            <h1>{this.props.name} Timeline</h1>
            <Canvas>
                {data.map((d, i) =>
                    <TimelineDot key={i} position={scale(d.year)} txt={`${d.year} - ${d.event}`} />)}
            </Canvas>
        </div>
    }
}



// Допоміжний компонент для зручного відображення
class ParentComponent extends React.Component {
    render() {
        return <div>
            <Timeline name="History of Skiing" data={historicDatesForSkiing}/>
            <hr /><hr /><hr />
            <CountryList />
        </div>
    }
}

render(
    <ParentComponent />,
    document.getElementById('react-container')
)
