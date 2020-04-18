import React, {Component } from 'react'
import './popup.css'

class Popup extends  Component{
    render(){  
        return(
            <div className='MainModal' >
                <div className="Modalcontent">
                    {this.props.onSuccess?
                    <div>
                        <h1 style={{margin:'10% auto'}}>Congrats</h1>
                        <button className='btn btn-primary' onClick={this.props.playAgainHandler}> Play Again</button><br/>
                        <p style={{margin:'5% auto'}}>Your score is <strong>{this.props.correctAns}</strong></p>
                    </div>:
                    <div style={{margin:'20% auto'}}>
                        <h1>You Loose</h1>
                        <p>Your score is <strong>{this.props.correctAns}</strong></p>
                        <button type='button' className='btn btn-primary' onClick={this.props.resetCorrectAns}>Ok</button>
                    </div>}
                </div>
            </div>
        )
    }
}

export default Popup