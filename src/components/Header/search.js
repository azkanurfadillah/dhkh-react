import React, {Component} from 'react';

class Search extends Component{

    render(){
        return(
            <form className="form-inline">
                <input className="form-control mr-sm-2 w-75" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-light my-0 my-sm-2" type="submit">Search</button>
            </form>
        )
    }
}





// const Search = () => (
//     <form class="form-inline">
//         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
// )

export default Search;