import React from "react";
import {useNavigate} from "react-router-dom";

const GameSecondQues = () => {
    const navigate = useNavigate();

    const checkResponse = (valButton) => {
        const data = localStorage.getItem("gameYear");
        const gameYearArray = JSON.parse(data);

        const response = gameYearArray.find(ga => ga.id === 2);

        if(response.respuesta === valButton) {
            localStorage.setItem("numQuestion", JSON.stringify(3));
            navigate("/gameYear/correctQuestion");
        } else {
            let gogoMinutes = localStorage.getItem("gogoMinutes");
            let gogoMinutesInt = gogoMinutes ? parseInt(gogoMinutes) : 0;
            gogoMinutesInt++;
            localStorage.setItem("gogoMinutes", JSON.stringify(gogoMinutesInt));

            navigate("/gameYear/incorrectQuestion");
        }
    };

    return (
        <React.Fragment>
            <div className="container-fluid app-fluid-gameYear">
                <div className="row app-row-gameYear">
                    <div className="app-div-gameYear">
                        <div className="col-md-12">
                            <p>
                                Qur mirador fuimos por primera vez en nuestro segundo mes?
                            </p>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("El Carmel")}>
                                El Carmel
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Mirador de Can Boada")}>
                                Mirador de Can Boada
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Mirador de Tres metros sobre el cielo")}>
                                Mirador de Tres metros sobre el cielo
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Mirador de Ullastrell")}>
                                Mirador de Ullastrell
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameSecondQues;