import React, { useEffect } from 'react';

function Home(props) {

    let divStyle = {
        height: '100vh',
        color: '#45818e',
    }

    let aboutStyles = {
        lineHeight: '.25',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        top: '40%'
    }

    return (
        <div style={divStyle} className="snap">
            <div style={aboutStyles}>
            <h1>myllie johnson.</h1>
            <h3>WEB DEVELOPER</h3>
            </div>
        </div>
    );
}

export default Home;