import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  height: 430px;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;

  > div{
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .location h3{
    
  }

  .location hr{
    width: 40px;
    height: 3px;
    background-color: white;
    margin: 20px 0;
  }

  .location ul{
    list-style: none;
  }

  .location li {
    padding: 5px 0;
  }

  .contact div{
    width: 180px;
    height: 35px;
    background: white;
    color: black;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    border-radius: 5px;
  }

  .contact span {
    margin-left: 10px;
    font-size: .9rem;
  }

  .contact div:last-of-type{
    margin-top: 30px;
  }

  .contact div:last-of-type svg{
    width: 30px;
  }

  .info{
    display: flex;
  }

  .info div{
    display: flex;
    flex-direction: column;
  }

  .info div:last-of-type{
    margin-left: 30px;
  }

  .info svg{
    width: 80px;
    height: 40px;
  }

  .info svg path{
    fill: white;
  }
`;
