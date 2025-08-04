import React, {useEffect, useState} from "react";

// CSS
import "/src/assets/css/AccessLevel/AccessLevelView.css"

// JS
import {getAccessLevel} from "../../services/accessLevelService.js";
import {Link, useParams} from "react-router-dom";

const AccessLevelView = () => {
    const { id } = useParams();
    const [accessLevel, setAccessLevel] = useState([]);

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

    return (
        <div className="viewTable d-flex flex-column col-12">
            <ul className="list-group list-group-flush d-flex flex-row">
                <li className="liTitle list-group-item col-md-2">Name</li>
                <li className="list-group-item col-md-10">{accessLevel.name}</li>
            </ul>
            <ul className="list-group list-group-flush d-flex flex-row">
                <li className="liTitle list-group-item col-md-2">Type</li>
                <li className="list-group-item col-md-10">{accessLevel.type}</li>
            </ul>
            <ul className="list-group list-group-flush d-flex flex-row">
                <li className="liTitle list-group-item col-md-2">Notes</li>
                <li className="list-group-item col-md-10">{accessLevel.notes}</li>
            </ul>
            <ul className="list-group list-group-flush d-flex flex-row">
                <li className="liTitle list-group-item col-md-2">Number of Transaction</li>
                <li className="list-group-item col-md-10">{accessLevel.numTransaction}</li>
            </ul>
            <ul className="list-group list-group-flush d-flex flex-row">
                <li className="liTitle list-group-item col-md-2">Donation Name</li>
                <li className="list-group-item col-md-10">{accessLevel.donationName}</li>
            </ul>
            <ul className="list-group list-group-flush d-flex flex-row">
                <li className="liTitle list-group-item col-md-2">Report</li>
                <li className="list-group-item col-md-10">{accessLevel.report}</li>
            </ul>
            <ul className="list-group list-group-flush d-flex flex-row">
                <li className="liTitle list-group-item col-md-2">Refund: Get funds from</li>
                <li className="list-group-item col-md-10">{accessLevel.getFunds}</li>
            </ul>
            <ul className="list-group list-group-flush d-flex flex-row">
                <li className="liTitle list-group-item col-md-2">Refund: Restrict amount</li>
                <li className="list-group-item col-md-10">{accessLevel.restrictAmount}</li>
            </ul>
            <ul className="list-group list-group-flush d-flex flex-row">
                <li className="liTitle list-group-item col-md-2">Belongs to</li>
                <li className="list-group-item col-md-10">{accessLevel.accessLevel}</li>
            </ul>
            <ul className="list-group list-group-flush d-flex flex-row">
                <li className="liTitle list-group-item col-md-2">Code name</li>
                <li className="list-group-item col-md-10"></li>
            </ul>
            <ul className="list-group list-group-flush d-flex flex-row">
                <li className="liTitle list-group-item col-md-2">Donation</li>
                <li className="list-group-item col-md-10">{accessLevel.donation}</li>
            </ul>
            <ul className="list-group list-group-flush d-flex flex-row">
                <li className="liTitle list-group-item col-md-2">Created</li>
                <li className="list-group-item col-md-10"></li>
            </ul>
            <ul className="list-group list-group-flush d-flex flex-row">
                <li className="liTitle list-group-item col-md-2">Updated</li>
                <li className="list-group-item col-md-10"></li>
            </ul>
        </div>
    )
}

export default AccessLevelView;