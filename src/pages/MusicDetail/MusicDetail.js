import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import {useParams} from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'

const MusicDetail = () => {
    useProtectedPage()
    const params = useParams()
    const music = useRequestData([], `${BASE_URL}/music/${params.id}`)
    console.log(music?.queryResult && music.queryResult[0])
    return (
        <div>
            <h1>Detalhe música</h1>
            <h1>{music?.queryResult && music.queryResult[0].title}</h1>
        </div>
    )
}

export default MusicDetail