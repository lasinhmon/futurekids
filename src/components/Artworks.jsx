import { setGlobalState, useGlobalState } from "../store";
import { useState, useEffect } from "react";
const Artworks = () => {
    const [nfts] = useGlobalState("nfts");
    const [end, setEnd] = useState(4);
    const [count] = useState(4);
    const [collection, setCollection] = useState([]);

    const getCollection = () => {
        return nfts.slice(0, end);
    };

    useEffect(() => {
        setCollection(getCollection());
    }, [nfts, end]);
    return (
        <div className="bg-[#ffffff] gradient-bg-artworks">
            <div className="w-4/5 py-10 mx-auto">
                <h4 className="text-black text-3xl font-bold uppercase text-center">
                    {collection.length > 0
                        ? "Latest Artworks"
                        : "No Artworks Yet"}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
                    {collection.map((nft, i) => (
                        <Card key={i} nft={nft} />
                    ))}
                </div>
                {collection.length > 0 && nfts.length > collection.length ? (
                    <div className="text-center my-5">
                        <button
                            onClick={() => setEnd(end + count)}
                            className="shadow-lg shadow-black text-black button-color rounded-full p-2"
                        >
                            Load More
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
const Card = ({ nft }) => {
    const setNft = () => {
        setGlobalState("nft", nft);
        setGlobalState("showModal", "scale:100");
    };
    return (
        <div className="w-full shadow-xl shadow-black rounded-lg overflow-hidden bg-[#D9D9D9] my-2 p-3">
            <img
                className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
                src={nft.metadataURI}
                alt={nft.title}
            />
            <h4 className="text-black font-semibold">{nft.title}</h4>
            <p className="text-black-400 text-sm my-1">{nft.description}</p>
            <div className="flex justify-between items-center mt-3 text-black">
                <div className="flex flex-col">
                    <small className="text-black text-xs">Current Price</small>
                    <p className="text-black text-sm font-semibold">
                        {nft.cost} xDAI
                    </p>
                </div>
                <button
                    onClick={setNft}
                    className="shadow-md shadow-black text-black 
                    button-color rounded-full p-2 text-1xl"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};
export default Artworks;
