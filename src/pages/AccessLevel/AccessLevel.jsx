import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

// CSS
import "/src/assets/css/AccessLevel/AccessLevel.css"

// JS
import {getAccessLevels} from "../../services/accessLevelService.js";

const AccessLevel = () => {
    const [accessLevels, setAccessLevels] = useState([]);
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const limit = 10;

    useEffect(() => {
        (async () => {
            try {
                const res = await getAccessLevels(page, limit);
                setAccessLevels(res.data.data);
                setTotalCount(res.data.totalCount);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        })();
    }, [page]);

    const totalPages = Math.ceil(totalCount / limit);

    return (
        <div className="row">
            <section className="row mt-5 mb-3">
                <div className="col-12">
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="typeFilter">Type</label>
                            <select className="form-control" name="typeFilter" id="typeFilter">
                                <option value="">Selecciona un filtro</option>
                                <option value="test1">test1</option>
                                <option value="test2">test2</option>
                                <option value="test3">test3</option>
                            </select>
                        </div>
                        <div className="col-5">
                            <label htmlFor="belongsToFilter">Belongs to</label>
                            <select className="form-control" name="belongsToFilter" id="belongsToFilter">
                                <option value="">Selecciona un filtro</option>
                                <option value="test1">test1</option>
                                <option value="test2">test2</option>
                                <option value="test3">test3</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <label htmlFor="resultsFilter">Result per page</label>
                            <select className="form-control" name="resultsFilter" id="resultsFilter">
                                <option value="">Selecciona un filtro</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row mt-5">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table" id="tableAccessLevels">
                            <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Transaction</th>
                                <th scope="col">Belongs to</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="table-group-divider">
                            {accessLevels.map(({ id, name, type, numTransaction, accessLevel }) => (
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td>{type}</td>
                                    <td>{numTransaction}</td>
                                    <td>{accessLevel}</td>
                                    <td>
                                        <div className="container-fluid">
                                            <Link to={`/accessLevel/view/${id}`} className="linkButton form-control btn btn-sm btn-outline-primary w-25 ms-2">
                                                View
                                            </Link>
                                            <Link to={`/accessLevel/edit/${id}`} className="linkButton form-control btn btn-sm btn-outline-primary w-25 ms-2">
                                                Edit
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>


                    <div className="pagination mt-2">
                        <button className="btn btn-outline-primary me-2 "
                                onClick={() => setPage(p => Math.max(p - 1, 1))}
                                disabled={page === 1}>
                            Anterior
                        </button>

                        <span className="m-2">Página {page} de {totalPages}</span>

                        <button className="btn btn-outline-primary ms-2"
                                onClick={() => setPage(p => Math.min(p + 1, totalPages))}
                                disabled={page === totalPages}>
                            Siguiente
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AccessLevel;