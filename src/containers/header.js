import './header.css'
import React, {Component} from 'react';
import logo_navbar from '../assets/DHKH.jpg';
import mainHeader from '../components/Header/mainHeader';

// import mainHeader from '../components/Header/mainHeader';

class Header extends Component {

    render(){
        return(
            <navbar class="navbar navbar-light bg-light">
                <a class="navbar-brand">
                    <img src={logo_navbar} width="50" height="50" class="rounded-circle"  alt="logo dhkh"/>
                </a>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </navbar>

        // <div>
        //     <mainHeader/>    
        // </div>
    
        )
    }
}

export default Header;