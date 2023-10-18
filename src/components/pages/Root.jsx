import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import Swal from 'sweetalert2'

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
                        <div className="">
                            <NavLink className={"mr-2 ml-2 md:ml-0 md:mr-5"} to={"/"}>Home</NavLink>
                            <NavLink className={"mr-2 md:mr-5"} to={"/add-product"}>Add Product</NavLink>
                            <NavLink className={"mr-2 md:mr-3"} to={"/my-cart"}>My Cart</NavLink>
                        </div>
                        {user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL}/>
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-64">
                                <li><a>{user?.displayName}</a></li>
                                <li><a className="justify-between">{user?.email}</a></li>
                                <li><a onClick={handleUserSignOut}>Logout</a></li>
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