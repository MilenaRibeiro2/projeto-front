import React from 'react'
import { ScreenContainer, RedEarbudsImage, SignUpButtonContainer } from './styled'
import Button from '@material-ui/core/Button'
import LoginForm from './LoginForm'
import { goToSignUp } from '../../routes/coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { useHistory } from 'react-router-dom'
import redEarbuds from '../../assets/redEarbuds.jpg'
import redEarbuds2 from '../../assets/redEarbuds2.jpg'
import redEarbuds3 from '../../assets/redEarbuds3.jpg'

const Login = ({setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <RedEarbudsImage src={redEarbuds}/>
            {/* <RedEarbudsImage2 src={redEarbuds2}/>
            <RedEarbudsImage src={redEarbuds3}/> */}
            <LoginForm setRightButtonText={setRightButtonText}/>
            <SignUpButtonContainer>
                <Button 
                    onClick={() => goToSignUp(history)}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                    type={"submit"}
                    >
                        Não possui conta? Cadastre-se.
                </Button>
            </SignUpButtonContainer>

        </ScreenContainer>
    )
}

export default Login