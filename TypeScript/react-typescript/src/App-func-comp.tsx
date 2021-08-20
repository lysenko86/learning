// Source: https://www.youtube.com/watch?v=acO37eSCowc&list=PLNkWIWHIRwMFQBDhZ6HfwO9NL09X3N3Gq&index=1

import React from 'react';

// Синтаксис типизации функционального компонента

//const Title:React.FC<{title: string}> = ({title, children}) => <h1>{title}{children}</h1>;

type TitleProps = {
  title: string,
  test?: string,
};

const Title = ({title, test = 'test'}: TitleProps) => <h1>{title}{test}</h1>;

const App = () => <Title title="title"/>

export default App;
