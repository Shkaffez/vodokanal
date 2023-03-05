import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import styles from './whyUs.module.css';

export default function WhyUs() {
    return (
        <div className={styles.wrapper}>
            <Image className={styles.mainImg} src="bg5.jpg" />
            <Container className={styles.container}>
                <Card className={styles.card}>
                    <Card.Body>
                        <Card.Title>Почему выбирают нас</Card.Title>
                        <Card.Title>Мы профессионалы в инженерке</Card.Title>
                        <Card.Text>
                            «Водоканалсбыт» – крупнейшая компания по монтажу и обслуживанию систем отопления, и водоснабжения в Москве и Московской области.
                            Уже много лет мы предоставляем высококачественное оборудование и услуги физическим и юридическим лицам, выполняя полный комплекс монтажных работ и обслуживания инженерных систем.
                            Наличие собственного производства дает условия в точности изготавливать комплектующие для любого проекта.
                        </Card.Text>

                    </Card.Body>
                    <div className={styles.imgBlockWrapper}>
                        <div className={styles.imgBlockWrapper}>
                            <Card.Img className={styles.cardImg} src="reliability.png" />
                            <p>Более <span className={styles.boldSpan}>35000 Клиентов</span></p>
                        </div>
                        <div className={styles.imgBlockWrapper}>
                            <Card.Img className={styles.cardImg} src="checked.png" />
                            <p>Даем до <span className={styles.boldSpan}>25 лет гарантии</span></p>
                        </div>
                    </div >
                </Card >
            </Container>
        </div>
    )
}
