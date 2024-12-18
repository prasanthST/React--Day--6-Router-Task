
  const Home = () => {

    const courses = [

      {
        title: "40 Java Interview Questions for freshers with Clear & Concise Answer  ",
        image: "https://www.guvi.in/blog/wp-content/uploads/2023/04/feature.webp",
        auther: "John Doe",
        date: "13 Sep, 2024",
        readTime: "3 Min Read"
      },
      {
        title: "Use React js To Fetch and Display Data from API -5 Simple steps ",
        image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs.png",
        auther: "Meghana D",
        date: "5 Sep, 2024",
        readTime: "3 Min Read"
      },
      {
        title: "Top 10 Unique Project Ideas for College Students ",
        image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js.png",
        auther: "GUVI Greek",
        date: "11 Sep, 2024",
        readTime: "3 Min Read"
      },
      {
        title: "10 Hardest and Easiest Programming Languages in 2024 ",
        image: "https://www.guvi.in/blog/wp-content/uploads/2023/03/Untitled-design-41.jpg",
        auther: "Saakshi priyadharshini",
        date: "11 Sep, 2024",
        readTime: "3 Min Read"
      },
    ]

    return (
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", }}>
      {courses.map((course) => (
        <div className="card mt-5 " key={course.title} style={{ width: "18rem", }}>
          <img src={course.image} style={{height:"150px"}} className="card-img-top" alt="logo" />
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

  export default Home
