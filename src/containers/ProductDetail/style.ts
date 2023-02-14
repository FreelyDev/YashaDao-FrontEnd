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
    paddingBottom : 50,
    background : '#000',
    backgroundSize : 'cover',
    backgroundRepeat : 'norepeat',
    marginBottom : 100,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom : 64,
      paddingTop: 112,
    },
    '& .main_img': {
      width : '309px',
      height : 'auto',
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
    },
    
    '& .btns':{
      marginTop : 40,
      marginBottom : 40,
      display: 'flex',
      alignItems: 'center',
      gridArea : 'auto',
      gap : 20,
    }

  },
  wrapper: {
    width: '100%',
    height : '100%',
    margin : 0,
    display: 'flex',
    alignItems: 'flex-start',
    maxWidth : 1320,
    gridArea : 'auto',
    gap : 30,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      paddingLeft : 12,
      paddingRight : 12,
    },
    '& .line': {
      width : '100%',
      height : 1,
      borderBottom : '1px solid #50507255',
      paddingTop : 24,
      marginBottom : 24,
    },
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
    border: '1px solid',
    borderImageSource: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%)',
    borderRadius: 25,
    position: 'relative',
    padding : 32,
    maxWidth : 414,
    width : '33.33%',
    [theme.breakpoints.down('xs')]: {
      width : '100%',
      padding : 24,
    },

    '&:after':{
      content: '""',
      position: 'absolute',
      background: 'linear-gradient(90deg,#8149bf 1.74%,#ef655d 100%)',
      top: '4.625rem',
      left: 0,
      width : '3.25rem',
      transform : 'translate(-50%, -50%) rotate(270deg)',
      height : 2,
    },
    '&:hover': {
      '&:before':{
        opacity: 1,
      },
    },
    '& .regis_str': {
      color : '#8e95a3',
      fontSize: 15,
      lineHeight : '1.5',
      textAlign : 'left',
      width : '100%',
    },

    '& a': {
      color : '#fff',
      transition :'all 0.3s ease',
      fontSize : 16,
      [theme.breakpoints.down('xs')]: {
        padding : 10,
        paddingRight : 10,
      },
      '&:hover': {
        color : '#fde995',
      },
      
    },
    '& h3': {
      letterSpacing: 1,
      background: 'linear-gradient(90deg,#8149bf 1.74%,#ef655d 100%)',
      WebkitBackgroundClip: 'text',
      textFillColor: 'transparent',
      // background-clip: text;
      // text-fill-color: transparent;
      textShadow: '0 0 20px rgb(225 97 104 / 25%)',
      width : '100%',
      marginBottom : 20,
    },
    '& .progress-part': {
      width : '100%',
      display : 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      '& .top': {
        width : '100%',
        borderRadius : 16,
        display : 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& p': {
          color : '#636569',
          fontSize: 14,
        },
        '& span': {
          color : '#8e95a3',
          fontSize: 15,
          lineHeight : '1.5',
        },
      },
      '& .progress-div': {
        width : '100%',
        height : 16,
        marginBottom : 10,
        marginTop : 10,
        borderRadius : 16,
        overflow : 'hidden',
        display : 'flex',
        alignItems: 'center',
        '& .progress': {
          height : '100%',
          backgroundColor : '#8149bf',
          transition : 'all 0.3s ease',
          backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)',
          backgroundSize: '1rem 1rem',
          animation: 'progressAnimate 2s',
        },
      },
      '& .date': {
        width : '100%',
        height : 16,
        borderRadius : 16,
        display : 'flex',
        alignItems: 'center',
        '& p': {
          color : '#636569',
          fontSize: 14,
        },
      },
    },
    '& h6': {
      color : '#8e95a3',
      fontSize: 15,
      fontWeight : 'normal',
      lineHeight : '1.5',
    },
  },
  type: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom : 24,
    gridArea : 'auto',
    gap : 7,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '& span': {
      fontWeight : 700,
      padding : '3px 10px',
      borderRadius : 10,
      fontSize : 12,
      textTransform : 'uppercase',
    },
    '& .closed': {
      color: '#ff3358',
      backgroundColor: '#290007',
      
    },
    '& .fair': {
      color: '#35ca7d',
      backgroundColor: '#0b2819',
      
    },
    '& .stealth': {
      color: '#8149bf',
      backgroundColor: '#221234',
      
    },
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(255,255,255,.25) 0,rgba(255,255,255,0) 100%) border-box',
    border: '1px solid transparent',
    padding: '.75rem 1.25rem',
    textTransform: 'uppercase',
    borderRadius : 15,
    width: '100%',
    gridArea : 'auto',
    gap : 7,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '& p': {
      fontSize : 14,
      textTransform : 'uppercase',
      color: '#636569',
    },
    '& h5': {
      fontSize : 14,
      color: '#fff',
      fontWeight : 'normal',
    },
    
  },
  right: {
    display: 'flex',
    // alignItems: 'center',
    marginBottom : 20,
    flexDirection: 'column',
    background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
    border: '1px solid',
    borderImageSource: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%)',
    borderRadius: 25,
    width : '66.66%',
    padding : 32,
    [theme.breakpoints.down('xs')]: {
      width : '100%',
      padding : 24,
    },
    '& h2': {
      letterSpacing: 1,
      background: 'linear-gradient(90deg,#8149bf 1.74%,#ef655d 100%)',
      WebkitBackgroundClip: 'text',
      textFillColor: 'transparent',
      // background-clip: text;
      // text-fill-color: transparent;
      textShadow: '0 0 20px rgb(225 97 104 / 25%)',
      width : '100%',
      marginBottom : 20,
    },
    '& .links':{
      display: 'flex',
      alignItems: 'center',
      gridArea : 'auto',
      gap : 20,
      marginBottom : 20,
      '& a':{
        '& img':{
          transition : 'all 0.3s ease',
          '&:hover':{
            filter : 'brightness(2)',
          }
        }
      },
    },
    '& ul': {
      padding : 0,
      marginBottom : 20,
      display: 'flex',
      alignItems: 'center',
      flexWrap : 'wrap',
      listStyle : 'none',
      gridArea :'auto',
      gap : 20,
      [theme.breakpoints.down('xs')]: {
      },
      
      '& li': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#090920',
        border: '1px solid transparent',
        padding: '.75rem 1.25rem',
        textTransform: 'uppercase',
        borderRadius : 10,
        width: 'calc(50% - 40px)',
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          padding: '.75rem 1rem',
        },
        '& p': {
          fontSize : 14,
          textTransform : 'uppercase',
          color: '#8e95a3',
        },
        '& h5': {
          fontSize : 14,
          color: '#fff',
          fontWeight : 'normal',
        },
      },
      '& .r-line': {
        borderRight : '1px solid #ffffff0a',
      },
    },
  },

  top: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom : 20,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '& img': {
      width: 84,
      height: 84,
      border: '2px solid',
      background: 'linear-gradient(#141422,#141422) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
      borderImageSource: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,.03) 100%)',
      padding: 10,
      borderRadius: 84,
      marginRight : 20,
    },


    '& div': {
      flex: '1 0 0%',
      objectFit: 'cover',
      display : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      [theme.breakpoints.down('xs')]: {
        display : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      '& h5': {
        fontSize: 16,
        width: '100%',
        color: '#fff',
        textTransform : 'uppercase',
        lineHeight : '1.5',
      },
      '& h6': {
        fontSize: 14,
        width: '100%',
        color: '#8e95a3',
        textTransform : 'uppercase',
        fontWeight : 'normal',
        lineHeight : '1.5',
      }
    },
  },
  desription: {
    color: '#8e95a3',
    width: '100%',
    lineHeight : '1.5',
    [theme.breakpoints.down('xs')]: {
    },
  },
}));



export default useStyles;

