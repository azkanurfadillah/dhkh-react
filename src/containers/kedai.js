import React, { Component } from 'react';
import '../components/Body/kedai.css';
import KedaiList from '../components/Body/KedaiList';
// import KedaiDetail from './KedaiDetail'

class Kedai extends Component{
    // state = {
    //     kedaiS:[]
    // }

    // componentDidMount(){
    //     fetch("http://localhost:3002/kedai")
    //     .then(res => res.json())
    //     .then( data => {
    //         this.setState({
    //             kedaiS: data
    //         })
    //     })
    //     .catch(console.log)
    //     console.log(this.state.kedaiS)
    // }

    render(){
        return(
            <div className="kedai-container" >
                <KedaiList />
            </div>
        )
    }
}
export default Kedai;

// kedaiS={this.state.kedaiS}