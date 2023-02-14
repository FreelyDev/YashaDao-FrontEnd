import '@ethersproject/shims';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';
import { getContractObj } from '.';

export async function approveToken(chainId, provider, account, _limitAmount) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  const YASHAContract = getContractObj('YASHA', chainId, provider);

  const allowanceAmount = await YASHAContract.allowance(account, nftContract.address);
  const YASHADecimals = await YASHAContract.decimals();

  if (allowanceAmount.lt(ethers.utils.parseUnits(_limitAmount.toString(), YASHADecimals))) {
    const load_approve_toast_id = toast.loading(`Please wait, YASHA is approving now...`);
    try {
      var tx = await YASHAContract.approve(nftContract.address, ethers.constants.MaxUint256);
      await tx.wait(1);
    } catch (e) {
      console.log(e);
    }
    toast.dismiss(load_approve_toast_id);
  }

}

export async function mintFixed(chainId, provider, _tokenURI, _price, _royalty) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  const YASHAContract = getContractObj('YASHA', chainId, provider);
  try {
    const YASHADecimals = await YASHAContract.decimals();
    const tx = await nftContract.mintFixed(_tokenURI, YASHAContract.address, _royalty, ethers.utils.parseUnits(_price.toString(), YASHADecimals));
    await tx.wait(1);

    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function mintAuction(chainId, provider, _tokenURI, _minBidPrice, _startTime: Date, _endTime: Date, _royalty) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  const YASHAContract = getContractObj('YASHA', chainId, provider);
  const startUnixTimeStamp = Math.round(_startTime.getTime() / 1000);
  const endUnixTimeStamp = Math.round(_endTime.getTime() / 1000);
  try {
    const YASHADecimals = await YASHAContract.decimals();
    const tx = await nftContract.mintAuction(_tokenURI, YASHAContract.address, _royalty, ethers.utils.parseUnits(_minBidPrice.toString(), YASHADecimals), startUnixTimeStamp, endUnixTimeStamp);
    await tx.wait(1);

    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function mintUnlimitedAuction(chainId, provider, _tokenURI, _royalty) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  const YASHAContract = getContractObj('YASHA', chainId, provider);
  try {
    const tx = await nftContract.mintUnlimitedAuction(_tokenURI, YASHAContract.address, _royalty);
    await tx.wait(1);

    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function buy(chainId, provider, account, _tokenID, _price) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  try {
    await approveToken(chainId, provider, account, _price);
    const tx = await nftContract.buyWithToken(_tokenID);
    await tx.wait(1);

    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function sell(chainId, provider, _tokenID, _buyer) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  try {
    const tx = await nftContract.sell(_tokenID, _buyer);
    await tx.wait(1);

    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function bid(chainId, library, provider, account, _tokenID, _price) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  const YASHAContract = getContractObj('YASHA', chainId, provider);
  try {
    await approveToken(chainId, provider, account, _price);

    const YASHADecimals = await YASHAContract.decimals();
    const balanceYASHA = await YASHAContract.balanceOf(account);
    const bidTokenAmount = ethers.utils.parseUnits(_price.toString(), YASHADecimals)

    if (balanceYASHA.lt(bidTokenAmount)) return false;

    const load_bid_toast_id = toast.loading(`Plesae wait until send bid offer...`);
    const placeBidToNFT = await nftContract.bid(_tokenID, bidTokenAmount);
    await placeBidToNFT.wait(1);
    toast.dismiss(load_bid_toast_id);

    return true;
  } catch (e) {
    toast.dismiss();
    console.log(e);
    return false;
  }
}

export async function cancelBid(chainId, provider, _tokenID) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  try {
    const tx = await nftContract.cancelBid(_tokenID);
    await tx.wait(1);
    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function burn(chainId, provider, _tokenID) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  try {
    const tx = await nftContract.burn(_tokenID);
    await tx.wait(1);

    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function listFixed(chainId, provider, _tokenID, _price, _royalty) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  const YASHAContract = getContractObj('YASHA', chainId, provider);
  try {
    const YASHADecimals = await YASHAContract.decimals();
    const tx = await nftContract.listFixed(_tokenID, YASHAContract.address, _royalty, ethers.utils.parseUnits(_price.toString(), YASHADecimals));
    await tx.wait(1);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function listAuction(chainId, provider, _tokenID, _minBidPrice, _startTime, _endTime, _royalty) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  const YASHAContract = getContractObj('YASHA', chainId, provider);
  const startUnixTimeStamp = Math.round(_startTime.getTime() / 1000);
  const endUnixTimeStamp = Math.round(_endTime.getTime() / 1000);
  try {
    const YASHADecimals = await YASHAContract.decimals();
    const tx = await nftContract.listAuction(_tokenID, YASHAContract.address, _royalty, ethers.utils.parseUnits(_minBidPrice.toString(), YASHADecimals), startUnixTimeStamp, endUnixTimeStamp);
    await tx.wait(1);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function listUnlimitedAuction(chainId, provider, _tokenID, _royalty) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  const YASHAContract = getContractObj('YASHA', chainId, provider);
  try {
    const tx = await nftContract.listUnlimitedAuction(_tokenID, YASHAContract.address, _royalty);
    await tx.wait(1);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function claimAuction(chainId, provider, _tokenID) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  try {
    const tx = await nftContract.claimAuction(_tokenID);
    await tx.wait(1);

    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function disableListing(chainId, provider, _tokenID) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  try {
    const tx = await nftContract.disableListing(_tokenID);
    await tx.wait(1);

    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}


export async function getFeePercent(chainId, provider) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  try {
    const feePercent = await nftContract.feePercent();
    return parseFloat(feePercent.toString());
  } catch (e) {
    console.log(e);
    return 0;
  }
}

export async function getBalanceOfYASHA(chainId, provider, account) {
  const YASHAContract = getContractObj('YASHA', chainId, provider);
  try {
    const YASHADecimals = await YASHAContract.decimals();
    const balanceYASHA = await YASHAContract.balanceOf(account);
    return parseFloat(ethers.utils.formatUnits(balanceYASHA, YASHADecimals));
  } catch (e) {
    console.log(e);
    return 0;
  }
}

export async function getBalanceOfBNB(library, account) {
  try {
    const balanceBNB = await library.getBalance(account);
    return parseFloat(ethers.utils.formatEther(balanceBNB));
  } catch (e) {
    console.log(e);
    return 0;
  }
}

export async function getAllowedMint(chainId, provider, account) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  try {
    const enablePublic = await nftContract.enablePublicMint();
    if (enablePublic === true) return true;
    const enableUser = await nftContract.mapUserEnableForMint(account);
    return enableUser
  } catch (e) {
    console.log(e);
    return false;
  }
}
