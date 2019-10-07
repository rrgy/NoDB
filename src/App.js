import React from 'react';
import './App.css';
import axios from 'axios'
import Ball from './Components/Ball'
import List from './Components/List'
import FAQ from './Components/FAQ'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      answer: 'Ask me anything',
      question: '',
      list: []
    }
    this.getAnswer = this.getAnswer.bind(this)
    this.spec = this.spec.bind(this)
  }

  getAnswer(input) {
    axios
      .get('/api/answers/getRandAnswer')
      .then(res => this.setState({ answer: res.data, question: input }))

  }
  spec() {
    axios
      .get('/api/answers/getSpecAnswer')
      .then(res => this.setState({ answer: res.data }))
  }




  render() {
    return (
      <div className="App">
        <header>Magic 20 Ball</header>
        <main>
          <div className='buttons-section'>
            <FAQ getAnswer={this.getAnswer} />
          </div>
          <div>
            <Ball
              answers={this.state.answer}
              question={this.state.question}
            />
          </div>
          <div>
            <List getAnswer={this.getAnswer} answer={this.state.answer} specAnswer={this.spec} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
