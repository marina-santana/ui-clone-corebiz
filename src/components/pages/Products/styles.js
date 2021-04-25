import styled from 'styled-components';
import { theme } from '../../../styles/global';
import ImgOff from '../../../assets/off.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 30px 0 50px;

  > div{
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  > h3{
    color: black;
    font-weight: 900;
  }

  hr{
    width: 60px;
    height: 5px;
    background-color: ${theme.colors.silver};
    margin: 5px 0 30px;
    border: none;
  }

  span{
    background-image: url(${ImgOff});
    position: absolute;
    width: 80px;
    height: 70px;
    background-repeat: no-repeat;
    margin-left: 190px;
  }

  .products-carousel ul:first-of-type{
    height: 460px;
  }

  .products-carousel li{
    display: flex;
    justify-content: center;
  }

  .product-card{
    width: 270px;
    height: fit-content;
  }

  .product-card:hover{
    cursor: pointer;
    background-color: ${theme.colors.porcelain};
  }

  .product-card:hover > .product-card-details button{
    display: block;
  }

  .product-card h3{
    color: ${theme.colors.boulder};
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1rem;
  }

  img{
    width: 100%;
    background: blue;
  }

  .product-card-details{
    padding: 10px 0 20px;
    margin-top: -10px;
  }

  .rating{
    margin: 5px 0;
  }

  .original-price{
    color: ${theme.colors.boulder};
    font-size: 1rem;
  }

  .price-now{
    color: black;
    font-size: 1.15rem;
    font-weight: bold;
   
  }

  .pay-installments{
    color: ${theme.colors.boulder};
    font-size: .9rem;
  }

  .product-card-details{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-card-details button{
    width: 150px;
    height: 40px;
    border:none;
    color: white;
    background: black;
    border-radius: 5px;
    margin-top: 10px;
    display: none;
    cursor: pointer;
  }

  @media (max-width: 720px) {
    width: auto;
    padding: 20px 10px 30px;

    .product-card:hover{
      background-color: white;
    }
    
    .products-carousel ul:first-of-type{
      height: auto;
      padding-bottom: 20px;
    }

    .product-card-details button{
      display: block;
    }
  }  
`;
