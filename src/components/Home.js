
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
                                <div key={i}>
                                    <Card className='bgColor1'>
                                        <CardHeader>
                                            <CardTitle className="center text-white">
                                                {obj.name}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardBody>
                                            <DisplayPic obj={obj}/>
                                            <Button>
                                                <BsHeart />
                                            </Button>
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
