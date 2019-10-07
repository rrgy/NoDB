import React, { Component } from 'react'

export default class FAQ extends Component {
    render() {
        return (
            <div className='FAQ-section'>
                <button onClick={this.props.getAnswer} className='button'>Is the earth flat?</button>
                <button onClick={this.props.getAnswer} className='button'>aRe I stOopiD?</button>
                <button onClick={this.props.getAnswer} className='button'>Is Batman from Krypton?</button>
                <button onClick={this.props.getAnswer} className='button'>Is a hotdog a sandwitch?</button>
                <button onClick={this.props.getAnswer} className='button'>Does pineapple go on pizza?</button>
                <button onClick={this.props.getAnswer} className='button'>Is cereal soup?</button>
                <button onClick={this.props.getAnswer} className='button'>Can Pennywise be my friend?</button>
                <button onClick={this.props.getAnswer} className='button'>Should I do what the voices are telling me to do?</button>
            </div>
        )
    }
}