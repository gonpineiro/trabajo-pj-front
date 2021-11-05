import axios from 'axios';

const dependencia = axios.create({
    baseURL: 'http://localhost:3001/api/v1/',
});

export const insertDependencias = (payload) => dependencia.post(`/dependencias`, payload);
export const getAllDependenciass = () => dependencia.get(`/dependencias`);
export const updateDependenciasById = (id, payload) => dependencia.put(`/dependencias/${id}`, payload);
export const deleteDependenciasById = (id) => dependencia.delete(`/dependencias/${id}`);
export const getDependenciasById = (id) => dependencia.get(`/dependencias/${id}`);

const dependencias = {
    insertDependencias,
    getAllDependenciass,
    updateDependenciasById,
    deleteDependenciasById,
    getDependenciasById,
};

export default dependencias;
