import React from "react";
import { Link, useLocation } from "react-router-dom";
import Data from "../../ArticleFolder/posts.json";

export default function Details() {

    const location = useLocation();

    const article = location.state?.article;

    if (!article) {
        return (
            <section
                className="articlebg min-vh-100 text-center py-5"
                dir="rtl"
            >
                <h2 className="text-white mb-4">
                    المقال غير موجود
                </h2>

                <p className="normal-gray mb-4">
                    لم يتم إرسال مقال إلى الصفحة
                </p>

                <Link
                    to="/Blog"
                    className="mybtn text-decoration-none"
                >
                    العودة إلى المدونة
                </Link>
            </section>
        );
    }


    const sections = article.content
        .split("\n\n")
        .filter((item) => item.startsWith("## "))
        .map((item, index) => ({
            id: `section-${index}`,
            title: item.replace("## ", "")
        }));

    const relatedArticles = Data.posts
        .filter(
            (post) =>
                post.category === article.category &&
                post.id !== article.id
        )
        .slice(0, 3);


    const articleDate = new Date(article.date).toLocaleDateString(
        "ar-EG",
        {
            day: "numeric",
            month: "long"
        }
    );



    function goToSection(sectionId) {

        const section = document.getElementById(sectionId);

        if (section) {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    }

    return (
        <section
            className="articlebg text-white" >
            <div className="blog-hero position-relative">

                <img src={article.image} alt={article.title}
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                />
                <div className="blog-overlay position-absolute top-0 start-0 w-100 h-100">
                </div>

                <div className="container80 position-relative">
                    <div className="d-flex justify-content-end pt-4">
                        <div className="bg-dark bg-opacity-75 rounded-pill px-3 py-2">

                            <Link
                                to="/"
                                className="text-white text-decoration-none fs-14"
                            >
                                الرئيسية
                            </Link>
                            <span className="normal-gray mx-2">
                                ‹
                            </span>
                            <Link
                                to="/Blog"
                                className="text-white text-decoration-none fs-14"
                            >
                                المدونة
                            </Link>
                            <span className="normal-gray mx-2">
                                ‹
                            </span>
                            <span className="orange-txt fs-14">
                                {article.category}
                            </span>
                        </div>
                    </div>

                    <div className="row justify-content-center align-items-end blog-hero-content">
                        <div className="col-lg-8 text-end">
                            <div className="d-flex justify-content-end align-items-center gap-3 mb-4">
                                <span className="badge orangebg text-white rounded-pill px-3 py-2">
                                    {article.category}
                                </span>
                                <span className="normal-gray fs-14">
                                    <i className="fa-regular fa-calendar ms-1"></i>
                                    {articleDate}
                                </span>
                                <span className="normal-gray fs-14">
                                    <i className="fa-regular fa-clock ms-1"></i>
                                    {article.readTime}
                                </span>
                            </div>
                            <h1 className="fs-60 fw-bold text-white lh-base mb-4">
                                {article.title}
                            </h1>
                            <div className="d-flex justify-content-end">
                                <div className="articlecardbg rounded-4 p-3 d-flex align-items-center gap-3">

                                    <img src={article.author.avatar} alt={article.author.name} className="articleimg rounded-circle" />
                                    <div className="text-end">
                                        <p className="text-white fw-bold mb-1">
                                            {article.author.name}
                                        </p>
                                        <p className="normal-gray fs-14 mb-0">
                                            {article.author.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container80 py-5">
                <div className="row g-4">
                    <div className="col-lg-9 order-2 order-lg-1">
                        <div className="orangeTrans orangeborder rounded-4 p-4 mb-4">
                            <p className="text-white fst-italic mb-0 fs-18">
                                "{article.excerpt}"
                            </p>
                        </div>
                        <div className="article-content">
                            {article.content
                                .split("\n\n")
                                .map((paragraph, index) => {
                                    if (paragraph.startsWith("## ")) {
                                        const title =
                                            paragraph.replace("## ", "");

                                        const sectionIndex =
                                            sections.findIndex(
                                                (section) =>
                                                    section.title === title
                                            );

                                        return (
                                            <h2
                                                id={`section-${sectionIndex}`}
                                                className="text-white fw-bold fs-30 mt-5 mb-3" >
                                                <i className="fa-solid fa-camera orange-txt ms-2"></i>
                                                {title}
                                            </h2>
                                        );
                                    }
                                    return (
                                        <p
                                            className="text-white fs-18 lh-lg mb-4">
                                            {paragraph}
                                        </p>
                                    );
                                })}
                        </div>


                        <div className="articlecardbg rounded-4 p-4 mt-5">

                            <div className="d-flex align-items-center gap-2 mb-3">
                                <div className="category-icon">
                                    <i className="fa-solid fa-tag"></i>
                                </div>
                                <h5 className="text-white fw-bold mb-0">
                                    الوسوم
                                </h5>
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                {article.tags.map((tag) => (

                                    <span
                                        className="badge bg-dark border border-secondary rounded-pill px-3 py-2 normal-gray" >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="articlecardbg rounded-4 p-4 mt-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex gap-2">
                                    <button className="Ficons">
                                        <i className="fa-solid fa-link"></i>
                                    </button>
                                    <button className="Ficons">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </button>
                                    <button className="Ficons">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </button>
                                    <button className="Ficons">
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </button>
                                </div>

                                <div className="d-flex align-items-center gap-2">
                                    <h5 className="text-white fw-bold mb-0">
                                        شارك المقال
                                    </h5>
                                    <div className="category-icon">
                                        <i className="fa-solid fa-share-nodes"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="articlecardbg rounded-4 p-4 mt-4">
                            <div className="d-flex align-items-center gap-4">
                                <img
                                    src={article.author.avatar}
                                    alt={article.author.name}
                                    className="articleimg rounded-4"
                                />
                                <div className="text-end">
                                    <p className="orange-txt fw-bold fs-14 mb-1">
                                        كاتب المقال
                                    </p>

                                    <h4 className="text-white fw-bold mb-1">
                                        {article.author.name}
                                    </h4>
                                    <p className="normal-gray fs-14 mb-2">
                                        {article.author.role}
                                    </p>
                                    <p className="normal-gray fs-14 mb-0">
                                        مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 order-1 order-lg-2">
                        <div className="articlecardbg contents-card rounded-4 p-4 mb-4">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="category-icon">
                                    <i className="fa-solid fa-list"></i>
                                </div>
                                <h5 className="text-white fw-bold mb-0">
                                    محتويات المقال
                                </h5>
                            </div>
                            <div className="d-flex flex-column gap-3">
                                {sections.map((section, index) => (
                                    <button
                                        onClick={() =>
                                            goToSection(section.id)
                                        }
                                        className="contents-link normal-gray text-decoration-none fs-14 d-flex justify-content-between align-items-center w-100 border-0 bg-transparent p-0"
                                    >
                                        <span className="badge bg-dark rounded-circle">
                                            {index + 1}
                                        </span>
                                        <span>
                                            {section.title}
                                        </span>
                                    </button>
                                ))}

                            </div>
                        </div>
                        <div className="articlecardbg rounded-4 p-3 mb-4">
                            <div className="row g-2">
                                <div className="col-6">
                                    <div className="bg-black rounded-4 text-center p-3">
                                        <i className="fa-regular fa-clock orange-txt fs-24"></i>
                                        <p className="text-white fw-bold mb-1 mt-2">
                                            {article.readTime.split(" ")[0]} دقائق
                                        </p>
                                        <p className="normal-gray fs-14 mb-0">
                                            وقت القراءة
                                        </p>
                                    </div>
                                </div>


                                <div className="col-6">
                                    <div className="bg-black rounded-4 text-center p-3">
                                        <i className="fa-regular fa-calendar orange-txt fs-24"></i>

                                        <p className="text-white fw-bold mb-1 mt-2">
                                            {articleDate}
                                        </p>

                                        <p className="normal-gray fs-14 mb-0">
                                            تاريخ النشر
                                        </p>
                                    </div>

                                </div>


                            </div>

                        </div>


                        <div className="rounded-4 p-4 orangeTrans border border-warning">
                            <div className="text-center">
                                <div className="category-icon mx-auto mb-3">
                                    <i className="fa-regular fa-envelope"></i>
                                </div>

                                <h5 className="text-white fw-bold">
                                    لا تفوت جديدنا
                                </h5>
                                <p className="normal-gray fs-14">
                                    اشترك للحصول على أحدث المقالات
                                </p>
                                <button className="mybtn4 w-100">
                                    تصفح المزيد
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="border-top border-secondary mt-5 pt-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h2 className="text-white fw-bold fs-30 mb-2">
                                مقالات قد تعجبك
                            </h2>
                            <p className="normal-gray fs-14 mb-0">
                                استكشف المزيد من المحتوى المميز
                            </p>
                        </div>

                        <Link
                            to="/Blog"
                            className="orange-txt text-decoration-none"
                        >
                            عرض الكل ←

                        </Link>

                    </div>

                    <div className="row g-4">
                        {relatedArticles.map((relatedArticle) => (
                            <div
                                className="col-md-4"
                            >
                                <Link
                                    to="/Blog/Details"
                                    state={{
                                        article: relatedArticle
                                    }}
                                    className="text-decoration-none"
                                >
                                    <div className="LatestCard GrayBG rounded-4 overflow-hidden h-100">
                                        <div className="position-relative">
                                            <img src={relatedArticle.image} alt={relatedArticle.title} className="w-100" />
                                            <span className="badge orangebg position-absolute top-0 end-0 m-3">
                                                {relatedArticle.category}
                                            </span>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-white fw-bold fs-20">
                                                {relatedArticle.title}
                                            </h3>
                                            <div className="d-flex justify-content-between mt-4">
                                                <span className="normal-gray fs-14">
                                                    {relatedArticle.author.name}
                                                </span>
                                                <span className="normal-gray fs-14">
                                                    {relatedArticle.readTime}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}