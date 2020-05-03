import { Config } from '../config'

describe('refer environment variable', () => {
    test('radidapi host', () => {
        const env = process.env;
        env.X_RAPIDAPI_HOST = 'test1';
        const config = new Config();
        expect(config.x_rapidapi_host).toBe('test1');
    });
    test('rapidapi key', () => {
        const env = process.env;
        env.X_RAPIDAPI_KEY = 'test2';
        const config = new Config();
        expect(config.x_rapidapi_key).toBe('test2');
    });
});