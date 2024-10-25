import axios from 'axios';
import { PerfilUsuario } from '../Interfaces/PerfilUsuario';

const apiClient = axios.create({
    baseURL: 'https://scholarspace-254954748843.southamerica-east1.run.app/api',
    headers:{
        'Content-Type': 'application/json'
    }
})

export const CriarUsuario = (perfilUsuario: PerfilUsuario) =>{
    return apiClient.post('/User', perfilUsuario)
}