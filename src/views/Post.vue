<template>
<div>
  <div class="top">
    <div class="info">
      <h1 class="header-1">{{post.title}}</h1>
      <p class="mission-statement">{{post.author}} | {{post.date}}</p>
    </div>
    <div class="image">
      <img :src="'/images/posts/'+post.image">
    </div>
  </div>
  <div class="content">
    <p>{{post.content}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  computed: {
    post() {
      return this.$root.$data.posts[this.$route.params.id - 1];
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

.top {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.image, .content, .info {
  margin: 50px;
}

.info {
  margin-top: 150px;
}

img {
  max-width: 600px;
}

</style>
