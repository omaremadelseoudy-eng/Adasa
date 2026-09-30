import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound(){
    return(
        <section className="home min-vh-100 d-flex align-items-center">
            <div className="container text-center">
                <h1 className="display-1 fw-bold orangefate7">404</h1>

                <div className="d-flex justify-content-center my-4">
                    <div className="orangeTrans rounded-circle d-flex justify-content-center align-items-center"
                        style={{width:"120px",height:"120px"}}>
                        <i className="fa-regular fa-face-frown orange-txt fs-1"></i>
                    </div>
                </div>

                <h2 className="text-white fw-bold fs-30 mb-3">
                    عفوًا! الصفحة غير موجودة
                </h2>

                <p className="normal-gray fs-18 mb-4">
                    الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
                    دعنا نعيدك إلى المسار الصحيح.
                </p>

                <div className="d-flex justify-content-center gap-3">
                    <Link to="/" className="mybtn text-decoration-none">
                        <i className="fa-solid fa-house ms-2"></i>
                        الذهاب للرئيسية
                    </Link>

                    <Link to="/Blog" className="ArticleBtn text-decoration-none px-4 py-3">
                        <i className="fa-regular fa-newspaper ms-2"></i>
                        تصفح المقالات
                    </Link>
                </div>
            </div>
        </section>
    )
}