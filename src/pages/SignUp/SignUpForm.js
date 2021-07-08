import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
// import {signUp} from "../../services/user"
// import CircularProgress from '@material-ui/core/CircularProgress'

const SignUpForm = () => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({ nickname: '', email: '', password: '' })

  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(form)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.nickname}
            name={'nickname'}
            onChange={onChange}
            label={'Apelido'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.email}
            name={'email'}
            onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            type={'email'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.password}
            name={'password'}
            onChange={onChange}
            label={'Senha'}
            variant={'outlined'}
            type={'password'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
            Fazer Cadastro
          {/* {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Cadastro</>} */}
        </Button>
      </SignUpFormContainer>
    </form>
  )
}

export default SignUpForm