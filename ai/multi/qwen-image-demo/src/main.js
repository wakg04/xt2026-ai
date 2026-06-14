// console.log('esm vite');
const apiKey = import.meta.env.VITE_QWEN_API_KEY;
const root = document.querySelector('#app');

const generateImage = async () => {
  // 通过 Vite 代理避免 CORS 问题
  const res = await fetch(
    '/api/dashscope/api/v1/services/aigc/multimodal-generation/generation',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        "model": "qwen-image-2.0-pro",
        "input": {
          "messages": [
            { "role": "user", "content": [
              {
                "image": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20250925/thtclx/input1.png"
              },
              {
                "image": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20250925/iclsnx/input2.png"
              },
              {
                "image": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20250925/gborgw/input3.png"
              },
              {
                "text": "图1的女生穿着图2中的黑色裙子按图3的姿势坐下"
              }
            ]}
          ]
        },
        "parameters": {
          "n": 1,
          "size": "1024*1536"
        }
      })
    }
  )
  const data = await res.json();
  console.log(data);
  return data;
}

const renderImage = (imageUrl) => {
  root.innerHTML = `<img src="${imageUrl}" />`
}

const main = async () => {
  try {
    const data = await generateImage();
    // 从通义万相 API 响应中提取生成的图片 URL
    const imageUrl = data?.output?.choices?.[0]?.message?.content?.[0]?.image;
    if (imageUrl) {
      renderImage(imageUrl);
    } else {
      root.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`
      console.error('未获取到图片 URL，完整响应：', data);
    }
  } catch (err) {
    root.innerHTML = `<p style="color:red">请求失败：${err.message}</p>`
    console.error('请求失败：', err);
  }
}
main();
