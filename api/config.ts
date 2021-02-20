import axios from "axios"
import {AxiosRequestConfig } from 'axios'
import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
console.log(publicRuntimeConfig.backendUrl)
const config = {
    baseURL: publicRuntimeConfig.backendUrl,
}

export default {
    ...config
}