import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'
import { useHistory } from 'react-router-dom'
import { AddRecipeButton, MusicListContainer } from './styled'
import { goToAddMusic, goToDetails } from '../../routes/coordinator'
import { Add } from '@material-ui/icons'
import MusicListCard from "../../components/MusicListCard/MusicListCard"
import { MusicCardContainer } from '../../components/MusicListCard/styled'

const MusicList = () => {
  useProtectedPage()

  const history = useHistory()
  const musics = useRequestData([], `${BASE_URL}/music/all`)
  console.log(musics)

  const onClickDetail = (id) => {
    goToDetails(history, id)
  }

  return (
    <MusicListContainer>
      {musics?.musics?.map((item) => {
        return (
          <MusicListCard key={item.title}
            key={item.id}
            title={item.title}
            genre={item.genre}
            onClick={() => onClickDetail(item.id)}
          />
        )
      })}

      <AddRecipeButton
        color={"primary"}
        onClick={() => goToAddMusic(history)}
      >
        <Add />
      </AddRecipeButton>
    </MusicListContainer>
  )
}

export default MusicList


// const MusicList = () => {
//     useProtectedPage()

//     const musics = useRequestData([], `${BASE_URL}/music/all`)
//     console.log(musics)

//     const musicList = musics?.musics?.map((item) => {
//         return (
//             <Card>
//                 titulo={item.title}
//                 {/* file={item.file} */}
//                 genre={item.genre}
//                 {/* album={item.album} */}
//                 onClick={() => null}
//             </Card>

//         )
//         // <p>{item.title}</p>
//     })

//     return (
//         <PlaylistsContainer>
//             <h1>Lista de músicas</h1>
//             {musicList}
//         </PlaylistsContainer>
//     )
// }

// export default MusicList


// const MusicList = () => {
//   useProtectedPage()

//   const classes = useStyles();
//   const theme = useTheme();

//   const history = useHistory()
//   const musics = useRequestData([], `${BASE_URL}/music/all`)
//   console.log(musics)

//   const onClickDetail = (id) => {
//     goToDetails(history, id)
//   }

//   return (
//     <div className={classes.details}>

//       <CardContent className={classes.content}>
//         <h1>Lista de músicas</h1>

//         {musics?.musics?.map((item) => {
//           return (
//             <CardContent key={item.title}>
//               <Typography component="h5" variant="h5">{item.title}</Typography>
//               <Typography variant="subtitle1" color="textSecondary">{item.genre}</Typography>
//               <Button onClick={() => onClickDetail(item.id)} size="small" color="primary">
//                 DETALHES
//               </Button>
//             </CardContent>
//           )
//         })}

//         <AddRecipeButton
//           color={"primary"}
//           onClick={() => goToAddMusic(history)}
//           >
//           <Add />
//         </AddRecipeButton>

//       </CardContent>
//     </div>    
//   )
// }

// export default MusicList