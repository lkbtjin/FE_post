import axios from "axios";

const createAxios = (baseURL: string) => {
    const instance = axios.create({
        baseURL
    });

    return instance;
}

const result = {
    service: createAxios('http://localhost:8080/')
}

export default result;