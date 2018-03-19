<template>
    <transition name="fade">
        <div class="load-overlay">
            <img src="//not/asd" class="banner loader">
        </div>
    </transition>
</template>
<style>
    .loader {
        position:absolute;
        transform: translate(-50%,-50%);
        left:50%;
        top:50%;
    }
    .load-overlay{
        z-index: 999;
        height: 100vh;
        width: 100vw;
        background-color:#ffffff;
        position:absolute;
        left:0;
        top:0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.7s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
        .banner {
        display: block;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: url("./img/cube_mobi.gif") no-repeat;
        width: 32px; /* Width of new image */
        height: 32px; /* Height of new image */
        padding-left: 32px; /* Equal to width of new image */
    }
    @media (min-width:768px){
        .banner{
            background: url("./img/cube.gif") no-repeat;
            width: 128px; /* Width of new image */
            height: 128px; /* Height of new image */
            padding-left: 128px; /* Equal to width of new image */
        }
    }
</style>
<script type="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>