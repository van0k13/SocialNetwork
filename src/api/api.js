import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': 'd4a52b38-3f53-4696-96ef-92d8bbcea7be' }
})

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10) {
        const response = await instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
        return response.data
    },
    async followUser(userId) {
        const response = await instance
            .post(`follow/${userId}`, {})
        return response.data
    },
    async unfollowUser(userId) {
        const response = await instance
            .delete(`follow/${userId}`)
        return response.data
    } 
}
export const profileAPI = {
    async getProfile(userId) {
        const response = await instance
            .get(`profile/` + userId)
        return response.data
    },
    async getStatus(userId) {
        const response = await instance
            .get(`profile/status/` + userId)
        return response.data
    },
    async updateStatus(status) {
        const response = await instance
            .put(`profile/status/`, { status: status })
        return response.data
    }
}
export const authAPI = {
    async authMe() {
        const response = await instance
            .get(`auth/me`)
        return response.data
    },
    async logIn (email, password, rememberMe = false) {
        const response = await instance
            .post(`auth/login`, { email, password, rememberMe })
        return response.data
    },
    async logOut () {
        const response = await instance
            .delete(`auth/login`)
        return response.data
    }
}