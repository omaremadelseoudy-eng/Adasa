import React from 'react'
import Articles from '../Articles/Articles'
import Explore from '../Explore/Explore'
import LastArticle from '../LatestArticle/LatestArticle'
import JoinUs from '../JoinUS/JoinUs'
import { Link } from 'react-router-dom'
import Blog from '../Blog/Blog'

export default function Home() {
  return (
    <>

      <section className="home min-vh-100 d-flex align-items-center text-center mt-5" >

        <div className="my-container">

          <div className="d-inline-flex align-items-center gap-2 px-4 py-2 mb-4 rounded-pill HelloSpan orangeTrans">
            <span className="orange-txt">●</span>
            <span className="orange-txt">●</span>
            <span className="text-white fs-14">
              مرحباً بك في عدسة
            </span>

          </div>

          <h1 className=" fs-72  fw-bold text-white ">
            اكتشف <span className="orangefate7">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>
          <p className="normal-gray fs-24  mt-4 mx-auto">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في
            <br />
            التصوير.
          </p>


          <div className="d-flex justify-content-center gap-3 mt-5">
            <Link to="/Blog" className="mybtn btnhov fw-bold fs-20 text-decoration-none">
              استكشف المقالات
            </Link>

            <button className=" mybtn2  rounded-pill px-4 py-3 fw-bold fs-20">
              <i className="fa-solid fa-circle-info ms-2 "></i>

              اعرف المزيد
            </button>

          </div>
          <div className="newContainer">
            <div className="row justify-content-center g-3 mt-5">

              <div className="col-6 col-md-3">
                <div className="MyBlack border border-secondary rounded-4 text-center p-4">
                  <i className="fa-solid fa-newspaper orange-txt fs-24"></i>
                  <p className="orange-txt fs-24 fw-bold mb-0">50+</p>
                  <p className="normal-gray fs-14 mb-0">مقالة</p>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="MyBlack border border-secondary rounded-4 text-center p-4">
                  <i className="fa-solid fa-users orange-txt fs-24"></i>
                  <p className="orange-txt fs-24 fw-bold mb-0">+10 آلف</p>
                  <p className="normal-gray fs-14 mb-0">قارئ</p>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="MyBlack border border-secondary rounded-4 text-center p-4">
                  <i className="fa-solid fa-folder orange-txt fs-24"></i>
                  <p className="orange-txt fs-24 fw-bold mb-0">4</p>
                  <p className="normal-gray fs-14 mb-0">تصنيفات</p>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="MyBlack border border-secondary rounded-4 text-center p-4">
                  <i className="fa-solid fa-pen-nib orange-txt fs-24"></i>
                  <p className="orange-txt fs-24 fw-bold mb-0">6</p>
                  <p className="normal-gray fs-14 mb-0">كاتب</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </section>
      <Articles />
      <Explore />
      <LastArticle />
      <JoinUs />
    </>




  )
}