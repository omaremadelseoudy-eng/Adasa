import React from 'react'

export default function

    () {
    return (
        <>
            <div className='footer'>
                <div className="my-container">
                    <div className="row g-4">

                        {/* Column 1 */}
                        <div className="col-3">
                            <div className="ICON-FOOTER d-flex align-content-center align-items-center">
                                <div className="footer-Icon d-flex fs-20 fw-bold ms-2 align-items-center justify-content-center">
                                    <p className='text-white fs-20'>ع</p>
                                </div>

                                <div className="div">
                                    <p className='fw-bold fs-20 text-white'>عدسة</p>
                                </div>
                            </div>

                            <div className="desc mt-3">
                                <p className='normal-gray fs-14'>
                                    مدونة متخصصة في فن التصوير الفوتوغرافي،
                                    <br /> نشارك معكم أسرار المحترفين ونصائح   عملية<br /> لتطوير مهاراتكم.
                                </p>
                            </div>

                            <div className="d-flex gap-2">

                                <a href="#" className="Ficons">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                                <a href="#" className="Ficons">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href="#" className="Ficons">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a href="#" className="Ficons">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>

                            </div>
                        </div>

                        <div className="col-3">

                            <div className="ICON-FOOTER d-flex align-content-center align-items-center">
                                <div className="Line">
                                </div>
                                <div>
                                    <p className='fw-bold fs-20 text-white me-2'>
                                        استكشف
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="normal-gray FooterAnimate fs-14 mb-4">
                                    الرئيسية </p>
                                <p className="normal-gray FooterAnimate fs-14 mb-4">
                                    المدونة </p>
                                <p className="normal-gray FooterAnimate fs-14 mb-4">
                                    من نحن </p>
                            </div>
                        </div>

                        <div className="col-3">

                            <div className="ICON-FOOTER d-flex align-content-center align-items-center">
                                <div className="Line">
                                </div>

                                <div>
                                    <p className='fw-bold  fs-20 text-white me-2'>
                                        التصنيفات
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="normal-gray FooterAnimate fs-14 mb-4">
                                    إضاءة</p>
                                <p className="normal-gray FooterAnimate fs-14 mb-4">
                                    بورتريه </p>
                                <p className="normal-gray FooterAnimate fs-14 mb-4">
                                    مناظر طبيعية </p>
                                <p className="normal-gray FooterAnimate fs-14 mb-4">
                                    تقنيات </p>
                            </div>
                        </div>


                        <div className="col-3">
                            <div className="ICON-FOOTER d-flex align-content-center align-items-center">
                                <div className="Line">
                                </div>
                                <div>
                                    <p className='fw-bold fs-20 text-white me-2'>
                                        ابقَ على اطلاع</p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="normal-gray fs-14">
                                    اشترك للحصول على أحدث المقالات
                                    <br />
                                    والتحديثات. </p>

                            </div>
                            <div className="mt-4">
                                <input
                                    type="email"
                                    className="footer-input"
                                    placeholder="أدخل بريدك الإلكتروني" />
                            </div>

                            <div className="mt-3">
                                <button className="subscribe-btn">
                                    اشترك
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom d-flex justify-content-between align-items-center">


                        <p className="normal-gray fs-14 mb-0">
                            © 2026 عدسة. صُنع بكل 🧡 جميع الحقوق محفوظة.
                        </p>
                        <div className="d-flex gap-4">
                            <p className="normal-gray FooterAnimate2  fs-14 mb-0">
                                سياسة الخصوصية
                            </p>
                            <p className="normal-gray FooterAnimate2 fs-14 mb-0">
                                شروط الخدمة
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
