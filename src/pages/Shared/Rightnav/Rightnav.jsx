import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from "../../../assets/bg.png"

const Rightnav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button variant="primary mb-2"> <FaGoogle></FaGoogle>  Login with Google</Button>
            <Button variant="secondary"> <FaGithub></FaGithub>  Login with GitHub</Button>
            <div className='my-3'>
                <h2 className='mb-3'>Find Us On</h2>
                <ListGroup className='gap-3'>
                    <ListGroup.Item><FaFacebook></FaFacebook>  Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>  Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram>  Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default Rightnav;