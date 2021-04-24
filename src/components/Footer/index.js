import React from 'react';
import { Container } from './styles';
import {ReactComponent as SvgEmail}  from '../../assets/email.svg'
import {ReactComponent as SvgCall}  from '../../assets/call.svg'
import {ReactComponent as SvgLogo}  from '../../assets/logo.svg'
import {ReactComponent as SvgVtex}  from '../../assets/vtex.svg'

function Footer() {
  return (
    <Container>
      <div>
        <div className="location">
          <h3>Localização</h3>
          <hr/>
          <ul>
            <li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
            <li>Alphavile SP</li>
            <li>brasil@corebiz.ag</li>
            <li>+55 11 3090 1039</li>
          </ul>  
        </div>
        <div className="contact">
            <div>
              <SvgEmail/>
              <span>ENTRE EM CONTATO</span>
            </div>
            <div>
              <SvgCall/>
              <span>FALE COM O NOSSO CONSULTOR ONLINE</span>
            </div>
        </div>
        <div className="info">
            <div>
              <span>Created by</span>
              <SvgLogo/>
            </div>
            <div>
              <span>Powered by</span>
              <SvgVtex/>
            </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;