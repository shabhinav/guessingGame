import React, {Component} from 'react';
import './GuessNum.css'
import Popup from './popup';

class GuessNum extends Component{
    constructor(props){
        super(props)
        this.inputnum=React.createRef()
    }
    state={
        showpopup:false,
        success:true,        
        showGuessButton:0
    }
    

    showGuessButton=(e)=>{
        let inpValue=e.target.value
        let inpLength=inpValue.length
        this.setState({
            showGuessButton:inpLength
        })
    }

    onCheckHandler=()=>{
        let inpValue=this.inputnum.current.value
        if(this.props.num == inpValue){
            this.props.addPoints()
        }
        else{
            this.setState({
                success:false
            })
        }
        this.setState({
            showpopup:true
        })
    }

    closeLoginModel=()=>{
        this.setState({
            showpopup:false
        })
    }

    resetCorrectAns=()=>{
        this.props.resetScore()
        this.closeLoginModel()
    }

    render(){
        if(this.state.showpopup){
            return <Popup
            closeLoginModel={this.closeLoginModel} 
            onSuccess={this.state.success} 
            correctAns={this.props.score}
            resetCorrectAns={this.resetCorrectAns}
            playAgainHandler={this.props.playAgainHandler}
            />    
        }
        let button=0
        if(this.state.showGuessButton==0){
           button=<button className='btn btn-primary' disabled  onClick={this.onCheckHandler}>Guess</button>
        }
        else{
            button=<button className='btn btn-primary'  onClick={this.onCheckHandler}>Guess</button>
        }

        return(
            <div className='GuessNum'>
                    <input type='number'  className="input-group-text" placeholder='Enter the number' ref={this.inputnum} onChange={this.showGuessButton}/><br/>
                    {button}
            </div>
        )
    }
}

export default GuessNum;