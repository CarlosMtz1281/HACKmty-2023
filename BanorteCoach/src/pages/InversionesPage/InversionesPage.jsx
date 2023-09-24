import style from "./inversionesStyle.js";
import { useEffect, useState } from "react";

import Primary from "../../Components/Primary/Primary.jsx";
import Secondary from "../../Components/Secondary/Secondary.jsx";
import {
  giveInvestOptions,
  extractLastMessage,
} from "../../../public/backend/gptApi.js";
import PuffLoader from "react-spinners/PuffLoader";

export default function InversionesPage() {
  const [loading, setLoading] = useState(false);
  const [investOptions, setInvestOptions] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // Fetch user context;
      const userContext =
        "Edad: 20 años, nombre: Javier, Plazo:  2 años, riesgo: medio, dinero para inversion: $10,000";

      // const investOptions = await giveInvestOptions(userContext);
      // Use simulated response to avoid making extra unnecessary requests.
      const response = {
        "id":"chatcmpl-82CxeGQDl07r8Q0DyOgejmsIpez75","object":"chat.completion","created":1695537170,"model":"gpt-3.5-turbo-0613","choices":[{"index":0,"message":{"role":"assistant","content":"NTEPZO: 80%; NTED: 75%; NTEDIG: 70%; NTECT: 65%"},"finish_reason":"stop"}],"usage":{"prompt_tokens":751,"completion_tokens":27,"total_tokens":778}
      };
      // console.log(JSON.stringify(investOptions))
      // const options = extractLastMessage(investOptions).split("; ");
      const options = extractLastMessage(response).split("; ");
      console.log(options);
      for (let i = 0; i < options.length; i++) {
        options[i] = options[i].split(":");
      }

      options.splice(2,2);
      setInvestOptions(options);
      setLoading(true);
    }

    fetchData();
  }, []);


  //secondary container procceses

  const buttonLabels = ['Resultados', 'Ver Más', 'Inv. Actuales', 'Preguntas'];

    // Define state to keep track of the currently pressed button
    const [activeButton, setActiveButton] = useState(null);

    // Function to handle button click
    const handleButtonClick = (buttonLabel) => {
      setActiveButton(buttonLabel);
      console.log(buttonLabel);

    };




  return (
    <div>
      <div style={style.banner}>
        <div style={style.mainWrapper}>
          <h1 style={style.mainTitle}> Inversiones Sugeridas</h1>

          {loading ? (
            <>
              <div style={style.secondaryWrap}>
                  <div>
                {buttonLabels.map((label) => (
                    <button
                    key={label}
                    className={`button ${label === activeButton ? 'active' : ''}`}
                    onClick={() => handleButtonClick(label)}
                    style={ {... style.button,
                        ... (label === activeButton ? style.activeButton : {}) }}
                    >
                    {label}
                    </button>
                ))}
            </div>


              </div>
              <div style={style.primaryWrap}>
                <Primary investOptions = {investOptions} activeButton={activeButton}/>
              </div>
            </>
          ) : (
            <PuffLoader />
          )}
        </div>
      </div>
    </div>
  );
}
