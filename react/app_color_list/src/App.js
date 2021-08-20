/*
    - керування даними з одного місця - головного компоненту App
    - дані передаються в дочірні елементи через props, а назад вертаються через колбек функції,
        які описані в головному компоненті App
    - таку структуру досить легко масштабувати і вона досить надійна
*/

import { v4 } from 'uuid'
import React from 'react';
import AddColorForm from './components/AddColorForm'
import ColorList from './components/ColorList'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: []
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
