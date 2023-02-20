import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styles from './engineeringSystems.module.css';

export default function EngineeringSystems() {
    return (
        <Container>

            <h2 className={styles.header}>Монтаж инженерных систем</h2>
            <Row className={styles.row} >
                <Col>
                    <Card className={styles.radiatir}>
                        <Card.Img className={styles.cardImg} variant="top" src="radiatori.png" />
                        <Card.Body>
                            <Card.Title>Радиаторы отопления</Card.Title>
                            <Card.Text>
                                Компания «Водоканалсбыт» предлагает
                                профессиональные услугу монтажа систем
                                отопления в квартирах, домах, общественных
                                зданиях в Москве и МО.
                            </Card.Text>
                            <Button variant="primary">Подробнее</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
            </Row>
        </Container>
    )
}
