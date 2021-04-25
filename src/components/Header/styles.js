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
    display: flex;
  }

  .logo-box div{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${theme.colors.silver};
    margin-left: 2px;
    margin-top: 31px;
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

  .cart-box{
    display: flex;
    align-items: center;
  }

  .cart-box span{
    padding: 3px 6px;
    border-radius: 50%;
    background-color: ${theme.colors.carnation};
    margin-left: 5px;
    color: white;
    font-size: .7rem;
    font-weight: 600;
  }

  @media (max-width: 720px) {
    height: 90px;

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
      max-width: 100px;
      margin-top: -15px;
    }

    .logo-box div{
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: ${theme.colors.silver};
      margin-left: 2px;
      margin-top: 12px;
    }
    
    .search-box{
      position: absolute;
      margin-top: 40px;
      max-width: 90%;
    }

    .account-box{
      display: none;  
    }
  }  
`;
