import { useState } from "react"

const MostRecent = () => {

    const article = {
        title: "AI Tools for Date Analysis: The Ultimate Guide",
        image: "https://www.guvi.in/blog/wp-content/uploads/2024/09/AI-Tools-for-Data-Analysis.webp",
        date: "12 Sep, 2024",
        readTime: "4 Min Read"
    }

    const [recentArticles, setRecentArticles] = useState([

        {
            title: "How Generative AI is Transforming Software Testing",
            image: "https://www.guvi.in/blog/wp-content/uploads/2024/09/Best-AI-Tools-for-Data-Science.webp",
            date: "11 Sep, 2024",
            readTime: "3 Min Read"
        },
        {
            title: "Understanding Gherkin: The Language That Simplifies Software Testing",
            image: "https://www.guvi.in/blog/wp-content/uploads/2024/09/Understanding-Gherkin.webp",
            date: "12 Sep, 2024",
            readTime: "4 Min Read"
        },
        {
            title: "How Generative AI is Transforming Software Testing",
            image: "https://www.guvi.in/blog/wp-content/uploads/2024/09/AI-Tools-for-Developers.webp",
            date: "11 Sep, 2024",
            readTime: "3 Min Read"
        },
    ])
    return (
        <>
            <div className="row mt-4">
                <div className="col-md-6 ml-auto">
                    <h3 className="heading d-flex justify-content-start mb-3">Most Resent Article</h3>
                    <div className="card " style={{ width: "18rem;", padding:"20px" }}>
                        <img src={article.image} style={{borderRadius:"3px"}} className="card-img-top" alt={article.logo} />
                        <div className="card-body" style={{height:"320px"}}>
                            <h4 className="card-text text-start ">{article.title}</h4>
                            <div className="timeDate d-flex justify-content-between ">
                            <p className="card-text">{article.date}</p>
                            <p className="card-text">{article.readTime}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-md-6  mt-5"  >
                    {recentArticles.map((rartical) =>(
                    <div className="card mb-3" style={{padding:"20px"}} key={rartical.title}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={rartical.image} style={{height: "127px", width: "175px" , borderRadius:"3px"}} className="img-fluid rounded-start" alt={rartical.title} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-start ">{rartical.title}</h5>
                                    <div className="split d-flex justify-content-between" >
                                    <p className="card-text ">{rartical.date}</p>
                                    <p className="card-text"><small className="text-body-secondary">{rartical.readTime}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MostRecent