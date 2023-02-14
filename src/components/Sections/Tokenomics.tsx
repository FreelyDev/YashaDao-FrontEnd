import { makeStyles } from '@material-ui/core/styles';
import SectionTitle from 'components/Widgets/SectionTitle';
import MultiLanguageContext from 'context/MultiLanguageContext';
import { useContext, useState, useEffect } from 'react';
import multiText from './lang/tokenomic_lang.json';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom : 100,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
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
    width : '100%',
    display: 'flex',
    gridArea : 'auto',
    gap : 25,
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
    width : '33%',
    maxWidth: 414,
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
      // background-clip: text;
      // text-fill-color: transparent;
      textShadow: '0 0 20px rgb(225 97 104 / 25%)',
      fontSize : 20,
      paddingTop : '1rem',
      paddingBottom : '1rem',
    },
    '& p':{
      color : '#636569',
      textAlign : 'center',
      lineHeight : '1.5',
      marginBottom : 10,
      fontSize : 14,
    },
    '& h5':{
      color : '#fff',
      textAlign : 'center',
      lineHeight : '1.5',
      fontSize : 16,
    },
    '& ul':{
      display: 'flex',
      width : '100%',
      padding : 0,
      listStyle : 'none',
      '& li':{
        width : '33%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    
      },
    },
    
  },

}));
const Tokenomics = () => {
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
              <img src="/assets/icons/icon_buy.svg" alt="" />
              <h2>{uiText.buy}</h2>
              <ul>
                <li>
                  <img src="/assets/icons/icon_liquidity.svg" alt="" />
                  <p>{uiText.liquidify}</p>
                  <h5>1%</h5>
                </li>
                <li>
                  <img src="/assets/icons/icon_marketing.svg" alt="" />
                  <p>{uiText.marketing}</p>
                  <h5>3%</h5>
                </li>
                <li>
                  <img src="/assets/icons/icon_rewards.svg" alt="" />
                  <p>{uiText.rewards}</p>
                  <h5>1%</h5>
                </li>
              </ul>
              
            </div>

            <div className={classes.item}>
            <img src="/assets/icons/icon_sell.svg" alt="" />
              <h2>{uiText.sell}</h2>
              <ul>
                <li>
                  <img src="/assets/icons/icon_liquidity.svg" alt="" />
                  <p>{uiText.liquidify}</p>
                  <h5>2%</h5>
                </li>
                <li>
                  <img src="/assets/icons/icon_rewards.svg" alt="" />
                  <p>{uiText.marketing}</p>
                  <h5>6%</h5>
                </li>
                <li>
                  <img src="/assets/icons/icon_liquidity.svg" alt="" />
                  <p>{uiText.rewards}</p>
                  <h5>2%</h5>
                </li>
              </ul>
            </div>

            <div className={classes.item}>
            <img src="/assets/icons/icon_totalSupply.svg" alt="" />
              <h2>{uiText.totalSupply}</h2>
              <h5>100,000,000,000</h5>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Tokenomics;
