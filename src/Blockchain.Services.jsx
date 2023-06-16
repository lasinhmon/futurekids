import Web3 from "web3";
import { setGlobalState, getGlobalState, setAlert } from "./store";
import abi from "./abis/TimelessNFT.json";

const { ethereum } = window;
window.web3 = new Web3(ethereum);
window.web3 = new Web3(window.web3.currentProvider);
const getEtheriumContract = async () => {
    const web3 = window.web3;
    const networkId = await web3.eth.net.getId();
    const networkData = abi.networks[networkId];

    if (networkData) {
        const contract = new web3.eth.Contract(abi.abi, networkData.address);

        return contract;
    } else {
        return null;
    }
};

const connectWallet = async () => {
    try {
        if (!ethereum) return reportError("Please install Metamask");
        const accounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        setGlobalState("connectedAccount", accounts[0].toLowerCase());
    } catch (error) {
        reportError(error);
    }
};

const isWallectConnected = async () => {
    try {
        if (!ethereum) return reportError("Please install Metamask");
        const accounts = await ethereum.request({ method: "eth_accounts" });

        window.ethereum.on("chainChanged", (chainId) => {
            window.location.reload();
        });

        window.ethereum.on("accountsChanged", async () => {
            setGlobalState("connectedAccount", accounts[0].toLowerCase());
            await isWallectConnected();
        });

        if (accounts.length) {
            setGlobalState("connectedAccount", accounts[0].toLowerCase());
        } else {
            setGlobalState("connectedAccount", "");
            reportError("Please connect wallet.");
        }
    } catch (error) {
        reportError(error);
    }
};
const mintNFT = async ({ title, description, metadataURI, price }) => {
    try {
        price = window.web3.utils.toWei(price.toString(), "ether");
        const contract = await getEtheriumContract();
        const connectedAccount = getGlobalState("connectedAccount");
        const mintPrice = window.web3.utils.toWei("0.01", "ether");
        await contract.methods
            .payToMint(title, description, metadataURI, price)
            .send({ from: connectedAccount, value: mintPrice });

        return true;
    } catch (error) {
        reportError(error);
    }
};
const updateNFT = async ({ id, cost }) => {
    try {
        cost = window.web3.utils.toWei(cost.toString(), "ether");
        const contract = await getEtheriumContract();
        const connectedAccount = getGlobalState("connectedAccount");
        await contract.methods
            .changePrice(Number(id), cost)
            .send({ from: connectedAccount });
    } catch (error) {
        reportError(error);
    }
};

const buyNFT = async ({ id, cost }) => {
    try {
        cost = window.web3.utils.toWei(cost.toString(), "ether");
        const contract = await getEtheriumContract();
        const connectedAccount = getGlobalState("connectedAccount");

        await contract.methods
            .payToBuy(Number(id))
            .send({ from: connectedAccount, value: cost });
    } catch (error) {
        reportError(error);
    }
};
const getAllNFTs = async () => {
    try {
        if (!ethereum) return reportError("Please install Metamask");
        const contract = await getEtheriumContract();
        const nfts = await contract.methods.getAllNFTs().call();
        const transactions = await contract.methods.getAllTransactions().call();
        setGlobalState("nfts", structureNfts(nfts));
        setGlobalState("transactions", structureNfts(transactions));
        //console.log(structureNfts(nfts));
    } catch (error) {
        reportError(error);
    }
};

const structureNfts = (nfts) =>
    nfts
        .map((nft) => ({
            id: Number(nft.id),
            owner: nft.owner.toLowerCase(),
            cost: window.web3.utils.fromWei(nft.cost),
            title: nft.title,
            description: nft.description,
            metadataURI: nft.metadataURI,
            timestamp: nft.timestamp,
        }))
        .reverse();

const reportError = (error) => {
    setAlert(JSON.stringify(error), "red");
};
export {
    connectWallet,
    isWallectConnected,
    mintNFT,
    getAllNFTs,
    updateNFT,
    buyNFT,
};
