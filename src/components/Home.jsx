import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <p className="text-5xl text-center">Hello !!! Its me Shafriki Islam</p>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;