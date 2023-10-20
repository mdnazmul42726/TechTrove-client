import { useLoaderData } from "react-router-dom";
import Footer from "../Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDtls = () => {
    const productDtls = useLoaderData();

    const cartData = { img: productDtls.photoUrl, name: productDtls.productName, brand: productDtls.companyName, price: productDtls.price };

    const handleAddToCart = () => {
        fetch('http://localhost:5000/cart', {

            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(cartData)

        }).then(res => res.json()).then(data => {

            if (data.insertedId) {
                toast("The item has been added to the card");
            }
        })
    }

    return (
        <div className="pt-28">
            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                    <img className="w-full" alt="img of a product" src={productDtls?.photoUrl} />
                </div>
                <div className="md:hidden">
                    <img className="w-full" alt="img of a product" src={productDtls?.photoUrl} />
                    {/* <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                        <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                        <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                        <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                        <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                    </div> */}
                </div>
                <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="border-b border-gray-200 pb-6">
                        <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 mt-2">{productDtls?.productName}</h1>
                        <h1 className="lg:text-xl font-semibold lg:leading-6 leading-7 mt-2">Price: {productDtls?.price} USD</h1>

                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4">Brand:</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none">{productDtls?.companyName}</p>
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4">Category:</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none mr-3">{productDtls?.category}</p>
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4">Rating:</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none mr-3">{productDtls?.rating}</p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className=" mt-3">{productDtls.description}.</p>
                        <p className="text-base leading-4 mt-3"><span className="font-bold">Product ID: </span><span>{productDtls._id}</span></p>
                        <div className="mt-7">
                            <button className="btn bg-sky-500 w-full hover:bg-sky-600 text-white font-bold" onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default ProductDtls;