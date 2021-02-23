import React from 'react';
import {Link} from 'react-router-dom';

class LoggedOutComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Try out FlashCode</h1>
                 <Link to='/signup'>Sign up here!</Link>
                <footer>Copyright &copy; 2020 FlashCode</footer>
            </div>  
            ) 
    }
}

export default LoggedOutComponent;