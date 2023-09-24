import { styles } from './styles';
import CardInversiones from '../CardInversiones/CardInversiones';

export default function Primary(props){
    const { investOptions } = props;
    console.log(investOptions)
    return(
        <div>
            {investOptions.map((option) => (
          // Render CardInversiones for each option, passing it as props
          <CardInversiones

            name={option[0]}
            percentage={option[1]}

            // Add more props as needed based on your data structure
          />
        ))}

        </div>
    )
}

