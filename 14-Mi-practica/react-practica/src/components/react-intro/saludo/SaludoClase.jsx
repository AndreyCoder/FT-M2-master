import React from "react";

class SaludoCalse extends React.Component {
  render() {
    const saludo = this.props.lang === 'en' ? 'Hello' : 'Hola'

    return (
      <>
        <h3>{saludo} {this.props.nombre}</h3>
      </>
    )
  }
}

export default SaludoCalse

