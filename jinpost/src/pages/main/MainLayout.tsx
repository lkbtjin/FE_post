import Header from "../../components/base/Header";
import Footer from "../../components/base/Footer";
import {Outlet} from "react-router-dom";

import styles from './MainLayout.module.css'

const MainLayout = (): JSX.Element => {
    return (
        <div>
            <div className={styles.main}>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    )
}

export default MainLayout;