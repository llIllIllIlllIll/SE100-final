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
        uploadContent:"<p>上传要识别的图片..</p>",
        img_width:600,
        img_height:380,
        img:new Image()
    },
    methods:{
        preview(event){
            this.uploadContent = '<img src ="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544258639284&di=f61951b8d57fa18efc491448374701c5&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F05%2F22%2F146390453573413466.PNG"/>';
            this.setSize();
        },
        setSize:function(){
            this.img.src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544258639284&di=f61951b8d57fa18efc491448374701c5&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F05%2F22%2F146390453573413466.PNG";
            this.img_height=this.img.height;
            this.img_width=this.img.width;
    }
}
})