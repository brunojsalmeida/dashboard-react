import axios from 'axios';

const api = axios.create({
    baseURL: 'http://compras.dados.gov.br/contratos/v1/contratos.json?uasg=153229'
})

export default api;