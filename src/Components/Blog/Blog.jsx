import React from 'react'
import AllBLogs from '../AllBlogs/AllBLogs'

export default function Blog() {
    return (
        <>
            <section className="home  d-flex align-items-center text-center MarginTop" >

                <div className="my-container">

                    <div className="d-inline-flex align-items-center gap-2 px-4 py-2 mb-4 rounded-pill HelloSpan orangeTrans">
                        <span className="orange-txt">●</span>
                        <span className="orange-txt">●</span>
                        <span className="text-white fs-14">
                            مدونتنا      
                          </span>

                    </div>

                    <h1 className=" fs-60  fw-bold text-white ">
                       استكشف <span className='orangefate7'>مقالاتنا</span>

                    </h1>
                    <p className="normal-gray fs-20  mt-4 mx-auto">
                       اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
                    </p>
                </div>

            </section>


            
          <AllBLogs/>
            
        </>
    )
}
