import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';
  
type Props = {
  pokemon: Pokemon
  borderColor?: string
};
  
const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor = '#009688'}) => {
  
  const [color, setColor] = useState<string>(); 
  
  const showBorder = () => {
      setColor(borderColor);
  }

  const hideBorder = () => {
      setColor('#F5F5F5'); //On remet la couleur de la bordure d'origine (gris).
  }

  const formatDate = (date: Date): string => {
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }
  return (
    <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
      <div className="card horizontal" style={{ borderColor: color }}>
        <div className="card-image"> 
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p><small>{formatDate(pokemon.created)}</small></p>
            {pokemon.types.map(type => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </div>
      </div> 
    </div>
  );
}
  
export default PokemonCard;