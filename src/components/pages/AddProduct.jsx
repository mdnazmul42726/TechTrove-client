import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddProduct = () => {
    const {nam} = useContext(AuthContext)
    console.log(nam);

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const photoUrl = form.photoUrl.value;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        console.log(photoUrl, price, productName, brandName, category, rating, description);
    }

    return (
        <div className="pt-36 text-center">
            <h1 className="text-3xl font-bold mb-20">Add Product</h1>
            <form className="font-[sans-serif] text-[#333] max-w-4xl mx-auto" onSubmit={handleAddProduct}>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative flex items-center">
                        <input type="text" name="photoUrl" placeholder="Product image URL"
                            className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                    </div>
                    <div className="relative flex items-center">
                        <input type="text" name="productName" placeholder="Product name"
                            className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                        {/* <select id="cars" name="cars" className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#007bff] outline-none">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select> */}
                    </div>
                    <div className="relative flex items-center">
                        {/* <input type="email" placeholder="Brand name"
                            className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#007bff] outline-none" /> */}
                        <select id="cars" name="brandName" className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#007bff] outline-none">
                            <option value="brand-name">Brand Name</option>
                            <hr />
                            <option value="samsung">Samsung</option>
                            <option value="apple">Apple</option>
                            <option value="nokia">Nokia</option>
                            <option value="google">Google</option>
                            <option value="sony">Sony</option>
                            <option value="intel">Intel</option>
                        </select>
                    </div>
                    <div className="relative flex items-center">
                        {/* <input type="password" placeholder="Password"
                            className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#007bff] outline-none" /> */}
                        <select id="cars" name="category" className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#007bff] outline-none">
                            <option value="category">Category</option>
                            <hr />
                            <option value="mobile">Mobile</option>
                            <option value="laptop">Laptop</option>
                            <option value="headphone">Headphone</option>
                            <option value="camera">Camera</option>
                            <option value="drone">Drone</option>
                        </select>
                    </div>
                </div>
                <div className="grid mt-5 sm:grid-cols-2 gap-6">
                    <div className="relative flex items-center">
                        <input type="text" name="price" placeholder="Price"
                            className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                    </div>
                    <div className="relative flex items-center">
                        <input type="text" name="rating" placeholder="Rating"
                            className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                    </div>
                </div>
                <div className="relative mt-5 flex items-center">
                    <input type="text" name="description" placeholder="Short description"
                        className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                </div>
                <button type="submit"
                    className="mt-8 px-8 py-2.5 rounded text-sm font-semibold bg-[#007bff] text-white hover:bg-[#006bff]">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;