import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Eman from '../assets/domoos.jpg'
import Gab from '../assets/delgado.jpg'


const Section = () => {
    return (
        <section>
            <Container>
                <Row xs={2}>
                    <Col>
                        <h2>Welcome to Sentinels</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, enim aliquam sunt, fugit numquam error, voluptatum fugiat consectetur illo rerum suscipit possimus officiis voluptatem rem et ab. Error laboriosam quidem, velit delectus ea iure beatae consequatur distinctio illo voluptatem tempore voluptate animi incidunt debitis rerum totam doloribus ab unde quam!</p>
                        <Row >
                            <Col >
                                <div >
                                    <Image src={Eman} />
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quos!</p>
                                </div>
                            </Col>
                            <Col >
                                <div >
                                    <Image src={Eman} />
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quos!</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col >
                        <div className='text-center'>
                            <Image src={Gab} className='w-75' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia quas, iure facilis magni tenetur dolores saepe expedita, cum, cupiditate nostrum animi neque temporibus eaque eius odio ipsa hic molestiae ullam. Quia libero dignissimos tenetur molestiae at accusamus minus minima, rerum nihil ullam sed culpa! Consequatur rem enim quam perspiciatis!</p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Section