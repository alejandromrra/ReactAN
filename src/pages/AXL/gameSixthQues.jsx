import React from "react";
import {useNavigate} from "react-router-dom";

// CSS
import "/src/assets/css/GameYear/gameThirdQuest.css"

const GameSixthQues = () => {
    const navigate = useNavigate();

    const checkResponse = (valButton) => {
        const data = localStorage.getItem("gameYear");
        const gameYearArray = JSON.parse(data);

        const response = gameYearArray.find(ga => ga.id === 6);

        if(response.respuesta === valButton) {
            localStorage.setItem("numQuestion", JSON.stringify(7));
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
                                Cual es mi atracción favorita del Portaventura o mejor dicho la que mas disfruto?
                            </p>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Shambala")}>
                                Shambala
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Dragon Khan")}>
                                Dragon Khan
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Furius Baco")}>
                                Furius Baco
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Stampida")}>
                                Stampida
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameSixthQues;