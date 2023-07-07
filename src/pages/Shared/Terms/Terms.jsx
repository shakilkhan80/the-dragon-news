import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and Conditions</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate iusto impedit facere nam, quia cupiditate est ex. Fuga molestiae repellendus nobis eos vel quaerat minima aspernatur dolore id harum.</p>

            <p>Go back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;