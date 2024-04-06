import http from "../../http-common"

class UsersService {
    getAllUsers(){
        return http.get('/users')
            .then((users) => users.data)
    }
}

export default new UsersService();