import React from 'react';

export default function Item({did, index}){
    return(
    <li>{index + 1} &nbsp; {did.title}</li>
    );
}