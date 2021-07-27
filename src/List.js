import React from 'react';
import Item from './Item';

const styles ={
    ul:{
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function List(props){
  return(
  <ul style={styles.ul}>
       {props.dos.map((done,index)=> {
           return <Item did = {done} key= {done.id} index={index}/>;
       }) }
    </ul>
  )
}