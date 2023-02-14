import { makeStyles } from '@material-ui/core/styles';
import FilledButton from 'components/Buttons/FilledButton';
import MultiLanguageContext from 'context/MultiLanguageContext';
import { useContext, useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import multiText from './footer_lang.json';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(5),
    background : '#0f0f24',
    width : '100%',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    textAlign : 'center',
    marginTop : 200,
    [theme.breakpoints.down('xs')]: {
      marginTop : 50,
    },
  },
  content :{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '90%',
    maxWidth : 1320,
    margin : 'auto',
    '& .row':{
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop : 35,
      paddingBottom : 35,
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        paddingTop : 24,
        paddingBottom : 24,
      },
      '& .logo':{
        '& a':{
          display: 'flex',
          alignItems: 'center',
          marginBottom : 24,
          '& h1':{
            color : '#fff',
            fontSize : 22,
            [theme.breakpoints.down('xs')]: {
              display : 'none',
              
            },
          },
          '& img':{
            marginRight : 15,
          }
        },
      },
      '& p':{
        color : '#fff',
        fontSize : 16,
        fontWeight : 300,
        width :'50%',
        lineHeight : '1.5',
        [theme.breakpoints.down('xs')]: {
          width :'90%',
          
        },
      },
      '& .links':{
        display: 'flex',
        alignItems: 'center',
        gridArea : 'auto',
        gap : 10,
        [theme.breakpoints.down('xs')]: {
          gap : 20,
          marginTop : 24,
        },
        '& a':{
          '& img':{
            transition : 'all 0.3s ease',
            '&:hover':{
              filter : 'brightness(2)',
            }
          }
        },
      }
    },

    '& .justify_center':{
      justifyContent: 'center',
    },

    '& .align_center':{
      alignItems: 'center',
    },
    '& .col':{
      display: 'flex',
      flexDirection: 'column',
      paddingTop : 50,
      paddingBottom : 50,
      width: '100%',
      '& h3':{
        color : '#fff',
        fontSize : 20,
        fontWeight : 300,
        marginBottom : 50,
      },
      '& h4':{
        color : '#636569',
        fontSize : 20,
        width : 'fit-content',
        marginBottom : 30,
      },
      '& a':{
        color : '#fff',
        fontSize : 16,
        width : 'fit-content',
        marginBottom : 15,
        transition : 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        '&:hover':{
          color : '#fde995',
        },
        '& img':{
          marginRight : 10,
        }
      }
    },
    '& .bbr':{
      borderBottom: '1px solid #00203e',
    },
  },
}));

const Footer = () => {
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
    <footer className={classes.root}>
      <div className={classes.content}>
        <div className="col bbr align_center">
          <h3>{uiText.top}</h3>
          <a href="https://forms.gle/4QXPVj7JqZjTVfkA6" target={'_blank'} rel="noreferrer">
            <FilledButton label={uiText.submit} color = 'secondary' icon = {<><img src="/assets/icons/icon_submit.svg" alt="" /></>} iconPosition = 'start'/>
          </a>
        </div>

        <div className="row bbr align_center">
          <div className="logo">
            <HashLink to="/">
              <img src="/assets/logo-md.png" alt="" />
              <h1>{uiText.logo}</h1>
            </HashLink>
          </div>
          <p>{uiText.bring}</p>
          <div className="links">
            <a href="https://app.uniswap.org/#/swap?exactField=input&exactAmount=1&inputCurrency=eth&outputCurrency=0xd75f1f81b69bdd4df8efbb70e9c6f4609009d753&chain=mainnet" target={'_blank'} rel="noreferrer">
              <img src="/assets/icons/icon_uniswap.svg" alt="" />
            </a>

            <a href="https://www.dextools.io/app/ether/pair-explorer/0x3b35a99780fc2c85943e67a901f10bd7317fec75" target={'_blank'} rel="noreferrer">
              <img src="/assets/icons/icon_dextools.svg" alt="" />
            </a>

            <a href="https://www.coingecko.com/en/coins/yasha-dao" target={'_blank'} rel="noreferrer">
              <img src="/assets/icons/icon_coingecko.svg" alt="" />
            </a>

            <a href="https://etherscan.io/token/0xd75f1f81b69bdd4df8efbb70e9c6f4609009d753" target={'_blank'} rel="noreferrer">
              <img src="/assets/icons/icon_etherscan.svg" alt="" />
            </a>

            <a href="https://www.instagram.com/yashatoken/" target={'_blank'} rel="noreferrer">
              <img src="/assets/icons/icon_instagram.svg" alt="" />
            </a>

            <a href="http://t.me/yasha_dao_official" target={'_blank'} rel="noreferrer">
              <img src="/assets/icons/icon_telegram_01.svg" alt="" />
            </a>

            <a href="https://twitter.com/YashaToken" target={'_blank'} rel="noreferrer">
              <img src="/assets/icons/icon_twitter.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="row bbr">
          <div className="col" style={{padding : 0}}>
            <h4>{uiText.general}</h4>
            <HashLink to="/staking">{uiText.staking}</HashLink>
            <HashLink to="/">{uiText.staking_tiers}</HashLink>
            <HashLink to="/">{uiText.apply}</HashLink>
          </div>

          <div className="col" style={{padding : 0}}>
            <h4>{uiText.help}</h4>
            <HashLink to="/">{uiText.faq}</HashLink>
            <HashLink to="/">{uiText.ecosystem}</HashLink>
            <HashLink to="/">{uiText.participate}</HashLink>
          </div>

          <div className="col" style={{padding : 0}}>
            <h4>{uiText.token}</h4>
            
            <a href="https://www.coingecko.com/en/coins/yasha-dao" target={'_blank'} rel="noreferrer">
              <img src="/assets/icons/icon_coingecko_01.svg" alt="" /> {uiText.coingecko}
            </a>

            <a href="https://coinmarketcap.com/currencies/yasha-dao/" target={'_blank'} rel="noreferrer">
              <img src="/assets/icons/icon_coinmarketcap.svg" alt="" /> {uiText.CoinMarketCap}
            </a>

            <a href="https://www.dextools.io/app/ether/pair-explorer/0x3b35a99780fc2c85943e67a901f10bd7317fec75" target={'_blank'} rel="noreferrer">
              <img src="/assets/icons/icon_dextools_01.svg" alt="" /> {uiText.DexTools}
            </a>

            <a href="https://app.uniswap.org/#/swap?exactField=input&exactAmount=1&inputCurrency=eth&outputCurrency=0xd75f1f81b69bdd4df8efbb70e9c6f4609009d753&chain=mainnet" target={'_blank'} rel="noreferrer">
              <img src="/assets/icons/icon_uniswap_01.svg" alt="" /> {uiText.Uniswap}
            </a>
            
          </div>
        </div>
        <div className="row align_center justify_center">
          <p>@Copyright YASHA 2022. all rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
