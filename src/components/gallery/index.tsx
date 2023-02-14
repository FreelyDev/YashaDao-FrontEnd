import './gallery.scss'
import { useEffect, useRef, useState } from "react";
import useDraggableScroll from 'use-draggable-scroll';
import BtnTimer from 'components/Timer/BtnTimer';
import LoaderIndicator from 'components/Loader';
import { useWeb3React } from '@web3-react/core';

type GalleryProps = {
    nfts: number[]
    // nfts: BigNumber[]
    isStaked ?:boolean
    selectedIds: string[]
    label?: string
    onSelect(nftIds: string[]): void
    onDeselect(nftIds: string[]): void
    onUnstake ?:any
    onStake ?:any
    selectedCount ?:number
    lastUpdated ?: number
};

export default function Gallery({ nfts, selectedIds, isStaked, onStake, onSelect, onDeselect, onUnstake, selectedCount, lastUpdated }: GalleryProps): JSX.Element {
    const ref = useRef(null);
    const { onMouseDown } = useDraggableScroll(ref, { direction: 'horizontal' });
    const [loadedCount, SetLoadedCount] = useState(0)
    const [allImgLoaded, setAllImgLoaded] = useState(false)
    const isAllSelected = nfts.length > 0 && nfts.filter((nft) => selectedIds.indexOf(nft.toString()) === -1).length === 0

    const handleLoading = function () {
        SetLoadedCount(loadedCount + 1)
        
    };
    useEffect(() => {

        if (loadedCount + 1 === nfts.length) {
            setAllImgLoaded(true)
        }

    }, [loadedCount, nfts.length]);

    const handleClick = (isSelected, nftId: string) => {
        if (isSelected) {
            onDeselect([nftId])
        } else {
            onSelect([nftId])
        }
    }

    const handleAllClick = () => {
        const tokenIds = nfts.map((nft) => nft.toString())
        if (isAllSelected) {
            onDeselect(tokenIds)
        } else {
            onSelect(tokenIds)
        }
    }
    const [isAvailable, setIsAvailable] = useState(false)

    const [loginStatus, setLoginStatus] = useState(false);
    const { connector, library, chainId, account, active } = useWeb3React();
  
    useEffect(() => {
        const isLoggedin = account && active && chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
        setLoginStatus(isLoggedin);
    }, [connector, library, account, active, chainId]);

    useEffect(() => {
        let myInterval = setInterval(() => {
            const currentDate: any = Date.now()/1000;

            if (currentDate < lastUpdated) {
                setIsAvailable(false)
            }
            else{
                setIsAvailable(true)
            }

        }, 0)
        return () => {
            clearInterval(myInterval);
        };

    }, [loginStatus, lastUpdated, setIsAvailable]);

    return (
        <div className="gallery">
            <div className="top">
                <p>{`${nfts?.length || 0} NFTS ${isStaked ? `STAKED IN POOL` : 'IN YOUR WALLET'}`}</p>
                <div className="row">
                <button
                    disabled={!isAllSelected && nfts.length === 0}
                    onClick={handleAllClick}
                    className = 'selectBtn'
                >{!isAllSelected ? 'Select All' : 'UnSelect All'}</button>

                {isStaked ?
                    <button
                        disabled={selectedCount === 0 || !isAvailable}
                        onClick={onStake}
                        className = 'stakeBtn'
                    >{isAvailable ? `Unstake ${selectedCount || ''}` : <BtnTimer deadLine={lastUpdated}/>}</button>:
                    <button
                        disabled={selectedCount === 0 || !isAvailable}
                        onClick={onUnstake}
                        className = 'stakeBtn'
                    >{isAvailable ? `Stake ${selectedCount || ''}` : <BtnTimer deadLine={lastUpdated}/>}</button>
                }   
                </div>
                
            </div>
            
            <div className="imgContent">
                {nfts.length === 0?
                    <div className="noNFT">
                        <p>No NFTs</p>
                    </div>
                    :
                    <div className={!allImgLoaded ? "img_loader" : "img_loader imgDone"}>
                        <LoaderIndicator />
                    </div>
                }

                <div className={!allImgLoaded ? "slideView" : "slideView done"} onMouseDown={onMouseDown} ref={ref}>
                    <div className="slideList">
                        {nfts.map((nft) => {
                            const isSelected = selectedIds.indexOf(nft.toString()) > -1;
                            const imgUrl = `/assets/imgs/staking/0${nft}.png`
                            // const imgUrl = `https:// /${nft + 1}.jpg`
                            return <div className={isSelected ? "sideImg selected" : "sideImg"}
                                onClick={() => { handleClick(isSelected, nft.toString()) }}
                                key={`nft${nft.toString()}`}
                            >
                                <div className="imgContainer">
                                    <img src={imgUrl} alt="" onLoad={handleLoading} />
                                    <p className="tokenID"># {nft.toString()}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

