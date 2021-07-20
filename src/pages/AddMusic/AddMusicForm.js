import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, CreateMusicContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import {AddMusic} from "../../services/music"
// import CircularProgress from '@material-ui/core/CircularProgress'

const AddMusicForm = () => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({ title: '', file: '', genre: '', album: ''})

  const onSubmitForm = (event) => {
    event.preventDefault()
    AddMusic(form, clear, history)
    // console.log(form)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <CreateMusicContainer>
        <InputsContainer>
        <TextField
            value={form.title}
            name={'title'}
            onChange={onChange}
            label={'Título'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.file}
            name={'file'}
            onChange={onChange}
            label={'Arquivo'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.genre}
            name={'genre'}
            onChange={onChange}
            label={'Gênero'}
            variant={'outlined'}
            type={'text'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.album}
            name={'album'}
            onChange={onChange}
            label={'Álbum'}
            variant={'outlined'}
            type={'text'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          // color={'primary'}
          color={"primary"}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
            Adicionar
          {/* {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Cadastro</>} */}
        </Button>
      </CreateMusicContainer>
    </form>
  )
}

export default AddMusicForm