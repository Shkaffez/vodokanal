import Carousel from 'react-bootstrap/Carousel';
import styles from './slider.module.css';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
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
            <br/>
            Стандартные и дизайнерские модели по разумным ценам.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{"height": "600px"}}
          className="d-block w-100"
          src="/home-slider-razvodka-kommunikaciy.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{"height": "600px"}}
          className="d-block w-100"
          src="/home2-slider2-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;