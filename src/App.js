import React from 'react';
import Auth from './Auth/Auth';
import './App.css';
import Question from './Question/Question';


class App extends React.Component {

  state = {
    questions: null,
    number: 0,
    isAuth: false

  }

  isAuth = (data) => {
    this.setState({ isAuth: data });
  }

  componentDidMount() {
    fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`)
      .then(res => { return res.json() })
      .then(data => {
        this.setState({ questions: data.results })
      })
  }


  render() {
    return (
      <div>
        {this.state.isAuth ? <Question questions={this.state.questions} /> : <Auth isAuth={this.isAuth} />}
      </div>
    );
  }
}
export default App;
