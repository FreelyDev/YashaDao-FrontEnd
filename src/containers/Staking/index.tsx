import { useStyles } from './style';
import { useContext, useEffect, useState } from 'react';
import MultiLanguageContext from 'context/MultiLanguageContext';
import Testmonials from 'components/Sections/Testmonials';
import StakingBenifit from 'components/Sections/StakingBenifit';
import Faqs from 'components/Sections/Faqs';
import multiText from './staking_lang.json';
import StakingSection from 'components/stakingSection';

const Staking = () => {
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
      <div className={classes.root}>
        <div className={`${classes.content}`} style = {{backgroundImage: `url("/assets/hero-bg.svg")`}}>
          {langType === 'ja' ?
          <h1 data-aos="fade-up"><span>YASHA</span> {uiText.title}</h1>:
          <h1 data-aos="fade-up">{uiText.title} <span>YASHA</span></h1>}
          <p data-aos="fade-up">{uiText.desc}</p>
          <StakingSection/>
        </div>
        <StakingBenifit/>
        <Faqs/>
        <Testmonials/>
      </div>
    </>
  );
};

export default Staking;
