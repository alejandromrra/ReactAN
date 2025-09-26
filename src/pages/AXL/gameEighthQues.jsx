import React from "react";
import {useNavigate} from "react-router-dom";

// CSS
import "/src/assets/css/GameYear/gameThirdQuest.css"

const GameEighthQues = () => {
    const navigate = useNavigate();

    const checkResponse = (valButton) => {
        const data = localStorage.getItem("gameYear");
        const gameYearArray = JSON.parse(data);

        const response = gameYearArray.find(ga => ga.id === 8);

        if(response.respuesta === valButton) {
            localStorage.setItem("numQuestion", JSON.stringify(9));
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
                                De estas cosas que es lo que me compre en el primer viaje a Palermo?
                            </p>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Un llavero")}>
                                Un llavero
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Collar de perlas")}>
                                Collar de perlas
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Pantalon del pull and bear")}>
                                Pantalon del pull and bear
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Un patin")}>
                                Un patin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameEighthQues;