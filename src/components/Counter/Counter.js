import React from 'react';

export default function Counter(props) {
    const style = {
        marginTop: '20px',
        backgroundColor: 'lightgray',
        //color: 'white',
        fontWeight: 'bold',
        padding: '30px',
        fontSize: '30px',
        border: '1px solid black'
    }

    return (<div style={style}>{props.number}</div>);
}