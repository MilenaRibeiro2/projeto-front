import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'
import { useHistory } from 'react-router-dom'
import { MusicCardContent, AddRecipeButton } from './styled'
import { goToAddMusic, goToDetails } from '../../routes/coordinator'
import { Add } from '@material-ui/icons'
import Button from '@material-ui/core/Button'
// import MusicListCard from '../../components/MusicListCard/MusicListCard'
// import CardMedia from '@material-ui/core/CardMedia'
// import { FeedContainer } from './styled'
// import Card from '@material-ui/core/Card'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));

const MusicList = () => {
    useProtectedPage()

    const classes = useStyles();
    const theme = useTheme();

    const history = useHistory()
    const musics = useRequestData([], `${BASE_URL}/music/all`)
    console.log(musics)

    const onClickDetail = (id) => {
        goToDetails(history, id)
    }

    return (
            <div className={classes.details}>

                <CardContent className={classes.content}>

                    <h1>Lista de músicas</h1>

                    {musics?.musics?.map((item) => {
                        return (
                            <div key={item.title}>
                                <Typography component="h5" variant="h5">{item.title}</Typography>
                                <Typography variant="subtitle1" color="textSecondary">{item.genre}</Typography>
                                {/* <button>Saber mais</button> */}
                                <Button onClick={() => onClickDetail(item.id)} size="small" color="primary">
                                    DETALHES
                                </Button>
                            </div>
                        )
                    })}

                </CardContent>
                <AddRecipeButton
                    color={"primary"}
                    onClick={() => goToAddMusic(history)}
                >
                    <Add/>
                </AddRecipeButton>
            </div>
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