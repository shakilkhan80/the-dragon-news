import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const Leftnav = () => {

   
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <div>
                <h3>All Category</h3>
                <div className='p-4'>
                    {
                        categories.map(category => <p key={category.id}>
                            <Link to={`/category/${category.id}`} className='text-secondary text-decoration-none'>{category.name}</Link>
                        </p>
                        )
                    }
                </div>
            </div>
            <div>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>nothing</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default Leftnav;