import React from 'react'
// import Button from '@material-ui/core/Button'
import useProtectedPage from '../../hooks/useProtectedPage'
import { ScreenContainer } from './styled'
import AddMusicForm from './AddMusicForm'

const AddMusic = () => {
    useProtectedPage()

    return (
        <ScreenContainer>
            <h1>Criar música</h1>
            <AddMusicForm></AddMusicForm>
        </ScreenContainer>
    )
}

export default AddMusic