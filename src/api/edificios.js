import axios from 'axios';

const edificio = axios.create({
    baseURL: 'http://localhost:3001/api/v1/',
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
