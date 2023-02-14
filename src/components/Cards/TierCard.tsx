import { makeStyles } from '@material-ui/core/styles';
import MultiLanguageContext from 'context/MultiLanguageContext';
import { useContext, useEffect,  useState } from 'react';
import { numberToString } from 'utils';
import multiText from './tier_lang.json';


interface TierType {
  img?: string;
  title?: string;
  subTitle?: string;
  tokenAmount? : number
  pool?:string
}
interface PropsType {
  item?: TierType;
  onClick?: any;
}
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 454,
    borderRadius: 25,
    marginBottom: 15,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
    border: '1px solid',
    borderImageSource: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%)',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      width : '100%'
    },
    
    '&:after':{
      content: '""',
      position: 'absolute',
      background: 'linear-gradient(90deg,#8149bf 1.74%,#ef655d 100%)',
      top: '0',
      left: '50%',
      width : 80,
      transform : 'translate(-50%, -50%)',
      height : 2,
    },
    '&:hover': {
      '& .img-div' : {
        '&:before':{
        animation: 'loadingAni 5s linear infinite',
        }
      },
    },
    '& .img-div' : {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      marginTop : 20,
      marginBottom : 20,
      width : 150,
      height : 150,
      padding : 2,
      
      [theme.breakpoints.down('xs')]: {
      },
      
      '&:before':{
        content: '""',
        position: 'absolute',
        background: 'linear-gradient(132deg,#ffbf35,#ff6200 43%,#ffbf35),linear-gradient(132deg,#ffbf35,#ff6200 43%,#ffbf35),linear-gradient(132deg,#ffbf35,#ff6200 43%,#ffbf35),linear-gradient(132deg,#ffbf35,#ff6200 43%,#ffbf35)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '50% 50%,50% 50%',
        backgroundPosition: '0 0,100% 0,100% 100%,0 100%',
        width : '100%',
        // transform : 'translate(-50%, -50%)',
        height : '100%',
        top : 2,
        left : 2,
        borderRadius : '50%',
        zIndex : -1,
        transition : 'all 0.3s ease',
      },
  
      '& img': {
        width: '100%',
        height: '100%',
        background: '141422',
        borderRadius: '50%',
        boxShadow : '#ffbf3569 0 0 10px 2px'
      },
    },
  },
  

  card_body: {
    cursor: 'pointer',
    width : '100%',
    position: 'relative',
    padding : 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex : 1,
    [theme.breakpoints.down('xs')]: {
      // maxWidth: '90vw',
      padding : 24,
    },
  },

  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    marginBottom : 20,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },

    '& h2':{
      letterSpacing: 1,
      background: 'linear-gradient(90deg,#8149bf 1.74%,#ef655d 100%)',
      WebkitBackgroundClip: 'text',
      textFillColor: 'transparent',
      // background-clip: text;
      // text-fill-color: transparent;
      textShadow: '0 0 20px rgb(225 97 104 / 25%)',
      fontSize : 30,
      paddingTop : '1rem',
      paddingBottom : '1rem',
      [theme.breakpoints.down('xs')]: {
        fontSize : 22,
      },
    },
    '& h4': {
      fontSize: 14,
      color: '#636569',
      textTransform : 'uppercase',
      fontWeight : 'normal',
      lineHeight : '1.5',
    }
  },
  col: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#090920',
    flexDirection: 'column',
    padding: '2rem',
    textTransform: 'uppercase',
    borderRadius : 20,
    width: '100%',
    marginBottom : 20,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '& p': {
      fontSize : 14,
      color: '#636569',
      marginBottom : 20,
    },
    '& h5': {
      fontSize : 30,
      color: '#fff',
      fontWeight : 'normal',
      display: 'flex',
      alignItems: 'flex-start',
      [theme.breakpoints.down('xs')]: {
        fontSize : 22,
      },
      '& span': {
        fontSize : 14,
        fontWeight : 700,
        color: '#636569',
        // marginBottom : 20,
        textTransform : 'uppercase',
      },
    },
    
  },

  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#090920',
    padding: '1.25rem',
    textTransform: 'uppercase',
    borderRadius : 20,
    width: '100%',
    marginBottom : 20,
    gridArea : 'auto',
    gap : 7,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
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
}));

const TierCard = ({ item, onClick }: PropsType) => {
  const classes = useStyles();

  const { langType } = useContext(MultiLanguageContext)

  const [uiText, setUiText] = useState(multiText[0]);

  useEffect(() => {
    if(langType === 'en') setUiText(multiText[0]);
    if(langType === 'cn') setUiText(multiText[1]);
    if(langType === 'es') setUiText(multiText[2]);
    if(langType === 'fr') setUiText(multiText[3]);
    if(langType === 'hi') setUiText(multiText[4]);
    if(langType === 'ja') setUiText(multiText[5]);

  }, [langType]);
  return (
    <div className={classes.root}>
      <div className={classes.card_body} onClick={onClick}>
        <div className='img-div'>
          <img src={item?.img} alt="" />
        </div>
        <div className={classes.title}>
            <h2>{uiText[item?.title]}</h2>
            <h4>{uiText[item?.subTitle]}</h4>
          </div>
        <div className={classes.col}>
          <p>{uiText.token_amount}</p>
          <h5>{numberToString(item?.tokenAmount)} <span>YASHA</span></h5>
        </div>
        <div className={classes.row}>
          <p>{uiText.pool}:</p>
          <h5>{uiText[item?.pool]}</h5>
        </div>
      </div>
    </div>
  );
};

export default TierCard;
