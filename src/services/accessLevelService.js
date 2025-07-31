import axios from 'axios';

export const getAccessLevels = async (page, limit) => {
    return await axios.get(`http://localhost:8080/api/getAccessLevels?page=${page}&limit=${limit}`);
};

export const getAccessLevel = async (accessLevel) => {
    const res = await axios.get(`http://localhost:8080/api/getAccessLevel?accessLevel=${accessLevel}`);
    return res.data;
};

export const createAccessLevel = async (data) => {
    const res = await axios.post('http://localhost:8080/api/createAccessLevel', data);
    return res.data;
};

export const editAccessLevel = async (data) => {
    const res = await axios.post('http://localhost:8080/api/editAccessLevel', data);
    return res.data;
};