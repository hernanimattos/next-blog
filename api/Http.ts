import axios from 'axios';
import config from './config';

class Provider {
    axios = null
    config = null
	constructor() {
		//this.axios = null;
		this.config = config;
		this.configAxios();
	}
	configAxios() {
		this.axios = axios.create({
			...this.config,
		});
	}
	async get(url:string) {
		return await this.axios.get(url);
	}
}

export default new Provider();