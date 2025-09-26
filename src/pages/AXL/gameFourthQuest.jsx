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
                                Cual fue el primer lego que montamos juntos?
                            </p>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Lambo Blanco")}>
                                Lambo Blanco
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Ferrari Rojo")}>
                                Ferrari Rojo
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Formula 1 Rojo")}>
                                Formula 1 Rojo
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Porsche Amarillo")}>
                                Porsche Amarillo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameFourthQues;