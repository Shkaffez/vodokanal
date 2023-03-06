import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import styles from './whyUs.module.css';

export default function WhyUs() {
    return (
        <div className={styles.wrapper}>
            <Image className={styles.mainImg} src="bg5.jpg" />
            <Container>
                <Card className={styles.card}>
                    <Card.Body>
                        <Card.Title className={styles.cardText1}>Почему выбирают нас</Card.Title>
                        <Card.Title className={styles.cardText2}>Мы профессионалы в инженерке</Card.Title>
                        <Card.Text className={styles.cardText}>
                            «Водоканалсбыт» – крупнейшая компания по монтажу и обслуживанию систем отопления, и водоснабжения в Москве и Московской области. <br /><br />

                            Уже много лет мы предоставляем высококачественное оборудование и услуги физическим и юридическим лицам, выполняя полный комплекс монтажных работ и обслуживания инженерных систем. <br /><br />

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
            <div className={styles.miniImgWrapper}>
                <Image className={styles.miniImg} src="a.jpg" />
                <Image className={styles.miniImg} src="attestat-kachestva-vodokanalsbit-e1606482813996.jpg" />
                <Image className={styles.miniImg} src="d.jpg" />
                <Image className={styles.miniImg} src="gost-vodokanalsbit-e1606482791848.jpg" />
                <Image className={styles.miniImg} src="strahovanie-imushcestva-vodokanalsbit-2.jpg" />
            </div>
        </div >
    )
}
