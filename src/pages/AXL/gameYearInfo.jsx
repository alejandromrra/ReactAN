import React from "react";

// CSS
import "/src/assets/css/AccessLevel/AccessLevelEdit.css"
import {Link} from "react-router-dom";

// JS


const GameYearInfo = () => {
    return (
        <React.Fragment>
            <main>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <p>
                                Aqui te explico como funciona.
                                Es un juego con 12 preguntas, esas 12 preguntas son sobre nuestra relacion para saber lo atenta que has estado durante este año.
                                Con el juego te ganaras 2 regalos, uno en las 6 primeras preguntas y otro en las 6 preguntas restantes. Tendras 2 vidas de inicio y se te recargara 1 vida al completar las 6 primeras preguntas.
                            </p>
                        </div>
                        <div className="col-md-12">
                            <Link className="btn btn-primary w-100" to="/gameYear">Empezar a jugar</Link>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default GameYearInfo;