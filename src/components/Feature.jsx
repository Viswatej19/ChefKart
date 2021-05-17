import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';

function Feature() {
    return (
        <div id='features'>
            <div className='a-container'>
                <FeatureBox image={featureimage} title="Attendance" para='Customer Will Have The facility To Monitor The Presence Of The Chef.'/>
                <FeatureBox image={featureimage1} title="Subscriptions" para='Customer Can Check The Subscriptions If He/She had If They Dont
                They Can Buy a Subscription Plan Anytime.'/>
            </div>
        </div>
    )
}

export default Feature;