const CyberSecurity = () => {

  const CyberSecurityCourses = [

    {
      title: "CYbersecurity vs Ethical Hacking: What's the Difference? ",     
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
      auther: "John Doe",
      date: "13 Sep, 2024",
      readTime: "3 Min Read"
    },
    {
      title: "The CyberSecurity Surge: 5 Must Have CyberSecurity Certification ",
      image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-945x495.png",
      auther: "Meghana D",
      date: "5 Sep, 2024",
      readTime: "3 Min Read"
    },
    {
      title: "Top 10 Ethical Hacking Books for Beginner to Advanced ",
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Blue-Purple-Futuristic-Virus-Hacks-Youtube-Thumbnail.png",
      auther: "GUVI Greek",
      date: "11 Sep, 2024",
      readTime: "3 Min Read"
    },
    {
      title: "What is the CyberSecurity? Importance and its uses & The Growing Challenges in 2024!",
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      auther: "Saakshi priyadharshini",
      date: "11 Sep, 2024",
      readTime: "3 Min Read"
    },
  ]

  return (
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", }}>
    {CyberSecurityCourses.map((Course) => (
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

  )
}

export default CyberSecurity 
