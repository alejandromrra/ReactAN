import React from "react";
import {useNavigate} from "react-router-dom";

// CSS
import "/src/assets/css/GameYear/gameThirdQuest.css"

const GameEighthQues = () => {
    const navigate = useNavigate();

    const checkResponse = (valButton) => {
        const data = localStorage.getItem("gameYear");
        const gameYearArray = JSON.parse(data);

        const response = gameYearArray.find(ga => ga.id === 10);

        if(response.respuesta === valButton) {
            localStorage.setItem("numQuestion", JSON.stringify(11));
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
                                Donde comimos el dia de tu cumpleaños?
                            </p>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Mirador de Tres metros sobre el cielo")}>
                                Mirador de Tres metros sobre el cielo
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("En casa")}>
                                En casa
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("La santa")}>
                                La santa
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Vinya Grill")}>
                                Vinya Grill
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameEighthQues;