import React from 'react'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom' 
import Blog from '../Blog/Blog'
import Home from '../Home/Home'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg NavBg  fixed-top  ">
                <div className="my-container d-flex">
                    <img src={logo} className='logo-w' alt="" />
                     <div  className="d-flex flex-column me-2">
                         <Link className="navbar-brand fw-bold fs-20 text-white m-0 p-0" to="/Home">عدسة</Link>
                    <p className='orange-txt'>عالم التصوير الفوتوغرافي</p>
                     </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link GrayTxt MainLink " aria-current="page" to="">الرئيسية</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link GrayTxt" to="/Blog">المدونة</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link GrayTxt" to="#">من نحن</Link>
                            </li>

                        </ul>
                        <i className=" fa-solid fa-magnifying-glass ms-3 GrayTxt "></i>

                        <button className="fs-14 fw-semibold mybtn btnhov" type="submit">ابدا القراءة</button>
                    </div>
                </div>
            </nav>


        </>
    )
}
