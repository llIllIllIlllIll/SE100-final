Vue.component("header-bar",{
    props:['info'],
    template:'<li><a>{{info.text}}</a></li>'
})
var app_header_bar=new Vue({
    el:'#nav',
    data:{
        barList:[
            {text:"识别"},
            {text:"历史记录"},
            {text:"关于"}   
        ]
    }
})
var app_upload_content=new Vue({
    el:'#main',
    data:{
        uploadContent:"<p>上传要识别的图片..</p>"
    },
    methods:{
        preview(event){
            this.uploadContent = '<img src ="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=c6e1fee0b40e7bec37d70bb34e47d25d/0e2442a7d933c8952ea37294dd1373f083020004.jpg"/>';
        }
    }
})