import React from "react";

// CSS
import "/src/assets/css/GameYear/gameIncorrectResponse.css"
import {Link} from "react-router-dom";

// JS


const GameIncorrectResponse = () => {
    return (
        <React.Fragment>
            <div className="container-fluid app-fluid-gameYear">
                <div className="row app-row-gameYear">
                    <div className="app-div-gameYear app-div-gameIncorrect">
                        <div className="col-md-12">
                            <p>
                                Respuestaaaaaa incorrectaaaaaa!!! <br/>
                                MUECK MUECK MUEEEEECK <br/>
                                Acabas de sumar 1 minuto al gogo, llevas {localStorage.getItem("gogoMinutes")} minutos. <br/>
                                No te pongas nerviosa.
                            </p>
                        </div>
                        <div className="col-md-12">
                            <Link className="btn btn-primary w-100 mb-2 retry" to={"/gameYear/" + localStorage.getItem("numQuestion")}>
                                Quieres volver a intentarlo?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameIncorrectResponse;