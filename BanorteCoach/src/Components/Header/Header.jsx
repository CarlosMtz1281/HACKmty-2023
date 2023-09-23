import { Link } from 'react-router-dom';

import './styles'
import { styles } from './styles';
import logo from '../../assets/LogoBanorte.png'

const Header = () => {
    return(
        <div className="Header" style={styles.Header}>
            <div className="banorte">
                <img src={logo} style={styles.logo}/>
            </div>
            <div className="paginas" style={styles.paginasHeader}>
                <div className="LandingPage">
                    <Link to="/LandingPage" style={styles.text}>LANDING</Link>
                </div>
                <div className="CoachPage">
                    <Link to="/CoachPage" style={styles.text}>COACH</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;