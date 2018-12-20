<template>
  <div class="recognize">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Recognize',
  data () {
    return {
      msg: '添加上传照片、识别……'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
