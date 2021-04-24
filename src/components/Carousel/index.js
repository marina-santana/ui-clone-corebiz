import React from 'react';
import { Container } from './styles';
import ImgBanner from '../../assets/banner.png';

function Carousel() {
  return (
    <Container>
      <div className="banner">
        <span>Olá, o que você está buscando?</span>
        <span>Criar ou migrar seu e-commerce?</span>
      </div>
      <div className="navigation">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
}

export default Carousel;