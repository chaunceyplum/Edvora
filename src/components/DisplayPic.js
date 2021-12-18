import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, CardImg } from 'reactstrap'

const DisplayPic = (props) => {
    const [id,setID] = useState(Number)
    const pokemonId = props.obj.url.split("/")
    const newId = pokemonId[pokemonId.length-2]
    const lastId = newId[6]
    // .obj.url.replace(/(.*\/)*/,"")
    
    const [pokemon, setPokemon] = useState(Number)

    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId[6]}.png`,{
            method:'GET',
            mode:'cors',
            headers: {
                'Content-Type' : 'application/json'
            } 
        })
        .then((res) => {
            const data = res.data
            // console.log(res.data)
            return data
            
            
        })
        .then((res) => {
            setPokemon(res)
            
            
        })
        
    }, [])
        
        console.log(pokemon)
    

    return (
        <div>
           <img top width="100%" src={pokemon} alt=""  />
           

            
        </div>
    )
}

export default DisplayPic
