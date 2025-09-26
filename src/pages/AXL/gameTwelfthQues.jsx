import React from "react";
import {useNavigate} from "react-router-dom";

// CSS
import "/src/assets/css/GameYear/gameThirdQuest.css"

const GameTwelfthQues = () => {
    const navigate = useNavigate();

    const checkResponse = (valButton) => {
        const data = localStorage.getItem("gameYear");
        const gameYearArray = JSON.parse(data);

        const response = gameYearArray.find(ga => ga.id === 12);

        if(response.respuesta === valButton) {
            navigate("/gameYear/finish");
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
                                En Disney, que personaje fue el que me hizo mas ilusion ver?
                            </p>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Pike y Pulipan")}>
                                Pike y Pulipan
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Payo Papuin")}>
                                Payo Papuin
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Puzz Lightpipar")}>
                                Puzz Lightpipar
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Piki Pauz")}>
                                Piki Pauz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameTwelfthQues;