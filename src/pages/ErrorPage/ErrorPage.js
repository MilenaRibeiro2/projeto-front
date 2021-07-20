import React from 'react'
import { ErrorImage, ErrorPageContainer } from './styled'
import error404 from '../../assets/error404.jpg'
import Typography from '@material-ui/core/Typography'

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImage src={error404}/>
            <Typography color={'primary'} variant={'h4'} align={'center'}>Página não encontrada</Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage