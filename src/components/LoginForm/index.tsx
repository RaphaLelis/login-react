import React from 'react';
import { Container, Form } from './styles';

function initialState() {
    return { user: '', password: ''};
}

const LoginForm: React.FC = () => {
  return (
  <Container>
	<Form>
		<span className="title">Login</span>
		<input type='text' placeholder='Username'/>
		<input type='password' placeholder='Password'/>

		<button>Let me in.</button>

		<span className='terms'>
			Política de privacidade e aos Termos de serviço.
		</span>
	</Form>
  </Container>
);
}

export default LoginForm;