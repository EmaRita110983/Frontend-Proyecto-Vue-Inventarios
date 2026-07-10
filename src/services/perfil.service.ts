import api from "./api";

export async function funPerfil() {
    const respuesta = await api.get("/v1/auth/profile");

    console.log("AXIOS COMPLETO:", respuesta);
    console.log("DATA:", respuesta.data);

    return respuesta.data;
}