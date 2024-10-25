import { lstAddress } from "./LstAddress";
import { tipoPerfil } from "./TipoPerfil";

export interface PerfilUsuario {
    name: string,
    email: string,
    senha: string,
    foto: string,
    tipoPerfil: Array <tipoPerfil>,
    lstAddresses: Array <lstAddress[]>,
    unidade: string,
}
