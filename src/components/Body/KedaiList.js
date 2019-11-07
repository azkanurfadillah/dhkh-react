import React, {Component} from 'react';
import KedaiDetail from './KedaiDetail'

class KedaiList extends Component {
    constructor(props){
        super(props);
        this.state = {
            kedaikedai:[],
            display: false,
            kedai: null
        }
    }
    
    componentDidMount(){
        fetch("http://localhost:3002/kedai")
        .then(res => res.json())
        .then( data => {
            this.setState({
                kedaikedai: data
            })
        })
        .catch(console.log)
        console.log(this.state.kedaikedai.nama_kedai)
    }

    handleClick = (e) => {
        e.preventDefault()
        // console.log('the button was click');
        this.setState(prevState => ({
            display: !prevState.display
        }))
        // console.log('yyyy', this.state.display)
    }
    

    render(){
        return(
            <div className="kedai">
                {this.state.kedaikedai.map((kedai) => (
                    <div className = "kedai-list" key={kedai._id} >
                        <h4>{kedai.nama_kedai} </h4>
                        <p>{kedai.halte_stasiun} </p>
                        {/* <p>{kedai._id} </p> */}
                        <button type="button" className="btn btn-primary btn-sm float-right" onClick={(e) => this.handleClick(e)}>Detail</button>
                        <KedaiDetail key={kedai._id} kedai={kedai} style={this.state.display} />
                    </div>
                    
                ))}
            </div>
        )
    }

}

export default KedaiList;