import React from 'react';

function Projects(props) {

    let divStyle = {
        height: '100vh',
        backgroundColor: 'pink',
    }

    let projStyles = {
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
            <div style={projStyles}>
                these are my projects
            </div>
        </div>
    );
}

export default Projects;