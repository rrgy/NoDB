import React, { Component } from 'react'
import axios from 'axios'


export default class Specific extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            editAnswer: props.element
        }
    }
    handleInput(e) {
        this.setState({ editAnswer: e.target.value })
    }
    editing() {
        const { editing } = this.state
        this.setState({ editing: !editing })
    }

    changeAnswer() {
        const index = this.props.index
        const newAnswer = this.state.editAnswer
        axios.put('/api/answers/', { index, newAnswer }).then(res => this.props.edit(res.data))
        this.setState({ editing: false })
    }

    render() {
        console.log(this.state)
        return (
            <div className="">

                {this.state.editing ? (
                    <article>
                        <input
                            className='input'
                            value={this.state.editAnswer}
                            onChange={e => this.handleInput(e)} />
                        <button onClick={() => this.changeAnswer()} className='list-buttons'>Save</button>
                    </article>
                ) : (
                        <section>
                            {this.props.element}
                            <button onClick={() => this.editing()} className='list-buttons'>Edit</button>
                            <button onClick={() => this.props.delete(this.props.index)} className='list-buttons'>Delete</button>
                        </section>
                    )}
            </div>

        )
    }
}