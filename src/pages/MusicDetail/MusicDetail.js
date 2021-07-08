import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const MusicDetail = () => {
    useProtectedPage()
    return (
        <div>
            <h1>Detalhe música</h1>
        </div>
    )
}

export default MusicDetail