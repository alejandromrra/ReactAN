import axios from 'axios';

export const getAccessLevel = async (page, limit) => {
    return await axios.get(`http://localhost:8080/api/getAccessLevels?page=${page}&limit=${limit}`);
};

export const createAccessLevel = async (data) => {
    const res = await axios.post('http://localhost:8080/api/createAccessLevel', data);
    return res.data;
};