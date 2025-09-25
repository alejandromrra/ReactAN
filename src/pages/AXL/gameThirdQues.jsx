import React from "react";
import {useNavigate} from "react-router-dom";

// CSS
import "/src/assets/css/GameYear/gameThirdQuest.css"

const GameThirdQues = () => {
    const navigate = useNavigate();

    const checkResponse = (event) => {
        const data = localStorage.getItem("gameYear");
        const gameYearArray = JSON.parse(data);

        const response = gameYearArray.find(ga => ga.id === 3);

        if(response.respuesta.includes(event.target.value)) {
            localStorage.setItem("numQuestion", JSON.stringify(4));
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
                                Dime uno de los regalos que te hice en nuestra primera navidad
                            </p>
                        </div>
                        <div className="col-md-12">
                            <input className="form-control app-input-gameYear" type="text"
                                   placeholder="Introduce uno de tus regalos jejeje" onBlur={checkResponse}/>
                            <button className="btn btn-primary col-md-12 mt-2">
                                Enviar regalo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameThirdQues;