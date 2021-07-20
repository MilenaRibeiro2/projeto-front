import React from 'react'
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
// import { LogoImage } from './styled'

const SignUp = ({setRightButtonText}) => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
      {/* <LogoImage src={logo}/> */}
      <SignUpForm setRightButtonText={setRightButtonText}/>
    </ScreenContainer>
  )
}

export default SignUp