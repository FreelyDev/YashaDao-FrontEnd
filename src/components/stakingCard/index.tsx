import './stakingCard.scss';
import Gallery from 'components/gallery';
// import { BigNumber } from 'ethers';
import LoaderIndicator from 'components/Loader';

type NftBoxProps = {
    // nfts?: BigNumber[]
    nfts?: number[]

    // nfts_staked?: BigNumber[]
    nfts_staked?: number[]

    isStaked?: boolean
    dataLoaded?: boolean
    OnStake?: any
    OnUnStake?: any

    selectdNftIds?: string[]
    setSelectedNftIds?: (id: string[]) => void
    
    selectdNftIds_Staked?: string[]
    setSelectedNftIds_Staked?: (id: string[]) => void
    
    lastUpdated?: number;

};

export default function NftBox(
    { 
        nfts, 
        nfts_staked, 
        isStaked, 
        dataLoaded, 
        OnStake, 
        OnUnStake, 

        selectdNftIds, 
        setSelectedNftIds,

        selectdNftIds_Staked, 
        setSelectedNftIds_Staked,
        lastUpdated,

    }: NftBoxProps) {

    const handleSelect = (nftIds) => {
        setSelectedNftIds(selectdNftIds.concat(nftIds))
    }

    const handleDeselect = (nftIds) => {
        setSelectedNftIds(selectdNftIds.filter((nftId) => nftIds.indexOf(nftId) === -1))
    }

    const handleSelect_Staked = (nftIds) => {
        setSelectedNftIds_Staked(selectdNftIds_Staked.concat(nftIds))
    }

    const handleDeselect_Staked = (nftIds) => {
        setSelectedNftIds_Staked(selectdNftIds_Staked.filter((nftId) => nftIds.indexOf(nftId) === -1))
    }

    const handleStake = () => {
        console.log("IK")
        if(isStaked){
            OnUnStake()
            handleSelect_Staked(selectdNftIds_Staked)
            
        }
        else{
            OnStake()
            handleDeselect(selectdNftIds)
        }
        
    }

    return (
        <>
            <div className="item" data-aos="fade-right">

                <div className="itemHeader">
                    <h3>{`${isStaked ? `STAKED NFTs` : `HOLDING NFTs`}`}</h3>
                </div>
                {dataLoaded ?
                    <>
                        {isStaked ?
                        <>
                            <div className="itemContent">
                                <div className="nftViews">
                                    <Gallery
                                        nfts={nfts_staked || []}
                                        isStaked
                                        selectedIds={selectdNftIds_Staked}
                                        onSelect={(nftIds) => handleSelect_Staked(nftIds)}
                                        onDeselect={(nftIds) => handleDeselect_Staked(nftIds)}
                                        onUnstake = {() => { handleStake() }}
                                        selectedCount = {selectdNftIds_Staked.length || 0}
                                        lastUpdated = {lastUpdated + 86400}
                                    />
                                </div>
                            </div>
                        </>:
                        <>
                            <div className="itemContent">
                                <div className="nftViews">
                                    <Gallery
                                        nfts={nfts || []}
                                        selectedIds={selectdNftIds}
                                        onSelect={(nftIds) => handleSelect(nftIds)}
                                        selectedCount = {selectdNftIds.length || 0}
                                        onDeselect={(nftIds) => handleDeselect(nftIds)}
                                        onStake = {() => { handleStake() }}
                                    />
                                    
                                </div>
                            </div>
                            
                        </>
                        }
                    </> :
                    <div className="loadingPart">
                        <LoaderIndicator />
                        <h3>Loading Data</h3>
                    </div>
                }
            </div>
        </>
    )
}
