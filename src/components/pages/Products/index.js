import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";

import { Container } from './styles';
import "react-multi-carousel/lib/styles.css";
import { theme } from '../../../styles/global';
import { products } from '../../../services/api';
import { formatCash } from '../../../utils';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Products() {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await products.select();

      if(response.status === 200){
        setProductList(response.data);
      }
    }

    fetchProducts()
  }, []);

  return (
    <Container>
      <div>
        <h3>Mais Vendidos</h3>
        <hr/>
        <div className="products-carousel">
        <Carousel responsive={responsive}>
          {productList.map(product => 
            <div className="product-card" key={product.productId}>
              {product.listPrice && (<span></span>)}
              <img src={product.imageUrl} alt={product.productName}/>
              <div className="product-card-details">
                <h3>{product.productName}</h3>
                <div className="rating">

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
                <button>COMPRAR</button>
              </div>
          </div>
          )}
        </Carousel>
        </div>
      </div>
    </Container>
  );
}

export default Products;