import { v4 } from 'uuid'
import React from 'react';
import AddColorForm from './components/AddColorForm'
import ColorList from './components/ColorList'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: [
                { id: '_0', title: 'Ocean blue', color: '#0000ff', rating: 0 },
                { id: '_1', title: 'Tomato', color: '#ff0000', rating: 0 },
                { id: '_2', title: 'Lawn', color: '#00ff00', rating: 0 },
                { id: '_3', title: 'Party pink', color: '#f100ff', rating: 0 }
            ]
        }
        this.addColor = this.addColor.bind(this);
        this.rateColor = this.rateColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
    }
    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            { id: v4(), title, color, rating: 0 }
        ]
        this.setState({ colors });
    }
    rateColor(id, rating) {
        const colors = this.state.colors.map(color =>
            color.id !== id ? color : { ...color, rating })
        this.setState({ colors });
    }
    removeColor(id) {
        const colors = this.state.colors.filter(color => color.id !== id)
        this.setState({ colors });
    }
    render() {
        const { addColor, rateColor, removeColor } = this;
        const { colors } = this.state;
        return (
            <div className="app">
                <AddColorForm onNewColor={addColor} />
                <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
            </div>
        )
    }
}
