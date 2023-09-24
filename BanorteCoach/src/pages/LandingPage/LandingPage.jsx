import { Link } from 'react-router-dom';
import style from './landingStyle.js';


export default function LandingPage() {
  return (
    <div>

      <div style={style.banner}>

        <div style={style.mainTxtWrapper}>
          <h1 style={style.mainTittle}> Bienvenido al Coach financiero de Banorte</h1>

          <Link to="/CoachPage">
            <button style={style.startButton}> Encuentra tu inversión ideal</button>
            </Link>



        </div>
      </div>

    </div>
  )
}