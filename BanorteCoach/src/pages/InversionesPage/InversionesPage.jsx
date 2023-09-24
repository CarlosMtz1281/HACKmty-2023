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
        id: "chatcmpl-82CZMsg5pQiiT0axw04VuY8HF5Dd7",
        object: "chat.completion",
        created: 1695535664,
        model: "gpt-3.5-turbo-0613",
        choices: [
          {
            index: 0,
            message: {
              role: "assistant",
              content: "NTEPZO:40%; NTED:30%; NTEDIG:20%; NTECT:10%",
            },
            finish_reason: "stop",
          },
        ],
        usage: { prompt_tokens: 741, completion_tokens: 23, total_tokens: 764 },
      };

      // const options = extractLastMessage(investOptions).split("; ");
      const options = extractLastMessage(response).split("; ");
      for (let i = 0; i < options.length; i++) {
        options[i] = options[i].split(":");
      }

      setInvestOptions(options);
      setLoading(false);
    }
    
    fetchData();
  }, []);

  console.log(investOptions);
  console.log(loading);
  return (
    <div>
      <div style={style.banner}>
        <div style={style.mainWrapper}>
          <h1 style={style.mainTitle}> Inversiones Sugeridas</h1>

          {loading ? (
            <>
              <div style={style.secondaryWrap}>
                <Secondary />
              </div>
              <div style={style.primaryWrap}>
                <Primary />
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
