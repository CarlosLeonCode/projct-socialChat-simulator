import React, { useState } from 'react'
import { Row, Col } from 'antd'

// Components 
import Login from '../Login'
import SingUp from '../SignUp'



export default function AuthApp (){

    const [ showLogin, setShowLogin ] = useState(true)

    const toggleLogin = (event) => {
        event.preventDefault();
        setShowLogin(!showLogin)
    }

    return(
        <Row>
            <Col span={8} />
            <Col span={8}>
                {showLogin ? <Login toggleLogin={toggleLogin}/> : <SingUp toggleLogin={toggleLogin}/>}
            </Col>
            <Col span={8} />
        </Row>
    )
}