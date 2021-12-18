
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Button, Card, CardImg, Col, Row } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { CardBody, CardTitle } from 'reactstrap'
import {BsHeart} from 'react-icons/bs'
import DisplayPic from './DisplayPic'

const Home = (props) => {
    
    const [pokemon, setPokemon] = useState([])
    const [search, setSearch] = useState('') 
    const [ favorite, setFavorite] =useState('')
       
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=150",{
            method:'GET',
            mode:'cors',
            headers: {
                'Content-Type' : 'application/json'
            } 
        })
        .then((res) => {
            const data = res.data.results
            return data
            
        })
        .then((res) => {
            setPokemon(res)
            
        })
        
    }, [])


    const makeFavorite =(obj) => {
        setFavorite(obj.name)

        axios.post(`http://http://127.0.0.1:8000/users/1/favorites`,{
            method:'POST',
            mode:'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: {
                
                    
                      "title": `${favorite}`,
                      "id": 1,
                      "owner_id": 1
                    
                
            } 
        })
    }
    
    
    return (
        <div className='bgColor'>
            <br />
            <br />
            <br />
            <Row className="">
                    <Col xs={1}/>
                    <Col xs={10} className="center">
                        <input type="text" onChange={event =>setSearch(event.target.value)} className="" placeholder="Search by name"/>
                    </Col>
                    <Col xs={1} />
            </Row>
            <br />
            <br />
            <Row>
                <Col />
                <Col xs={10} >
                    {


                        pokemon.filter((obj) => {
                            if (search =="") {
                                return obj
                                
                            } else if (obj.name.toLowerCase().includes(search.toLowerCase())) {
                                return obj
                            } 
                        })
                        .map((obj,i) => {
                            return(
                                <div key={i} xs={3}>
                                    <Card className='bgColor1'>
                                        <CardHeader>
                                            <CardTitle className="center text-white">
                                                {obj.name}
                                            </CardTitle>
                                            
                                        </CardHeader>
                                        <CardBody>
                                            <DisplayPic obj={obj}/>
                                            <Col />
                                            <Col className ='center'>
                                                <Button className='bgColor center' onSubmit={makeFavorite}>
                                                    <BsHeart  className='center'/>
                                                </Button>
                                            </Col>
                                            <Col />
                                            
                                        </CardBody>
                                    </Card>
                                    <br />
                                </div>
                            )
                        })
                    }
                </Col>
                <Col />
            </Row>
            
            
            
        </div>
    )
}

export default Home
