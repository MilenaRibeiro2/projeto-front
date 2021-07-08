import React from 'react'
import { InputsContainer, LoginFormContainer} from './styled'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import {BASE_URL} from '../../constants/url'

const LoginForm = () => {
    const [form, onChange, clear] = useForm({email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        login()
    }

    const login = () => {
        axios.post(`${BASE_URL}/users/login`, form)
        .then((res) => console.log(res))
        .catch((err) =>console.log(err))
    }

    return (
        <LoginFormContainer>
        <form onSubmit={onSubmitForm}>
            <InputsContainer>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        type={"email"}
                        fullWidth
                        required
                        margin={"normal"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        type={"password"}
                        fullWidth
                        required
                        margin={"normal"}
                    />
            </InputsContainer>
                    <Button 
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        type={"submit"}
                    >
                        Fazer login
                    </Button>
        </form>
        </LoginFormContainer>
    )
}

export default LoginForm