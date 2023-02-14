import { useEffect, useState } from 'react';
import { baseApiUrl } from 'utils';

/* eslint-disable camelcase */

export interface NFTList {
  nftList: NFTObjectData[];
  totalCount: number;
}

export interface NFTObjectData {
  tokenID?: number;

  name?: string;
  description?: string;
  assetUrl?: string;
  assetType?: string;
  bannerImage?: string;

  nftType?: number;
  price?: number;
  minBidPrice?: number;
  startTime?: number;
  endTime?: number;

  mintTransactionHash?: string;
  updatedAt?: number;
  createdAt?: number;
  initialCreatorAddress?: string;
  ownerAddress?: string;
  royalty?: number;

  voteCount?: number;
  listed?: boolean;
  attributes?: [];
  category?: [];

  approved?: boolean;
  verified?: boolean;
}

export interface NFTUser {
  walletAddress?: string;

  displayName?: string;
  customUrl?: string;
  userBio?: string;
  userAvatarUrl?: string;
  userBackgroupUrl?: string;

  socialPortfolioUrl?: string;
  socialTwitterUrl?: string;
  socialVoyrUrl?: string;
  socialInstagramUrl?: string;
  socialYoutubeUrl?: string;

  accountCreatedAt?: Date;
  updatedAt?: Date;
  banned?: boolean;
  verified?: boolean;
}

export interface NFTEvent {
  doneOn?: number;
  eventType?: number;
  nftIDSold?: number;
  transactionHash?: string;

  minter?: string;
  nftType?: string;
  royalty?: string;
  price?: string;
  minBidPrice?: string;
  startTime?: string;
  endTime?: string;

  seller?: string;
  buyer?: string;
  nftSoldAtPrice?: number;

  priceUpdater?: string;
  newNftPrice?: number;
  oldNftPrice?: number;

  auctionStarter?: string;

  statusUpdater?: string;
  isListed?: boolean;

  bidder?: string;
  bidPrice?: number;
}

export interface NFTBid {
  doneOn?: number;
  tokenID?: number;
  transactionHash?: string;

  bidder?: string;
  price?: number;
}

export interface NFTDetail {
  nft?: NFTObjectData;
  creator?: NFTUser;
  owner?: NFTUser;
  historyEvents?: NFTEvent[];
  bids?: NFTBid[];
}

export interface NFTUserFullDetail {
  userProfile?: NFTUser;
  userNfts?: {
    createdNfts?: NFTObjectData[];
    currentNfts?: NFTObjectData[];
    boughtNfts?: NFTObjectData[];
    soldNfts?: NFTObjectData[];
  };
}

export interface NFTTopArtist {
  user?: NFTUser;
  soldAmount?: number;
  createdNFTs?: NFTObjectData[];
}

export const useGetQUINTRate = () => {
  const [data, setData] = useState(0.00);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const strUrl = `${baseApiUrl}/getQUINTRate`;
        const response = await fetch(strUrl);
        const responseData = await response.json();
        if (responseData.status === 'success') {
          const rate = responseData.rate;
          setData(rate);
        }
      } catch (error) {
        console.error('Unable to fetch data:', error);
      }
    };

    fetchData();
  }, [setData]);

  return data;
};

export const useGetNFTObjectList = ({ start, count, category = '', sortField = '', sortOrder = '', nftType = '', searchKey = '' }) => {
  const [data, setData] = useState<NFTList>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(searchKey);
        const strUrl = `${baseApiUrl}/getNFTObjectList?start=${start}&count=${count}&category=${category}&sortField=${sortField}&sortOrder=${sortOrder}&nftType=${nftType}&searchKey=${searchKey}`;
        const response = await fetch(strUrl);
        const responseData = await response.json();
        if (responseData.status === 'success') {
          const nftObjectList: NFTList = responseData;
          setData(nftObjectList);
        }
      } catch (error) {
        console.error('Unable to fetch data:', error);
      }
    };

    fetchData();
  }, [setData, start, count, category, sortField, sortOrder, nftType, searchKey]);

  return data;
};

export const useGetNFTObjectDetail = tokenID => {
  const [data, setData] = useState<NFTDetail>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const strUrl = `${baseApiUrl}/nfts/${tokenID}`;
        const response = await fetch(strUrl);
        const responseData = await response.json();
        if (responseData.status === 'success') {
          const nftDetail: NFTDetail = responseData.nftDetail;
          setData(nftDetail);
        }
      } catch (error) {
        console.error('Unable to fetch data:', error);
      }
    };

    fetchData();
  }, [setData, tokenID]);

  return data;
};

export const useGetNFTUserList = () => {
  const [data, setData] = useState<NFTUser[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const strUrl = `${baseApiUrl}/getNFTUserList`;
        const response = await fetch(strUrl);
        const responseData = await response.json();
        if (responseData.status === 'success') {
          const userList: NFTUser[] = responseData.nftUserList;
          setData(userList);
        }
      } catch (error) {
        console.error('Unable to fetch data:', error);
      }
    };

    fetchData();
  }, [setData]);

  return data;
};

export const useGetNFTTopUserList = () => {
  const [data, setData] = useState<NFTTopArtist[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const strUrl = `${baseApiUrl}/getNFTTopUserList`;
        const response = await fetch(strUrl);
        const responseData = await response.json();
        if (responseData.status === 'success') {
          const nftTopArtists: NFTTopArtist[] = responseData.data;
          setData(nftTopArtists);
        }
      } catch (error) {
        console.error('Unable to fetch data:', error);
      }
    };

    fetchData();
  }, [setData]);

  return data;
};

export const useGetNFTUserFullDetail = walletAddress => {
  const [data, setData] = useState<NFTUserFullDetail>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const strUrl = `${baseApiUrl}/getNFTUserFullDetail/${walletAddress}`;
        const response = await fetch(strUrl);
        const responseData = await response.json();
        if (responseData.status === 'success') {
          const nftUserFullDetail: NFTUserFullDetail = responseData.data;
          setData(nftUserFullDetail);
        }
      } catch (error) {
        console.error('Unable to fetch data:', error);
      }
    };

    fetchData();
  }, [setData, walletAddress]);

  return data;
};

export const useGetNFTUserProfile = walletAddress => {
  const [data, setData] = useState<NFTUser>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const strUrl = `${baseApiUrl}/getNFTUserProfile/${walletAddress}`;
        const response = await fetch(strUrl);
        const responseData = await response.json();
        if (responseData.status === 'success') {
          const nftUser: NFTUser = responseData.nftUserProfile;
          setData(nftUser);
        }
      } catch (error) {
        console.error('Unable to fetch data:', error);
      }
    };

    fetchData();
  }, [setData, walletAddress]);

  return data;
};
