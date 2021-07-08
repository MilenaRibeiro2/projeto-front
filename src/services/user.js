import axios from 'axios'
import {BASE_URL} from '../constants/url'
import { goToAddMusic } from '../routes/coordinator'

export const login = (form, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/login`, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToAddMusic(history)
            setRightButtonText("Logout")
            console.log(res)
        })
        .catch((err) => {
            alert(err.response.data)
            console.log(err)
        })
}

export const signUp = (form, clear, history, setRightButtonText) => {
    // setIsLoading(true)
    axios.post(`${BASE_URL}/user/signup`, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToAddMusic(history)
            setRightButtonText("Logout")
            // setIsLoading(false)
            console.log(res)
        })
        .catch((err) => {
            // setIsLoading(false)
            alert(err.response.data.message)
            console.log(err)
        })
}