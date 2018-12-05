//var files = document.getElementById('pic').files;
var form = new FormData();//通过HTML表单创建FormData对象
var url = '127.0.0.1:8080/'
function selectFile(){
    var files = document.getElementById('img_input').files;
    console.log(files[0]);
    if(files.length == 0){
        return;
    }
    var file = files[0];
    //把上传的图片显示出来
    var reader = new FileReader();
    // 将文件以Data URL形式进行读入页面
    console.log(reader);
    reader.readAsBinaryString(file);
    reader.onload = function(f){
        var result = document.getElementById("upload");
        var src = "data:" + file.type + ";base64," + window.btoa(this.result);
        result.innerHTML = '<img src ="'+src+'"/>';
    }
    console.log('file',file);
    ///////////////////
    form.append('file',file);
    console.log(form.get('file'));
}
//var xhr = new XMLHttpRequest();
// function handIn(){
//  console.log(form.get('file'));
//  xhr.open("post", url, true);
//  xhr.addEventListener("readystatechange", function() {
//      var result = xhr;
//      if (result.status != 200) { //error
//          console.log('上传失败', result.status, result.statusText, result.response);
//      }
//      else if (result.readyState == 4) { //finished
//          console.log('上传成功', result);
//      }
//  });
// }
