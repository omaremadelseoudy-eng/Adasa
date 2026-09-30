import React from 'react'
import Img5 from '../../assets/img5.jfif'
import Img7 from '../../assets/img7.jfif'
import Img9 from '../../assets/img9.jfif'

export default function JoinUs() {
  return (
    <>
      <section className="py-5 latestbg mb-4">

            <div className="container80">

                <div className="col-lg-8 mx-auto">

                    <div className="GrayBG  rounded-4 p-5 text-center">

                        <div className="d-flex justify-content-center mb-4">
                            <div className="orangebg rounded-4 p-3">
                                <i className="fa-regular fa-envelope text-white fs-24"></i>
                            </div>
                        </div>

                        <h2 className="text-white fw-bold fs-30 mb-3">
                            اشترك في
                            <span className="orange-txt"> نشرتنا الإخبارية</span>
                        </h2>

                        <p className="normal-gray fs-18 mb-4">
                            احصل على نصائح التصوير العصرية ودروس جديدة مباشرة في بريدك الإلكتروني
                        </p>

                        <div className="row justify-content-center g-2">

                            <div className="col-md-7">
                                <input type="email" className="footer-input"
                                    placeholder="أدخل بريدك الإلكتروني"/>
                            </div>

                            <div className="col-md-3">
                                <button className="mybtn4 w-100 fw-bold h-100">
                                    اشترك الآن
                                </button>
                            </div>

                        </div>

                        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">

                            <div className="d-flex">
                                <img src={Img5} className="rounded-circle border border-dark formlogo"/>

                                <img src={Img7}  className="rounded-circle border border-dark  formlogo"/>

                                <img src={Img9} className="rounded-circle border border-dark  formlogo"/>

                            </div>
                            <span className="normal-gray fs-14">
                                انضم لـ <span className="text-white">+10,000</span> مصور
                            </span>

                            <span className="normal-gray fs-14">
                                بدون إزعاج
                            </span>

                            <span className="normal-gray fs-14">
                                إلغاء الاشتراك في أي وقت
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    </>
  )
}
