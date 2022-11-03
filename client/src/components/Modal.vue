<template>
    <div  class="bg-modal">
     <div class="modal">
        <button @click="close" class="close-btn">X</button>
        <h1>Login</h1>
        <form @submit.prevent="login">
          <input placeholder="email" v-model="formData.email" type="email">
          <input placeholder="password" v-model="formData.password" type="password">
          <button type="submit">Log in</button>
        </form>
     </div>
    </div>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            formData:{
                email:'',
                password:''
            }
        }
    },
    setup(props,{emit}){
        const close = () => {
            emit("close");
        };

        return {close}
    },
    methods: {
       async login(){
              axios.post('/auth/login',this.formData)
             .then((resp) => {
                console.log(resp.data);
            })
            .catch((error) => {
                console.log(error);
            })

           
        }
    },
      computed: mapGetters(['getUser'])
}
</script>
<style lang="scss">
.bg-modal{
    position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

.modal{
    background-color: #fefefe;
    margin: auto;
    position: relative;
    padding: 20px;
    border: 1px solid #888;
    width: 70%;
    text-align: center;
    .close-btn{
        position: absolute;
        right: 10px;
        top: 10px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        input{
            width: 300px;
            margin: 10px 0px;
            height: 40px;
        }

    }
}
}
</style>