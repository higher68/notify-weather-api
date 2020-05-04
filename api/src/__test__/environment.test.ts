import { Config } from '../config'

describe('refer environment variable', () => {
    const env = process.env;
    env.X_RAPIDAPI_HOST = 'test1';
    env.X_RAPIDAPI_KEY = 'test2';
    test('radidapi host', () => {
        const config = Config.getInstance();
        expect(config.x_rapidapi_host).toBe('test1');
    });
    test('rapidapi key', () => {
        const config = Config.getInstance();
        expect(config.x_rapidapi_key).toBe('test2');
    });
});