import React from "react";

const GameFinish = () => {
    return (
        <React.Fragment>
            <div className="container-fluid app-fluid-gameYear">
                <div className="row app-row-gameYear">
                    <div className="app-div-gameYear">
                        <div className="col-md-12">
                            <p>
                                Hasta aqui el juego rubita mia. Espero que lo hayas disfrutado mucho. <br/>
                                Te has ganado el regalo final y ahora toca hacer el recuento de una cosa. <br/>
                                Me debes {localStorage.getItem("gogoMinutes")} minutos de gogo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GameFinish;