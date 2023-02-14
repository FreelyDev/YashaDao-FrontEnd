import { makeStyles } from '@material-ui/core/styles';
import SectionTitle from 'components/Widgets/SectionTitle';
import MultiLanguageContext from 'context/MultiLanguageContext';
import { useContext, useState, useEffect } from 'react';
import multiText from './lang/nft_benifit_lang.json';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop : 100,
    marginBottom : 100,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop : 50,
    },
  },
  content :{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    maxWidth : 1320,
    margin : 'auto',
  },

  itemList:{
    display: 'flex',
    gridArea : 'auto',
    gap : 25,
    width : '70%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width : '100%',
    },
  },
  item:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding : '2rem',
    flex: '1 1 auto',
    height : 'auto',
    maxWidth: 300,
    width : '33.33%',
    background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
    border: '1px solid',
    borderImageSource: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%)',
    borderRadius: 25,
    animation: 'slideShow 0.5s linear 1',
    position : 'relative',
    [theme.breakpoints.down('xs')]: {
      width : '100%',
    },
    '&:after':{
      content : '""',
      position : 'absolute',
      width : '5rem',
      height : 2,
      background: 'linear-gradient(90deg,#8149bf 1.74%,#ef655d 100%)',
      border: '1px solid',
      top : 0,
      left : '50%',
      transform : 'translate(-50%,-50%)',
    },
    '& img':{
      paddingTop : '1rem',
      paddingBottom : '1rem',
    },
    '& h2':{
      letterSpacing: 1,
      background: 'linear-gradient(90deg,#8149bf 1.74%,#ef655d 100%)',
      WebkitBackgroundClip: 'text',
      textFillColor: 'transparent',
      textAlign : 'center',
      textShadow: '0 0 20px rgb(225 97 104 / 25%)',
      fontSize : 20,
      paddingTop : '1rem',
      paddingBottom : '1rem',
    },
    '& p':{
      color : '#636569',
      textAlign : 'center',
      lineHeight : '1.5',
    },
  },

}));
const NFTBenifit = () => {
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
    <>
      <div className={`${classes.root}`}>
        <SectionTitle title = {uiText.title}/>

        <div className={classes.content}>
           

          <div className={classes.itemList}>
            <div className={classes.item}>
              <img src="/assets/imgs/nft/token_reward.svg" alt="" />
              <h2>{uiText.token}</h2>
              <p>{uiText.token_desc}</p>
            </div>

            <div className={classes.item}>
            <img src="/assets/imgs/nft/community.svg" alt="" />
              <h2>{uiText.community}</h2>
              <p>{uiText.community_desc}</p>
            </div>

            <div className={classes.item}>
            <img src="/assets/imgs/nft/opportunity.svg" alt="" />
              <h2>{uiText.opportunity}</h2>
              <p>{uiText.opportunity_desc}</p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default NFTBenifit;
