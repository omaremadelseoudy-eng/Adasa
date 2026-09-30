import React from 'react'
import Data from "../../ArticleFolder/posts.json";
import { Link } from 'react-router-dom';
import Details from '../Details/Details'

export default function Articles() {
    const articles = Data.posts.slice(0, 3)

    return (

        <section className="py-5 articlebg" >

            <div className="container80">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <span className="badge rounded-pill orangeborder   px-3 py-2 orangeTrans orange-txt">
                            <span className="orange-txt">●</span>
                            <span className="orange-txt">●</span>
                            مميز
                        </span>

                        <h2 className="text-white fw-bold mt-4 fs-60 ">
                            مقالات مختارة</h2>

                        <p className="normal-gray fs-18 mb-5">
                            محتوى منتقى لبدء رحلة تعلمك </p>
                    </div>

                    <Link to="/Blog" className="mybtn3 fw-bold fs-14 text-decoration-none">
                        عرض الكل
                        <i className="fa-solid fa-chevron-left me-2"></i>
                    </Link >

                </div>

                {articles.map((article) => (

                    <div
                        className="row g-0 border-1 rounded-4 overflow-hidden mb-3 articlecardbg "
                    >

                        <div className="col-md-6 ">
                            <img src={article.image} alt={article.title} className="w-100 h-100 object-fit-cover" />
                        </div>

                        <div className="col-md-6 p-4">

                            <span className="badge  orangeTrans orange-txt orangeborder mb-3">
                                {article.category}
                            </span>

                            <span className='duration me-3 normal-gray'>
                                {article.readTime}

                            </span>
                            <h3 className="text-white fw-bold fs-30 mb-4">
                                {article.title}
                            </h3>

                            <p className="normal-gray fs-16 mb-5">
                                {article.excerpt}
                            </p>

                            <div className="d-flex justify-content-between align-items-center mt-4">

                                <div className="d-flex align-items-center gap-2">
                                    <img src={article.author.avatar} alt={article.author.name}

                                        className="rounded-circle articleimg" />

                                    <span className="text-white fs-14">
                                        {article.author.name}
                                    </span>
                                </div>
                                <span className="orange-txt  fs-20">
                                    <Link
                                        to="/Blog/Details"
                                        state={{ article: article }}
                                        className="separate ms-3 fs-20 text-decoration-none orange-txt"
                                    >
                                        اقرأ المقال
                                    </Link>

                                    ←
                                </span>
                            </div>
                        </div>
                    </div>

                ))}

            </div>

        </section>


    )
}
