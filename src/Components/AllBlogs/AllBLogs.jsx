import React, { useState } from 'react'
import Data from "../../ArticleFolder/posts.json"
import { Link, useLocation } from 'react-router-dom'

export default function AllBLogs() {

    const location = useLocation()

    const selectedCategory = location.state?.category || "جميع المقالات"

    const [ChosenArt, setChosenArt] = useState(selectedCategory)

    let articles = Data.posts

    if (ChosenArt !== "جميع المقالات") {
        articles = Data.posts.filter((article) => article.category === ChosenArt)
    }
    articles = articles.slice(0, 6)

    return (

        <section className="py-5 latestbg">

            <div className="container80">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <input type="text" className="footer-input w-25" placeholder="ابحث في المقالات..." />

                    <div className="d-flex gap-2">
                        <button className="ArticleBtn"
                            onClick={() => setChosenArt("جميع المقالات")}>جميع المقالات</button>
                        <button className="ArticleBtn"
                            onClick={() => setChosenArt("إضاءة")}>إضاءة</button>
                        <button className="ArticleBtn"
                            onClick={() => setChosenArt("بورتريه")}>بورتريه</button>
                        <button className="ArticleBtn"
                            onClick={() => setChosenArt("مناظر طبيعية")}>مناظر طبيعية</button>
                        <button className="ArticleBtn"
                            onClick={() => setChosenArt("تقنيات")}>تقنيات</button>
                        <button className="ArticleBtn"
                            onClick={() => setChosenArt("معدات")}>معدات</button>

                    </div>

                </div>
                <p className="normal-gray fs-14 mb-4">
                    عرض <span className="text-white">{articles.length}</span> مقالات
                </p>

                <div className="row g-4">

                    {articles.map((article) => (
                        <div className="col-md-4" key={article.id}>

                            <Link to="/Blog/Details" state={{ article: article }} className="text-decoration-none">

                                <div className="GrayBG LatestCard rounded-4 overflow-hidden">

                                    <div className="position-relative">

                                        <img src={article.image} alt={article.title} className="w-100" />

                                        <span className="badge bg-dark position-absolute top-0 end-0 m-3">{article.category}</span>

                                    </div>
                                    <div className="p-4">

                                        <div className="d-flex gap-2 normal-gray fs-14 mb-3">

                                            <span><i className="fa-regular fa-clock ms-1"></i>{article.readTime}</span>

                                            <span>•</span>

                                            <span>{article.date}</span>
                                        </div>

                                        <h3 className="text-white fw-bold fs-20">{article.title}</h3>

                                        <p className="normal-gray fs-14 mt-3">{article.excerpt}</p>

                                        <div className="d-flex justify-content-between align-items-center mt-4">

                                            <div className="d-flex align-items-center gap-2">

                                                <img src={article.author.avatar} alt={article.author.name} className="rounded-circle latest-author w-25" />

                                                <div>
                                                    <p className="text-white fs-14 mb-0">{article.author.name}</p>
                                                    <p className="normal-gray fs-14 mb-0">{article.author.role}</p>
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