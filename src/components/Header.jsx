import React from 'react';
import Navbar from './Navbar';


function header() {
    return (
        <div id='main'>
            <Navbar/>
            
            <div className='name'>
                <h2><span>Chefkart Mobile App</span> <br /><br /> 
                <h4 className='details'> <em>An end to end kitchen aide that plans,
                     shops and cooks for you in your home kitchen.</em></h4>
                <a href="#"  className='cv-btn'> Attendance</a>
                <br />
                <a href="#"className='cv-btn'> My Subscriptions</a>
                </h2>
            </div>
        </div>
    )
}

export default header;