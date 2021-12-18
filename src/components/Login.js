/* eslint-disable react/jsx-pascal-case */
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Row, Col, Label, Button } from 'reactstrap';







const Login = () => {


    // const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    // const validPassword = val => /^(?=.*\d)[a-zA-Z0-9]{8,16}$/
    // const required = val => val && val.length;

   
    const [authName, setAuthName] =useState(null)
    const [password, setPassword] =useState(null)
    const [user , setUser] = useState({})
    const [url, setUrl] =useState(false)


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/users",{
            method:'GET',
            mode:'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*'
            } 
        })
        .then((res) => {
            const data = res.data[0]
            console.log(res.data)
            setUser(data)
            return data
            
            
        })
        // .then((res) => {
        //     setUser(res)
        //     console.log(user)
            
        // })
        
    }, [])

   

    const handleChange = (user, authName) =>{
       
    //    authName == user.email &&
    //     setUrl(false)
       
       console.log(authName)
       console.log(user)
       
       
        
    }
    const attributes = url ? {href:'/home'} : {href:'/'}
    

    return (
        <div>
            
           
                <div className='bgColor center login'>
                <div className='bgColor1 center'>
                    <form onSubmit={handleChange(user, authName)} >
                        
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
                                <Button type="submit" {...attributes} value="submit" variant='primary' className='bgColor !important'>
                                    Submit
                                </Button>
                            </Col>
                            {/* <Col xs={6 } className='center'>
                                <Button href="/signup" variant='primary' className='bgColor !important'>
                                    Sign Up
                                </Button>
                            </Col> */}

                            {/* <Col /> */}
                        </Row>

                        {
                            // console.log(user[0].email)
                        }

                        
                    </form>
                </div>
            </div>

                

                

            
            


            

        </div>
    )
}

export default Login
