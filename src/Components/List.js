import React, { Component } from 'react'
import ListContent from './ListContent'
import axios from 'axios'


export default class List extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            input1: '',
            toot: false,
            input2: '',
        }
        this.editedList = this.editedList.bind(this)
        this.delete = this.delete.bind(this)
    }
    handleChange1(e) {
        this.setState({ input1: e.target.value, })
    }
    handleChange2(e) {
        this.setState({ input2: e.target.value })
    }

    newList() {
        axios.get('/api/answers/getOldAnswers').then(res => this.setState({ list: res.data }))
    }
    editedList = newList => {
        this.setState({ list: newList })
    }
    delete(index) {
        axios.delete(`/api/answers/${index}`).then(res => this.setState({ list: res.data }))
    }
    spec() {
        const { toot } = this.state
        this.setState({ toot: !toot })
    }
    specList() {
        const item = this.state.input2
        axios.post('/api/answers', { item }).then(res => this.setState({ list: res.data }))
    }

    render() {

        return (
            <div className='list'>
                <div>
                    <input
                        className='input'
                        placeholder='Ask Me Here'
                        onChange={e => this.handleChange1(e)}

                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                this.props.getAnswer(this.state.input1)
                                this.newList()
                            }
                        }}></input>
                </div>
                <div className='ask-buttons'>
                    <button onClick={() => this.props.getAnswer(this.state.input1)} className='list-buttons'>Ask</button>
                    <button onClick={() => this.spec()} className='list-buttons'>Specific</button>
                </div>
                {this.state.toot ? (
                    <div>
                        <input
                            className='input'
                            value={this.state.input}
                            onChange={e => this.handleChange2(e)}
                            onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    this.specList()
                                }
                            }} />
                        <button onClick={() => this.props.specAnswer()} className='list-buttons'>Get Specific Answer</button>
                    </div>
                ) : (<div></div>)}
                {this.state.list.map((element, index) => {
                    return <ListContent
                        element={element}
                        index={index}
                        delete={this.delete}
                        edit={this.editedList} />
                })}

            </div>
        )
    }
}