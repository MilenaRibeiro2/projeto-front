import React from 'react'
import { InputsContainer, LoginFormContainer} from './styled'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button'
import {login} from '../../services/user'
import { useHistory } from 'react-router-dom'

const LoginForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText)
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
                    Fazer Login
                </Button>
            </form>
        </LoginFormContainer>
    )
}

export default LoginForm