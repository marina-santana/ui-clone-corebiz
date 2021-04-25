import React from 'react';
import { Container } from './styles';
import {ReactComponent as SvgLogo} from '../../assets/logo.svg';
import {ReactComponent as SvgMagnifier}  from '../../assets/magnifier.svg'
import {ReactComponent as SvgUser}  from '../../assets/user.svg'
import {ReactComponent as SvgCart}  from '../../assets/cart.svg'
import {ReactComponent as SvgMenu}  from '../../assets/menu.svg'
import { useSelector } from 'react-redux';
import { products } from '../../services/api';

function Header() {
  const productsInCart = useSelector((state) => state.cart.items);

  return (
    <Container>
      <div>
        <div className="menu-box">
          <SvgMenu/>
        </div>
        <div className="logo-box">
          <SvgLogo/>
          <div></div>
        </div>
        <div className="search-box">
          <input type="text" placeholder="O que está procurando?"/>
          <SvgMagnifier/>
        </div>
        <div className="account-box">
          <SvgUser/>
          <span>Minha Conta</span>
        </div>
        <div className="cart-box">
          <SvgCart/>
          {productsInCart?.length > 0 && <span>{productsInCart?.length}</span>}
        </div>
      </div>
    </Container>
  );
}

export default Header;