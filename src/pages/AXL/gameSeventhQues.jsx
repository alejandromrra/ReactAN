import React from "react";
import {useNavigate} from "react-router-dom";

// CSS
import "/src/assets/css/GameYear/gameThirdQuest.css"

const GameSixthQues = () => {
    const navigate = useNavigate();

    const checkResponse = (valButton) => {
        const data = localStorage.getItem("gameYear");
        const gameYearArray = JSON.parse(data);

        const response = gameYearArray.find(ga => ga.id === 7);

        if(response.respuesta === valButton) {
            localStorage.setItem("numQuestion", JSON.stringify(8));
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
                                Antes de que te fueras te hice un regalo muy especial, cual fue?
                            </p>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Una cena romantica")}>
                                Una cena romantica
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Unos zapatos")}>
                                Unos zapatos
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Un collar")}>
                                Un collar
                            </button>
                            <button className="btn btn-primary col-md-12 mb-2" onClick={() => checkResponse("Un viaje")}>
                                Un viaje
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameSixthQues;