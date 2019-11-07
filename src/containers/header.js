import React, {Component} from 'react';
import MainHeader from '../components/Header/mainHeader';

// import mainHeader from '../components/Header/mainHeader';

class Header extends Component {

    render(){
        return(
            <div className="header" >
                <MainHeader/>    
            </div>
        )
    }
}

export default Header;