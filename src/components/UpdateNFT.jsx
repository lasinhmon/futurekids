import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import {
    setAlert,
    setGlobalState,
    setLoadingMsg,
    useGlobalState,
} from "../store";
import { updateNFT } from "../Blockchain.Services";

import blockchain from "../assets/FTK_Footer.png";
const UpdateNFT = () => {
    const [modal] = useGlobalState("updateModal");
    const [nft] = useGlobalState("nft");
    const [price, setPrice] = useState(nft?.cost);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!price || price <= 0) return;
        setGlobalState("modal", "scale-0");
        setLoadingMsg("Initializing price update...");
        try {
            setLoadingMsg("Price updating...");
            setGlobalState("updateModal", "scale-0");
            await updateNFT({ id: nft?.id, cost: price });
            setAlert("Price updated...");
            window.location.reload();
        } catch (error) {
            console.log("Error updating price: ", error);
            setAlert("Updated failed...");
        }
    };

    const closeModal = () => {
        setGlobalState("updateModal", "scale-0");
        resetForm();
    };

    const resetForm = () => {
        setPrice("");
    };
    return (
        <div
            className={`z-10 fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}
        >
            <div className="bg-[#D4E3E5] shadow-xl shadow-[#656263] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
                <form
                    type="submit"
                    onSubmit={handleSubmit}
                    className="flex flex-col"
                >
                    <div className="flex justify-between items-center text-black">
                        <p className="font-semibold">Change price</p>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="border-0 bg-transparent focus:outline-none"
                        >
                            <FaTimes />
                        </button>
                    </div>
                    <div className="flex justify-center items-center rounded-xl mt-5">
                        <div className="shrink-0 h-20 w-20 rounded-xl overflow-hidden">
                            <img
                                className="h-full w-full object-cover cursor-pointer"
                                src={blockchain}
                                alt="NFT"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-center bg-white rounded-xl mt-5">
                        <input
                            type="number"
                            className="block w-full text-sm 
                                text-black 
                                focus:outline-none 
                                cursor-pointer focus:ring-0
                                bg-transparent border-0"
                            placeholder="Price (xDAI)"
                            min={0.01}
                            step={0.01}
                            name="price"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            required
                        />
                    </div>

                    <button className="flex justify-center items-center shadow-lg shadow-black text-black p-2 mt-5 button-color rounded-full">
                        Update Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateNFT;
