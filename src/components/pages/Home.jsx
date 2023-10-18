import { useLoaderData } from "react-router-dom";
import bannerImg from "../../assets/bannerImg.png"
import BrandCard from "../BrandCard";

const Home = () => {
    const companys = useLoaderData()

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
            </div>
            {/* banner end */}

            {/* brand section start */}
            <div className="mt-16">
                <h1 className="text-3xl font-bold text-center">Our Company's</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 w-11/12 mx-auto mt-10">
                    {companys.map(company => <BrandCard key={company._id} company={company} />)}
                </div>

            </div>
            {/* brand section end */}

            {/* upcoming offer section start */}
         
            <div className="relative overflow-hidden bg-white mt-44 mx-5">
                {/* <h1 className="text-3xl text-center">  features product</h1> */}
          <div className="mb-10">
          </div>
                <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Check out our hot products</h1>
                            <p className="mt-4 text-xl text-gray-500">Buy products from the most reputed companies at the lowest prices!</p>
                        </div>
                        <div>
                            <div className="mt-10">
                                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img src="https://i.ibb.co/5RYhBrK/2d2c35ed8f32d1d12a773064cf1d9901.jpg" alt="" className="h-full w-full object-cover object-center"/>
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://i.ibb.co/VDWVqcW/0824fe4698f2e13ccba1b6f6868ed690.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://i.ibb.co/pfPW1bg/d95daea611cb7fa4da7bdbe0c568e651.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://i.ibb.co/nC6mGBd/31b015de3ac2ed833e9488de9f738401.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://i.ibb.co/G2MQwRZ/7fac3677003bdcfd82c36513ed6387b8.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://i.ibb.co/nmRLwg5/12254fccc1d5ca6b32566b85c2028db2.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://i.ibb.co/QkHCNb6/cdcd6ec557c5941401fa4a3e9a63d7ee.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a href="#" className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* upcoming offer section end */}
        </div>
    );
};

export default Home;