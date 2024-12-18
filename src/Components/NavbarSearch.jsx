
const NavbarSearch = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <div className="d-flex" style={{ flexDirection: "row" }}>
                    <img loading="lazy" className="header_image" id="header_image" src="https://www.guvi.in/blog/wp-content/themes/guvi-blog\assets\images\guvi.svg" alt="header_logo"/>
                        <a className="navbar-brand">Blog    </a>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="What do you want to read?" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>

                            </form>
                    </div>
                    <a className="navbar-brand">log Out</a>
                </div>
            </nav>
        </>
    );
};


export default NavbarSearch