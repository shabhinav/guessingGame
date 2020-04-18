import React, {Component } from 'react'

class Generate extends Component{

    render(){
        let showbutton
        if(this.props.num===null){
            showbutton=<button type="button" className='btn btn-primary' onClick={this.props.generateNumHandler}>Generate</button>
        }
        else{
            showbutton=<p>Refreshing the page in {this.props.counter} seconds ...</p>
        }
        return(
            <div>
                <p>{this.props.num}</p>
                 {showbutton}
            </div>
        );
    }
}


export default Generate
