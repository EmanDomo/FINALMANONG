import React from 'react'
import Stack from 'react-bootstrap/Stack';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";


const Footer = () => {
    return (
        <div className='bg-dark-subtle p-4'>
            <Stack direction="horizontal" gap={3}>
                <p className='nav '>Copyright 2024</p>
                <p className='nav'>All Rights Reserved</p>
                <a className='ms-auto' href="#"><AiFillFacebook /></a>
                <a href="#"> <AiFillInstagram /></a>
                <a href="#"><AiFillTwitterCircle /></a>

            </Stack>

        </div>
    )
}

export default Footer