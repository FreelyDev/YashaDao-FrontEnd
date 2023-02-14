import { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Masonry from 'react-masonry-css';
import TokenCard from 'components/Cards/TokenCard';
import SectionTitle from 'components/Widgets/SectionTitle';
import FilledButton from 'components/Buttons/FilledButton';
import { useHistory } from 'react-router-dom';
import MultiLanguageContext from 'context/MultiLanguageContext';
import multiText from './lang/token_event_lang.json';
interface TokenType {
  title?: string;
  img?: string;
  lauchType? : string;
  desription?: string;
  totalRaised?: number;
  soft_hard?: string;
  start?: number;
}
const tmpList : TokenType[] = [
  {
    title : 'Jeet Fighter',
    img : '/assets/imgs/tokens/74.jpeg',
    lauchType : 'FAIR',
    desription : 'The most optimal game ever made.',
    totalRaised : 0,
    soft_hard : '',
    start : 0,
  },
  {
    title : 'Marble Prix',
    img : '/assets/imgs/tokens/71.png',
    lauchType : 'STEALTH',
    desription : 'Ecosystem and project to allow multi dimentional races like pure blockchain based races, as well as live races on inn...',
    totalRaised : 0,
    soft_hard : '40.0 ETH/50.0 ETH',
    start : 1667476800,
  },
  {
    title : 'NOGAS',
    img : '/assets/imgs/tokens/66.png',
    lauchType : 'STEALTH',
    desription : 'Simply to evolve the way cryptocurrencies are traded. By seamlessly connecting users to the utility through our dapps...',
    totalRaised : 46.0,
    soft_hard : '40.0 ETH/60.0 ETH',
    start : 1660186800,
  },
  {
    title : 'GATS TOKEN',
    img : '/assets/imgs/tokens/67.jpeg',
    lauchType : 'STEALTH',
    desription : '$PIECE is focused on artistic development to empower the creativity in individuals and collectives while allowing hol...',
    totalRaised : 25.0,
    soft_hard : '25.0 ETH/25.0 ETH',
    start : 1654149600,
  },
  {
    title : 'FLASHTOOLS',
    img : '/assets/imgs/tokens/60.png',
    lauchType : 'STEALTH',
    desription : 'A complete suite of customized NFT trading tools. Flash Tools levels the playing field between insiders and average t...',
    totalRaised : 0,
    soft_hard : '30.0 ETH/70.0 ETH',
    start : 1660640400,
  },
  {
    title : 'WORLD PEACE TOKEN',
    img : '/assets/imgs/tokens/59.jpeg',
    lauchType : 'FAIR',
    desription : 'A community led charity project with the goal of bringing immediate and direct funding to those in the most desperate...',
    totalRaised : 107.25,
    soft_hard : '75.0 ETH/120.0 ETH',
    start : 1645848900,
  },
  {
    title : 'THE SCIENCE DAO',
    img : '/assets/imgs/tokens/61.png',
    lauchType : 'STEALTH',
    desription : 'A decentralized think tank in which inventors, creatives, and institutions can come together to faster growth and inc...',
    totalRaised : 0,
    soft_hard : '',
    start : 1644274800,
  },
  {
    title : 'POCHI',
    img : '/assets/imgs/tokens/57.png',
    lauchType : 'FAIR',
    desription : 'Pochi pets introduce NFT augmentation such as growth, nourishment and breeding. Pochi NFTs will also be integrated in...',
    totalRaised : 32.0,
    soft_hard : '32.0 ETH/32.0 ETH',
    start : 1643140860,
  },
  {
    title : 'CLIFF TOKEN',
    img : '/assets/imgs/tokens/56.png',
    lauchType : 'STEALTH',
    desription : 'An innovative project backed by a vast community. Cliff utilizes a true burn mechanism, which directly increases the ...',
    totalRaised : 32.0,
    soft_hard : '32.0 ETH/32.0 ETH',
    start : 1639599120,
  },
  {
    title : 'Jeet Fighter',
    img : '/assets/imgs/tokens/55.png',
    lauchType : 'FAIR',
    desription : 'A game hub for blockchain integrated games. Guzzler is the official creator of customizable and operable NFTs within ...',
    totalRaised : 72.0,
    soft_hard : '72.0 ETH/72.0 ETH',
    start : 1638100800,
  },
  
]

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
    flexDirection: 'column',
    width: '90%',
    maxWidth : 1320,
    margin : 'auto',
  },


  tab_list: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom : 70,
    gridArea : 'auto',
    gap : 20,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom : 50,
      '& button':{
        padding : 0,
        background : 'none',
        boxShadow : 'none',
        '& img':{
          display: 'none',
        }

      },
    },
    
  },

  feature_list:{
    display: 'flex',
    alignItems: 'center',
    position : 'absolute',
    left : 0,
    animation: 'marquee 20s linear infinite',
    '&:hover':{
      animationPlayState: 'paused',
    },
  },
  feature_item:{
    background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
    border: '1px solid',
    borderImageSource: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%)',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding : '5px 20px',
    marginRight : 20,
    cursor : 'pointer',
    
    '& .avatar':{
      width: '3.25rem',
      height: '3.25rem',
      border: '2px solid',
      background: 'linear-gradient(#141422,#141422) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
      borderImageSource: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,.03) 100%)',
      padding: '0.5rem',
      borderRadius: '50%',
      marginRight : 10,
    },
    '& span':{
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'center',
      flexDirection: 'column',
      width : 140,
      
      '& p':{
        width: '100%',
        color : '#636569',
      },
      '& h4':{
        width: '100%',
        color : '#fff',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        textTransform: 'uppercase',

      }
    }
  },
  
  tabContent: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight : '60vh',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
    },
    '& .desc':{
      marginTop : '3rem',
      marginBottom : '1rem',
      color : '#636569'
    }
  },

  masonry: {
    display: 'flex',
    width: '100%',
    '@media screen and (max-width: 768px) and (orientation: portrait)': {
      flexDirection: 'column',
      width: '100%',
    },
  },
  gridColumn: {
    margin: theme.spacing(0, 1),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100% !important',
      margin: theme.spacing(0, 0),
    },
  },
}));
const TokenEvent = () => {
  const classes = useStyles();

  const [tabId, setTabId] = useState(2);

  
  const [openList, setOpenList] = useState<any[]>([]);

  const [upcomingList, setUpcomingList] = useState<any[]>([]);

  const [closedList, setClosedList] = useState<any[]>([]);

  useEffect(() => {
    setClosedList(tmpList)
    setOpenList([])
    setUpcomingList([])
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1840: 3,
    1440: 3,
    1280: 3,
    768: 2,
    450: 1,
  };
  const nav = useHistory()
  const onClickItem = (id : number)=>{
    nav.push(`/products/${id}`)
  }

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
        <SectionTitle title = {uiText.title} />

        <div className={classes.content}>
          <div className={classes.tab_list}>
            <FilledButton label={`${uiText.OPEN}(${openList.length})`} icon = {<><img src="/assets/icons/icon_tag.svg" alt="" /></>} iconPosition = 'start' color={tabId === 0 ? 'primary' : 'grey'} handleClick = {()=>setTabId(0)}/>

            <FilledButton label={`${uiText.UPCOMING}(${upcomingList.length})`} icon = {<><img src="/assets/icons/icon_tag.svg" alt="" /></>} iconPosition = 'start' color={tabId === 1 ? 'primary' : 'grey'} handleClick = {()=>setTabId(1)}/>

            <FilledButton label={`${uiText.CLOSED}(${closedList.length})`} icon = {<><img src="/assets/icons/icon_tag.svg" alt="" /></>} iconPosition = 'start' color={tabId === 2? 'primary' : 'grey'} handleClick = {()=>setTabId(2)}/>
          </div>

          {tabId === 0 &&
            <div className={classes.tabContent}>
              {openList.length > 0 ?
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className={classes.masonry}
                  columnClassName={classes.gridColumn}
                >
                  {openList.map((item, key) => (
                    <TokenCard key={key}  item={item} onClick = {()=>{onClickItem(key)}} /> )
                  )}
                </Masonry>:
                <>
                <img src="/assets/imgs/upcoming.svg" alt="" />
                <p className='desc'>There are no open TGEs to display!</p>
                </>
              }
            </div>
          }
          {tabId === 1 &&
            <div className={classes.tabContent}>
              {upcomingList.length > 0 ?
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className={classes.masonry}
                  columnClassName={classes.gridColumn}
                >
                  {upcomingList.map((item, key) => (
                    <TokenCard key={key}  item={item} onClick = {()=>{}} /> )
                  )}
                </Masonry>:
                <>
                <img src="/assets/imgs/upcoming.svg" alt="" />
                <p className='desc'>There are no upcoming TGEs to display!</p>
                </>
              }
            </div>
          }
          {tabId === 2 &&
            <div className={classes.tabContent}>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className={classes.masonry}
                columnClassName={classes.gridColumn}
              >
                {closedList.map((item, key) => (
                  <TokenCard key={key}  item={item} onClick = {()=>{onClickItem(key)}} /> )
                )}
              </Masonry>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default TokenEvent;
