import {useLocation, useNavigate} from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div>
            <nav className={styles.nav}>
                <div>
                    <h2 onClick={() => navigate('/')}>Header</h2>
                </div>
                {location.pathname != '/add' ?
                    <div>
                        <button onClick={() => navigate('/add')}>글쓰기</button>
                    </div>
                    : <div></div>}

            </nav>
        </div>
    )
}

export default Header;