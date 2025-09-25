import React from "react";

// CSS
import "/src/assets/css/GameYear/gameCorrectResponse.css"
import {Link} from "react-router-dom";

// JS


const GameIncorrectResponse = () => {
    return (
        <React.Fragment>
            <div className="container-fluid app-fluid-gameYear">
                <div className="row app-row-gameYear">
                    <div className="app-div-gameYear app-div-gameCorrect">
                        <div className="col-md-12">
                            <p>
                                Respuestaaaaaa correctaaaaaa!!! <br/>
                                BIEEEEEEEEEEEEEEEEEN <br/>
                                Puedes avanzar a la siguiente pregunta, te quedan {localStorage.getItem("lives")} vidas.
                            </p>
                        </div>
                        <div className="col-md-12">
                            <Link className="btn btn-primary w-100 mb-2" to={"/gameYear/" + localStorage.getItem("numQuestion")}>
                                Siguiente pregunta
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameIncorrectResponse;