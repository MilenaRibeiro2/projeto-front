import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'
import MusicListCard from '../../components/MusicListCard/MusicListCard'
// import { MusicListContainer } from './styled'


const MusicList = () => {
    useProtectedPage()

    const musics = useRequestData([], `${BASE_URL}/music/all`)
    console.log(musics)

    const musicList = musics?.musics?.map((item) => {
        return (
            <MusicListCard
                titulo={item.title}
                file={item.file}
                genre={item.genre}
                album={item.album}
                onClick={() => null}
            />
            
        )
        // <p>{item.title}</p>
    })

    return (
        <div>
            {/* <h1>Lista de músicas</h1> */}
            {musicList}
        </div>
    )
}

export default MusicList