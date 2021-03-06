import styled from 'styled-components';
import { theme } from '../../styles/global';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 146px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.concrete};

  h3{
    color: ${theme.colors.mineShaft};
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 1.5rem;
    text-align: center;
  }

  form{
    display: flex;
  }

  input[type=text], input[type=email]{
    border: none;
    padding: 15px;
    border-radius: 5px;
    width: 280px;
  }

  .container-input + .container-input {
    margin-left: 10px;
  }

  input[type=submit]{
    background: black;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 5px;
    width: 140px;
    margin-left: 10px;
    font-size: 1rem;
    height: 48px;
  }

  .container-input{
    display: flex;
    flex-direction: column;
  }

  .container-input span{
    color: ${theme.colors.crimson};
    padding: 5px 0;
  }
  .success{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .success h4{
    font-weight: bold;
  }

  .success h5{
    font-weight: normal;
    font-size: 1rem;
  }

  .success input{
    width: 328px;
    margin-top: 20px;
  }

  @media (max-width: 720px) {
    padding: 20px;
    height: auto;
    width: auto;

    input[type=text], input[type=email]{
      width: 90%;
      margin-bottom: 20px;
    }

    input[type=submit]{
      width: 100%;
      margin-top: -15px;
    }
    
    input[type=submit],  .container-input + .container-input{
      margin-left: 0;
    }

    h3{
      text-align: left;
    }

    form{
      flex-direction: column;
    }

    .success h5{
      margin-bottom: 25px;
    }
  }  
`;
