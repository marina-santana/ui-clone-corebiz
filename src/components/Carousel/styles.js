import styled from 'styled-components';
import ImgBanner from '../../assets/banner.png';
import ImgBanner720 from '../../assets/banner-720.png';
import { theme } from '../../styles/global';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 430px;
  background-image: url(${ImgBanner});
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;

  .banner{
    display: flex;
    flex-direction: column;
    max-width: 360px;
    margin-left: 20%;
  }

  h2, h3{
   color: white;
  }

  h2{
    font-weight: 400;
    font-size: 1.5em;
  }

  h3{
    font-weight: 700;
    font-size: 2.25em;
  }

  .navigation{
    width: 100px;
    display: flex;
    justify-content: space-between;
    margin-top: 23%;
  }

  .navigation div{
    width: 15px;
    height: 15px;
    background: red;
    border-radius: 50%;
    background-color: ${theme.colors.silver};
  }

  .navigation div:first-of-type{
    background-color: ${theme.colors.carnation};
  }

  @media (max-width: 720px) {
    width: auto;
    background-image: url(${ImgBanner720});
    height: 320px;
    padding: 10px 20px;
    flex-direction: column;

    .banner{
      margin-left: 0;
      margin-top: 20px;
    }

    .navigation{
      width: 80px;
    }

    .navigation div{
      width: 10px;
      height: 10px;
    }
  }
`;
