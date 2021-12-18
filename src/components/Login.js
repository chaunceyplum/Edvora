/* eslint-disable react/jsx-pascal-case */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { CardBody, Container } from 'reactstrap';
import { CardTitle } from 'reactstrap';
import { Row, Col, Label, Button } from 'reactstrap';
import DisplayPic from './DisplayPic';
import MyNav from './MyNav';






const Login = () => {


    // const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    // const validPassword = val => /^(?=.*\d)[a-zA-Z0-9]{8,16}$/
    // const required = val => val && val.length;

    const [pokemon, setPokemon] = useState([])
    const [search, setSearch] = useState('') 
    const [auth , setAuth] =useState(false)
    const [authName, setAuthName] =useState(null)
    const [password, setPassword] =useState(null)

    const [user, setUser] = useState({
        email:authName,
        password:password
    })
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



    const handleChange = () =>{
        authName.length &&
        setAuth(!auth)
        console.log(`auth is ${false}`)
    }
    const signOut =() => {
        setAuth(!auth)
    }

    return (
        <div>
            
           
                <div className='bgColor center login'>
                <div className='bgColor1 center'>
                    <form onSubmit={handleChange} >
                        
                        <Row className="center">
                            <h1 className="center text-white">
                                Log in
                            </h1>
                            <br />
                            <br />
                            {/* <Col xs={1}/> */}
                            <Col xs={10} className="center">
                                <input onChange={event => setAuthName(event.target.value)} type="email"className="center" placeholder="email"/>
                            </Col>
                            {/* <Col /> */}
                        </Row>
                        
                        <br />
                        <Row className="center">

                            {/* <Col xs={1}/> */}
                            <Col xs={10} className="center">
                                <input onChange={event => setPassword(event.target.value)}type="password"placeholder="password" />
                            </Col>
                            {/* <Col xs={1}/> */}
                        </Row>
                        <br />
                        <br />
                        <Row className="center">

                            {/* <Col /> */}
                            <Col xs={6} className='center'>
                                <Button type="submit" value="submit" variant='primary' className='bgColor !important'>
                                    Submit
                                </Button>
                            </Col>
                            <Col xs={6 } className='center'>
                                <Button href="/signup" variant='primary' className='bgColor !important'>
                                    Sign Up
                                </Button>
                            </Col>

                            {/* <Col /> */}
                        </Row>

                        

                        
                    </form>
                </div>
            </div>

                

                

            
            


            

        </div>
    )
}

export default Login
