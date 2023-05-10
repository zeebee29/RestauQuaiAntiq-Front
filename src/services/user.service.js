import axios from 'axios';
import authHeader from './auth-header';

//const API_URL = 'http://localhost:8080/api/test/';
const VUE_APP_BACK_URL = 'http://localhost:8000'

class UserService {
    getPublicContentHome() {
        return axios.get(VUE_APP_BACK_URL + 'all');
    }

    getPublicContentCarte() {
        return axios.get(VUE_APP_BACK_URL + '/plats');
    }
    getPublicContentMenus() {
        return axios.get(VUE_APP_BACK_URL + '/api/menus');
    }

    getUserBoard() {
        return axios.get(VUE_APP_BACK_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(VUE_APP_BACK_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(VUE_APP_BACK_URL + 'admin', { headers: authHeader() });
    }
}

export default new UserService();
