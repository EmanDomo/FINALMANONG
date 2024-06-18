import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import April from '../assets/april.jpg'

const Contact = () => {
    return (
        <Container className='shadow-lg p-5 mb-5 bg-body-tertiary rounded'>
            <Row>
                <Col>
                    <Image src={April} className='w-75 mx-auto' />
                </Col>
                <Col>
                    <h2>Hello World!</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cumque. In maiores eveniet totam exercitationem consequatur nesciunt alias nobis? Cum hic quaerat voluptas nostrum minima voluptatum dolores, at, commodi nihil voluptatibus inventore molestias soluta, aut veritatis obcaecati ipsam pariatur eveniet reprehenderit non enim numquam! Libero, cumque possimus. Vitae cumque facilis non doloremque mollitia dolor laborum voluptatem ut quam numquam molestias magni asperiores id labore ducimus officiis eaque soluta quae quo, voluptatibus molestiae. Non, quisquam. Dicta qui facere, natus sequi laborum vitae eveniet
                    </p>
                </Col>
            </Row>

        </Container>

    )
}

export default Contact