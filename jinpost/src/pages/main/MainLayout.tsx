import Header from "../../components/base/Header";
import Footer from "../../components/base/Footer";
import {Outlet} from "react-router-dom";

const MainLayout = (): JSX.Element => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainLayout;