import axios from 'axios';


const API_URL = 'http://127.0.0.1:8000';
export default function Callapi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: ` ${API_URL}/${endpoint}`,
        data: body,
    }).catch((error) => {
        console.log(error);
    });

};

