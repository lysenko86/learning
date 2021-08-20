// Source: https://www.youtube.com/watch?v=mk-zHOqaqYI&list=PLNkWIWHIRwMFQBDhZ6HfwO9NL09X3N3Gq

import React, { useState } from "react";

type BaseProps = {
  primTitle: string,
  secTitle?: string,
};

type InjectedProps = {
  toggleStatus: Boolean,
  toggle: () => void,
}

const Button = ({ primTitle, secTitle, toggle, toggleStatus }: any) => (
  <button onClick={toggle}>
    {toggleStatus ? primTitle : secTitle}
  </button>
);

const withToggle = <BaseProps extends InjectedProps> (PassedComponent: React.ComponentType<BaseProps>) => {
  return (props: BaseProps) => {
    const [ toggleStatus, toggle ] = useState(false);
    return (
      <PassedComponent
        { ...props as BaseProps }
        toggle={() => toggle(!toggleStatus)}
        toggleStatus={toggleStatus}
      />
    );
  }
};

const ToggleButton = withToggle(Button);

const App:React.FC = () => <ToggleButton primTitle="Main Title" secTitle="Additional Title" />

export default App;







// Еще один HOC
const LoadingSpinner: React.FC = () => <div>Loading...</div>;
interface WithLoadingProps {
  loading: boolean;
}
const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { loading, ...props} = this.props;
      return loading ? <LoadingSpinner /> : <Component { ...props as P } />;
    }
  }
