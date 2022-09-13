import React from 'react';
/*
// ===== COMPONENTE FUNCIONAL ===== \\

export default function Card(props) {
  console.log(props)

  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h3>{props.name}</h3>
      <div>
        <p>Max: {props.max}</p>
        <p>Min: {props.min}</p>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt={`Clima de la ciudad ${props.name}`}
      />
    </div>
  )
};
*/
// =============================== \\

// ===== COMPONENTE DE CLASE ===== \\

class Card extends React.Component {
  render() {
    return (
      <div>

        <div>
          <button onClick={this.props.onClose}>X</button>
          <h3>{this.props.name}</h3>
          <div>
            <p>Max: {this.props.max}</p>
            <p>Min: {this.props.min}</p>
            <img
              src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`}
              alt={`Clima de la ciudad ${this.props.name}`}
            />
          </div>
        </div>

      </div>
    )
  }
}

export default Card

// =============================== \\
