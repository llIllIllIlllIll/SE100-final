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
        /*preview(event){
            this.uploadContent = '<img src ="http://cdn.03.k618.cn/pics/YVQ3RUEgF0BYPQtsFl9iSAMcfBVxFF5mTQICfBVvFl1kTAJsdxFnE1l5EkJUYhJmFkJn.jpg"/>';
            this.setSize();
        },
        setSize:function(){
            this.img.src="http://cdn.03.k618.cn/pics/YVQ3RUEgF0BYPQtsFl9iSAMcfBVxFF5mTQICfBVvFl1kTAJsdxFnE1l5EkJUYhJmFkJn.jpg";
            this.img_height=this.img.height;
            this.img_width=this.img.width;
    }*/
}
})
//这个用了传统的html和vue混合使用 因为读图片有点麻烦
var inputBox = document.getElementById("image");
inputBox.addEventListener("change",function(){
  var reader = new FileReader();
  reader.readAsDataURL(inputBox.files[0]);
  reader.onload=function(e){  
    app_upload_content.uploadContent='<img src="' + this.result +'" alt="" />';
    app_upload_content.img.src= this.result;
    app_upload_content.img.onload=function(){
        app_upload_content.img_height=app_upload_content.img.height;
        app_upload_content.img_width=app_upload_content.img.width;
    }
} 
})


