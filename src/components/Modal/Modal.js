import React, { useContext, useState } from 'react';
import { PhotoContext } from '../../context/PhotoContext';


const Modal = ( ) => {

    const { selected } = useContext(PhotoContext);
    const { setSelected } = useContext(PhotoContext);


    if(selected) {
        return (
          <div >
            <img src={selected.image} alt={selected.description} />
            <p>{selected.description}</p>
            <a href={selected.downloadURL}> Download </a>
            <img
              src={selected.photographerPortrait}
              alt={selected.photographer}
            />
            <p>Photographer {selected.photographer}</p>
            <a href={selected.portfolioURL}>
              View {selected.photographer}'s Portfolio
            </a>
          </div>
        );
    }
    return(
        <div></div>
    );
} 
 
export default Modal;