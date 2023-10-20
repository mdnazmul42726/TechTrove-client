import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Footer from "../Footer";

const AddProduct = () => {
    const { nam } = useContext(AuthContext)
    console.log(nam);

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const photoUrl = form.photoUrl.value;
        const productName = form.productName.value;
        const companyName = form.brandName.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const product = { photoUrl, price, productName, companyName, category, rating, description };

        const urlValuation = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

        if(!urlValuation.test(photoUrl)){
           toast.error('Invalid Image URL')
            return
        }

        fetch('http://localhost:5000/product', {

            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(product)

        }).then(res => res.json()).then(data => {

            if (data.insertedId) {
                Swal.fire('Item Added');
                form.reset();
            }
        });
    }

    return (
        <div className="pt-36 text-center" data-aos="zoom-out">
            <h1 className="text-3xl font-bold mb-20">Add Product</h1>
            <form className="font-[sans-serif] max-w-4xl mx-auto" onSubmit={handleAddProduct}>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative flex items-center">
                        <input type="text" required name="photoUrl" placeholder="Product image URL"
                            className="px-2 py-3 w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                    </div>
                    <div className="relative flex items-center">
                        <input type="text" name="productName" required placeholder="Product name"
                            className="px-2 py-3 w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                        {/* <select id="cars" name="cars" className="px-2 py-3 w-full text-sm border-b-2 focus:border-[#007bff] outline-none">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select> */}
                    </div>
                    <div className="relative flex items-center">
                        {/* <input type="email" placeholder="Brand name"
                            className="px-2 py-3 w-full text-sm border-b-2 focus:border-[#007bff] outline-none" /> */}
                        <select id="cars" required name="brandName" className="px-2 py-3 w-full text-sm border-b-2 focus:border-[#007bff] outline-none">
                            <option value="brand-name">Brand Name</option>
                            <hr />
                            <option value="Samsung">Samsung</option>
                            <option value="Apple">Apple</option>
                            <option value="Nokia">Nokia</option>
                            <option value="Google">Google</option>
                            <option value="Sony">Sony</option>
                            <option value="Intel">Intel</option>
                        </select>
                    </div>
                    <div className="relative flex items-center">
                        {/* <input type="password" placeholder="Password"
                            className="px-2 py-3 w-full text-sm border-b-2 focus:border-[#007bff] outline-none" /> */}
                        <select id="cars" name="category" required className="px-2 py-3 w-full text-sm border-b-2 focus:border-[#007bff] outline-none">
                            <option value="category">Category</option>
                            <hr />
                            <option value="mobile">Mobile</option>
                            <option value="laptop">Laptop</option>
                            <option value="headphone">Headphone</option>
                            <option value="watch">Watch</option>
                            <option value="camera">Camera</option>
                            <option value="LED">LED</option>
                            <option value="drone">Drone</option>
                            <option value="parts">Parts</option>
                        </select>
                    </div>
                </div>
                <div className="grid mt-5 sm:grid-cols-2 gap-6">
                    <div className="relative flex items-center">
                        <input type="text" required name="price" placeholder="Price"
                            className="px-2 py-3 w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                    </div>
                    <div className="relative flex items-center">
                        <input type="text" name="rating" placeholder="Rating"
                            className="px-2 py-3 w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                    </div>
                </div>
                <div className="relative mt-5 flex items-center">
                    <input type="text" required name="description" placeholder="Short description"
                        className="px-2 py-3 w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                </div>
                <button type="submit"
                    className="mt-8 px-8 py-2.5 rounded text-sm font-semibold bg-[#007bff] text-white hover:bg-[#006bff]">Add Item</button>
            </form>
            <Footer/>
        </div>
    );
};

export default AddProduct;