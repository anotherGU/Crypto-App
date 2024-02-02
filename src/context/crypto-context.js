import { createContext, useEffect, useState } from "react";
import { fetchCrypto, fetchAssets, fetchCryptoFromApi } from "../api";
import { findPercent } from "../utils";

const CryptoContext = createContext({
  assets: [],
  crypto: [],
  loading: false,
});

export const CryptoContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([]);

  const mapAssets = (assets, result) => {
    return assets.map((asset) => {
      const coin = result.find((c) => c.id === asset.id);
      return {
        grow: asset.price < coin.price,
        growPercent: findPercent(asset.price, coin.price),
        totalAmount: asset.amount * coin.price,
        totalProfit: asset.amount * coin.price - asset.amount * asset.price,
        name: coin.name,
        ...asset,
      };
    });
  };

  useEffect(() => {
    async function preload() {
      setLoading(true);
      const { result } = await fetchCryptoFromApi();
      const assets = await fetchAssets();

      setCrypto(result);
      setAssets(mapAssets(assets, result));
      setLoading(false);
    }
    preload();
  }, []);

  const AddAsset = (newAsset) => {
    setAssets(mapAssets([...assets, newAsset], crypto));
  };
  return (
    <CryptoContext.Provider value={{ loading, crypto, assets, AddAsset }}>
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoContext;
