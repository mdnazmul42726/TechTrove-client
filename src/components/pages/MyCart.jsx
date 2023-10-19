import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const cartData = useLoaderData();

    const handleRemoveItem = (_id) => {
        fetch(`http://localhost:5000/cart/${_id}`, {method: 'DELETE'}).then(res=> res.json()).then(data=> console.log(data))
    }

    return (
        <div>
            <div className="container mx-auto pt-20">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">3 Items</h2>
                        </div>
                        <div className="flex mt-10 mb-5 justify-between">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Action</h3>
                        </div>

                        {cartData.map(data => <div key={data._id} className="flex items-center justify-between hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div className="flex w-2/5">
                                <div className="w-20">
                                    <img className="h-24" src={data?.img} alt="" />
                                </div>
                                <div className="flex flex-col ml-4">
                                    <span className="font-bold text-sm mb-2">{data?.name}</span>
                                    <span className="text-red-500 text-xs">{data?.brand}</span>
                                </div>
                            </div>
                            <div className="">
                                <span className="text-center w-1/5 font-semibold text-sm">${data?.price}</span>
                            </div>
                            <div className="flex justify-center w-1/5">
                                <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase" onClick={() => handleRemoveItem(data?._id)}>Remove</button>
                            </div>

                        </div>)}

                        <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">

                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </a>
                    </div>

                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items 3</span>
                            <span className="font-semibold text-sm">590$</span>
                        </div>
                        <label className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <div className="pb-10 flex">
                            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full border" />
                            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        </div>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>$600</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase btn w-full">Checkout</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyCart;