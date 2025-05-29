import React from 'react'
import { useContext } from 'react'
import AuthContext from './../context/AuthContext'
import { createAxiosInstance } from './../services/axiosConfig'

const useGetShortenedList = () => {
    const { authTokens, setAuthTokens, setUser, logoutUser } = useContext(AuthContext)

    const api = createAxiosInstance(authTokens, setAuthTokens, setUser, logoutUser)

    const shortenedUrlList = async () => {
        const response = await api.get("url/url_list/",);
        return response.data
    }

    return shortenedUrlList
};

export default useGetShortenedList
