import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import {useParams} from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'
import { MusicDetailContainer, ScreenContainer } from './styled'
import Typography from '@material-ui/core/Typography'
import MusicListCard from "../../components/MusicListCard/MusicListCard"

const MusicDetail = () => {
    useProtectedPage()
    const params = useParams()
    const music = useRequestData([], `${BASE_URL}/music/${params.id}`)
    console.log(music?.queryResult && music.queryResult[0])

    return (
        <ScreenContainer>
            {/* <MusicDetailContainer>{music?.queryResult && music.queryResult[0].title}</MusicDetailContainer> */}
            <MusicDetailContainer>
                <Typography gutterBottom align={'center'} variant={'h5'} >{music?.queryResult && music.queryResult[0].title}</Typography>
                <Typography align={'center'} variant={'h6'}>{music?.queryResult && music.queryResult[0].album}</Typography>
                <Typography align={'center'}>{music?.queryResult && music.queryResult[0].file}</Typography>
            </MusicDetailContainer>
        </ScreenContainer>
    )
}

export default MusicDetail