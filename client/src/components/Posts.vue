<template>
    <div class="home">
      <h1>Posts</h1>
          <div class="block" v-for="post in allPosts" :key="post.id">
            <h1>{{post.title}}</h1>
            <p>{{post.text}}</p> <span>Views {{post.viewCount}}</span>
          </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters(['allPosts']),
  
    mounted () {
      this.$store.dispatch('getPosts')
    }
  }
  </script>
  
  <style lang="scss">
  .home{
    width: 90%;
    margin: auto;
    h1{
      margin-bottom: 18px;
      text-align: center;
    }
  .block{
    padding: 15px;
    border-radius: 15px;
    box-shadow: $blackshadow;
    margin-bottom: 18px;
    p{
      max-width: 500px;
      margin: auto;
      text-align: center;
    }
    span{
      display: flex;
      justify-content: end;
    }
  }
  }
  
  </style>
  