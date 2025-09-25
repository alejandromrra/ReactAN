import React from "react";
import {useNavigate} from "react-router-dom";

const GameFirstQues = () => {
    const navigate = useNavigate();

    const checkResponse = (valButton) => {
        const data = localStorage.getItem("gameYear");
        const gameYearArray = JSON.parse(data);

        const response = gameYearArray.find(ga => ga.id = 1);

        if(response.respuesta === valButton) {
            localStorage.setItem("numQuestion", JSON.stringify(response.id + 1));
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
                                Donde fue nuestra primera cena como pareja oficial?
                            </p>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Brasa y Leña")}>
                                Brasa y Leña
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("La Santa")}>
                                La Santa
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("La Tremenda")}>
                                La Tremenda
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Favela Burger")}>
                                Favela Burger
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameFirstQues;