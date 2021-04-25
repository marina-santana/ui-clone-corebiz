import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import Rating from 'react-star-review';
import { Container } from './styles';
import "react-multi-carousel/lib/styles.css";
import { theme } from '../../styles/global';
import { products } from '../../services/api';
import { formatCash } from '../../utils';
import { responsive } from '../../utils'
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/cart/actions';
import { toast } from 'react-toastify';

function Products() {

  const [width, setWidth] = useState(window.innerWidth);
  const [productList, setProductList] = useState([]);

  const dispatch = useDispatch();

  const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await products.select();

      if(response.status === 200){
        setProductList(response.data);
      }
    }

    fetchProducts()
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const detectingMobile = () =>  width <= 720;

  const sendProductToCart = (product) =>{
    toast.success('Produto adicionado ao carrinho');
    dispatch(addProductToCart(product));
  }

  return (
    <Container>
      <div>
        <h3>Mais Vendidos</h3>
        <hr/>
        <Carousel 
          className="products-carousel"
          responsive={responsive}
          arrows={!detectingMobile()}
          showDots={detectingMobile()}
          >
          {productList.map(product => 
            <div className="product-card" key={product.productId}>
              {product.listPrice && (<span></span>)}
              <img src={product.imageUrl} alt={product.productName}/>
              <div className="product-card-details">
                <h3>{product.productName}</h3>
                <div className="rating">
                  <Rating rating={product.stars} filledColor={theme.colors.carnation} borderColor={theme.colors.carnation}/>
                </div>
                {
                  product.listPrice && (
                <div className="original-price">
                  de R$ {formatCash(product.listPrice)}
                </div>
                )}
                
                <div className="price-now">
                por R$ {formatCash(product.price)}
                </div>
                {
                  product.installments.length > 0 && (
                  <div className="pay-installments">
                  ou em {product.installments[0].quantity}x de R$ {formatCash(product.installments[0].value)}
                  </div>
                )}
                <button onClick={() => sendProductToCart(product)}>COMPRAR</button>
              </div>
          </div>
          )}
        </Carousel>
        </div>
    </Container>
  );
}

export default Products;