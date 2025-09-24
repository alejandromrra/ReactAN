import React from "react";

// CSS
import "/src/assets/css/GameYear/gameYear.css"
import {Link} from "react-router-dom";

// JS


const GameYear = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row app-row-gameInfo">
                    <div className="app-div-gameInfo">
                        <div className="col-md-12">
                            <p>
                                Aquí te explico cómo funciona:
                                Es un juego con 12 preguntas. Esas 12 preguntas son sobre nuestra relación, para saber lo atenta que has estado durante este año.
                                Con el juego te ganarás 2 regalos: uno al responder las 6 primeras preguntas y otro al responder las 6 preguntas restantes.
                                Tendrás 2 vidas al inicio, y se te recargará 1 vida al completar las primeras 6 preguntas.
                            </p>
                        </div>
                        <div className="col-md-12">
                            <Link className="btn btn-primary w-100" to="/gameYear/init">Empezar a jugar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameYear;