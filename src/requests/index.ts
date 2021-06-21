import axios, {AxiosInstance} from 'axios';

class Service {
    private service: AxiosInstance;
    private token: string | null;

    constructor() {
        let service = axios.create();
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;

        let token: any = localStorage.getItem('profile_token');
        this.token = token;
    }

    handleSuccess(response: any) {
        return response;
    }

    handleError = (error: any) => {
        console.log("Service error: ", error);
        if (error.response && error.response.status === 401) {
            // localStorage.removeItem('lenderId');
            // localStorage.removeItem('emailOtp');
            // localStorage.removeItem('profile_token');
            // history.replace('/');
        }
        return Promise.reject(error)
    }

    extGet(path: any, params: any, callback: any) {
        return this.service.get(path, {
            params,
        }).then(
            (response) => callback ? callback(response.status, response.data) : response
        );
    }

    get(path: any, params: any, callback: any) {
        this.token = localStorage.getItem('profile_token');
        return this.service.get(path, {
            params,
            headers: {
                'Authorization': `Bearer ` + this.token,
            }
        }).then(
            (response) => callback ? callback(response.status, response.data) : response
        )
    }

    getBlob(path: any, params: any, callback: any) {
        this.token = localStorage.getItem('profile_token');
        return this.service.get(path, {
            params,
            responseType: 'blob',
            headers: {
                'Authorization': `Bearer ` + this.token,
            }
        }).then(
            (response) => callback ? callback(response.status, response.data) : response
        );
    }

    patch(path: any, payload: any, callback: any) {
        this.token = localStorage.getItem('profile_token');
        return this.service.request({
            method: 'PATCH',
            url: path,
            responseType: 'json',
            data: payload,
            headers: {
                'Authorization': `Bearer ` + this.token,
            }
        }).then(response => callback ? callback(response.status, response.data) : response);
    }

    put(put: any, payload: any, callback: any) {
        this.token = localStorage.getItem('profile_token');
        return this.service.request({
            method: 'PUT',
            url: put,
            responseType: 'json',
            data: payload,
            headers: {
                'Authorization': `Bearer ` + this.token,
            }
        }).then(response => callback ? callback(response.status, response.data) : response);
    }

    post(path: any, payload: any, callback: any) {
        this.token = localStorage.getItem('profile_token');
        return this.service.request({
            method: 'POST',
            url: path,
            responseType: 'json',
            data: payload,
            headers: {
                'Authorization': `Bearer ` + this.token,
            }
        }).then((response) => callback ? callback(response.status, response.data) : response);
    }

    delete(path: any, payload: any, callback: any) {
        this.token = localStorage.getItem('profile_token');
        return this.service.request({
            method: 'DELETE',
            url: path,
            responseType: 'json',
            data: payload,
            headers: {
                'Authorization': `Bearer ` + this.token,
            }
        }).then((response) => callback ? callback(response.status, response.data) : response);
    }
}

export default new Service();