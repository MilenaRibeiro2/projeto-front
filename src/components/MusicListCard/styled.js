import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export const MusicCardContainer = styled(Card)`
  width: 25vw;
  margin: 20px;
  margin-bottom: 10px;
  margin-right: 20px;
`
export const MusicCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 15vh;
  margin-bottom: 10px;
  padding: 30px;
`