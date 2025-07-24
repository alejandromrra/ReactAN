import {useEffect, useState} from "react";
import axios from 'axios';

// CSS
import "/src/assets/css/AccessLevel.css"

const AccessLevel = () => {
    const [accessLevels, setAccessLevels] = useState([]);
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const limit = 10;

    useEffect(() => {
        fetchAccessLevels();
    }, [page]);

    const fetchAccessLevels = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/getAccessLevels?page=${page}&limit=${limit}`);
            console.log(res.data);
            setAccessLevels(res.data.data);
            setTotalCount(res.data.totalCount);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    const totalPages = Math.ceil(totalCount / limit);

    return (
            <div className="row">
                <section className="row mt-5">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="typeFilter">Type</label>
                                <select className="form-control" name="" id="typeFilter">
                                    <option value="">Selecciona un filtro</option>
                                    <option value="test1">test1</option>
                                    <option value="test2">test2</option>
                                    <option value="test3">test3</option>
                                </select>
                            </div>
                            <div className="col-5">
                                <label htmlFor="typeFilter">Belongs to</label>
                                <select className="form-control" name="" id="belongsToFilter">
                                    <option value="">Selecciona un filtro</option>
                                    <option value="test1">test1</option>
                                    <option value="test2">test2</option>
                                    <option value="test3">test3</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <label htmlFor="typeFilter">Result per page</label>
                                <select className="form-control" name="" id="resultsFilter">
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
                            <table className="table tableColor">
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
                                {accessLevels.map(({ name, type, transaction, belongsTo }) => (
                                    <tr>
                                        <td>{name}</td>
                                        <td>{type}</td>
                                        <td>{transaction}</td>
                                        <td>{belongsTo}</td>
                                        <td>
                                            <div className="container-fluid">
                                                <button className="form-control btn btn-primary w-25">
                                                    View
                                                </button>
                                                <button className="form-control btn btn-secondary w-25 ms-2">
                                                    Edit
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>


                        <div className="pagination mt-3">
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