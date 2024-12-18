import { NavLink, Outlet } from "react-router-dom"


const Navbar = () => {
    return (
        <>    
        <nav className=" navbar navbar-expand-lg bg-body-tertiary  align-items-center d-flex  justify-content-center " >
            <ul className="">
                <li><NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>All</NavLink></li>
                <li><NavLink to="fullstackdeveloper" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>FULL STACK DEVELOPER</NavLink></li>

                <li><NavLink to="datascience" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>DATA SCIENCE</NavLink></li>

                <li><NavLink to="cybersecurity" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>CYBER SECURITY</NavLink></li>
                <li><NavLink to="career" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>CAREER</NavLink></li>

            </ul>
        </nav>
            <Outlet />
        </>

    )
}

export default Navbar