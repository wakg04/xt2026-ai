import openai from 'openai'
import dotenv from 'dotenv';
import test from 'node:test';
import { text } from 'node:stream/consumers';
dotenv.config();

const client = new openai({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: process.env.DEEPSEEK_API_BASE_URL,
});
// Loop可控的边界
// 死循环(最大尝试次数),超预算(maxToken)sameStop(相同几次停下来)
const limit ={
    maxRound: 5,
    maxToken: 2000,
    sameStop: 2
}

const task ={
    desc:"小红书美妆文案",//目标
    rules:["标题带数字","正文<300字","大爆款","结尾有行动号召"]//检测的规则
}

let round = 0,tatalToken = 0,lastText = "",sameCount = 0;

function needStop(){
    return round >= limit.maxRound || 
    tatalToken >= limit.maxToken || 
    sameCount >= limit.sameStop;
}

async function gen(){
    const res = await client.chat.completions.create({
        model: "deepseek-v4-flash",
        messages:[{
            role:"user",
            content:`假如你是一位自身小红书美妆博主,
            写一篇${task.desc},严格遵守:
            ${task.rules.join("、")},只输出文案
            `
        }]
    });
    console.log(res.usage.total_tokens,
        res.choices[0].message.content);
    return{
        text:res.choices[0].message.content.trim(),
        token:res.usage.total_tokens
    }
}

async function check(text){
    const res = await client.chat.completions.create({
        model: "deepseek-v4-flash",
        messages:[{
            role:"user",
            content:`校验文案:${text}
            规则: ${task.rules.join("、")},
            仅输出JSON{pass:布尔,fail:数组}
            `
        }]
    })
    return JSON.parse(res.choices[0].message.content.trim());
}

async function runloop(){
    console.log("AI Loop 开始");
    while(!needStop()){//Loop
        round++;
        console.log(`\n第${round}轮`);
        //干活 返回promise 返回一个对象,
        // 可以结构出来 text,token
        const {text,token}= await gen();
        tatalToken += token;
        sameCount = text === lastText ? sameCount + 1 : 0;
        lastText = text;

        const {pass,fail}=await check(text);
        if(pass){
            console.log(`全部规则通过,循环结束`);
            console.log(`最终的文案:${text}`);
            return 
        }else{
            console.log(`不满足${fail}`);
        }
    }
    console.log(`\n 触发刹车强制停止,最后一次内容:${lastText}`);
}
runloop();