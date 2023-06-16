import { setGlobalState, useGlobalState } from "../store";
import av1 from "../assets/Memoji 5.png";
import av2 from "../assets/Memoji 6.png";
import av3 from "../assets/Memoji 7.png";
import av4 from "../assets/Memoji 10.png";
import av5 from "../assets/Memoji 29.png";
import "../bubble.css";
const Member = () => {
    return (
        <div className="bg-[#ffffff] gradient-bg-artworks">
            <div className="w-4/5 py-10 mx-auto">
                <h4 className="text-black text-3xl font-bold uppercase text-center mb-10">
                    Project members
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4 lg:gap-3 py-2.5">
                    <div className="w-full member-bg my-2 px-5 ">
                        <div className="h-1/5 bg-[#ffffff] ml-5 bg-opacity-0">
                            <img
                                className="member-img object-full mb-3"
                                src={av1}
                                alt=""
                            />
                        </div>
                        <div className="shadow-lg shadow-black flex h-4/5 first-letter:h-4/5 bg-cc  justify-center">
                            <div className="block text-center">
                                <h4 className="text-sm font-semibold pt-28">
                                    VU THE TRUONG
                                </h4>
                                <h4 className="text-white font-semibold">
                                    Team Leader
                                </h4>
                                <h4 className="text-white font-semibold">
                                    Backend
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="w-full member-bg my-2 px-5 ">
                        <div className="h-1/5 bg-[#ffffff] ml-5 bg-opacity-0">
                            <img
                                className="member-img object-full mb-3"
                                src={av2}
                                alt=""
                            />
                        </div>
                        <div className="shadow-lg shadow-black flex h-4/5 first-letter:h-4/5 bg-cc justify-center text-center">
                            <div className="block text-center">
                                <h4 className="text-sm font-semibold pt-28">
                                    TON HOANG PHUC
                                </h4>

                                <h4 className="text-white font-semibold">
                                    Backend
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-full member-bg my-2 px-5 ">
                        <div className="h-1/5 bg-[#ffffff] ml-5 bg-opacity-0">
                            <img
                                className="member-img object-full mb-3"
                                src={av3}
                                alt=""
                            />
                        </div>
                        <div className="flex h-4/5 shadow-lg shadow-black first-letter:h-4/5 bg-cc justify-center text-center">
                            <div className="block text-center">
                                <h4 className="text-sm font-semibold pt-28">
                                    NGUYEN DUY ANH
                                </h4>

                                <h4 className="text-white font-semibold">
                                    Backend
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-full member-bg my-2 px-5 ">
                        <div className="h-1/5 bg-[#ffffff] ml-5 bg-opacity-0">
                            <img
                                className="member-img object-full mb-3"
                                src={av4}
                                alt=""
                            />
                        </div>
                        <div className="shadow-lg shadow-black flex h-4/5 first-letter:h-4/5 bg-cc justify-center text-center">
                            <div className="block text-center">
                                <h4 className="text-sm font-semibold pt-28">
                                    NGUYEN PHAN QUOC TRI
                                </h4>

                                <h4 className="text-white font-semibold ">
                                    UX/UI
                                </h4>
                                <h4 className="text-white font-semibold ">
                                    Team's Presenter
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-full member-bg my-2 px-5 ">
                        <div className="h-1/5 bg-[#ffffff] ml-5 bg-opacity-0">
                            <img
                                className="member-img object-full mb-3"
                                src={av5}
                                alt=""
                            />
                        </div>
                        <div className="shadow-lg shadow-black flex h-4/5 first-letter:h-4/5 bg-cc justify-center text-center">
                            <div className="block text-center">
                                <h4 className="text-sm font-semibold  pt-28">
                                    HUYNH KHANG VI
                                </h4>

                                <h4 className="text-white font-semibold">
                                    Frontend
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Member;
