import http from "../../http-common"

class AuthService {
    login(user){
        return http.post('/auth/login',{
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password
            })
        }).then((token) => token)
    }
}

export default new AuthService();