<template>
    <div class="navbar">
        <nav>
            <router-link to="/"><img src="../Img/logo/logo.png" alt=""></router-link>
            <div class="actions">
                <div class="search_button action-item"><i class="material-icons">search</i></div>
                <div @click="isOpen=!isOpen" class="auth_button action-item"><i class="material-icons">person_outline</i></div>
                <div class="card_button action-item">
                    <span class="card_count">0</span>
                    <i class="material-icons-outlined">shopping_cart</i>
                </div>
                <router-link class="menu_link" to="/menu">Մենյու</router-link>
            </div>
        </nav>
    </div>
    <Modal  @close="isOpen=false" :isOpen="isOpen"  />
</template>
<script>
import Modal from '@/components/Modal.vue'
export default {
    components:{Modal},
    data(){
        return{
            isOpen:false
        }
    }
}
</script>
<style lang="scss">
.navbar{
    position: fixed;
    width: 100%;
    background-color: white;
    top: 0;
    z-index: 100;
    nav{
        display: flex;
        max-width: 90%;
        padding: 1.125rem 0px;
        margin:auto;
        justify-content: space-between;
        align-items: center;
        .actions{
            display: flex;
            align-items: center;
            cursor: pointer;
            .action-item{
                background-color: #e6e6e6;
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                text-align: center;
                display: block;
                transition: all .3s ease;
                &:not(:last-child){
                    margin-right: 0.625rem;
                }
                &:hover{
                    box-shadow: 2px 6px 0px 0px rgb(230 230 230 / 40%);
                }
                i{
                    font-size: 1.375rem;
                    line-height: 3rem;
                }
                
            }
            .card_button{
                position: relative;
                span{
                    position: absolute;
                    top: -0.5rem;
                    right: -0.5rem;
                    width: 1.5rem;
                    height: 1.5rem;
                    line-height: 1.65rem;
                    text-align: center;
                    color: white;
                    font-size: 0.875rem;
                    background: $red;
                    border-radius: 50%;
                    z-index: 1;
                    overflow: hidden;
                }
            }
            .menu_link{
                display: inline-block!important;
                margin-left: 1rem;
                padding: 1rem;
                transition: all .3s ease;
                color: #232223;
                font-weight: normal;
                text-align: center;
                font-size: 1.125rem;
                line-height: 1rem;
                position: relative;
                white-space: nowrap;
                font-weight: 600;
                letter-spacing: 0.5px;
                z-index: 1;
                border-radius: 2rem;
                position: relative;
                background: $yellow;
                &:hover{
                    transform: translate3d(-3px,-5px,0);
                    box-shadow: 2px 6px 0px 0px rgb(235 225 23 / 40%);
                }
            }
            @media (max-width:540px){
                margin-top: 15px;
            }
        }
        @media (max-width:540px) {
            flex-direction: column;
        }
    }
}
</style>