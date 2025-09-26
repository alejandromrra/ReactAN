import React from "react";
import {Link} from "react-router-dom";

// CSS
import "/src/assets/css/GameYear/gameYear.css"

const GameYear = () => {
    return (
        <React.Fragment>
            <div className="container-fluid app-fluid-gameYear">
                <div className="row app-row-gameYear">
                    <div className="app-div-gameYear">
                        <div className="col-md-12">
                            <p>
                                Aquí te explico cómo funciona:
                                Es un juego con 12 preguntas. Esas 12 preguntas son sobre nuestra relación y es una por cada mes del año, para saber lo atenta que has
                                estado durante nuestro primer año.
                                Con el juego te ganarás regalos: 1 al responder cada pregunta bien y 1 al final del juego.
                                El trato sera que cada respuesta fallida sera 1 minuto que se sumara a un gogo que me haras. Trato o no?
                            </p>
                        </div>
                        <div className="col-md-12">
                            <Link className="btn btn-primary w-100" to="/gameYear/1">Empezar a jugar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameYear;