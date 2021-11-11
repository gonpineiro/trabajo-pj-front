import axios from 'axios';

import { API_URL } from '../config';

const dependencia = axios.create({
    baseURL: API_URL,
});

export const insertDependencias = (payload) => dependencia.post(`/dependencias`, payload);
export const getAllDependencias = () => dependencia.get(`/dependencias`);
export const updateDependenciasById = (id, payload) => dependencia.put(`/dependencias/${id}`, payload);
export const setEdificioById = (id, payload) => dependencia.patch(`/dependencias/setEdificio/${id}`, payload);
export const deleteDependenciasById = (id) => dependencia.delete(`/dependencias/${id}`);
export const getDependenciasById = (id) => dependencia.get(`/dependencias/${id}`);

const dependenciasApi = {
    insertDependencias,
    getAllDependencias,
    updateDependenciasById,
    setEdificioById,
    deleteDependenciasById,
    getDependenciasById,
};

export default dependenciasApi;
