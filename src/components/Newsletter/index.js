import React from 'react';
import { Container } from './styles';
import { useForm } from 'react-hook-form';
import { theme } from '../../styles/global';

function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const checkIfFieldIsEmpty = (error) => {
    if(error) {
      return `2px solid ${theme.colors.crimson}`;
    }
  }

  return (
    <Container>
      <h3>Participe de nossas news com promoções e novidades!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container-input">
            <input type="text" placeholder="Digite seu nome" {...register("name", { required: true })} style={{ border: checkIfFieldIsEmpty(errors.name)}}/>
            {errors.name && <span>Preencha com seu nome completo</span>}
          </div>
          <div className="container-input">
            <input type="text" placeholder="Digite seu email" {...register("email", { required: true })} style={{ border: checkIfFieldIsEmpty(errors.email)}} />
            {errors.email && <span>Preencha com um e-mail válido</span>}
          </div>
          <input type="submit" value="Eu quero!"/>
      </form>
    </Container>
  );
}

export default Newsletter;