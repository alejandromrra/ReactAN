import React from "react";
import {useNavigate} from "react-router-dom";

// CSS
import "/src/assets/css/GameYear/gameThirdQuest.css"

const GameSeventhQues = () => {
    const navigate = useNavigate();

    const checkResponse = (valButton) => {
        const data = localStorage.getItem("gameYear");
        const gameYearArray = JSON.parse(data);

        const response = gameYearArray.find(ga => ga.id === 7);

        if(response.respuesta === valButton) {
            localStorage.setItem("numQuestion", JSON.stringify(8));
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
                                En nuestra primera vez en el camping, a que restaurante te lleve?
                            </p>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Tagliatella")}>
                                Tagliatella
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Guiseppe")}>
                                Guiseppe
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("McDonals")}>
                                McDonals
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Restaurante del camping")}>
                                Restaurante del camping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameSeventhQues;