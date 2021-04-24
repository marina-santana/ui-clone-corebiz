import styled from 'styled-components';
import { theme } from '../../styles/global';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;

  > div{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 1200px;
    width: 100%;
    padding: 20px;
  }

  .menu-box{
    display: none;
  }

  .logo-box{
    margin-right: auto;
  }

  .logo-box::after{
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    -moz-border-radius: 7.5px;
    -webkit-border-radius: 7.5px;
    border-radius: 7.5px;
    background-color: ${theme.colors.silver};
    margin-left: 3px;
  }
  .search-box{
    display: flex;
    border-bottom: 1px solid ${theme.colors.boulder};
    max-width: 700px;
    width: 100%;
  }

  .search-box input{
    border: none;
    padding-bottom: 3px;
    width: 100%;
  }
  
  .account-box{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    margin-right: 20px;
  }

  .account-box span{
    margin-left: 5px;
    font-weight: 400;
    color: ${theme.colors.boulder}
  }

  @media (max-width: 720px) {
    height: 110px;

    > div{
      justify-content: space-between;
      align-items: flex-start;
    }

    .menu-box{
      display: block;
    }

    .logo-box{
      margin-right: 0;
    }

    .logo-box svg{
      max-width: 150px;
      margin-top: -15px;
    }
    
    .search-box{
      position: absolute;
      margin-top: 60px;
      max-width: 90%;
    }

    .account-box{
      display: none;  
    }
  }  
`;
