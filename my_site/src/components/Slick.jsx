import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slick.css'

const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Adicionando autoplay
    autoplaySpeed: 3000,  // Definindo a velocidade da reprodução automática em milissegundos
  };

  return (
    <Slider {...settings}>
        <div className='img-slick'>
            <div className='conteudo-slick'>
                <h1>Agência de Corrida
                    Particular</h1>
                <p>Melhor agência de corrida 
                    de fortaleza</p>
                <a href="http://google.com.br"><button>Agende já sua corrida!</button></a>
            </div>
            <img src="./img/slick1.jpg" alt="Dunas de fortaleza" />
        </div>
        <div className='img-slick'>
            <img src="./img/iracema.jpg" alt="estatua de iracema em fortaleza" />
        </div>
        <div className='img-slick'>
            <img src="./img/fort.jpg" alt="praia de fortaleza" />
        </div>
    </Slider>
  );
};

export default Slick;


