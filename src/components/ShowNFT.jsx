import Identicon from "react-identicons";

import { FaTimes } from "react-icons/fa";
import {
    setAlert,
    setGlobalState,
    setLoadingMsg,
    truncate,
    useGlobalState,
} from "../store";
import { buyNFT } from "../Blockchain.Services";
const ShowNFT = () => {
    const [connectedAccount] = useGlobalState("connectedAccount");
    const [modal] = useGlobalState("showModal");
    const [nft] = useGlobalState("nft");

    const onChangePrice = () => {
        setGlobalState("nft", nft);
        setGlobalState("showModal", "scale-0");
        setGlobalState("updateModal", "scale-100");
    };

    const handlePurchase = async () => {
        // setGlobalState("showModal", "scale-0");
        // setLoadingMsg("Initializing purchase...");

        try {
            setLoadingMsg("Purchasing, awaiting Metamask approval...");
            await buyNFT(nft);
            setAlert("NFT purchased...");
            // setAlert("Transfer completed...", "green");
            window.location.reload();
        } catch (error) {
            console.log("Error transfering NFT: ", error);
            setAlert("Purchase failed...", "red");
        }
    };
    const closeModal = () => {
        setGlobalState("showModal", "scale-0");
    };

    return (
        <div
            className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}
        >
            <div className="bg-[#D4E3E5] shadow-xl shadow-[#656263] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
                <div className="flex flex-col">
                    <div className="flex justify-between items-center text-black">
                        <p className="font-semibold">Buy NFT</p>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="border-0 bg-transparent focus:outline-none"
                        >
                            <FaTimes />
                        </button>
                    </div>
                    <div className="flex justify-center items-center rounded-xl mt-5">
                        <div className="shrink-0 h-40 w-40 rounded-xl overflow-hidden">
                            <img
                                className="h-full w-full object-cover cursor-pointer"
                                src={nft?.metadataURI}
                                alt={nft?.title}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-start rounded-xl mt-5">
                        <h4 className="text-black font-semibold">
                            {nft?.title}
                        </h4>
                        <p className="text-black text-xs my-1">
                            {nft?.description}
                        </p>
                        <div className="flex justify-between items-center mt-3 text-black">
                            <div className="flex justify-start items-center">
                                <Identicon
                                    className="h-10 w-10 object-contain rounded-full mr-3"
                                    string={nft?.owner}
                                    size={50}
                                />
                                <div className="flex flex-col justify-center items-start">
                                    <small className="text-white font-bold">
                                        @Owner
                                    </small>
                                    <small className="text-pink-800 font-semibold">
                                        {nft?.owner
                                            ? truncate(nft?.owner, 4, 4, 11)
                                            : ""}
                                    </small>
                                </div>
                            </div>

                            <div className="flex flex-col text-black">
                                <small className="text-xs">Current Price</small>
                                <p className="text-sm font-semibold">
                                    {nft?.cost} ETH
                                </p>
                            </div>
                        </div>
                    </div>
                    {connectedAccount == nft?.owner ? (
                        <button
                            onClick={onChangePrice}
                            className="flex justify-center items-center 
                            shadow-md shadow-black text-black 
                            button-color rounded-full p-2 text-1xl font-bold"
                        >
                            Change Price
                        </button>
                    ) : (
                        <button
                            onClick={handlePurchase}
                            className="flex justify-center items-center 
                            shadow-md shadow-black text-black 
                            button-color rounded-full p-2 text-1xl font-bold"
                        >
                            Purchase
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShowNFT;
