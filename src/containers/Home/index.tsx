import FilledButton from 'components/Buttons/FilledButton';
import { useStyles } from './style';
import { useContext, useEffect, useState } from 'react';
import MultiLanguageContext from 'context/MultiLanguageContext';
import Tab from 'components/Tab';
import TokenEvent from 'components/Sections/TokenEvent';
import Testmonials from 'components/Sections/Testmonials';
import About from 'components/Sections/About';
import Tiers from 'components/Sections/Tiers';
import Tokenomics from 'components/Sections/Tokenomics';

const multiText = [
  {
    title : 'NEXT-GEN LAUNCHPAD',
    description : 'Early access to vetted projects that drive the future of DeFi',
    button : {
      submit : 'CONNECT WALLET',
      telegram : 'DISCONNECT'
    },
    links : {
      view : 'VIEW CHART',
      swap : 'SWAP',
    },
    state : {
      price : 'PRICE',
      marketap : 'MARKETCAP',
      tokens : 'TOKENS BURNED',
      funds : 'TOTAL FUNDS RAISED'
    }
  },
  {
    title : '下时代浮华平台',
    description : '提早推动经过审查的DeFi未来的项目',
    button : {
      submit : '提交项目',
      telegram : '加入电报群'
    },
    links : {
      view : '观看视图',
      swap : '换夜叉代币',
    },
    state : {
      price : '价格',
      marketap : '市值',
      tokens : '代币烧毁',
      funds : '募集资金总额'
    }
  },
  {
    title : 'PLATAFORMA DE LANZAMIENTO DE NUEVA GENERACIÓN',
    description : 'Acceso anticipado a proyectos examinados que impulsan el futuro de DeFi',
    button : {
      submit : 'Enviar un proyecto',
      telegram : 'Únase a Telegram'
    },
    links : {
      view : 'VER GRÁFICO',
      swap : 'COMPRAR YASHA',
    },
    state : {
      price : 'PRECIO',
      marketap : 'CAP DE MERCADO',
      tokens : 'QUEMADAS',
      funds : 'FONDOS RECAUDADOS'
    }
  },
  {
    title : 'NEXT-GEN LAUNCHPAD',
    description : "Accès anticipé à des projets approuvés qui guident l'avenir de DeFi",
    button : {
      submit : 'Déposer un Projet',
      telegram : 'Rejoindre Telegram'
    },
    links : {
      view : 'AFFICHER LE GRAPHIQUE',
      swap : 'AFFICHER LE GRAPHIQUE',
    },
    state : {
      price : 'LE PRIX',
      marketap : 'CAPITALISATION BOURSIÈRE',
      tokens : 'JETONS BRÛLÉS',
      funds : 'TOTAL DES FONDS COLLECTÉS'
    }
  },
  {
    title : 'नेक्स्ट-जेन लॉन्चपैड',
    description : 'डेफी के भविष्य को संचालित करने वाली जांच की गई परियोजनाओं तक शीघ्र पहुंच',
    button : {
      submit : 'प्रोजेक्ट सबमिट करें',
      telegram : 'टेलीग्राम से जुड़ें'
    },
    links : {
      view : 'चार्ट देखें',
      swap : 'चार्ट देखें',
    },
    state : {
      price : 'कीमत',
      marketap : 'मार्किट कैप',
      tokens : 'टोकन बर्न',
      funds : 'कुल जुटाई गई धनराशि'
    }
  },
  {
    title : '次世代ランチパッド',
    description : '吟味された未来のあるプロジェクトに早期アクセスする。',
    button : {
      submit : 'プロジェクトを提出する',
      telegram : 'Telegramに参加する'
    },
    links : {
      view : 'チャートを見る',
      swap : 'YASHAにスワップ',
    },
    state : {
      price : '値段',
      marketap : '時価総額',
      tokens : 'バーン',
      funds : '総調達資金'
    }
  },

]
const Home = () => {
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

  const [tabId, setTabId] = useState(0);

  return (
    <>
      <div className={classes.root}>
        <div className={`${classes.content}`} style = {{backgroundImage: `url("/assets/hero-bg.svg")`}} >
          <img src="/assets/imgs/home_banner.svg" alt="" className='main_img'  data-aos="fade-up"/>
          <h1 data-aos="fade-up">{uiText.title}</h1>
          <p data-aos="fade-up">{uiText.description}</p>
          <div className="btns" data-aos="fade-up">
            <a href="https://forms.gle/4QXPVj7JqZjTVfkA6" target={"_blank"} rel="noreferrer">
              <FilledButton label={uiText.button.submit} color = 'secondary' icon = {<><img src="/assets/icons/icon_submit.svg" alt="" /></>} iconPosition = 'start'/>
            </a>

            <a href="http://t.me/yasha_dao_official" target={"_blank"} rel="noreferrer">
            <FilledButton label={uiText.button.telegram} color = 'grey' icon = {<><img src="/assets/icons/icon_telegram.svg" alt="" /></>} iconPosition = 'start'/>
            </a>

           
          </div>

          <div className={classes.external_links} data-aos="fade-up">
            <a href="https://www.dextools.io/app/ether/pair-explorer/0x3b35a99780fc2c85943e67a901f10bd7317fec75" target={'_blank'} rel = 'noreferrer' className='r-line'>{uiText.links.view}</a>

            <a href="https://app.uniswap.org/#/swap?exactField=input&exactAmount=1&inputCurrency=eth&outputCurrency=0xd75f1f81b69bdd4df8efbb70e9c6f4609009d753&chain=mainnet" target={'_blank'} rel = 'noreferrer'className='r-line'>{uiText.links.swap}</a>

            <a href="/" target={'_blank'} rel = 'noreferrer'>
              <img src="/assets/icons/icon_copy.svg" alt="" /> 
              0xd75..9d753
            </a>
          </div>

          <div className={classes.state}>
            <ul>
              <li className='r-line'>
                <img src="/assets/icons/icon_dollar.svg" alt="" />
                <span>
                  <h4>$0.0000000</h4>
                  <p>{uiText.state.price}</p>
                </span>
              </li>

              <li className='r-line'>
                <img src="/assets/icons/icon_money.svg" alt="" />
                <span>
                  <h4>$0</h4>
                  <p>{uiText.state.marketap}</p>
                </span>
              </li>

              <li className='r-line'>
                <img src="/assets/icons/icon_fire.svg" alt="" />
                <span>
                  <h4>7.52B</h4>
                  <p>{uiText.state.tokens}</p>
                </span>
              </li>

              <li>
                <img src="/assets/icons/icon_coin.svg" alt="" />
                <span>
                  <h4>$1.26M</h4>
                  <p>{uiText.state.funds}</p>
                </span>
              </li>
            </ul>
          </div>
          
        </div>
        <Tab setTabId = {setTabId} tabId ={tabId } children = {
          <>
            {tabId === 0 && <TokenEvent/>}
            {tabId === 1 && <><About/> <Tokenomics/></>}
            {tabId === 2 && <Tiers/>}
          </>}
        />
        <Testmonials/>
      </div>
    </>
  );
};

export default Home;
