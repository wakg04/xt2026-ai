import { OpenAI } from 'openai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

// 懒初始化：只在首次访问时创建 client
let _client = null;
function getClient() {
    if (!_client) {
        _client = new OpenAI({
            apiKey: process.env.DEEPSEEK_API_KEY,
            baseURL: process.env.DEEPSEEK_BASE_URL,
        });
    }
    return _client;
}

// 用 Proxy 代理，保持 client.chat.completions.create(...) 的调用方式不变
const client = new Proxy({}, {
    get(_, prop) {
        return getClient()[prop];
    },
});

export default client;
