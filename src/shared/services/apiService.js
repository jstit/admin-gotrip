import axios from "axios";
import { API_URL_BASE } from "@shared/constants";

class ApiService {
    constructor() {
        let service = axios.create({
            baseURL: API_URL_BASE,
        });
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
    }

    handleSuccess(response) {
        const successObject = {
            status: "success",
            data: response.data.data,
            response,
        };

        return successObject;
    }

    handleError(error) {
        let errorObject = {
            status: "error",
            message: error.response?.data?.error,
        };

        if (axios.isCancel(error)) {
            errorObject.error = error;
        }

        return Promise.reject(errorObject);
    }

    getDefaultConfig() {
        const config = {
            headers: {},
        };

        return config;
    }

    async get(path) {
        const config = this.getDefaultConfig();

        return await this.service.get(path, config);
    }
}

export default ApiService;
