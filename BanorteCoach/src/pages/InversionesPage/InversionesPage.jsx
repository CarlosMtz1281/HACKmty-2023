
import style from './InversionesStyle.js';

import Primary from '../../Components/Primary/Primary.jsx';
import Secondary from '../../Components/Secondary/Secondary.jsx';
import giveInvestOptions from "../../../public/backend/gptApi.js";

export default function InversionesPage() {
  return (
    <div>

        <div style={style.banner}>

        <div style={style.mainWrapper}>

            <h1 style={style.mainTitle}> Inversiones Sugeridas</h1>


              <div style={style.secondaryWrap}>
                <Secondary />
              </div>
              <div style={style.primaryWrap}>
                <Primary />
            </div>


        </div>


        </div>

        </div>



  )
}