import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="text-5xl flex items-center gap-10">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/users' >Users</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/comments'>Comments</Link>
            </nav>
        </div>
    );
};

export default Navbar;