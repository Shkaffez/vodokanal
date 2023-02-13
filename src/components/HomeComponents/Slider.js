import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import styles from './slider.module.css';

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item interval={7000}>
        <img
          style={{
            "height": "600px",
            "opacity": "1"
          }}
          className="d-block w-100"
          src="/home-slider-polocencesush-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={styles.slideCaption}>Подбор и установка</h3>
          <p className={styles.slideBody}>Лучшие решения по полотенцесушителям</p>
          <p className={styles.slideFooter}>
            Широкий выбор полотенцесушителей с установкой под ключ.
            <br />
            Стандартные и дизайнерские модели по разумным ценам.
          </p>
          <Button variant="danger" className={styles.slideDetails}>Подробнее</Button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={7000}>
        <img
          style={{ "height": "600px" }}
          className="d-block w-100"
          src="/home-slider-razvodka-kommunikaciy.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className={styles.slideCaption}>Водоснабжение и канализация</h3>
          <p className={styles.slideBody}>Профессиональный монтаж и ремонт труб</p>
          <p className={styles.slideFooter}>
            Квалифицированная разводка коммуникаций по дому или квартире с гарантией.
            <br />
            А также замена и ремонт стояков и труб канализации.
          </p>
          <Button variant="danger" className={styles.slideDetails}>Подробнее</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={7000}>
        <img
          style={{ "height": "600px" }}
          className="d-block w-100"
          src="/home2-slider2-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className={styles.slideCaption}>Качественный и надежный</h3>
          <p className={styles.slideBody}>Монтаж радиаторов отопления</p>
          <p className={styles.slideFooter}>
            Бесплатная консультация и подбор надежного оборудования, а также
            <br />
            профессиональное проектирование и пусконаладочные работы.
          </p>
          <Button variant="danger" className={styles.slideDetails}>Подробнее</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;