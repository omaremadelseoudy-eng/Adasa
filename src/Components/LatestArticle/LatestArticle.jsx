import React from 'react'
import Data from "../../ArticleFolder/posts.json";
import { Link } from 'react-router-dom';

export default function LastArticle() {

    const articles = Data.posts.filter(
        (article) => article.id === 4 || article.id === 5 || article.id === 6
    )

    return (
        <section className="py-5 latestbg" >
            <div className="container80">
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <div>
                        <span className="badge rounded-pill orangeborder px-3 py-2 orangeTrans orange-txt">

                            <span>●</span>
                            <span>●</span>
                            الأحدث
                        </span>
                        <h2 className="text-white fw-bold mt-4 fs-60">
                            أحدث المقالات
                        </h2>

                        <p className="normal-gray fs-18">
                            محتوى جديد يخرج من المطبعة
                        </p>

                    </div>

                    <Link to="/Blog" className="orange-txt fs-14 fw-bold text-decoration-none">
                        عرض جميع المقالات ←
                    </Link>

                </div>

                <div className="row g-4">
                    {articles.map((article) => (
                        <div className="col-md-4">

                            <Link to="/Blog/Details" state={{ article: article }} className="text-decoration-none">

                                <div className="GrayBG LatestCard rounded-4 overflow-hidden">

                                    <div className="position-relative">

                                        <img src={article.image} alt={article.title} className="w-100" />
                                        <span className="badge bg-dark position-absolute top-0 end-0 m-3">
                                            {article.category}
                                        </span>

                                    </div>
                                    <div className="p-4">
                                        <div className="d-flex gap-2 normal-gray fs-14 mb-3">
                                            <span>
                                                <i className="fa-regular fa-clock ms-1"></i>
                                                {article.readTime}
                                            </span>
                                            <span>•</span>
                                            <span>
                                                {article.date}
                                            </span>
                                        </div>

                                        <h3 className="text-white fw-bold fs-20">
                                            {article.title}
                                        </h3>

                                        <p className="normal-gray fs-14 mt-3">
                                            {article.excerpt}
                                        </p>

                                        <div className="d-flex justify-content-between align-items-center mt-4">
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={article.author.avatar} alt={article.author.name} className="rounded-circle latest-author w-25" />
                                                <div>

                                                    <p className="text-white fs-14 mb-0">
                                                        {article.author.name}
                                                    </p>

                                                    <p className="normal-gray fs-14 mb-0">
                                                        {article.author.role}
                                                    </p>
                                                </div>

                                            </div>
                                            <span className="latest-arrow d-flex justify-content-center align-items-center">
                                                <i className="fa-solid fa-chevron-left"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}