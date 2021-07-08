import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const MusicList = () => {
    useProtectedPage()
    return (
        <div>
            <h1>Lista de músicas</h1>
        </div>
    )
}

export default MusicList