import axios from 'axios';

import { API_URL } from '../config';

const edificio = axios.create({
    baseURL: API_URL,
});

export const insertEdificio = (payload) => edificio.post(`/edificios`, payload);
export const getAllEdificios = () => edificio.get(`/edificios`);
export const updateEdificioById = (id, payload) => edificio.put(`/edificios/${id}`, payload);
export const deleteEdificioById = (id) => edificio.delete(`/edificios/${id}`);
export const getEdificioById = (id) => edificio.get(`/edificios/${id}`);

const edificiosApi = {
    insertEdificio,
    getAllEdificios,
    updateEdificioById,
    deleteEdificioById,
    getEdificioById,
};

export default edificiosApi;
