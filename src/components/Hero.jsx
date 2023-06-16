import Identicon from "react-identicons";
import bg1 from "../assets/1.png";
import bg3 from "../assets/3.png";
import "../bubble.css";
import { setGlobalState, truncate, useGlobalState } from "../store";
const imgHero =
    "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg";

const Hero = () => {
    const [connectedAccount] = useGlobalState("connectedAccount");
    const onCreatedNFT = () => {
        setGlobalState("modal", "scale-100");
    };
    return (
        <div className="w-4/5 justify-between items-center mx-auto py-10 ">
            <div className="flex flex-col md:flex-row ">
                <div className="md:w-4/6 w-full">
                    <div>
                        <h1 className="text-cclor text-7xl italic font-bold">
                            BUILD THE KIDS' <br />
                            FUTURE
                            {/* <br />
                            <span className="text-gradient">NFTs</span>
                            Collection */}
                        </h1>
                        <p className=" text-2xl mt-3">
                            Make a positive impact and support talented children
                            <br />
                            in economically disadvantaged areas by owning <br />
                            unique NFTs featuring their stunning artworks.
                        </p>
                    </div>
                    <div className="flex mt-5">
                        <button
                            className="shadow-md shadow-black text-black 
                            button-color rounded-full p-2 text-1xl "
                            onClick={() => setGlobalState("modal", "scale-100")}
                        >
                            Create NFT
                        </button>
                    </div>
                    {/* <div className="w-3/5 flex justify-between items-center mt-5">
                        <div className="text-white">
                            <p className="font-bold">123k</p>
                            <small className="text-gray-300">Users</small>
                        </div>
                        <div className="text-white">
                            <p className="font-bold">152</p>
                            <small className="text-gray-300">Artworks</small>
                        </div>
                        <div className="text-white">
                            <p className="font-bold">200k</p>
                            <small className="text-gray-300">Artists</small>
                        </div>
                    </div> */}
                </div>
                <div className=" md:w-2/6 md:h-2/6 w-full mt-10 md:mt-0 rounded-md overflow-hidden ">
                    <img
                        className="h-fit w-fit object-fit"
                        src={bg1}
                        alt="Hero"
                    />
                    <div className="flex justify-start items-center p-3"></div>
                </div>
            </div>
            <div className="bongbong">
                <section class="what" id="whatid">
                    <div class="container">
                        <div class="wrapper graycir">
                            <div class="what__left">
                                <div className="what_in">
                                    <h1 className="text-black text-4xl">
                                        What we do?
                                        <br />
                                        {/* <br />
                            <span className="text-gradient">NFTs</span>
                            Collection */}
                                    </h1>
                                    <p className="text-2xl mt-3">
                                        We digitize artworks drawn by
                                        <br />
                                        underprivileged children all <br />
                                        around the world. Sell those arts <br />
                                        to support them a better future.
                                    </p>
                                </div>
                            </div>
                            <div class="what__bubble">
                                <div class="what__bubble-item bub1">
                                    <p>10.000 artworks</p>
                                </div>
                                <div class="what__bubble-item green bub2">
                                    <p>10000 USD donated</p>
                                </div>
                                <div class="what__bubble-item green bub3">
                                    <p>1.000.000 kids</p>
                                </div>
                                <div class="what__bubble-item bub4">
                                    <p>100% public transactions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="pt-20 w-full flex flex-col md:flex-row">
                <div className="pr-40 md:w-3/6 md:h-2/6 w-full mt-10 md:mt-0 rounded-md overflow-hidden ">
                    <img
                        className="h-fit w-fit object-fit"
                        src={bg3}
                        alt="Hero"
                    />
                </div>
                <div className=" pl-20 md:w-3/6 w-full">
                    <div className="pt-10">
                        <h1 className="text-black text-4xl">
                            What makes us different?
                            <br />
                            {/* <br />
                            <span className="text-gradient">NFTs</span>
                            Collection */}
                        </h1>
                        <p className=" text-2xl mt-3">
                            Our NFTs depict children's visions of the <br />
                            future, creating truly unique pieces. We <br />
                            believe in full transparency, so there are <br />
                            no hidden transactions - all activity is <br />
                            visible to the public.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
