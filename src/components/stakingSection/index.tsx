import { useEffect, useState } from 'react';
import './stakingSection.scss';
import StakingCard from 'components/stakingCard';
import { toast } from 'react-toastify';
import FilledButton from 'components/Buttons/FilledButton';
import { useWeb3React } from '@web3-react/core';
// import { currentNetwork } from 'utils';
// import { claimReward, getStakingEngineInfo, stakeNFTs, unstakeNFTs } from 'utils/contracts';
// import { NFTStakingEngineDetail } from 'utils/typs';

type LoadingType = {
    setIsLoading?(flag: boolean): void;
};

export default function StakingSection({ setIsLoading }: LoadingType) {

    const [imgCount, setImgCount] = useState(0);
    const onLoad = () => {
        setImgCount(imgCount + 1)
    }
    useEffect(() => {
        if (imgCount >= 1) {
            setTimeout(() => {
                setIsLoading(false)
            }, 1000);
        }
    }, [setIsLoading, imgCount]);
    const [loginStatus, setLoginStatus] = useState(false);
    const { connector, library, chainId, account, active } = useWeb3React();
  
    useEffect(() => {
        const isLoggedin = account && active && chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
        setLoginStatus(isLoggedin);
    }, [connector, library, account, active, chainId]);
    
    // ======  selected ID list ======== by XU 
    const [selectedCurrentNFTList, setSelectedCurrentNFTList] = useState([]);

    // ========= selected ID list =========  by XU
    const [selectedStakedNFTList_Staked, setSelectedStakedNFTList_Staked] = useState([]);

    const [isLoadedCurrentNFTList, setIsLoadedCurrentNFTList] = useState(false);
    const [isLoadedStakedNFTList, setIsLoadedStakedNFTList] = useState(false);

    useEffect(() => {
        if (loginStatus) {
            setIsLoadedCurrentNFTList(true);
            setIsLoadedStakedNFTList(true);
        }
    }, [loginStatus]);
    const stakeSelectedNFT = async () => {
        if (!loginStatus) {
            toast.error("Please connect wallet correctly!");
            return;
        }

        if (selectedCurrentNFTList.length <= 0) {
            toast.error("Selcted NFT count should be higher than 0");
            return;
        }

        const load_toast_id = toast.loading("Please wait for Staking...");
        try {
            const bSuccess = true// stakeFuction;
            if (bSuccess) {
                
            } else {
                toast.error("Staking Failed!");
            }
        } catch (error) {
            toast.error("Staking Failed!");
        }
        toast.dismiss(load_toast_id);
    }

    const unstakeSelectedNFT = async () => {
        if (!loginStatus) {
            toast.error("Please connect wallet correctly!");
            return;
        }

        let selectedStakedNFTList = [];
        

        if (selectedStakedNFTList.length <= 0) {
            toast.error("Selcted NFT count should be higher than 0");
            return;
        }

        const load_toast_id = toast.loading("Please wait for Unstaking...");
        try {
            const bSuccess = true// stakeFuction;
            if (bSuccess) {
                toast.success("Unstaking Success!");
                setTimeout(() => {
                    
                }, 2000);
            } else {
                toast.error("Unstaking Failed!");
            }
        } catch (error) {
            toast.error("Unstaking Failed!");
        }
        toast.dismiss(load_toast_id);
    }

    const handleClaim = async () => {
        if (!loginStatus) {
            toast.error("Please connect wallet correctly!");
            return;
        }
        const load_toast_id = toast.loading("Please wait for Claim Reward...");
        try {

            const bSuccess = true // claim function;
            if (bSuccess) {
                toast.success("Claiming Success!");
            } else {
                toast.error("Claiming Failed!");
            }
        } catch (error) {
            toast.error("Claiming Failed!");
        }
        toast.dismiss(load_toast_id);
    }

    return (
        <>
            <div className="seasonSection">
                <img src="/assets/staking_bg.png" alt="" className="back" onLoad={onLoad} />
                <div className="scroll" />
                <div className="seasonContent" >
                    {!loginStatus ?
                        <div className="wrapper" >
                            <div className="noneWallet" data-aos="fade-up">
                                <h1>Please connect wallet</h1>
                            </div>
                        </div> :
                        <>
                            <div className="wrapper" >
                                <div className="left">
                                    <div className="row">
                                        <p>Total Rewards:</p>
                                        <h5>{0} $YASHA</h5>
                                    </div>

                                    <div className="row">
                                        <p>Daily Rewards:</p>
                                        <h5>{0} $YASHA</h5>
                                    </div>
                                    <FilledButton
                                        label={'CLAIM'}
                                        disabled = {!loginStatus}
                                        handleClick = {handleClaim}
                                        icon = {<img src="/assets/icons/icon_coin.svg" alt="" />}
                                        iconPosition = 'start'
                                    />
                                </div>
                                <div className="right">

                                    <StakingCard
                                        nfts={[0, 1, 2, 3, 4, 5, 6]}
                                        dataLoaded={isLoadedCurrentNFTList}
                                        selectdNftIds={selectedCurrentNFTList}
                                        setSelectedNftIds={setSelectedCurrentNFTList}
                                        OnStake={stakeSelectedNFT}
                                    />
                                    <StakingCard

                                        nfts_staked ={[0, 1, 2, 3, 4, 5, 6]}
                                        dataLoaded={isLoadedStakedNFTList}
                                        isStaked

                                        selectdNftIds_Staked={selectedStakedNFTList_Staked}
                                        setSelectedNftIds_Staked={setSelectedStakedNFTList_Staked}
                                        OnUnStake = {unstakeSelectedNFT}
                                    />

                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}



