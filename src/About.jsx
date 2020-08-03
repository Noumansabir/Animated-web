import React from 'react';
import web from '../src/images/p6.jpg'
import Common from './Common';



const About = () => {
    return (
        <>

           <Common name='Welcome to About page'imgsrc={web}
            visit="/contect" btname="Contact Now" />
        </>
    );
}

export default About;