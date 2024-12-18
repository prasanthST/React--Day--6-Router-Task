const FullStackdeveloper = () => {

  const fullstacks = [

    {
      title: "40 Java Interview Questions for freshers with Clear & Concise Answer  ",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
      auther: "John Doe",
      date: "13 Sep, 2024",
      readTime: "3 Min Read"
    },
    {
      title: "Use React js To Fetch and Display Data from API -5 Simple steps ",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3.webp",
      auther: "Meghana D",
      date: "5 Sep, 2024",
      readTime: "3 Min Read"
    },
    {
      title: "10 Hardest and Easiest Programming Language in 2024 ",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
      auther: "GUVI Greek",
      date: "11 Sep, 2024",
      readTime: "3 Min Read"
    },
    {
      title: "Best Full Stack Development project Ideas for Beginners 2024 ",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/04/10-Best-React-Project-Ideas-for-Developers-with-Source-Code.png",
      auther: "Saakshi priyadharshini",
      date: "11 Sep, 2024",
      readTime: "3 Min Read"
    },
  ]

  return (
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", }}>
    {fullstacks.map((fullstack) => (
      <div className="card mt-5 " key={fullstack.title} style={{ width: "18rem", }}>
        <img src={fullstack.image} className="card-img-top" style={{height:"150px"}} alt="logo" />
        <div className="card-body ">
          <h5 className="card-title text-start">{fullstack.title}</h5>
          <p className="card-text d-flex justify-content-start">{fullstack.auther}</p>
          <div className="timeDate d-flex justify-content-between mt-5">
            <p className="card-text">{fullstack.date}</p>
            <p className="card-text">{fullstack.readTime}</p>
          </div>
        </div>
      </div>
    ))}
        </div>

  )
}

export default FullStackdeveloper 
