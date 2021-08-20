import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import './Color.css';

class Color extends React.Component {
    componentWillMount() {
        this.style = { backgroundColor: '#ccc' }
    }

    shouldComponentUpdate(nextProps) {
        // Порівнює старий rating з новим і якщо вертає false - то конкретний
        // компонент Color не оновлюється - ОПТИМІЗАЦІЯ. Якщо не оновлюється
        // Color то не оновлюються і всі його дочірні компоненти
        const { rating } = this.props;
        return rating !== nextProps.rating;
    }

    componentWillUpdate(nextProps) {
        const { title, rating } = this.props;
        this.style = null;
        this.refs.title.style.backgroundColor = 'red';
        this.refs.title.style.color = 'white';
        console.log(`${title}: rating ${rating} -> ${nextProps.rating}`);
        alert(`${title}: rating ${rating} -> ${nextProps.rating}`);
    }

    componentDidUpdate(prevProps) {
        const { title, rating } = this.props;
        const status = rating > prevProps.rating ? 'better' : 'worse';
        this.refs.title.style.backgroundColor = '';
        this.refs.title.style.color = 'black';
        console.log(`${title} is getting ${status}`);
    }

    render() {
        const { title, rating, color, onRate } = this.props;
        return <section style={this.style}>
            <h1 ref="title">{title}</h1>
            <div className="color" style={{backgroundColor: color}}></div>
            <StarRating starsSelected={rating} onRate={onRate} />
        </section>
    }
}

Color.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    color: PropTypes.string,
    onRate: PropTypes.func
}

Color.defaultProps = {
    title: undefined,
    rating: 0,
    color: '#000000',
    onRate: f=>f
}

export default Color;
