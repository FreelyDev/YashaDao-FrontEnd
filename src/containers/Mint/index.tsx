import FilledButton from 'components/Buttons/FilledButton';
import { useStyles } from './style';
import { useContext, useEffect, useState } from 'react';
import MultiLanguageContext from 'context/MultiLanguageContext';
import Testmonials from 'components/Sections/Testmonials';
import NFTBenifit from 'components/Sections/NFTBenifit';
import Faqs from 'components/Sections/Faqs';
import useAuth from 'hooks/useAuth';
import multiText from './mint_lang.json';
import { useWeb3React } from '@web3-react/core';

const Mint = () => {
  const classes = useStyles();

  const { login } = useAuth();

  const [loginStatus, setLoginStatus] = useState(false);
  const { connector, library, chainId, account, active } = useWeb3React();

  useEffect(() => {
      const isLoggedin = account && active && chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
      setLoginStatus(isLoggedin);
  }, [connector, library, account, active, chainId]);

    const { langType } = useContext(MultiLanguageContext)
  const [uiText, setUiText] = useState(multiText[0]);

  const [mintCount, setMintCount] = useState(1);

  useEffect(() => {
    if(langType === 'en') setUiText(multiText[0]);
    if(langType === 'cn') setUiText(multiText[1]);
    if(langType === 'es') setUiText(multiText[2]);
    if(langType === 'fr') setUiText(multiText[3]);
    if(langType === 'hi') setUiText(multiText[4]);
    if(langType === 'ja') setUiText(multiText[5]);

  }, [langType]);
  const decreaseHandle = () => {
    if (mintCount > 1) {
        setMintCount(mintCount - 1)
    }
  }
  const increaseHandle = () => {
      if (mintCount < 10) {
          setMintCount(mintCount + 1)
      }
  }
  const onMint = () => {
    
  }
  return (
    <>
      <div className={classes.root}>
        <div className={`${classes.content}`} style = {{backgroundImage: `url("/assets/imgs/hero-mint-bg.svg")`}}>
          <h1 data-aos="fade-up">{uiText.logo} <span>NFTS</span></h1>
          <p className='description' data-aos="fade-up">{uiText.desc}</p>
          <div className={classes.mint} data-aos="fade-up">
            <div className={classes.left}>
              <img src="/assets/imgs/nft/nft-hero.png" alt="" />
            </div>
            <div className={classes.right}>
              <div className="wrapper">
                
                <div className="top">
                  {loginStatus ? 
                  <p>{uiText.public}</p>:
                  <p style={{color : '#fde995'}}>{uiText.wallet_string}</p>}
                  <span>0.05 ETH Each</span>
                </div>
                <div className="state">
                  <div className="col">
                    <p>{uiText.collection}</p>
                    <h4>2,222</h4>
                  </div>
                  <div className="col">
                    <p>{uiText.minted}</p>
                    <h4><span>1,712</span>/2,222</h4>
                  </div>
                </div>

                <div className="mintCount mb-2">
                  <div className="btns">
                      <button
                          className="mintDec"
                          disabled={!loginStatus || mintCount === 1 }
                          onClick={decreaseHandle}
                      >
                          <p><i className="fas fa-minus"></i></p>
                      </button>
                      <span className="mintCountValue" style={{}}>{mintCount}</span>

                      <button
                          className="mintInc"
                          disabled={!loginStatus}
                          onClick={increaseHandle}
                      >
                          <p><i className="fas fa-plus"></i></p>
                      </button>
                  </div>
                  <FilledButton label={!loginStatus ? uiText.button.connect : uiText.button.disconnect} icon = {!loginStatus ? <img src="/assets/icons/icon_disconnect.svg" alt="" />:<img src="/assets/icons/icon_connected.svg" alt="" />} iconPosition = 'start' color='success' handleClick={()=>!loginStatus ?login(1): onMint() }/>

              </div>
              </div>

            </div>
          </div>



          
        </div>
        <NFTBenifit/>
        <Faqs/>
        <Testmonials/>
      </div>
    </>
  );
};

export default Mint;
