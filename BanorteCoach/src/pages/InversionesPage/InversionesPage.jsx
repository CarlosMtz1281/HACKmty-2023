
import style from './inversionesStyle.js';

import Primary from '../../Components/Primary/Primary.jsx';
import Secondary from '../../Components/Secondary/Secondary.jsx';

export default function InversionesPage() {
  return (
    <div>

        <div style={style.mainTxtWrapper}>
          <h1 style={style.mainTitle}> Inversiones Sugeridas</h1>
        </div>
        <div style={style.investContainer}>
          <div>
            <Secondary />
          </div>
          <div>
            <Primary />
          </div>
        </div>

    </div>
  )
}