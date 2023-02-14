import { useContext, useEffect, useRef, useState } from 'react';
import './style.scss';
import { HashLink } from 'react-router-hash-link';
import { truncateWalletString } from 'utils';
import MultiLanguageContext from 'context/MultiLanguageContext';
import ConnectModal from 'components/modal/connectModal/ConnectModal';
import AccountModal from 'components/modal/accountModal/AccountModal';
import { useHistory } from 'react-router';
import { useWeb3React } from '@web3-react/core';

const multiText = [
  {
    logo : 'YASHA',
    home : 'HOME',
    projects : 'PROJECTS',
    button : {
      connect : 'CONNECT WALLET',
      disconnect : 'DISCONNECT'
    }
  },
  {
    logo : '夜叉',
    home : '首页',
    projects : '项目',
    button : {
      connect : '连接钱包',
      disconnect : '断开钱包'
    }
  },
  {
    logo : 'YASHA',
    home : 'INICIO',
    projects : 'PROYECTOS',
    button : {
      connect : 'Conectar cartera',
      disconnect : 'Desconectar'
    }
  },
  {
    logo : 'YASHA',
    home : 'ACCUEIL',
    projects : 'PROJETS',
    button : {
      connect : 'Connecter portefeuille',
      disconnect : 'Déconnecter'
    }
  },
  {
    logo : 'YASHA',
    home : 'HOME',
    projects : 'प्रोजेक्ट्स',
    button : {
      connect : 'वॉलेट कनेक्ट करें',
      disconnect : 'वॉलेट डिस्कनेक्ट करें'
    }
  },
  {
    logo : 'YASHA',
    home : 'HOME',
    projects : 'PROJECTS',
    button : {
      connect : 'ウォレットを接続',
      disconnect : 'ウォレットを切断'
    }
  }

]

type MenuType = {
  menuOpen?: boolean;
  setMenuOpen?(flag: boolean): void;
};
export default function SideBar({ menuOpen, setMenuOpen }: MenuType) {

  const [loginStatus, setLoginStatus] = useState(false);
  const { connector, library, chainId, account, active } = useWeb3React();

  useEffect(() => {
      const isLoggedin = account && active && chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
      setLoginStatus(isLoggedin);
  }, [connector, library, account, active, chainId]);
  
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showAcountModal, setShowAcountModal] = useState(false);
  const [showNFT, setShowNFT] = useState(false);
  const [showLanguageList, setShowLanguageList] = useState(false);

  
  const { langType, setLangType } = useContext(MultiLanguageContext)
  const onChangeLanguage = (lang : string) => {
    setLangType(lang)
  }

  const [uiText, setUiText] = useState(multiText[0]);
  useEffect(() => {
    if(langType === 'en') setUiText(multiText[0]);
    if(langType === 'cn') setUiText(multiText[1]);
    if(langType === 'es') setUiText(multiText[2]);
    if(langType === 'fr') setUiText(multiText[3]);
    if(langType === 'hi') setUiText(multiText[4]);
    if(langType === 'ja') setUiText(multiText[5]);

  }, [langType]);


  const ref = useRef(null);

  
  const handleOutsideClick = (e) => {
    setShowNFT(false);
    setShowLanguageList(false);
  };

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handleOutsideClick(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);

  const history = useHistory()

  const gotoPage = (e:string) => {
    history.push(e)
    setShowNFT(false);
  };
  
  return (
    <>
      <div className="sideBar">

        <div className="navList">
          <ul className="menu">
            <li className="menu-item" onClick={() => setMenuOpen(false)}>
              <HashLink to="/">
                {uiText.home}
              </HashLink>
            </li>
            <li className="menu-item" onClick={() => setMenuOpen(false)}>
              <HashLink to="/?tab=projects">
              {uiText.projects}
              </HashLink>
            </li>
            <li className="menu-item">
              <div className="dropdown">
                <button className="dropdown-btn" onClick={()=>{setShowNFT(!showNFT);setShowLanguageList(false)}}>
                  NFT
                  <img src="/assets/icons/icon_arrow_down_01.svg" alt="" />
                </button>
              
                <div className={`dropdown-content ${showNFT ? "active-down" : ""}`} >
                  <ul className="list-menu" onClick={()=>{setShowLanguageList(false);  setMenuOpen(false); setShowNFT(false)}} ref={ref}>
                  <li className="list-menu__item list-menu__item--active" onClick={()=>{gotoPage('/nft')}}>
                      NFT Mint
                    </li>
                    <li className="list-menu__item" onClick={()=>{gotoPage('/staking')}}>
                      NFT Staking
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="menu-item">
              <div className="dropdown" ref={ref}>
                <button className="dropdown-btn" onClick={()=>setShowLanguageList(!showLanguageList)}>
                  {langType}
                  <img src="/assets/icons/icon_arrow_down_01.svg" alt="" />
                </button>
              
                <div className={`dropdown-content ${showLanguageList ? "active-down" : ""}`} >
                  <ul className="list-menu" onClick={()=>{setShowLanguageList(false);  setMenuOpen(false); setShowNFT(false)}}>
                    <li className="list-menu__item list-menu__item--active" onClick={()=>{onChangeLanguage('en')}}>
                      English
                    </li>
                    <li className="list-menu__item" onClick={()=>{onChangeLanguage('cn')}}>
                      Chinese
                    </li>
                    <li className="list-menu__item" onClick={()=>{onChangeLanguage('es')}}>
                      Spanish
                    </li>
                    <li className="list-menu__item" onClick={()=>{onChangeLanguage('fr')}}>
                      French
                    </li>
                    <li className="list-menu__item" onClick={()=>{onChangeLanguage('hi')}}>
                      Hindi
                    </li>

                    <li className="list-menu__item" onClick={()=>{onChangeLanguage('ja')}}>
                      Japanese
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <div className="connectBtn" onClick={() => !loginStatus ? setShowConnectModal(true) : setShowAcountModal(true)}>
            <img src="/assets/icons/icon_wallet.svg" alt="" />
            {loginStatus ? truncateWalletString(account) : uiText.button.connect}
          </div>
        </div>

      </div>
      <ConnectModal showConnectModal={showConnectModal} setShowConnectModal={setShowConnectModal} />
      <AccountModal showAccountModal={showAcountModal} setShowAccountModal={setShowAcountModal} />
    </>

  );
}
