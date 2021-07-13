// import React from 'react'
// import CardActionArea from '@material-ui/core/CardActionArea'
// import CardMedia from '@material-ui/core/CardMedia'
// import Typography from '@material-ui/core/Typography'
// import { MusicCardContainer, MusicCardContent } from './styled'

// const MusicListCard = (props) => {

//   return (
//     <MusicCardContainer onClick={props.onClick}>
//       <CardActionArea>
//         <CardMedia
//           titulo={props.titulo}
//           author={props.author}
//         />
//         <MusicCardContent>
//           <Typography align={'center'}>
//             {props.title}
//           </Typography>
//         </MusicCardContent>
//       </CardActionArea>
//     </MusicCardContainer>
//   )
// }

// export default MusicListCard

import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import { MusicCardContainer, MusicCardContent } from './styled'

const MusicCard = (props) => {

  return (
    <MusicCardContainer >
        <CardActionArea>
            <MusicCardContent onClick={props.onClick}>
                <Typography gutterBottom variant="h5" component="h2">
                    <p>{props.title}</p>
                </Typography>
                <Typography align={'center'} variant="body2" component="p">
                    {props.genre}
                </Typography>
            </MusicCardContent>
                <hr />
        </CardActionArea>
    </MusicCardContainer>
  )
}

export default MusicCard 