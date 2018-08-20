import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import { Configuration } from 'log4js';

export class YamlLoader {
    load() {
        const cwd = process.cwd();
        const filePath = path.join(cwd, 'config', 'log4js.yaml');
        // console.log('YamlLoader#load(): filePath=%o', filePath);
        if (!fs.existsSync(filePath)) {
            throw new Error(`file not find. filePath=${filePath}`);
        }

        const text = fs.readFileSync(filePath, {
            encoding: 'utf-8',
        });
        const options: yaml.LoadOptions = {
            filename: 'error.log'
        };
        const object: { log4js: Configuration } = yaml.safeLoad(text, options);
        // console.log('YamlLoader#load(): object=%o', object);
        const config = object.log4js;

        return config;
    }
}

// const config = new YamlLoader().load();

// export const LoggerConfig = config;
