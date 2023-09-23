
import style from './landingStyle.js';


export default function LandingPage() {
  return (
    <div>

      <div style={style.banner}>

        <div style={style.mainTxtWrapper}>
          <h1 style={style.mainTittle}> Bienvenido al Coach financiero de Banorte</h1>
          <button style={style.startButton}> Encuentar tu inversion ideal</button>


        </div>
      </div>

    </div>
  )
}