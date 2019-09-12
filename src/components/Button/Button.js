import React from 'react';

export default function Button(props) {

    const style = {
        backgroundColor: props.color,
        color: 'white',
        //width: '100%',
        textAlign: 'center',
        display: 'inline-block',
        fontWeight: 'bold',
        width: '100%'
    }

    return (
        <button onClick={props.clicked} style={style}>
            {props.value}
        </button>
    );
}