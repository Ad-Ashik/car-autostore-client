import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navbar = <>
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to="/products">Products Part</Link>
        </li>
        <li>
            <Link to="/business">Business Summary</Link>
        </li>
        <li>
            <Link to="/reviews">Reviews</Link>
        </li>
        <li>
            <Link to="/contact">Contact Us</Link>
        </li>
        <li>
            <Link to="/blogs">Blogs</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
    </>;

    let displayImg;
    if (user?.photoURL === null) {
        displayImg = <img src="https://i.ibb.co/nbbnGqv/img-5.jpg" alt='' />
    }
    else if (user?.photoURL) {
        displayImg = <img src={user?.photoURL} alt='' />
    }
    else {
        displayImg = <img src="https://i.ibb.co/nbbnGqv/img-5.jpg" alt='' />
    }

    const logOut = () => {
        signOut(auth);
    }

    return (
        <div class="navbar bg-base-100 container mx-auto py-4 ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <Link to="" class="w-24 md:block hidden">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navbar}
                </ul>
            </div>
            <div class="navbar-end">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            {
                                displayImg
                            }
                        </div>
                    </label>
                    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link to="" class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </Link>
                        </li>
                        <li><Link to="">Settings</Link></li>
                        <li>
                            {
                                user ? <Link to="/" onClick={logOut}>Logout</Link> : <Link to="/login">Login</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;