// Source: https://www.youtube.com/watch?v=SaRPd9DwyoM&list=PLNkWIWHIRwMFQBDhZ6HfwO9NL09X3N3Gq

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
  children: React.ReactNode
}
class Portal extends Component<PortalProps, {}> {
  private el: HTMLDivElement = document.createElement('div');

  public componentDidMount(): void {
    document.body.appendChild(this.el);
  }

  public componentWillUnmount(): void {
    document.body.removeChild(this.el);
  }

  public render(): React.ReactElement<PortalProps> {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
};

interface IContext {
  isAuth: boolean,
  toggleAuth: () => void,
};
const AuthContext = React.createContext<IContext>({
  isAuth: false,
  toggleAuth: () => {},
});

class Login extends Component {
  static contextType = AuthContext;
  context!: React.ContextType<typeof AuthContext>

  render() {
    const { toggleAuth, isAuth } = this.context;
    return (
      <button onClick={toggleAuth}>
        {!isAuth ? 'Login' : 'Logout'}
      </button>
    )
  }
}

const Profile: React.FC = (): React.ReactElement => (
  <AuthContext.Consumer>
    {({ isAuth }: IContext) => (
      <h1>{!isAuth ? 'Please log in' : 'You are logged in'}</h1>
    )}
  </AuthContext.Consumer>
);

class Context extends Component<{}, { isAuth: Boolean }> {
  readonly state = {
    isAuth: false,
  }

  toggleAuth = () => {
    this.setState(({ isAuth }) => ({
      isAuth: !isAuth,
    }));
  }

  render() {
    const { isAuth } = this.state;
    const context: IContext = { isAuth, toggleAuth: this.toggleAuth };

    return (
      <AuthContext.Provider value={context}>
        <Login />
        <Profile />
      </AuthContext.Provider>
    );
  }
}

const App:React.FC = () => (
  <div>
    <Portal>
      <h3>HELLO</h3>
      <h4>WORLD!</h4>
    </Portal>
    <Context />
  </div>
);

export default App;
