import React from 'react'
import Data from "../../ArticleFolder/posts.json";
import { Link } from 'react-router-dom';

export default function Explore() {
    const categories = Data.categories

    return (
        <>
            <section className="py-5 categoriesbg">
                <div className="container80">
                    <div className="text-center mb-5">
                        <span className="badge rounded-pill orangeborder px-3 py-2 orangeTrans orange-txt">
                            <span className="orange-txt">●●</span>
                            التصنيفات
                        </span>
                        <h2 className="text-white fw-bold mt-4 fs-60">
                            استكشف حسب الموضوع
                        </h2>
                        <p className="normal-gray fs-18">
                            اعثر على محتوى مصمم حسب اهتماماتك
                        </p>
                    </div>

                    <div className="row g-4">

                        <div className="col-md-3">
                            <Link to="/Blog" state={{ category: categories[0].name }} className="text-decoration-none">
                                <div className="category-card p-4 rounded-4">
                                    <div className="category-icon mb-3">
                                        <i className="fa-solid fa-sun"></i>
                                    </div>
                                    <h3 className="text-white fw-bold fs-18">
                                        {categories[0].name}
                                    </h3>
                                    <p className="normal-gray fs-14 mb-0">
                                        {categories[0].count} مقالة
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-3">
                            <Link to="/Blog" state={{ category: categories[1].name }} className="text-decoration-none">
                                <div className="category-card p-4 rounded-4">
                                    <div className="category-icon mb-3">
                                        <i className="fa-solid fa-user"></i>
                                    </div>
                                    <h3 className="text-white fw-bold fs-18">
                                        {categories[1].name}
                                    </h3>
                                    <p className="normal-gray fs-14 mb-0">
                                        {categories[1].count} مقالة
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-3">
                            <Link to="/Blog" state={{ category: categories[2].name }} className="text-decoration-none">
                                <div className="category-card p-4 rounded-4">
                                    <div className="category-icon mb-3">
                                        <i className="fa-solid fa-mountain"></i>
                                    </div>
                                    <h3 className="text-white fw-bold fs-18">
                                        {categories[2].name}
                                    </h3>
                                    <p className="normal-gray fs-14 mb-0">
                                        {categories[2].count} مقالة
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-3">
                            <Link to="/Blog" state={{ category: categories[3].name }} className="text-decoration-none">
                                <div className="category-card p-4 rounded-4">
                                    <div className="category-icon mb-3">
                                        <i className="fa-solid fa-sliders"></i>
                                    </div>
                                    <h3 className="text-white fw-bold fs-18">
                                        {categories[3].name}
                                    </h3>
                                    <p className="normal-gray fs-14 mb-0">
                                        {categories[3].count} مقالة
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-3">
                            <Link to="/Blog" state={{ category: categories[4].name }} className="text-decoration-none">
                                <div className="category-card p-4 rounded-4">
                                    <div className="category-icon mb-3">
                                        <i className="fa-solid fa-sun"></i>
                                    </div>
                                    <h3 className="text-white fw-bold fs-18">
                                        {categories[4].name}
                                    </h3>
                                    <p className="normal-gray fs-14 mb-0">
                                        {categories[4].count} مقالة
                                    </p>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}