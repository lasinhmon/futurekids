import { connectWallet } from "../Blockchain.Services";
import timelessLogo from "../assets/FTKIDS2 - Copy.png";
import { useGlobalState, truncate } from "../store";
const Header = () => {
    const [connectedAccount] = useGlobalState("connectedAccount");
    return (
        <div className="w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img
                    className="w-36 cursor-pointer"
                    src={timelessLogo}
                    alt="Logo"
                />
            </div>
            <ul className="md:flex-[0.5]  text-1xl text-black md:flex hidden list-none justify-between items-center flex-initial"></ul>
            {connectedAccount ? (
                <button className="shadow-md shadow-black text-black button-color hover:button-color text-1xl p-2 rounded-full">
                    {truncate(connectedAccount, 4, 4, 11)}
                </button>
            ) : (
                <button
                    className="shadow-xl shadow-black text-black button-color hover:bg-[#bd255f] text-1xl p-2 rounded-full"
                    onClick={connectWallet}
                >
                    Connect Wallet
                </button>
            )}
        </div>
    );
};
export default Header;
