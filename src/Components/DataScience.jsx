

const DataScience = () => {

  const DataScienceCourses = [

    {
      title: "Roles and Responsibilities of a Data Science ",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
      auther: "John Doe",
      date: "13 Sep, 2024",
      readTime: "3 Min Read"
    },
    {
      title: "10 Best Data Science Online  Courses for Beginers | 2024 ",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
      auther: "Meghana D",
      date: "5 Sep, 2024",
      readTime: "3 Min Read"
    },
    {
      title: "<strong> How Long Would it Take to Learn Data Science?</strong>",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science-2048x1072.png",
      auther: "GUVI Greek",
      date: "11 Sep, 2024",
      readTime: "3 Min Read"
    },
 
  ]

  return (
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", }}>
    {DataScienceCourses.map((course) => (
      <div className="card mt-5 " key={course.title} style={{ width: "24rem", height: "26rem" }}>
        <img src={course.image} className="card-img-top" style={{height:"180px"}} alt="logo" />
        <div className="card-body ">
          <h5 className="card-title text-start">{course.title}</h5>
          <p className="card-text d-flex justify-content-start">{course.auther}</p>
          <div className="timeDate d-flex justify-content-between mt-5">
            <p className="card-text">{course.date}</p>
            <p className="card-text">{course.readTime}</p>
          </div>
        </div>
      </div>
    ))}
        </div>

  )
}

export default DataScience
