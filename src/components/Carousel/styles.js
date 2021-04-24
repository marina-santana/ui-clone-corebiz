import styled from 'styled-components';
import ImgBanner from '../../assets/banner.png';
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

  span{
   color: white;
  }

  span:first-of-type{
    font-weight: 400;
    font-size: 1.75em;
  }

  span:last-of-type{
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
`;