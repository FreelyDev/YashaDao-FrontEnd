import { useStyles } from './style';
import { useContext, useEffect, useState } from 'react';
import MultiLanguageContext from 'context/MultiLanguageContext';

import { useHistory } from 'react-router-dom';
import Faqs from 'components/Sections/Faqs';
import Loader from 'components/Loader/Loader';
import multiText from './project_lang.json';


const tmpList = [
  {
    title : 'Jeet Fighter',
    img : '/assets/imgs/tokens/74.jpeg',
    lauchType : 'FAIR',
    desription : 'The most optimal game ever made.',
    tokens : '+10,000,000',
    users : 0,
    ends : '',
    access : 'SUBJECT TO REVIEW',
    totalRaised : 0,
    soft : '',
    hard : '',
    TGE_start : '',
    TGE_ends : '',
    token : 'JEET FIGHTER',
    type : 'ERC20',
    total_supply : '10,000,000',
    launch : 'TBA',
    start : 0,
  },
  {
    title : 'MARBLE PRIX',
    img : '/assets/imgs/tokens/71.png',
    lauchType : 'STEALTH',
    desription : 'Ecosystem and project to allow multi dimentional races like pure blockchain based races, as well as live races on innovative race tracks operated based on UNIX clock timing and relayer contract amalgamation. Participate, bet, have fun and win',
    tokens : '+10,000,000',
    users : 160,
    ends : 'Nov 8, 2022, 01:00 AM',
    access : 'SUBJECT TO REVIEW',
    totalRaised : 0,
    soft : '40.0 ETH',
    hard : '50.0 ETH',
    TGE_start : 'NOV 3, 2022, 12:00 AM',
    TGE_ends : 'NOV 8, 2022, 01:00 AM',
    token : 'MARBLE PRIX',
    type : 'ERC20',
    total_supply : '10,000,000',
    launch : 'NOV 15, 2022, 01:00 AM',
    start : 1667476800,
  },
  {
    title : 'NOGAS',
    img : '/assets/imgs/tokens/66.png',
    lauchType : 'STEALTH',
    desription : 'Simply to evolve the way cryptocurrencies are traded. By seamlessly connecting users to the utility through our dapps, we make these tools accessible, opening up infinite possibilities for experienced traders and removing the barrier for entry among begin',
    tokens : '+10,000,000',
    users : 194,
    ends : 'Aug 13, 2022, 03:00 AM',
    access : 'SUBJECT TO REVIEW',
    totalRaised : 46.0,
    soft : '40.0 ETH',
    hard : '60.0 ETH',
    TGE_start : 'AUG 11, 2022, 03:00 AM',
    TGE_ends : 'AUG 13, 2022, 03:00 AM',
    token : 'NOGAS',
    type : 'ERC20',
    total_supply : '10,000,000',
    launch : 'AUG 18, 2022, 12:00 AM',
    start : 1660186800,
  },
  {
    title : 'GATS TOKEN',
    img : '/assets/imgs/tokens/67.jpeg',
    lauchType : 'STEALTH',
    desription : '$PIECE is focused on artistic development to empower the creativity in individuals and collectives while allowing holders to govern, vote on, and contribute to the creation of the arts.',
    tokens : '+10,000,000',
    users : 181,
    ends : 'Jun 2, 2022, 07:00 AM',
    access : 'SUBJECT TO REVIEW',
    totalRaised : 25.0,
    soft : '25.0 ETH',
    hard : '25.0 ETH',
    TGE_start : 'JUN 2, 2022, 06:00 AM',
    TGE_ends : 'JUN 2, 2022, 07:00 AM',
    token : 'GATS TOKEN',
    type : 'ERC20',
    total_supply : '10,000,000',
    launch : 'JUL 2, 2022, 12:00 AM',
    start : 1654149600,
  },
  {
    title : 'FLASHTOOLS',
    img : '/assets/imgs/tokens/60.png',
    lauchType : 'STEALTH',
    desription : 'A complete suite of customized NFT trading tools. Flash Tools levels the playing field between insiders and average traders in the NFT space.',
    tokens : '+10,000,000',
    yasha : '10,000,000',
    users : 185,
    ends : 'Aug 19, 2022, 09:00 AM',
    access : 'SUBJECT TO REVIEW',
    totalRaised : 0,
    soft : '30.0 ETH',
    hard : '70.0 ETH',
    TGE_start : 'AUG 16, 2022, 09:00 AM',
    TGE_ends : 'AUG 19, 2022, 09:00 AM',
    token : 'FLASHTOOLS',
    type : 'ERC20',
    total_supply : '10,000,000',
    launch : 'SEP 21, 2022, 12:00 AM',
    start : 1660640400,
  },
  {
    title : 'WORLD PEACE TOKEN',
    img : '/assets/imgs/tokens/59.jpeg',
    lauchType : 'FAIR',
    desription : 'A community led charity project with the goal of bringing immediate and direct funding to those in the most desperate need around the world.',
    tokens : '+10,000,000',
    nft : 1,
    users : 707,
    ends : 'Feb 28, 2022, 04:00 PM',
    access : 'SUBJECT TO REVIEW',
    totalRaised : 107.25,
    soft : '75.0 ETH',
    hard : '120.0 ETH',
    TGE_start : 'FEB 26, 2022, 04:15 AM',
    TGE_ends : 'FEB 28, 2022, 04:00 PM',
    token : 'WORLD PEACE TOKEN',
    type : 'ERC20',
    total_supply : '10,000,000',
    launch : 'MAR 3, 2022, 01:00 PM',
    start : 1645848900,
  },
  {
    title : 'THE SCIENCE DAO',
    img : '/assets/imgs/tokens/61.png',
    lauchType : 'STEALTH',
    desription : 'A decentralized think tank in which inventors, creatives, and institutions can come together to faster growth and incubate emerging technology',
    tokens : '+10,000,000',
    users : 949,
    ends : 'Feb 14, 2022, 07:00 AM',
    access : 'SUBJECT TO REVIEW',
    totalRaised : 0,
    soft : '',
    hard : '',
    TGE_start : 'FEB 7, 2022, 11:00 PM',
    TGE_ends : 'FEB 14, 2022, 07:00 AM',
    token : 'THE SCIENCE DAO',
    type : 'ERC20',
    total_supply : '10,000,000',
    launch : 'MAY 6, 2022, 12:32 AM',
    start : 1644274800,
  },
  {
    title : 'POCHI',
    img : '/assets/imgs/tokens/57.png',
    lauchType : 'FAIR',
    desription : 'Pochi pets introduce NFT augmentation such as growth, nourishment and breeding. Pochi NFTs will also be integrated into the metaverse.',
    tokens : '+10,000,000',
    bear : 1,
    users : 706,
    ends : 'Jan 27, 2022, 08:01 PM',
    access : 'SUBJECT TO REVIEW',
    totalRaised : 32.0,
    soft : '32.0 ETH',
    hard : '32.0 ETH',
    TGE_start : 'JAN 25, 2022, 08:01 PM',
    TGE_ends : 'JAN 27, 2022, 08:01 PM',
    token : 'POCHI',
    type : 'ERC20',
    total_supply : '10,000,000',
    launch : 'JAN 25, 2022, 01:00 PM',
    start : 1643140860,
  },
  {
    title : 'CLIFF TOKEN',
    img : '/assets/imgs/tokens/56.png',
    lauchType : 'STEALTH',
    desription : 'An innovative project backed by a vast community. Cliff utilizes a true burn mechanism, which directly increases the floor price of each token over time.',
    tokens : '+10,000,000',
    users : 244,
    ends : 'Dec 18, 2021, 08:12 PM',
    access : 'SUBJECT TO REVIEW',
    totalRaised : 32.0,
    soft : '32.0 ETH',
    hard : '32.0 ETH',
    TGE_start : 'DEC 15, 2021, 08:12 PM',
    TGE_ends : 'DEC 18, 2021, 08:12 PM',
    token : 'CLIFF TOKEN',
    type : 'ERC20',
    total_supply : '12,000,000',
    launch : 'DEC 15, 2021, 01:00 PM',
    start : 1639599120,
  },
  {
    title : 'Jeet Fighter',
    img : '/assets/imgs/tokens/55.png',
    lauchType : 'FAIR',
    desription : 'A game hub for blockchain integrated games. Guzzler is the official creator of customizable and operable NFTs within the metaverse.',
    tokens : '+24,000,000',
    users : 142,
    ends : 'Nov 28, 2021, 01:00 PM',
    access : 'SUBJECT TO REVIEW',
    totalRaised : 72.0,
    soft : '72.0 ETH',
    hard : '72.0 ETH',
    TGE_start : 'NOV 28, 2021, 12:00 PM',
    TGE_ends : 'NOV 28, 2021, 01:00 PM',
    token : 'GUZZLER',
    type : 'ERC20',
    total_supply : '24,000,000',
    launch : 'JAN 1, 1970, 08:00 AM',
    start : 1638100800,
  },
  
]


const ProductDetail = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
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

  const [item, setItem] = useState(tmpList[0]);
  const navigation = useHistory();
  useEffect(() => {
    const id = navigation.location.pathname.split('/')[2]
    setItem(tmpList[id])
  }, [navigation.location.pathname]);

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, []);
  return (
    <>
      <div className={classes.root}>
        <div className={`${classes.content}`} style = {{backgroundImage: `url("/assets/hero-bg.svg")`}}>
          {isLoading ? <Loader/>:
          <div className={classes.wrapper}>
            <div className={classes.left}>
              <div className={classes.type}>
                <span className='closed'>CLOSED</span>
                <span className={item?.lauchType.toLocaleLowerCase()}>{uiText[item?.lauchType]}</span>
              </div>
              <p className='regis_str'>{uiText.register}</p>
              <div className="line"></div>
              <h3><img src="/assets/icons/icon_star.svg" alt="" /> {uiText.REQUIREMENTS}</h3>
              <div className={classes.row}>
                <p>{uiText.TOKENS}:</p>
                <h5>+10,000,000</h5>
              </div>
              {item?.yasha && 
                <>
                <br/>
                <div className={classes.row}>
                  <p>YASHA:</p>
                  <h5>item?.yasha</h5>
                </div>
                </>
                
              }

              {item?.nft && 
                <>
                <br/>
                <div className={classes.row}>
                  <p>SALMON NFT:</p>
                  <h5>{item?.nft}</h5>
                </div>
                </>
              }

              {item?.bear && 
                <>
                <br/>
                <div className={classes.row}>
                  <p>BEAR NFT:</p>
                  <h5>{item?.bear}</h5>
                </div>
                </>
              }

              {item?.users !== 0 &&
                <>
                  <div className="line"></div>
                  <div className="progress-part">
                    <div className="top"><p>{uiText.Progress} - <img src="/assets/icons/icon_users.svg" alt="" /><span>({item?.users})</span></p> <p>100%</p></div>
                    <div className="progress-div">
                      <div className="progress" style={{ "--progress-width": `100%`, width : '100%' } as React.CSSProperties}></div>
                    </div>
                    <div className="date"><p>{uiText.Ends} : {item?.ends}</p></div>
                  </div>
                </>
              }

              <div className="line"></div>
              <h6>{uiText.having.split(uiText.link)[0]} <a href="http://t.me/yasha_dao_official" target={'_blank'} rel="noreferrer">{uiText.link}</a>{uiText.having.split(uiText.link)[1]}</h6>
            </div>

          <div className={classes.right}>
            <div className={classes.top}>
              <img src={item?.img} alt="" />
              <div>
                <h5>{item?.title}</h5>
                <h6>$-----</h6>
              </div>
            </div>
            <p className={classes.desription}>{item?.desription}</p>
            <div className="line"></div>
            <div className="links">
              <a href="/" target={'_blank'} rel="noreferrer">
                <img src="/assets/icons/icon_instagram_01.svg" alt="" />
              </a>
              <a href="/" target={'_blank'} rel="noreferrer">
                <img src="/assets/icons/icon_telegram_02.svg" alt="" />
              </a>

              
              <a href="/" target={'_blank'} rel="noreferrer">
                <img src="/assets/icons/icon_global.svg" alt="" />
              </a>

              <a href="/" target={'_blank'} rel="noreferrer">
                <img src="/assets/icons/icon_twitter_01.svg" alt="" />
              </a>
            </div>
            
            <h2><img src="/assets/icons/icon_pool.svg" alt="" /> {uiText.pool}</h2>
            <ul>
              <li><p>{uiText.access}:</p>   <h5>{item?.access}</h5></li>
              <li><p>{uiText.total_raised}:</p>   <h5>{item?.totalRaised === 0 ? "N/A" : `${item?.totalRaised.toFixed(2)} ETH`}</h5></li>
              <li><p>{uiText.soft}:</p>   <h5>{item?.soft === '' ? "N/A" : item?.soft}</h5></li>
              <li><p>{uiText.hard}:</p>   <h5>{item?.hard === '' ? "N/A" : item?.soft}</h5></li>
              <li><p>{uiText.start}</p>   <h5>{item?.TGE_start === '' ? "N/A" : item?.TGE_start}</h5></li>
              <li><p>{uiText.TGE_ends}:</p>   <h5>{item?.TGE_ends === '' ? "N/A" : item?.TGE_ends}</h5></li>

            </ul>

            <h2><img src="/assets/icons/icon_circles.svg" alt="" /> {uiText.token}</h2>

            <ul>
              <li><p>{uiText.token}:</p>   <h5>J{item?.token}</h5></li>
              <li><p>{uiText.type}:</p>   <h5>{item?.type}</h5></li>
              <li><p>{uiText.supply}:</p>   <h5>{item?.total_supply}</h5></li>
              <li><p>{uiText.launch_on}:</p>   <h5>{item?.launch}</h5></li>
            </ul>
          </div>
          </div>}
        </div>

        <Faqs/>
      </div>
    </>
  );
};

export default ProductDetail;
