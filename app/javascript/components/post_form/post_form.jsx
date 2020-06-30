import React, { useState } from 'react';
import { Form, Input, Button, Col, Row } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import $ from 'jquery';
import { FormToken } from '../../utils/constants'

export default function PostForm(props){

    // Use state 
    const [ post, setPost ] = useState({
        content: null
    }) 

    // state 
    const { get_posts } = props

    // function 
    const sendPost = () => {
        $.ajax({
            url: '/posts',
            method: 'POST',
            data: { post: post, authenticity_token: FormToken },
            success: () => {
                get_posts()
            },
            error: () => {
                console.error('error');
            }
        })  
    }

    const onSetPost = (event) => {
        setPost({
            ...post,
            [event.target.name]: event.target.value
        })
    }

    // Component 
    return(
        <div>
            <Form
                onFinish={sendPost}
            >
                <Row>
                    <Col span={4} className="col-button" >
                        <Form.Item>     
                            <Button
                                htmlType="submit"
                            >   
                                <SendOutlined />
                            </Button>
                        </Form.Item>
                    </Col>

                    <Col span={20} className="col-textbox">
                        <Form.Item
                            rule={[{
                                required: true,
                                message: 'Enter your post...'
                            }]}
                        >
                            <Input.TextArea 
                                name="content" 
                                onChange={onSetPost}
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}