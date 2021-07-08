import React from 'react'
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'
// import { LogoImage } from './styled'
// import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignUp = () => {
//   useUnprotectedPage()
  return (
    <ScreenContainer>
      {/* <LogoImage src={logo}/> */}
      <SignUpForm/>
    </ScreenContainer>
  )
}

export default SignUp