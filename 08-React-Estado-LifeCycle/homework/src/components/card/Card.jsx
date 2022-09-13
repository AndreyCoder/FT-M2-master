import s from './Card.module.css'
import { FiXCircle } from "react-icons/fi"

export default function Card({ min, max, name, img, onClose, id }) {

  return (
    <div className={s.card}>
      <h1 className={s.title}>{name}</h1>

      <div className={s.main}>
        <button
          className={s.btn}
          onClick={onClose}>
          <FiXCircle className={s.svg} />
        </button>

        <div>
          <h3>MAX</h3>
          <p>{max}°</p>
        </div>

        <div>
          <h3>MIN</h3>
          <p>{min}°</p>
        </div>

        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt={`Clima de la ciudad ${name}`}
        />
      </div>
    </div>
  )
};

