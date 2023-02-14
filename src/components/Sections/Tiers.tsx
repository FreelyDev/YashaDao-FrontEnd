import { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Masonry from 'react-masonry-css';
import SectionTitle from 'components/Widgets/SectionTitle';
import TierCard from 'components/Cards/TierCard';
import MultiLanguageContext from 'context/MultiLanguageContext';
interface TierType {
  img?: string;
  title?: string;
  subTitle?: string;
  tokenAmount? : number
  pool?:string
}
const tmpList : TierType[] = [
  {
    img : '/assets/imgs/tiers/nakakosho.png',
    title : 'NAKAKOSHO',
    subTitle : 'STABLEMAN',
    tokenAmount : 10000000,
    pool : 'SUBJECT TO AUDIT',
  },
  {
    img : '/assets/imgs/tiers/tomokosho.png',
    title : 'TOMOKOSHO',
    subTitle : 'ATTENDANT',
    tokenAmount : 25000000,
    pool : 'SUBJECT TO AUDIT',
  },
  {
    img : '/assets/imgs/tiers/koshogumi.png',
    title : 'KOSHOGUMI',
    subTitle : 'FIRST RANK CAVALRY',
    tokenAmount : 50000000,
    pool : 'SUBJECT TO AUDIT',
  },
  {
    img : '/assets/imgs/tiers/gokenin.png',
    title : 'GOKENIN',
    subTitle : 'CASTLE LORD',
    tokenAmount : 75000000,
    pool : 'SUBJECT TO AUDIT',
  },
  {
    img : '/assets/imgs/tiers/mujo-daimyo.png',
    title : 'MUJO DAIMYO',
    subTitle : 'LORD',
    tokenAmount : 100000000,
    pool : 'SUBJECT TO AUDIT',
  },
  {
    img : '/assets/imgs/tiers/kunimochi.png',
    title : 'KUNIMOCHI',
    subTitle : 'GOVERNOR',
    tokenAmount : 150000000,
    pool : 'SUBJECT TO AUDIT',
  },
  {
    img : '/assets/imgs/tiers/shogun.png',
    title : 'SHOGUN',
    subTitle : 'COMMANDER',
    tokenAmount : 500000000,
    pool : 'GUARANTEED',
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
      marginBottom : 50,
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
      flexDirection: 'column',
      width: '100%',
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
const Tiers = () => {
  const classes = useStyles();
  
  const [tiersList, setTiersList] = useState<any[]>([]);

  useEffect(() => {
    setTiersList(tmpList)
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1840: 3,
    1440: 3,
    1280: 3,
    768: 2,
    450: 1,
  };
  const { langType } = useContext(MultiLanguageContext)
  const [uiText, setUiText] = useState("ALLOCATION TIERS");

  useEffect(() => {
    const multiText = ["ALLOCATION TIERS", "分配层级", "NIVELES DE ASIGNACIÓN", "ECHELON D'ALLOCATION", "एलोकेशन टियर्स", "एलोकेशन टियर्स"]
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
        <SectionTitle title = {uiText} />
        <div className={classes.content}>

            <div className={classes.tabContent}>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className={classes.masonry}
                  columnClassName={classes.gridColumn}
                >
                  {tiersList.map((item, key) => (
                    <TierCard key={key}  item={item} onClick = {()=>{}} /> )
                  )}
                </Masonry>
            </div>
         
        </div>
      </div>
    </>
  );
};

export default Tiers;

