/*
    High-order component - Компонент вищого порядку - функція, яка отримує в
    параметрах один компонент і повертає один компонент. Використовується для того,
    щоб винести схожу функціональність і стейт окремо для подальшого багатократного
    використання
*/

import React from 'react'
import { render } from 'react-dom'
import fetch from 'isomorphic-fetch'



// Ф-ція отримує дані і завантажує їх в стейт, поки дані не завантажені -
// виводить повідомлення, коли завантажились - передає керування компоненту з аргументів
function DataComponent (ComposedComponent, url) {
    return class DataComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                loaded: false,
                loading: false
            }
        }

        componentWillMount() {
            this.setState({ loading: true });
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({ loaded: true, loading: false, data }));
        }

        render() {
            return (<div className="data-component">
                {this.state.loading ? <div>Loading...</div> : <ComposedComponent {...this.state} {...this.props} />}
            </div>)
        }
    }
}



const PeopleList = ({data}) => <ol className="people-list">
    {data.results.map((person, i) => {
        const { first, last } = person.name;
        return <li key={i}>{first} {last}</li>
    })}
</ol>;

const RandomMeUsers = DataComponent(PeopleList, 'https://randomuser.me/api');

/*render(
    <RandomMeUsers />,
    document.getElementById('react-container')
)*/



const CountryNames = ({data, selected=""}) =>
<select className="country-list" defaultValue={selected}>
    {data.map(({name}, i) => <option key={i} value={name}>{name}</option>)}
</select>;

const CountryDropDown = DataComponent(CountryNames, 'https://restcountries.eu/rest/v1/all');



render(
    <CountryDropDown selected="United States" />,
    document.getElementById('react-container')
)
