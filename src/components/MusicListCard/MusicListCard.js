import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { MusicCardContainer, MusicCardContent } from './styled'

const MusicListCard = (props) => {

  return (
    <MusicCardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          height={'150px'}
          title={props.title}
          genre={props.genre}
        />
        <MusicCardContent>
          <Typography component="h5" variant="h5" align={'center'} >
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" align={'center'}>
            {props.genre}
          </Typography>
        </MusicCardContent>
      </CardActionArea>
    </MusicCardContainer>
  )
}

export default MusicListCard