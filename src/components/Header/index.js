import React from 'react';
import { Container } from './styles';
import {ReactComponent as SvgLogo} from '../../assets/logo.svg';
import {ReactComponent as SvgMagnifier}  from '../../assets/magnifier.svg'
import {ReactComponent as SvgUser}  from '../../assets/user.svg'
import {ReactComponent as SvgCart}  from '../../assets/cart.svg'

function Header() {
  return (
    <Container>
      <div>
        <div className="logo-box">
          <SvgLogo/>
        </div>
        <div className="search-box">
          <input type="text" placeholder="O que está procurando?"/>
          <SvgMagnifier/>
        </div>
        <div className="account-box">
          <SvgUser/>
          <span>Minha Conta</span>
        </div>
        <SvgCart/>
      </div>
    </Container>
  );
}

export default Header;