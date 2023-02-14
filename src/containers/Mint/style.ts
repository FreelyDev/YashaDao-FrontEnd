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
    backgroundSize : 'cover',
    backgroundRepeat: 'no-repeat',
    
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
    '& .description' : {
      color : '#fff',
      fontSize: 20,
      letterSpacing : '0.095rem',
      maxWidth : 768,
      lineHeight : '1.5',
      textAlign : 'center',
      marginBottom : 50,
    },
  },
  mint:{
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 100,
    maxWidth : 1320,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  left : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom : 50,
    },
    '& img':{
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    }
  },
  right : {
    width: '60%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '& .wrapper':{
      background : 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
      border : '1px solid',
      borderImageSource : 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%)',
      borderRadius : 24,
      maxWidth :648,
      '& .top':{
        width : '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottom: '1px solid #1a1a1a',
        padding : '15px 20px',
        '& p': {
          color : '#636569',
          fontSize: 16,
          lineHeight : '1.6',
          maxWidth : 768,
          // textAlign : 'center',
          letterSpacing : '0.095rem',
          [theme.breakpoints.down('xs')]: {
            fontSize: 14,
            width : '50%',
          },
        },
        '& span':{
          display : 'inline-block',
          backgroundColor : '#6c757d',
          padding : '3px 10px',
          // lineHeight : '1',
          borderRadius : 25,
          color : '#fff',
          fontSize : 12,
          fontWeight : 500,
        }
      },
      '& .state':{
        width : '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding : '15px 30px',
        gridArea : 'auto',
        gap : 30,
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column',
          padding : '15px 24px',
        },
        '& .col':{
          background : '#090920',
          padding : 30,
          borderRadius : 10,
          width : '100%',
          maxWidth : 280,
          height : 'auto',
          [theme.breakpoints.down('xs')]: {
            padding : 20,
          },
          '& p': {
            color : '#999',
            fontSize: 16,
            lineHeight : '1.6',
            maxWidth : 768,
            // textAlign : 'center',
            letterSpacing : '0.095rem',
          },

          '& h4': {
            color : '#fff',
            fontSize: 22,
            lineHeight : '1.6',
            maxWidth : 768,
            display: 'flex',
            alignItems: 'center',
            '& span':{
              color : '#8149bf',
              fontSize : 40,
              [theme.breakpoints.down('xs')]: {
                fontSize : 30,
              },
          }
          },
        },
      },
      '& .mintCount':{
        width : '100%',
        display: 'flex',
        // justifyContent: 'space-between',
        flexDirection: 'column',
        padding : '15px 30px',
        marginBottom : 20,
        [theme.breakpoints.down('xs')]: {
          padding : '15px 24px',
        },
        '& .btns':{
          borderRadius : 10,
          width : '100%',
          height : 'auto',
          display: 'flex',
          gridArea : 'auto',
          gap : 30,
          marginBottom : 30,
          '& .mintCountValue': {
            color : '#fff',
            fontSize: 16,
            lineHeight : '1.6',
            maxWidth : 768,
            background : '#090920',
            flex : '1 0 0%',
            padding : 10,
            borderRadius : 10,
          },
          '& button': {
            flex: '0 0 auto',
            width: 'auto',
            color : '#fff',
            padding: '.75rem 1.25rem',
            border: '2px solid transparent',
            outline: 0,
            borderRadius : 5,
            cursor : 'pointer',
            transition : 'all 0.3s ease',
            '&:disabled': {
              opacity: .4,
              borderColor: 'rgba(129,73,191,.18)',
              backgroundColor: 'transparent',
            },
            
          },
          '& .mintDec': {
            background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,#ef655dbf 0,rgba(129,73,191,.18) 50%) border-box',
            '&:hover': {
              borderColor: '#ef655dbf',
            }
          },
          '& .mintInc': {
            background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,#35ca7d 0,rgba(129,73,191,.18) 100%) border-box',
            '&:hover': {
              borderColor: '#35ca7d ',
            }
          },

          '& h4': {
            color : '#fff',
            fontSize: 22,
            lineHeight : '1.6',
            maxWidth : 768,
            display: 'flex',
            alignItems: 'center',
            '& span':{
              color : '#8149bf',
              fontSize : 40,
          }
          },
        },
      }
    }
  },

}));



export default useStyles;
