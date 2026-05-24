# Git

- 开发目录
    - 多人协作，如何分布式存储
    github
    gitee 码云
    gitlab
    中央仓库， a/b/c...
- 操作的冲突
    管理文件版本
    一个文件，多个版本
    文件系统->版本控制系统
    回溯项目工程，更安全、好评估
## learn_git
目前是空的项目文件夹
    代码文件（硬盘坏了、改了忘了、多人协作）
    本地文件 分布式、版本管理
让git接管它，成为代码仓库
    - github 中央仓库
    - git init 本地仓库（文件->版本（快照））

- git init
    项目->仓库 转变
    .git 仓库隐藏目录 安全，不能随便操作按照git的约束来执行
    git bash 微型的linux bash 环境
    shell 脚本
    ls 
- git status 
    常用，做任何git操作前，
    明确仓库当前状态

- git add readme.md
    readme.md 文件 untracked
    将一个**未被仓库跟踪**的文件，添加到**暂存区**（staging area）
    to be commited 等待提交
    文件 1:n 文件版本（快照）
- git commit -m 'wrote a readme file'
    存储到了git仓库中，有了第一个快照
    2 insertions 新增内容两行
- git 配置
    git config --global user.name "your name"
    git config --global user.email "your email@example.com"
    gitee证件
## repo仓库
    - remote origin 远程源
    - git push origin master/main
