import { useLoaderData } from "react-router-dom";


const ProductDtls = () => {
    const productDtls = useLoaderData();
    console.log(productDtls);

    return (
        <div className="pt-20">
            hellooooooooooo
        </div>
    );
};

export default ProductDtls;