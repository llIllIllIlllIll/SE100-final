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
var inputImg = document.getElementById("image");
inputImg.addEventListener("change",function(){
  var reader = new FileReader();
  reader.readAsDataURL(inputImg.files[0]);
  reader.onload=function(e){  
    app_upload_content.uploadContent='<img src="' + this.result +'" alt="" />';
    app_upload_content.img.src= this.result;
    app_upload_content.img.onload=function(){
        app_upload_content.img_height=app_upload_content.img.height;
        app_upload_content.img_width=app_upload_content.img.width;
    }
} 
})

var app_text_result=new Vue({
    el:"#text-results",
    data:{
        result_width: 0,
        result_height: 0,
        results: "尚未开始识别...",
    },
    methods:{

    }
})
var app_cut_line=new Vue({
    el:"#cut-line",
    data:{
        cut_line:"none"
    }
})

var textRst=document.getElementById("textRst");
textRst.addEventListener("change",function(){
    app_text_result.result_width=app_upload_content.img_width;
    app_text_result.result_height=app_upload_content.img_height;
    app_cut_line.cut_line="block";
    app_text_result.results='<img src="https://raw.githubusercontent.com/llIllIllIlllIll/SE100-final/master/results.jpg" alt="" />'
})

