import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styles from './engineeringSystems.module.css';

export default function EngineeringSystems() {
    return (
        <Container>

            <h2 className={styles.header}>Монтаж инженерных систем</h2>
            <Row className={styles.row} >
                <Col className={styles.col}>
                    <Card className={styles.card} style={{ backgroundImage: "url(/sloj-5.png)" }}>
                        <Card.Img className={styles.cardImg} variant="top" src="radiatori.png" />
                        <Card.Body className={styles.cardBody}>
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
                <Col className={styles.col}>
                    <Card className={styles.card} style={{ backgroundImage: "url(/sloj-7.png)" }}>
                        <Card.Img className={styles.cardImg} variant="top" src="vodosnabzhenie.png" />
                        <Card.Body className={styles.cardBody}>
                            <Card.Title>Водоснабжение</Card.Title>
                            <Card.Text>
                                Водоснабжение — один из первых вопросов,
                                который решается при обустройстве
                                коммерческого или жилого здания.
                            </Card.Text>
                            <Button variant="primary">Подробнее</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={styles.col}>
                    <Card className={styles.card} style={{ backgroundImage: "url(/sloj-9.png)" }}>
                        <Card.Img className={styles.cardImg} variant="top" src="schetchiki.png" />
                        <Card.Body className={styles.cardBody}>
                            <Card.Title>Счётчики</Card.Title>
                            <Card.Text>
                                Законодательство предписывает установку
                                счетчиков воды в каждой квартире, уже давно
                                вступил в силу, а сегодня использовать приборы
                                учета стало еще и выгодным.
                            </Card.Text>
                            <Button variant="primary">Подробнее</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className={styles.row} >
                <Col className={styles.col}>
                    <Card className={styles.card} style={{ backgroundImage: "url(/sloj-14.png)" }}>
                        <Card.Img className={styles.cardImg} variant="top" src="trubi.png" />
                        <Card.Body className={styles.cardBody}>
                            <Card.Title>Трубы и стояки</Card.Title>
                            <Card.Text>
                                Коммуникации водоснабжения необходимо менять
                                при проведении капитального ремонта квартиры
                                или в случае аварийной ситуации.
                            </Card.Text>
                            <Button variant="primary">Подробнее</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={styles.col}>
                    <Card className={styles.card} style={{ backgroundImage: "url(/sloj-15.png)" }}>
                        <Card.Img className={styles.cardImg} variant="top" src="teplie_poli.png" />
                        <Card.Body className={styles.cardBody}>
                            <Card.Title>Теплые полы</Card.Title>
                            <Card.Text>
                                Так называют несколько видов современного
                                оборудования, предназначенного для подогрева
                                напольного покрытия снизу и поддержания
                                необходимого температурного режима в помещении.
                            </Card.Text>
                            <Button variant="primary">Подробнее</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={styles.col}>
                    <Card className={styles.card} style={{ backgroundImage: "url(/sloj-16.png)" }}>
                        <Card.Img className={styles.cardImg} variant="top" src="kanalizatsia.png" />
                        <Card.Body className={styles.cardBody}>
                            <Card.Title>Канализация</Card.Title>
                            <Card.Text>
                                Комфортная эксплуатация жилых помещений
                                невозможна без эффективного отведения
                                сточных вод.
                            </Card.Text>
                            <Button variant="primary">Подробнее</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}
