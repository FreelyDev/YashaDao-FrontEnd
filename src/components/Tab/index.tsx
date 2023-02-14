import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HashLink } from 'react-router-hash-link';

import multiText from './tab_lang.json';
import MultiLanguageContext from 'context/MultiLanguageContext';

const tabList = [
  {
    title : 'PROJECTS',
    img : '/assets/icons/icon_projects.svg',
    id : '#projects',
  },
  {
    title : 'ABOUT',
    img : '/assets/icons/icon_about.svg',
    id : '#about',
  },
  {
    title : 'TIERS',
    img : '/assets/icons/icon_tires.svg',
    id : '#tires',
  },
  {
    title : 'STAKING',
    img : '/assets/icons/icon_staking.svg',
    id : '/staking',
  },
  {
    title : 'DAO-VOTING',
    img : '/assets/icons/icon_hand.svg',
    link : 'https://snapshot.org/#/yashadao.eth',
  },
  {
    title : 'DOCS',
    img : '/assets/icons/icon_doc.svg',
    id : '#',
  },
  {
    title : 'FAQ',
    img : '/assets/icons/icon_faq.svg',
    id : '/staking',
  },
]

const features = [
  {
    id : 1,
    img : '/assets/imgs/features/logo-md.png',
    name : 'YASHA DAO'
  },
  {
    id : 2,
    img : '/assets/imgs/features/56.png',
    name : 'CLIFF TOKEN'
  },
  {
    id : 4,
    img : '/assets/imgs/features/55.png',
    name : 'GUZZLER'
  },
  {
    id : 5,
    img : '/assets/imgs/features/61.png',
    name : 'THE SCIENCE DAO'
  },
  {
    id : 3,
    img : '/assets/imgs/features/57.png',
    name : 'POCHI INU'
  },
  {
    id : 6,
    img : '/assets/imgs/features/59.jpeg',
    name : 'World Peace Token'
  },
  {
    id : 7,
    img : '/assets/imgs/features/66.png',
    name : 'NOGAS'
  }
]
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position : 'relative',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      
    },
  },
  
  tabList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor : '#0f0f24',
    gridArea : 'auto',
    gap : 50,
    position : 'sticky',
    top : 0,
    zIndex : 2,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      overflowX : 'auto',
      padding : '0 12px',
      justifyContent: 'flex-start',
      '&::-webkit-scrollbar':{
        display: 'none !important',
      },
    },
    '& .activeTab':{
      '&:after':{
        width : '100%',
      },
    },
  },

  tab: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : '1.25rem',
    paddingBottom : '1.25rem',
    position : 'relative',
    fontSize: '1rem',
    fontWeight: 700,
    color : '#636569',
    cursor : 'pointer',
    transition : 'all 0.3s ease',
    lineHeight : '1.5',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      whiteSpace : 'nowrap'
    },
    '&:after':{
      content: "''",
      position : 'absolute',
      background: 'linear-gradient(90deg,#8149bf 1.74%,#ef655d 100%)',
      height : 3,
      width : 0,
      bottom : 0,
      // opacity : 0,
      transition : 'all 0.3s ease',
    },
    '&:hover':{
      color : '#fff',
      '&:after':{
        width : '100%',
      },
    },
    '& img':{
      width : 20,
      marginRight : 10,
      [theme.breakpoints.down('xs')]: {
        display : 'none',
      },
    },
    
  },
  feature :{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'calc(100% - 40px)',
    position : 'relative',
    overflow : 'hidden',
    margin : 'auto',
    height : 120,
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
    borderRadius : 20,
    boxShadow: "0px 16px 60px #00000008",
    height : 'auto',
    margin : 0,

    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: '100%',
      padding: 0,
    },
  },
}));
const Tab = ({ children, setTabId, tabId }) => {
  const classes = useStyles();

  const elementRef = useRef(null);
  const autoscroll = (key : number) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' })
    setTabId(key)
  };
  

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
      <div className={classes.tabList}>
        {tabList.map((d, k)=>(
          <React.Fragment key= {k}>
          {d.id ? (
            d.id === '/staking' ? 
              <HashLink to={d.id} smooth>
                <div className={`${classes.tab} ${k === tabId ? 'activeTab' : ''}`} key = {k}>
                  <img src={d.img} alt="" />
                  {uiText[d.title]}
                </div>
              </HashLink>
              :
              <div className={`${classes.tab} ${k === tabId ? 'activeTab' : ''}`}  key = {k} onClick = {()=>autoscroll(k)}>
                <img src={d.img} alt="" />
                {uiText[d.title]}
              </div>
          ):
          <a href={d.link} target = {'_blank'} rel="noreferrer">
            <div className={classes.tab} key = {k}>
              <img src={d.img} alt="" />
              {uiText[d.title]}
            </div>
          </a>}
        </React.Fragment>
        ))}
        
      </div>

      <div className={`${classes.root}`}>
        <span className='scroll-id' id = 'scroll' ref = {elementRef}></span>
        <div className={classes.feature}>
        <div className={classes.feature_list}>
          {features.map((d, k)=>(
            <div className={classes.feature_item} key = {k}>
              <img src={d.img} alt="" className='avatar' />
              <span>
                <p><img src="/assets/imgs/features/hot.png" alt="" /> #{d.id}</p>
                <h4>{d.name}</h4>
              </span>
              
            </div>
          ))}
          {features.map((d, k)=>(
            <div className={classes.feature_item} key = {k}>
              <img src={d.img} alt="" className='avatar' />
              <span>
                <p><img src="/assets/imgs/features/hot.png" alt="" /> #{d.id}</p>
                <h4>{d.name}</h4>
              </span>
              
            </div>
          ))}
          </div>
        </div>

        <div className={`${classes.tabContent}`}>
          {children}
        </div>
      </div>
    </>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  setTabId: PropTypes.any,
  tabId: PropTypes.number,
};

export default Tab;
