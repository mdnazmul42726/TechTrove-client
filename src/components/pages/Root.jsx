import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import Swal from 'sweetalert2'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Root = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUserSignOut = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to logout?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, Logout'

        }).then((result) => {

            if (result.isConfirmed) {

                signOut(auth).then(() => {
                    Swal.fire(
                        'Logged out',
                        'You have successfully logged out.',
                        'success'
                    );
                    navigate('/')
                }).catch(err => console.log(err))
            }
        });

    }

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
                        <div className="space-x-3 flex">

                            {user && <div className="flex space-x-3">
                                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-800 font-semibold" : "font-semibold"}>Home</NavLink>
                                <NavLink to="/add-product" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-800 font-semibold" : "font-semibold"}>Add Product</NavLink>
                                <NavLink to="/cart" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-800" : "font-semibold"}><span className="text-3xl text-sky-600" title="Cart"><AiOutlineShoppingCart /></span></NavLink>
                            </div>}

                            {!user && <div className="space-x-3">
                                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-800 font-semibold" : "font-semibold"}>Home</NavLink>
                                <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-800 font-semibold" : "font-semibold"}>About</NavLink>
                                <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-800 font-semibold" : "font-semibold"}>Contact</NavLink>
                            </div>}

                        </div>
                        {user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-64">
                                <li><a>{user?.displayName}</a></li>
                                <li><a className="justify-between">{user?.email}</a></li>
                                <li><a onClick={handleUserSignOut}>Logout</a></li>
                            </ul>
                        </div> : <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-800 font-semibold" : "font-semibold"} to={"/login"}> <button className="flex font-semibold"> Login <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                        </button> </NavLink>}
                    </div>
                </div>
            </div>
            {/* Navbar end */}
            <div className=""><Outlet /></div>
        </div>
    );
};

export default Root;