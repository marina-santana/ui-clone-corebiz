import styled from 'styled-components';
import { theme } from '../../../styles/global';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 430px;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding-top: 30px;

  > div{
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: blue;
    height: 100%;
  }

  h3{
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

  
`;
