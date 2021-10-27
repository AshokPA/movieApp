const Header = (props) => {
    const {title, handleToggleView, toggleView} = props;
    const toggleComponentView = () => {
        handleToggleView();
    }
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" >{title}</a>
                    {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
                    {/*        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"*/}
                    {/*        aria-label="Toggle navigation">*/}
                    {/*    <span className="navbar-toggler-icon"></span>*/}
                    {/*</button>*/}
                    {/*<div className="collapse navbar-collapse" id="navbarCollapse">*/}
                    {/*    <ul className="navbar-nav me-auto mb-2 mb-md-0">*/}
                    {/*        <li className="nav-item">*/}
                    {/*            <a className="nav-link" href="#">About us</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item">*/}
                    {/*            <a className="nav-link" href="#">Help</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item">*/}
                    {/*            <a className="nav-link" href="#">Products</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item">*/}
                    {/*            <a className="nav-link" href="#">Sign in</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item">*/}
                    {/*            <a className="nav-link" href="#">Sign up</a>*/}
                    {/*        </li>*/}

                    {/*    </ul>*/}
                    {/*    <form className="d-flex">*/}
                    {/*        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />*/}
                    {/*        <button className="btn btn-outline-success" type="submit">Search</button>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                    <button className="btn btn-outline-success"
                            type="button"
                            onClick={toggleComponentView}
                    >{toggleView ? 'View' : 'Add'}</button>
                </div>
            </nav>
        </header>
    )
}
export default Header;
