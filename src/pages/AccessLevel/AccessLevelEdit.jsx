import React, {useEffect, useState} from "react";

// CSS
import "/src/assets/css/AccessLevel/AccessLevelEdit.css"

// JS
import {AccessLevelModel} from "../../models/AccessLevel/accessLevel.js";
import {editAccessLevel} from "../../services/accessLevelService.js";
import {getAccessLevel} from "../../services/accessLevelService.js";
import {useParams} from "react-router-dom";

const AccessLevelEdit = () => {
    const { id } = useParams();
    const [accessLevel, setAccessLevel] = useState(AccessLevelModel);

    useEffect(() => {
        (async () => {
            try {
                const res = await getAccessLevel(id);
                setAccessLevel(res);
            } catch (err) {
                console.error("Error:", err);
            }
        })();
    }, [id]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setAccessLevel(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await editAccessLevel(accessLevel);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form className="row formEditAccessLevel" onSubmit={handleSubmit}>
            <div className="col-8">
                <label htmlFor="name">Name</label>
                <input className="form-control" id="name" placeholder="Name" type="text" name="name"
                       value={accessLevel.name} onChange={handleChange}/>
            </div>
            <div className="col-4">
                <label htmlFor="type">Type</label>
                <select className="form-control" name="type" id="type"
                        value={accessLevel.type} onChange={handleChange}>
                    <option value="">Selecciona un filtro</option>
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                    <option value="test3">test3</option>
                </select>
            </div>
            <div className="col-6 mt-3">
                <label htmlFor="notes">Notes</label>
                <input className="form-control" id="notes" placeholder="Notes" type="text" name="notes"
                       value={accessLevel.notes} onChange={handleChange}/>
            </div>
            <div className="col-6 mt-3">
                <label htmlFor="numTransaction">Number of Transaction</label>
                <input className="form-control" id="numTransaction" placeholder="Number of Transaction" type="text"
                       name="numTransaction" value={accessLevel.numTransaction} onChange={handleChange}/>
            </div>
            <div className="col-8 mt-3">
                <label htmlFor="donationName">Donation name</label>
                <input className="form-control" id="donationName" placeholder="Donation name" type="text"
                       name="donationName" value={accessLevel.donationName} onChange={handleChange}/>
            </div>
            <div className="col-4 mt-3">
                <label htmlFor="donation">Donation</label>
                <select className="form-control" name="donation" id="donation"
                        value={accessLevel.donation} onChange={handleChange}>
                    <option value="">Selecciona un filtro</option>
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                    <option value="test3">test3</option>
                </select>
            </div>
            <div className="col-3 mt-3">
                <label htmlFor="report">Report</label>
                <select className="form-control" name="report" id="report"
                        value={accessLevel.report} onChange={handleChange}>
                    <option value="">Selecciona un filtro</option>
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                    <option value="test3">test3</option>
                </select>
            </div>
            <div className="col-3 mt-3">
                <label htmlFor="getFunds">Refund: Get funds from</label>
                <select className="form-control" name="getFunds" id="getFunds"
                        value={accessLevel.getFunds} onChange={handleChange}>
                    <option value="">Selecciona un filtro</option>
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                    <option value="test3">test3</option>
                </select>
            </div>
            <div className="col-3 mt-3">
                <label htmlFor="restrictAmount">Refund: Restrict amount</label>
                <select className="form-control" name="restrictAmount" id="restrictAmount"
                        value={accessLevel.restrictAmount} onChange={handleChange}>
                    <option value="">Selecciona un filtro</option>
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                    <option value="test3">test3</option>
                </select>
            </div>
            <div className="col-3 mt-3">
                <label htmlFor="accessLevel">Access Level</label>
                <select className="form-control" name="accessLevel" id="accessLevel"
                        value={accessLevel.accessLevel} onChange={handleChange}>
                    <option value="">Selecciona un filtro</option>
                    <option value="saima">Saima</option>
                    <option value="drim">Drim</option>
                    <option value="rituals">Rituals</option>
                </select>
            </div>

            <div className="col-12 mt-5">
                <button className="btn btn-primary w-100" type="submit">
                    Guardar Access Level
                </button>
            </div>
        </form>
    )
}

export default AccessLevelEdit;