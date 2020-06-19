import React, { useEffect, useState } from 'react';
import { Card, Form, Input, Button } from 'antd'
import { KeyOutlined, MailOutlined } from '@ant-design/icons';
import $ from 'jquery';

import { FormToken } from '../../utils/constants';

import './login.scss'

export default function Login(props){

    const { toggleLogin } = props

    // States 
    const [ data, setData ] = useState({
        email: null,
        password: null
    })


    // When someone write in one input 
    const inputOnChange = event => {
        let target = event.target
        setData({
            ...data, 
            [target.name]: target.value
        })
    }

    const submit = () => {
        

        $.ajax({
            url: '/users/sign_in',
            method: 'POST',
            data: {user: data, authenticity_token: FormToken},
            success: () => {
                console.log('ok')
            },
            error: (response) => {
                console.error(response)
            }
        })

    }

    return(
        <Card>
            <Form
                initialValues={{remember: false}}
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={() => submit()}
            >
                <Form.Item 
                    type="email"
                    rule={[{
                        required: true,
                        message: 'Enter your email.'
                    }]}
                >
                    <Input 
                        prefix={<MailOutlined 
                        className="site-form-item-icon" />} 
                        placeholder="Enter your email." 
                        onChange={e => inputOnChange(e)}
                        name="email"
                    />
                </Form.Item>
                
                <Form.Item
                    type="password"
                    rule={[{
                        required: true,
                        message: 'Enter your password'
                    }]}
                >
                    <Input 
                        prefix={<KeyOutlined 
                        className="site-form-item-icon" />} 
                        placeholder="Enter your password."
                        onChange={e => inputOnChange(e)} 
                        name="password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>

                    <a onClick={toggleLogin}>Sign up</a>

            </Form>
        </Card>
    )
}