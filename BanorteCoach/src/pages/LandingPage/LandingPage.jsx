import { Link } from "react-router-dom";
import style, { style2 } from "./landingStyle.js";
import bannerExplicacion from "../../assets/LandingImagen.jpg";
import bannerExplicacion2 from "../../assets/torre-koi-png.png";

export default function LandingPage() {
  return (
    <div>
      <div style={style.banner}>
        <div style={style.mainTxtWrapper}>
          <h1 style={style.mainTittle}>
            {" "}
            Bienvenido al Coach financiero de Banorte
          </h1>

          <Link to="/CoachPage">
            <button style={style.startButton}>
              {" "}
              Encuentra tu inversión ideal
            </button>
          </Link>
        </div>
      </div>

      <div style={style2.banner}>
        <div style={style2.mainTxtWrapper}>
          <h2 style={style2.mainTittle}>¿Qué es BanCoach?</h2>
          <div style={style2.imageContainer}>
            <img src={bannerExplicacion} />
            <div style={{ width: "50%" }}>
              <p>
                BanCoach es un sistema que te facilita encontrar las mejores
                opciones de inversión dependiendo de tu perfil de inversionista.
              </p>

              <p>
                Primero empieza con una perfilación de tu situación financiera,
                para después recomendarte las mejores opciones de inversión que
                concuerdan con tu perfil.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={style2.banner}>
        <div style={style2.mainTxtWrapper}>
          <h2 style={style2.mainTittle}>Más fácil que nunca</h2>
          <div style={style2.imageContainer}>
            <div style={{ width: "50%" }}>
              <p>
                No dudes en preguntarle a BanCoach todas tus dudas sobre
                inversiones. Te responderá al momento con la información más
                actualizada.
              </p>

              <p>
                Explora e informate de una gran cantidad de fondos de inversión
                como nunca antes. Vuelvte un conocedor de las inversiones y da
                seguimiento de manera efectiva.
              </p>
            </div>
            <img src={bannerExplicacion2} />
          </div>
        </div>
      </div>
    </div>
  );
}
