/*
	source: https://www.udemy.com/course/react-hooks-writing-real-project/
	stack: create-react-app, react, хуки, авторизація, axios, classnames, query-string, prettier.io
	start ---> yarn start
  node -v ---> 10.19.0

  const [ username, setUsername ] = useState(''); - хук для використання стейту
  const inputRef = useRef(null); - створює посилання на DOM елемент, щоб використати -
      треба задати якомусь елемнту атрибут ref={inputRef}, після цього по ссилці
      inputRef буде можливий доступ до цього елемнту, використовується наприклад для фокусу на елемент
  useEffect(() => {}, []) - хук для роботи з ефектами, альтернатива для componentDidMount, componentWillUnmount, componentShouldUpdate
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "routes";
import TopBar from "components/topBar";
import { CurrentUserProvider } from "contexts/currentUser";
import CurrentUserChecker from "components/currentUserChecker";

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
