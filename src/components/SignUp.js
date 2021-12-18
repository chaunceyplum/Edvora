import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const SignUp = () => {
    
    
    
    
    const [auth , setAuth] =useState(false)
    const [authName, setAuthName] =useState(null)
    const [password, setPassword] =useState(null)
    

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
            // setPokemon(res)
            
        })
        
    }, [])
    const postUser = async (authName, password) =>{
        let res =await fetch("http://127.0.0.1:8000/users/",{
            method:'POST',
            mode:'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                "email":authName,
                "password":password
            })
        })
        .then(console.log(res))
    }


    const signUp = async (authName, password) =>{
        try{
            postUser(authName, password)
        } catch{

        }
        setAuth(!auth)
        
    }
    const signOut =() => {
        setAuth(!auth)
    }
    
    
    
    return (
        <div>
            <div className='bgColor center login'>
                <div className='bgColor1 center'>
                    <form onSubmit={signUp} >
                        
                        <Row className="center">
                            <h1 className="center text-white">
                                Sign Up
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
                                
                                <Button href="/" variant='primary' className='bgColor !important'>
                                    If you already have an account click here
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

export default SignUp
