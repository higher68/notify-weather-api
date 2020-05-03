export class Config {
    private readonly X_RAPIDAPI_HOST: string;
    private readonly X_RAPIDAPI_KEY: string;

    constructor() {
        const env = process.env;
        this.X_RAPIDAPI_HOST = env.X_RAPIDAPI_HOST;
        this.X_RAPIDAPI_KEY = env.X_RAPIDAPI_KEY;
    }

    get x_rapidapi_host() {
        return this.X_RAPIDAPI_HOST;
    }

    get x_rapidapi_key() {
        return this.X_RAPIDAPI_KEY;
    }
}