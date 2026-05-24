# claude code

- AICG 代码生成
    豆包复制代码
- vscode+ cc 插件
    AI Coding Agent
    有手和脚 直接干活，生成的代码直接写入文件夹
- cc 的命令行工具
 - 基于node.js
 - npm config set registry https://registry.npmmirror.com
    npm node package management
    包的来源设置为淘宝源 国内 快
 - npm install -g @anthropic-ai/claude-code
    全局安装 cc 命令行 npm 包

    claude --version

## cc 开发网页 jima
- claude
是否信任文件夹
- 就像你请了个程序员来帮你改项目，得先把办公室门禁给他，他才能进去看代码、该文件、跑命令，但权限也直线你授权的这个文件夹。

这体现了 Anthropic 在Claude Code 里强调
最小权限+安全边界 思想

## vibe coding
- 不要急于将任务交给llm
- 先思考
 五个构建块，
 llm 擅长执行，准确清晰的任务
 prompt 设计能力是关键

 ## cc 提供 plan模式
 通过询问一系列问题，cc根据你的回答，生成一个计划，执行任务。
 代替prompt 

## plan模式
- 不是直接执行任务
- 先规划一下
    请了诸葛亮
    /plan 规划模式
- 新的工作模式
    不太了解行业或领域，/plan可以降低难度
    - claude code 非常只能（智能体）
        思考、规划、建议并执行
    - 对新手友好

## 使用cc维护一个已有项目
- 先思考，了解项目
    运行起来，
    按模块看代码
- cc
    - 如果之前就是cc开发的
    直接查看根目录下的 claud.md文件（项目，描述文件）
    - 如果不是呢？
    /init
    初始化项目，生成 claud.md 文件
    将项目都分析一遍

帮我设计一个网页，用来宣传吉马程序员
上方有几栏可供点击浏览的选项
选择后分别呈现简介，课程特色，课程体系，报名方案，师资力量等模块
左上方有一个吉马程序员的大标题
风格简约

