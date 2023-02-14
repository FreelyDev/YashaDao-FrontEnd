import { makeStyles } from '@material-ui/core/styles';
import MultiLanguageContext from 'context/MultiLanguageContext';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import multiText from './token_lang.json';


interface TokenType {
  title?: string;
  img?: string;
  lauchType? : string;
  desription?: string;
  totalRaised?: number;
  soft_hard?: string;
  start?: number;
}
interface PropsType {
  item?: TokenType;
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
      maxWidth: '90vw',
    },
    '&:before':{
      content: '""',
      position: 'absolute',
      background: 'linear-gradient(134deg,#ef655d 45%,#8149bf 45%)',
      top: '-.25rem',
      bottom: '-.25rem',
      left: '-.25rem',
      right: '-.25rem',
      opacity: 0,
      zIndex: -1,
      WebkitFilter :'blur(96px)',
      // -webkit-filter: blur(96px);
      filter: 'blur(96px)',
      borderRadius : '20%',
      transition : 'all 0.3s ease',
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
  },

  card_body: {
    cursor: 'pointer',
    width : '100%',
    position: 'relative',
    padding : 32,
    // background: '#0f0f24',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '90vw',
      padding : 24,
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
  type: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom : 20,
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
  desription: {
    color: '#8e95a3',
    minHeight : '6rem',
    width: '100%',
    lineHeight : '1.5',
    marginBottom : 20,
    [theme.breakpoints.down('xs')]: {
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

const TokenCard = ({ item, onClick }: PropsType) => {
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
  // const getDateString = (str : string)=>{

  //   return ''
  // }
  return (
    <div className={classes.root}>
      <div className={classes.card_body} onClick={onClick}>
        <div className={classes.top}>
          <img src={item?.img} alt="" />
          <div>
            <h5>{item?.title}</h5>
            <h6>$-----</h6>
          </div>

        </div>
        <div className={classes.type}>
          <span className='closed'>CLOSED</span>
          <span className={item?.lauchType.toLocaleLowerCase()}>{uiText[item?.lauchType]}</span>

        </div>
        <p className={classes.desription}>{item?.desription}</p>
        <div className={classes.row}>
          <p>{uiText.total_raised}:</p>
          <h5>{item?.totalRaised === 0? 'N/A' : `${item?.totalRaised} ETH`}</h5>
        </div>
        <div className={classes.row}>
          <p>{uiText.soft}:</p>
          <h5>{item?.soft_hard === ''? 'N/A' : item?.soft_hard}</h5>
        </div>
        <div className={classes.row}>
          <p>{uiText.start}:</p>
          <h5>{item?.start === 0? 'TBA' : `${moment(item?.start* 1000).format("MMM,DD,YYYY hh:MM A")}`}</h5>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
