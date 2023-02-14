import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height : '100%',
    position : 'relative',
    flexDirection: 'column',
    

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },

  content: {
    width: '100%',
    height : '100%',
    minHeight : '100vh',
    margin : 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '10rem',
    background : '#000',
    backgroundSize : 'cover',
    backgroundRepeat : 'norepeat',
    
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      paddingTop: '7rem',
    },

    '& h1': {
      color : '#fff',
      fontSize: 68,
      fontStyle : 'italic',
      fontWeight : 700,
      letterSpacing : 6,
      marginTop : 30,
      marginBottom : 10,
      lineHeight : '1.4',
      maxWidth: 1320,
      textAlign : 'center',
      [theme.breakpoints.down('xs')]: {
        fontSize: 48,
      },
      '& span': {
        background: 'linear-gradient(90deg,#8149bf 1.74%,#ef655d 100%)',
        WebkitBackgroundClip: 'text',
        textFillColor: 'transparent',
        textShadow: '0 0 20px rgb(225 97 104 / 25%)',
      },
    },
    '& p': {
      color : '#fff',
      fontSize: '1.25rem',
      lineHeight : '1.6',
      maxWidth : 768,
      textAlign : 'center',
      letterSpacing : '0.095rem',
      marginBottom : 40,
    },

  },

}));



export default useStyles;
