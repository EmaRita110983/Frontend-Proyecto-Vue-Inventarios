import api from "./api";

export async function listarUsuarios() {
    const respuesta = await api.get('/v1/users');

    return respuesta.data;
}


export default {

    funListar() {
        return api.get("/v1/users");
    },

    funGuardar(datos: any) {
        return api.post("/v1/users", datos);
    },

    funMostrar(id: number) {
        return api.get("/v1/users/" + id);
    },

    funModificar(id: number, datos: any) {
        return api.put("/v1/users/" + id, datos);
    },

    funEliminar(id: number) {
        return api.delete("/v1/users/" + id);
    },

}