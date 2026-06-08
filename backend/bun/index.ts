// http 请求 llm 借口
// bun 代替npm做包管理器
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.DEEPSEEK_BASE_URL);
async function chat() {
    //llm可能会出错,异常
    //timeout network ,llm忙,apikey错误,
    try{
        // 不用get
        // get 请求有上限 
        // apikey get不安全 明文
        // 图片 上传 post 请求体
        // 请求行 url method http version
        // 请求头 Authorization apikey
        // 请求体 body
        // fetch http 请求 api
        // axios http 请求的框架,封装了fetch,企业级别的

        const res = await axios.post(`${process.env.DEEPSEEK_BASE_URL}`,
        {
            model:"deepseek-v4-flash",
            messages:[{
                role:"user",
                content:"你好,介绍一下bun"
            }]
        },
        {
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${process.env.DEEPSEEK_API_KEY}`
            }
        }
    )
    // axios 默认会在响应前面带上data
    console.log(res.data.choices[0].message.content);
    }catch(err:any){
        console.log(err.message);
    }
}
chat();
