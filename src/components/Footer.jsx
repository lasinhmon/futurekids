import facebook from "../assets/1facebook.png";
import blockchain from "../assets/FTK_Footer.png";
import telegram from "../assets/telegram 4.png";
import twitter from "../assets/twitter.png";

const Footer = () => (
    <div>
        <div className="bg-white flex justify-between md:justify-center items-center">
            <div className=" flex flex-col flex-1 md:pr-20 md:pl-24 pr-0 ">
                <div className="pl-16 font-bold text-5xl py-24">
                    Future Kids
                </div>
                <div className="pl-16 text-2xl leading-7">
                    <p className="mx-2">
                        215 Dien Bien Phu Street, Ward 2, <br />
                        Binh Thanh District, Ho Chi Minh City, VietNam
                    </p>
                </div>

                <div className="pl-16 flex items-center mt-16">
                    <p className="text-xl mr-3.5">Contact us</p>
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={telegram} alt="" />
                </div>
            </div>
            <div className="md:w-auto w-0 pr-32">
                <img src={blockchain} alt="" />
            </div>
        </div>
        <div className="bg-white flex items-center justify-center p-4">
            &copy; Future Kids | All Rights Reserved
        </div>
    </div>
);

export default Footer;
