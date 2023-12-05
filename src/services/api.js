import axios from "axios";

const apiCodeBurger = axios.create({
    baseURL: 'http://localhost:3011/'
});

apiCodeBurger.interceptors.request.use(async (config) => {
    const userData = localStorage.getItem('codeburger:userData');
    if (userData && userData.trim() !== '') {
        try {
            const userDataObj = JSON.parse(userData);
            if (userDataObj && userDataObj.token) {
                const token = userDataObj.token;
                
                config.headers.authorization = `Bearer ${token}`;
                // Resto do seu código que utiliza o token
            } else {
                console.error('userData.token is undefined or null.');
                // Lide com a situação de userData.token não estar definida ou null, se necessário.
            }
        } catch (error) {
            console.error('Erro ao analisar userData como JSON:', error);
            // Lide com o erro, se necessário.
        }
    } else {
        console.error('userData is undefined, null, empty, or not a string.');
        // Lide com a situação de userData não estar definida, ser nula, vazia ou não ser uma string, se necessário.
    }

    return config;
});

export default apiCodeBurger;
