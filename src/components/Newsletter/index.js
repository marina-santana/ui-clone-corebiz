import React, { useState } from 'react';
import { Container } from './styles';
import { useForm } from 'react-hook-form';
import { theme } from '../../styles/global';

function Newsletter() {

  const [showForm, setShowForm] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = () => {
    setShowForm(false)
  };

  const checkIfFieldIsEmpty = (error) => {
    if(error) {
      return `2px solid ${theme.colors.crimson}`;
    }
  }

  const resetForm = () => {
    reset({})
    setShowForm(true)
  }

  return (
    <Container>
      {
        showForm ? (
        <div className="form">
          <h3>Participe de nossas news com promoções e novidades!</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className="container-input">
                <input type="text" placeholder="Digite seu nome" {...register("name", { required: true })} style={{ border: checkIfFieldIsEmpty(errors.name)}}/>
                {errors.name && <span>Preencha com seu nome completo</span>}
              </div>
              <div className="container-input">
                <input type="email" placeholder="Digite seu email" {...register("email", { required: true })} style={{ border: checkIfFieldIsEmpty(errors.email)}} />
                {errors.email && <span>Preencha com um e-mail válido</span>}
              </div>
              <input type="submit" value="Eu quero!"/>
          </form>
        </div>
        ): (
          <div className="success">
            <h4>Seu e-mail foi cadastrado com sucesso!</h4>
            <h5>A partir de agora você receberá as novidade e ofertas exclusivas.</h5>
            <input type="submit" value="Cadastrar novo e-mail" onClick={resetForm}/>
          </div>
        )}
    </Container>
  );
}

export default Newsletter;