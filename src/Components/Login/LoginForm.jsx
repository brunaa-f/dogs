import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Login" />
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Login</Button>
        )}
        <Error error={error}/>
      </form>
      <Link className={styles.lost} to="/login/lost">Forgot your password?</Link>
      <div className={styles.create}>
        <h2 className={styles.subtitle}>Create a new account</h2>
        <p>It's quick and easy.</p>
        <Link className={stylesBtn.button} to="/login/create">Sign up</Link>
      </div>

    </section>
  );
};

export default LoginForm;
