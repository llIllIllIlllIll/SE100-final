# RWrite 简介
## 产品背景
这个项目的初衷是为了减轻中小学生老师批改语文作业负担，通过机器识别错别字结合老师手动反馈调整的方法提高批改作业的效率。关于调研的结果请看 [survey.md](https://github.com/llIllIllIlllIll/SE100-final/blob/master/survey.md)。
## 设计思路
框架方面我们用了Vue.js，使得整个界面的交互性设计非常容易。
## 打开方式
因为这是一个比较小的项目，我们并没有选择搭建Vue的脚手架和npm工具。这个项目只需要下载压缩包并解压，打开index.html就可以看到完整的呈现。
使用方式就是上传你需要识别的图片，然后点击识别，就会看见识别的结果。用户可以自行修改识别结果、添加评语、反馈错误。