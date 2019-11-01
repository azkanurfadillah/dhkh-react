import React, { Component } from 'react';
import './kedai.css';
import KedaiList from './KedaiList';
import KedaiDetail from './KedaiDetail'

class Kedai extends Component{
    state = {
        kedaiS:[]
    }

    componentDidMount(){
        fetch("http://localhost:3002/kedai")
        .then(res => res.json())
        .then( data => {
            this.setState({
                kedaiS: data
            })
        })
        .catch(console.log)
        console.log(this.state.kedaiS)
    }

    render(){
        return(
            <div>
                <KedaiList kedaiS={this.state.kedaiS} />
                {/* <KedaiDetail kedaiS={this.state.kedaiS}/> */}
            </div>
        )
    }
}

export default Kedai;