import React, {Component} from 'react';
import './App.css';
import Generate from'./Component/Generate';
import GuessNum from './Component/GuessNum'


class App extends Component{
  state={
    num:null,
    showGenComp:true,
    score:0,
    counter:5
  }


  generateNumHandler=(e)=>{
    e.preventDefault()
    let number=this.state.num
    number=Math.random()*1000000
    number=Math.round(number)
    this.setState({
      num:number
    })
    // setTimeout(() => {
 
    // }, 5000);
    var timer=setInterval(()=>{
      this.setState({
        counter:this.state.counter-1
      })
      if(this.state.counter===0){
        this.setState({
          showGenComp:false
        })
        clearInterval(timer)
      }  
    },1000)
    
  }

  addPoints=()=>{
    this.setState({
      score:this.state.score+1
    })
  }

  resetScore=()=>{
    this.setState({
      score:0,
      showGenComp:true,
      num:null,
      counter:5
    })
  }

  playAgainHandler=()=>{
    this.setState({
      showGenComp:true,
      num:null,
      counter:5
    })
  }

  render() {
    let showcomp
    if(this.state.showGenComp){
      showcomp=<Generate 
      generateNumHandler={this.generateNumHandler} 
      num={this.state.num}
      counter={this.state.counter}/>
    }
    else{
      showcomp=<GuessNum num={this.state.num} 
      playAgainHandler={this.playAgainHandler} 
      score={this.state.score} 
      addPoints={this.addPoints} 
      resetScore={this.resetScore}
      />
    }
    return (
      <div className='App shadow'>
        <h1 className='mainheading'>{this.state.showGenComp?'GENERATE':'GUESS'} THE NUMBER</h1>
        {showcomp}
      </div>
    )
  }
}
export default App