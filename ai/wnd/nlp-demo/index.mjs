import{
    getCompletion
} from './completion.mjs'

// function sleep(ms){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve()
//         },ms)
//     })
// }

// arrow function
// function
// 参数只有一个
// 函数体只有一句代码.并且是返回值{}
const sleep = ms =>
    new Promise(resolve=> setTimeout(resolve,ms))

const main = async()=>{
    // console.log('----------')
    // await sleep(2000)
    // console.log('----------')
    const prompt=`
    将以下中文翻译成西班牙语:
    \`\`\`您好我想订购一个搅拌机\`\`\`
    const result=await getCompletion(prompt);
    
    `
}

main()
