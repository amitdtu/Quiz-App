import React from 'react';
import Auth from './Auth/Auth';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Result from './Result/Reult';
import Question from './Question/Question';



class App extends React.Component {

  state = {
    questions: null,
    number: 0,
    isAuth: false,
    result: null

  }

  resultHandler = (resData) => {
    this.setState({
      result: resData
    })
  }

  isAuth = (data) => {
    this.setState({ isAuth: data });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/quiz" render={() => <Question questions={this.state.questions}
            result={this.resultHandler} />} />
          <Route path="/result" render={() => <Result result={this.state.result} />} />
          <Route path="/" exact render={() => <Auth />} />
        </Switch>
      </div>
    );
  }
}
export default App;
