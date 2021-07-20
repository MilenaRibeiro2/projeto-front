import axios from 'axios'
import {BASE_URL} from '../constants/url'
import { goToAddMusic } from '../routes/coordinator'

export const AddMusic = (form, clear) => {
    // setIsLoading(true)
    axios.post(`${BASE_URL}/music`, form, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            // setRightButtonText("Logout")
            // setIsLoading(false)
            console.log(res)
        })
        .catch((err) => {
            // setIsLoading(false)
            alert(err.response.data.message)
            console.log(err)
        })
}