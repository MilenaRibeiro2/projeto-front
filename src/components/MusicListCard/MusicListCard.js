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
          title={props.title}
          author={props.author}
        />
        <MusicCardContent>
          <Typography align={'center'}>
            {props.title.toUpperCase()}
          </Typography>
        </MusicCardContent>
      </CardActionArea>
    </MusicCardContainer>
  )
}

export default MusicListCard