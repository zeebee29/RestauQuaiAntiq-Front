import axios from 'axios';

//const VUE_APP_BACK_URL = 'http://localhost:8080';
const VUE_APP_BACK_URL = 'http://127.0.0.1:8000'

class AuthService {
    login(user) {
        return axios.post(VUE_APP_BACK_URL + '/api/login', {
            username: user.email,
            password: user.password
        })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(VUE_APP_BACK_URL + '/inscription', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();
