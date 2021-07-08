import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToMusicList } from '../routes/coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
        goToMusicList(history)
    }
  }, [history])
}

export default useUnprotectedPage