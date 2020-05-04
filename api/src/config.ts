export class Config {
    private static config: Config;
    private readonly X_RAPIDAPI_HOST: string;
    private readonly X_RAPIDAPI_KEY: string;

    private constructor() {
        const env = process.env;
        this.X_RAPIDAPI_HOST = env.X_RAPIDAPI_HOST;
        this.X_RAPIDAPI_KEY = env.X_RAPIDAPI_KEY;
    }

    public static getInstance() {
        if (this.config == null) {
            this.config = new Config();
        }
        return this.config;
    }

    public get x_rapidapi_host() {
        return this.X_RAPIDAPI_HOST;
    }

    public get x_rapidapi_key() {
        return this.X_RAPIDAPI_KEY;
    }
}