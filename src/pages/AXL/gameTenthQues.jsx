import React from "react";
import {useNavigate} from "react-router-dom";

// CSS
import "/src/assets/css/GameYear/gameThirdQuest.css"

const GameTenthQues = () => {
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
                                Que manulidad hicimos en el camping cuando estuvimos en verano?
                            </p>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Spiderman y Stich")}>
                                Spiderman y Stich
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Piperman y Spichi")}>
                                Piperman y Spichi
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Piper y Spich")}>
                                Piper y Spich
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Spiperman y Pichi")}>
                                Spiperman y Pichi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameTenthQues;