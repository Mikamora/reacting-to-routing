import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <main className="container d-flex justify-content-between">
            <Link to={"/"} className="btn btn-primary my-2">
                Home
            </Link>
            <Link to={"/People"} className="btn btn-primary my-2">
                People
            </Link>
            <Link to={"/Films"} className="btn btn-primary my-2">
                Films
            </Link>
        </main>
    )
}

export default Navbar;