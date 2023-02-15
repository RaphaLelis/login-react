import React, { useState } from 'react';
import { Container, Form } from './styles';

function initialState() {
    return { user: '', password: '' };
}

const LoginForm: React.FC = () => {
    const [values, setValues] = useState(initialState);

    function onChange(event: { target: { value: any; name: any; }; }) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value,
        });
    }

    return (
        <Container>
            <Form>
                <span className="title">Login</span>
                <input type='text' placeholder='Username' name='user' onChange={onChange} value={values.user} />
                <input type='password' placeholder='Password' name='password' onChange={onChange} value={values.password} />

                <button>Let me in.</button>

                <span className='terms'>
                    Política de Privacidade e aos Termos de Serviço.
                </span>
            </Form>
        </Container>
    );
}

export default LoginForm;