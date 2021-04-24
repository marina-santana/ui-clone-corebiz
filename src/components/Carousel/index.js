import React from 'react';
import { Container } from './styles';
import ImgBanner from '../../assets/banner.png';

function Carousel() {
  return (
    <Container>
      <div className="banner">
        <h2>Olá, o que você está buscando?</h2>
        <h3>Criar ou migrar seu e-commerce?</h3>
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