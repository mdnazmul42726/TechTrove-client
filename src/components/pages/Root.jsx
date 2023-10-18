import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png"

const Root = () => {
    const user = false;

    return (
        <div>
            {/* Navbar Start */}
            <div className="shadow-md fixed z-50 w-full">
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <img className="w-[7%] hidden md:flex" src={logo} alt="" />
                        <a className="text-xl md:text-2xl font-bold">Tech<span className="text-[#F6AA19]">Trove</span></a>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="">
                            <NavLink className={"mr-2 ml-2 md:ml-0 md:mr-5"} to={"/"}>Home</NavLink>
                            <NavLink className={"mr-2 md:mr-5"} to={"/add-product"}>Add Product</NavLink>
                            <NavLink className={"mr-2 md:mr-3"} to={"/my-cart"}>My Cart</NavLink>
                        </div>
                        {user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div> : <NavLink className={"mr-3"} to={"/login"}>Login</NavLink>}
                    </div>
                </div>
            </div>
            {/* Navbar end */}
            <div className=""><Outlet /></div>
        </div>
    );
};

export default Root;