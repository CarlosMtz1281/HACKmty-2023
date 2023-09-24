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
                <Link to="/LandingPage" style={styles.text}>
                <img src={logo} style={styles.logo}/>
                </Link>
                <VerticalLineDivider />
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'left', gap: "0px"}}>
                <div>COACH</div><div>FINANCIERO</div>
                </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'right', alignItems: 'right', gap: "20px", marginRight: '-10rem'}}>
                <div style={{fontSize: '17px', alignContent: 'center', marginTop:'1.4vh'}}>
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