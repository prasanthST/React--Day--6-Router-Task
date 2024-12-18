
const Career = () => {
   const career=[
    {
        
        title:
          "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
        image:
          "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
          auther: "Meghana D",
          date: "5 Sep, 2024",
          readTime: "3 Min Read"
      },
      {
        id: 2,
        title: "Best 11 Product-Based Companies for Product Managers in India ",
        image:
          "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
        date: "14 November 2023",
        readTime: "3 Min Read"

      },
      {
        id: 3,
        title: "Top 5 IT Jobs for Economics Students",
        image:
          "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
        date: "4 December 2023 ",
        readTime: "5 Min Read"

      },
      {
        id: 4,
        title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
        image:
          "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
        date: "2 December 2023",
        readTime: "6 Min Read"

      },
   ]

  return (
    <div>
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", }}>
    {career .map((Course) => (
      <div className="card mt-5 " key={Course.title} style={{ width: "18rem", }}>
        <img src={Course.image} className="card-img-top" style={{height:"150px"}} alt="logo" />
        <div className="card-body ">
          <h5 className="card-title text-start">{Course.title}</h5>
          <p className="card-text d-flex justify-content-start">{Course.auther}</p>
          <div className="timeDate d-flex justify-content-between mt-5">
            <p className="card-text">{Course.date}</p>
            <p className="card-text">{Course.readTime}</p>
          </div>
        </div>
      </div>
    ))}
        </div>
    </div>
  )
}

export default Career