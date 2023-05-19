import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import NabBar from "../shared/NabBar";

const Main = () => {
    return (
        <div>
            <NabBar></NabBar>
            <Outlet></Outlet>            
            <Footer></Footer>
        </div>
    );
};

export default Main;