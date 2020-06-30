import React from 'react'
import { Card } from 'antd';

export default function Post(props){
    // Destructuring 
    const { content } = props

    return(
        <Card>
            {content}
        </Card>
    )
}