import React from "react";
import {useNavigate} from "react-router-dom";

// CSS
import "/src/assets/css/GameYear/gameThirdQuest.css"

const GameFourthQues = () => {
    const navigate = useNavigate();

    const checkResponse = (valButton) => {
        const data = localStorage.getItem("gameYear");
        const gameYearArray = JSON.parse(data);

        const response = gameYearArray.find(ga => ga.id === 4);

        if(response.respuesta === valButton) {
            localStorage.setItem("numQuestion", JSON.stringify(5));
            navigate("/gameYear/correctQuestion");
        } else {
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
                                Que forma tenia el donut que nos comimos en el mirador de 3 metros sobre el cielo para San Valentin?
                            </p>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Muñequito")}>
                                Muñequito
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Redondo")}>
                                Redondo
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Pitilines")}>
                                Pitilines
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Corazón")}>
                                Corazón
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameFourthQues;