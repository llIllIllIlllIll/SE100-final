Vue.component("header-bar",{
    props:['info'],
    template:'<li><a>{{info.text}}</a></li>'
})
Vue.component("fault",{
    props:['text'],
    template:'\
    <li>{{text}}\
    <button v-on:click="$emit(\'remove\')">清除</button>\
    </li>'
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

var app_img_result=new Vue({
    el:"#img-results",
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
        showCutLine:false
    }
})

var textRst=document.getElementById("textRst");
textRst.addEventListener("change",function(){
    app_analysis.txt_width=app_img_result.result_width=app_upload_content.img_width;
    app_analysis.txt_height=app_img_result.result_height=app_upload_content.img_height;
    app_cut_line.showCutLine=true;
    app_analysis.shown=true;
    app_img_result.results='<img src="https://raw.githubusercontent.com/llIllIllIlllIll/SE100-final/master/results.jpg" alt="" />'
    /*app_analysis.textAnalysis="的：“叽叽喳喳的歌唱”，此处用字错误，应该为“地”; \n \
    的：“悠然的摆动着”，此处用字错误，应该为“地”; \n \
    稀：“猎杀珍惜动物”，此处字形错误，请仔细检查笔划书写; \n \
    嚷：“那些嚷着要考”，此处字形错误，请仔细检查笔划书写; \n \
    的：“更好的为人服务”，此处用字错误，请仔细检查笔划书写; \n "*/
})

var app_analysis=new Vue({
    el:'#analysis',
    data:{
        txt_width:0,
        txt_height:0,
        studentName:"小王",//like Li Hus
        textAnalysis:[
            {id:1,text:"的：“叽叽喳喳的歌唱”，此处用字错误，应该为“地"},
            {id:2,text:"的：“悠然的摆动着”，此处用字错误，应该为“地”"},
            {id:3,text:"稀：“猎杀珍惜动物”，此处字形错误，请仔细检查笔划书写"},
            {id:4,text:"嚷：“那些嚷着要考”，此处字形错误，请仔细检查笔划书写"},
            {id:5,text:"的：“更好的为人服务”，此处用字错误，请仔细检查笔划书写"}
        ],
        shown:false, //indicates when this analysis should be seen
        teacherFeedback:"" //an input required from user(teacher here)

    }
})

