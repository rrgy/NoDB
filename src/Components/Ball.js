import React, { Component } from 'react'



export default class Ball extends Component {
    render() {

        return (
            <div className='ballcenter'>
                <div className='ball'>
                    <h1 className='answer'>{this.props.answers}</h1>
                    <br></br>
                    <h4>{this.props.question}</h4>
                </div>
            </div>
        )
    }
}
