import React, { useState, useEffect } from 'react';
import $ from 'jquery';

// Components 
import Post from '../post';
import PostForm from '../post_form';


import './posts.scss'

export default function Posts(){

    // Destructuring 
    const [data, setData] = useState(null)

    const get_posts = () => {
        $.ajax({
            url: '/posts.json',
            method: 'GET',
            success: response => {
                setData(response);    
            },
            error: response => {
                setData(false)
                console.log(data)
            }
        })
    }

    useEffect(() => {
        get_posts()
    },[]);

    if(data){
        return(
            <div>    
                <div className="posts_wrapper">
                    <div className="layout">
                        {data.map((record) => (
                            <Post content={record.content} key={record.id} />
                        ))}
                    </div>
                </div>
                
                <div className="form-wrapper">
                    <PostForm get_posts={get_posts} />
                </div>
            </div>
        )
    }else{
        return(
            <div>
                loading!
            </div>
        )
    }

}