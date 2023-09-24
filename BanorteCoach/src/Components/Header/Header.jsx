import { Link } from 'react-router-dom';

import './styles'
import { styles } from './styles';
import logo from '../../assets/LogoBanorte.png'
import userimg from '../../assets/userimg.jpg'
import VerticalLineDivider from './Divider';

const Header = () => {
    return(
        <div className="Header" style={styles.Header}>
            <div className="banorte" style={styles.banorte}>
                <img src={logo} style={styles.logo}/>
                <VerticalLineDivider />
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'left', gap: "0px"}}>
                <div>COACH</div><div>FINANCIERO</div>
                </div>
            </div> 
            <div className="paginas" style={styles.paginasHeader}>
                <div className="LandingPage">
                    <Link to="/LandingPage" style={styles.text}>LANDING</Link>
                </div>
                <div className="CoachPage">
                    <Link to="/CoachPage" style={styles.text}>COACH</Link>
                </div>
                <div className="InversionesPage">
                    <Link to="/InversionesPage" style={styles.text}>INVERSIONES</Link>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'right', alignItems: 'right', gap: "20px", marginRight: '-10rem'}}>
                <div style={{fontSize: '17px'}}>
                    Jose
                </div>
                <div>
                    <img src={userimg} style={{width: '2.7rem', borderRadius: '50%'}}/>
                </div>
            </div>
        </div>
    )
}

export default Header;