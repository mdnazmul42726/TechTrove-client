import { useLoaderData } from "react-router-dom";


const Company = () => {

    const company = useLoaderData();
    const {companyName, banner_1, banner_2, banner_3} = company || {};


    return (
        <div className="pt-40">
            <h1 className="text-3xl text-center font-bold mb-10">{companyName}</h1>

            <div className="w-11/12 mx-auto">
                <div className="carousel h-96">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={banner_1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={banner_2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={banner_3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/pf9jqTd/original-f6c93da5dec6381b4f1319463262b555.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default Company;