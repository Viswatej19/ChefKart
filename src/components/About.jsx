import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt="" />
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p><em> ChefKart is an end to end kitchen aide that plans, shops and cooks for you in your home kitchen.
                        Ideal for young and busy professionals, who do not have the time or skill to cook regular meals but wants homecooked food,
                        ChefKart fills the gap by providing trained and verified home cooks who create perfectly hygienic meals suited best to your taste. 
                        Set to change the way India manages their cooking space today, ChefKart offers experienced cooks, pantry management, 
                        easier meal planning and lesser trips to the store, as part of their bouquet services.
                    </em></p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About;