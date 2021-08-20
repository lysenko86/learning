import React from 'react'
import { render } from 'react-dom'



function Expandable (ComposedComponent) {
    return class Expandable extends React.Component {
        constructor(props) {
            super(props);
            const collapsed = !!(props.hidden && props.hidden === true);
            this.state = { collapsed };
            this.expandCollapse = this.expandCollapse.bind(this);
        }

        expandCollapse() {
            let collapsed = !this.state.collapsed;
            this.setState({ collapsed });
        }

        render() {
            return <ComposedComponent expandCollapse={this.expandCollapse} {...this.props} {...this.state} />
        }
    }
}



const ShowHideMessage = ({ children, collapsed, expandCollapse }) => <p onClick={expandCollapse}>
    { collapsed ? children.replace(/[a-zA-Z0-9]/g, 'x') : children }
</p>;

const HiddenMessage = Expandable(ShowHideMessage);

class HiddenMessages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [
                'The crow crows after midnight',
                'Bring a watch and dark clothes to the spot',
                'Jericho Jericho Go'
            ]
        };
    }

    render() {
        const { messages, showing } = this.state;
        return <div className="hidden-messages">
            {messages.map((message, i) => <HiddenMessage key={i} hidden={true}>{message}</HiddenMessage>)}
        </div>
    }

}

/*render(
    <HiddenMessages />,
    document.getElementById('react-container')
)*/



const MenuButton = ({ children, collapsed, txt, expandCollapse }) => <div className="pop-button">
    <button onClick={expandCollapse}>{txt}</button>
    {!collapsed ? <div className="pop-up">{children}</div> : ''}
</div>

const PopUpButton = Expandable(MenuButton);

render(
    <PopUpButton hidden={true} txt="toggle popup">
        <h1>Hidden Content</h1>
        <p>This content will start off hidden</p>
    </PopUpButton>,
    document.getElementById('react-container')
)
