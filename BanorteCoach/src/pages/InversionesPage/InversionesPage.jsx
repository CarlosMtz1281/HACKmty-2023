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

const MAKE_REQUESTS = true;

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

        let investOptions;
      if (MAKE_REQUESTS) {
        investOptions = await giveInvestOptions(userContext);
      } else {
        // Use simulated response to avoid making extra unnecessary requests (for debugging).
        investOptions = {
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
                  "NTEPZO:20.00;NTED:15.00;NTEDIG:10.00;NTECT:5.00;NTE1:0.00;NTE2:0.00;NTE3:0.00;NTEDLS:0.00;NTEIPC+:0.00;",
              },
              finish_reason: "stop",
            },
          ],
          usage: {
            prompt_tokens: 758,
            completion_tokens: 71,
            total_tokens: 829,
          },
        };
      }

      // console.log(JSON.stringify(investOptions));

      let options = extractLastMessage(investOptions).split(";");
      // let options = extractLastMessage(response).split(";");
      // console.log("Options:",options);
      for (let i = 0; i < options.length; i++) {
        options[i] = options[i].split(":");
      }


      options = options.filter((option) => option.length === 2);

      console.log("Options:", options);

      const formatDate = await transformInputData(
        userInfo && userInfo.length > 15
          ? userInfo.replace(/%20/g, " ")
          : "Plazo:5 meses;Dinero:10,000;Riesgo:Bajo"
      );
      console.log("Format date:", extractLastMessage(formatDate));
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
  }, [userInfo]);

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

  const buttonLabels = ["Resultados", "Ver Más", "Preguntas"];

  // Define state to keep track of the currently pressed button
  const [activeButton, setActiveButton] = useState("Resultados");

  // Function to handle button click
  const handleButtonClick = (buttonLabel) => {
    setActiveButton(buttonLabel);
    console.log(buttonLabel);
  };

  const [montoInverir, setMontoInvertir] = useState('');
  const [plazo, setPlazo] = useState('');

  function traducirInfo(dinero, meses){
    let dineroNor = dinero;
    let mesesNor = meses;
    let dineroStr = ''+dinero;
    let contador = 0;
    console.log("dineroStr", dineroStr)
    for(let i = (dineroStr.length)-1; i >= 0.; i--){
        contador++;
        if(contador == 3){
            dinero = dineroStr.substring(0, i) + "," + dineroStr.substring(i, dineroStr.length);
            contador = 0;
        }
    }
    setMontoInvertir(dinero);
    setPlazo(mesesNor);

  }

  useEffect(() => {
    traducirInfo(dinero, meses);

  }, [dinero, meses]);

  return (
    <div>
      <div style={style.banner}>
        <div style={style.mainWrapper}>
          <div style={style.HeaderWrap}>
              <h1 style={style.mainTitle}> Inversiones Sugeridas</h1>

              <div style={style.infoContainer}>
                  <h4 style={style.montoInicial}>Monto a invertir: {montoInverir}</h4>
                  <h4 style={style.plazoInicial}>Plazo: {meses} meses</h4>
              </div>

          </div>


          {loading ? (
            <>
              <div style={style.secondaryWrap}>
                <div>
                  {buttonLabels.map((label) => (
                    <button
                      key={label}
                      className={`button ${
                        label === activeButton ? "active" : ""
                      }`}
                      onClick={() => handleButtonClick(label)}
                      style={{
                        ...style.button,
                        ...(label === activeButton ? style.activeButton : {}),
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div style={style.primaryWrap}>
                <Primary
                  investOptions={recomended}
                  activeButton={activeButton}
                  meses={meses}
                  dinero={dinero}
                />
                <Secondary investOptions={others} activeButton={activeButton} meses={meses}
                  dinero={dinero}/>
                {activeButton === "Preguntas" && (
                  <ChatBot activeButton={activeButton} />
                )}
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
