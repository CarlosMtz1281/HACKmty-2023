import style from "./inversionesStyle.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Primary from "../../Components/Primary/Primary.jsx";
import Secondary from "../../Components/Secondary/Secondary.jsx";
import ChatBot from "../../Components/ChatBot/ChatBot.jsx";
import {
  giveInvestOptions,
  extractLastMessage,
  transformInputData,
} from "../../../public/backend/gptApi.js";
import PuffLoader from "react-spinners/PuffLoader";

export default function InversionesPage() {
  const [loading, setLoading] = useState(false);
  const [investOptions, setInvestOptions] = useState([]);
  const [meses, setMeses] = useState(-1);
  const [dinero, setDinero] = useState(-1);
  const { userInfo } = useParams();
  const [recomended, setRecomended] = useState([]);
  const [others, setOthers] = useState([]);
  // console.log(userInfo);

  useEffect(() => {
    async function fetchData() {
      // Fetch user context;

      // Use simulated context in case of no user context.
      const userContext =
        userInfo ??
        "Edad: 20 años, nombre: Javier, Plazo:  2 años, riesgo: medio, dinero para inversion: $10,000";

      // const investOptions = await giveInvestOptions(userContext);
      // Use simulated response to avoid making extra unnecessary requests (for debugging).
      const response = {
        id: "chatcmpl-82FELgmEbUw8unQ3f9VmSPrG24IQo",
        object: "chat.completion",
        created: 1695545893,
        model: "gpt-3.5-turbo-0613",
        choices: [
          {
            index: 0,
            message: {
              role: "assistant",
              content:
                "NTEPZO:20.00%;NTED:15.00%;NTEDIG:10.00%;NTECT:5.00%;NTE1:0.00%;NTE2:0.00%;NTE3:0.00%;NTEDLS:0.00%;NTEIPC+:0.00%;",
            },
            finish_reason: "stop",
          },
        ],
        usage: { prompt_tokens: 758, completion_tokens: 71, total_tokens: 829 },
      };

      // console.log(JSON.stringify(investOptions));
      // const options = extractLastMessage(investOptions).split("; ");
      let options = extractLastMessage(response).split(";");
      // console.log("Options:",options);
      for (let i = 0; i < options.length; i++) {
        options[i] = options[i].split(":");
      }

      options = options.filter((option) => option.length === 2);

      const formatDate = await transformInputData(
        (userInfo && userInfo.length > 15)
          ? userInfo.replace(/%20/g, " ")
          : "Plazo:5 meses;Dinero:10,000;Riesgo:Bajo"
      );
      // console.log("Format date:", extractLastMessage(formatDate));
      const res = extractLastMessage(formatDate).split(":");
      let months = 10;
      let money = 10000;
      try {
        months = parseFloat(res[0]);
        money = parseFloat(res[1]);
      } catch (error) {
        setMeses(10);
        setDinero(10000);
      }

      setMeses(months);
      setDinero(money);
      setInvestOptions(options);
      setLoading(true);
    }

    fetchData();
  }, []);

  // add fiest two investoptions in recomended
  useEffect(() => {
    if (investOptions.length > 0) {
      setRecomended([investOptions[0], investOptions[1]]);
    }
  }, [investOptions]);

  // add the rest of the investoptions in others
  useEffect(() => {
    if (investOptions.length > 0) {
      setOthers(investOptions.slice(2));
    }
  }, [investOptions]);

  //secondary container procceses

  const buttonLabels = ['Resultados', 'Ver Más', 'Preguntas'];

    // Define state to keep track of the currently pressed button
    const [activeButton, setActiveButton] = useState('Resultados');

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
                <Primary investOptions = {recomended} activeButton={activeButton}/>
                <Secondary investOptions = {others} activeButton={activeButton}/>
                {(activeButton === 'Preguntas') && <ChatBot activeButton={activeButton} />}
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
