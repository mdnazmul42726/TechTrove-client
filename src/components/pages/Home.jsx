import bannerImg from "../../assets/bannerImg.png"
const Home = () => {
    return (
        <div className="h-[1000px] w-full">
            <div className="bg-[#efefeD] min-h-[300px]">
                {/* banner start */}
                <div className="w-11/12 mx-auto">
                    <div className="pt-32">
                        <div className="flex-row-reverse md:flex md:flex-row justify-between items-center">
                            <div className="">
                                <h3 className=" bg-[#F6AA19] uppercase text-sm rounded-full pl-3 w-40 mb-8">weekend discount</h3>
                                <h2 className="text-3xl md:text-5xl font-light mb-2">Enhance Your</h2>
                                <h1 className="text-4xl md:text-6xl font-bold">Entertainment</h1>
                                <h4 className=" text-xl">Last call for up to <span className="text-2xl font-bold text-[#ff0000]">%20</span> off!</h4>
                                <button className="bg-[#0070dc] text-[#fff] hover:text-[#000] transition-all border-2 hover:bg-transparent py-1 px-5 mt-8 rounded-full">Shop Now</button>
                            </div>
                            <div className="">
                                <img src={bannerImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* banner end */}
            </div>
        </div>
    );
};

export default Home;