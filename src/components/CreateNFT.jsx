import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import {
    setAlert,
    setGlobalState,
    setLoadingMsg,
    useGlobalState,
} from "../store";
import { create } from "ipfs-http-client";
import { mintNFT } from "../Blockchain.Services";
import blockchain from "../assets/FTK_Footer.png";
const imgHero =
    "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg";
//
// "semi":true,
// "singleQuote": false-->
const auth =
    "Basic " +
    Buffer.from(
        "2RHNpDjUR9YJoyBdFua6W8B7Np9" + ":" + "3761e31ea562fa3223d674b370611470"
    ).toString("base64");

const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
        authorization: auth,
    },
});

const CreateNFT = () => {
    const [modal] = useGlobalState("modal");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [fileUrl, setFileUrl] = useState("");
    const [imgBase64, setImgBase64] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Hello from inside CreateNFT");
        if (!title || !description || !price) return;
        setGlobalState("modal", "scale-0");
        setGlobalState("loading", {
            show: true,
            msg: "Uploading IPFS data...",
        });

        try {
            const created = await client.add(fileUrl);
            setLoadingMsg("Uploaded, approve transaction now...");

            const metadataURI = `https://ipfs.io/ipfs/${created.path}`;
            const nft = { title, description, price, metadataURI };
            await mintNFT(nft);

            resetForm();
            setAlert("Minting completed...");
            window.location.reload();
        } catch (error) {
            console.log("Error uploading file:", error);
            setAlert("Minting failed...", "red");
        }
    };

    const changeImage = async (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
        reader.onload = (readerEvent) => {
            const file = readerEvent.target.result;
            setImgBase64(file);
            setFileUrl(e.target.files[0]);
        };
    };

    const closeModal = () => {
        setGlobalState("modal", "scale-0");
        resetForm();
    };

    const resetForm = () => {
        setFileUrl("");
        setImgBase64(null);
        setDescription("");
        setPrice("");
        setTitle("");
    };
    return (
        <div
            className={`z-10 fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}
        >
            <div className="bg-[#D4E3E5] shadow-xl shadow-[#656263] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="flex justify-between items-center text-gray-400">
                        <p className="font-semibold">Add NFT</p>
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
                                src={imgBase64 || blockchain}
                                alt="NFT"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded-xl mt-5">
                        <label className="block rounded-xl">
                            <span className="sr-only">
                                Choose Profile Photo
                            </span>
                            <input
                                type="file"
                                accept="image/png, image/gif, image/jpeg, image/jpg, image/webp"
                                className="block w-full text-sm 
                                text-slate-500 file:mr-4 
                                file:py-2 file:px-4 file:rounded-full 
                                file:border-0 file:text-sm file:font-semibold
                                hover:file:bg-[#1d2631] 
                                focus:outline-none 
                                cursor-pointer focus:ring-0"
                                onChange={changeImage}
                                required
                            />
                        </label>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded-xl mt-5">
                        <input
                            type="text"
                            className="block w-full text-sm 
                                text-slate-500 
                                focus:outline-none 
                                cursor-pointer focus:ring-0
                                bg-transparent border-0"
                            placeholder="Title"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            required
                        />
                    </div>
                    <div className="flex justify-between items-center bg-white rounded-xl mt-5">
                        <input
                            type="number"
                            className="block w-full text-sm 
                                text-slate-500 
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
                    <div className="flex justify-between items-center bg-white rounded-xl mt-5">
                        <textarea
                            type="text"
                            className="block w-full text-sm 
                                text-slate-500 
                                focus:outline-none 
                                cursor-pointer focus:ring-0
                                bg-transparent border-0 resize-none"
                            placeholder="Description"
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            required
                        ></textarea>
                    </div>
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="flex justify-center items-center shadow-lg text-black p-2 mt-5 bg-[#85b6ef] rounded-full"
                    >
                        Mint Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateNFT;
