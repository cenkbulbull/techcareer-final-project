import axios from "axios"

export default axios.create({
    baseURL: import.meta.env.API_URL,
    headers:{
        "Content-Type":"application/json"
    }
})