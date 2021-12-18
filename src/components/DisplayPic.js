
import React from 'react'


const DisplayPic = (props) => {


    const pokemonId = props.obj.url.split("/")
 

    
    
    return (
        <div>
           <img top width="100%" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId[6]}.png`} alt=""  />
        </div>
    )
}

export default DisplayPic
