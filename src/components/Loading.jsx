import { useGlobalState } from "../store";

const Loading = () => {
    const [loading] = useGlobalState("loading");
    return (
        <div
            className={`z-10 fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${
                loading.show ? "scale-100" : "scale-0"
            }`}
        >
            <div className="bg-[#D4E3E5] shadow-xl shadow-[#5c5a5c] rounded-xl min-w-min px-10 pb-2">
                <div className="flex flex-col text-black">
                    <div className="flex justify-center items-center">
                        <div className="lds-dual-ring scale-50"></div>
                        <p className="text-lg">Processing...</p>
                    </div>
                    <small className="text-center">{loading.msg}</small>
                </div>
            </div>
        </div>
    );
};

export default Loading;
