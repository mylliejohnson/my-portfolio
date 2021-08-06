import React from 'react';

function Contact(props) {

    let divStyle = {
        height: '100vh',
        backgroundColor: '#ffff00',
    }

    let contactStyles = {
        lineHeight: '.25',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        top: '40%'
    }

    return (
        <div style={divStyle}>
            <div style={contactStyles}>
            contact me page
            </div>
        </div>
    );
}

export default Contact;