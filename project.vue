<template>
    <div class="project card" href="www.google.com">
        <div class="card-header" v-html="titleMd">
        </div>
        <img :src="'http://achopra.me/myApps/'+pic" :alt="title" class="card-img-top">
        <div class="card-body project-description" v-html="descMd">
        </div>
        <a class="projBtn btn btn-primary" :href="link">Visit</a>
    </div>
</template>

<style>
.projBtn{
    margin: 2vmax auto;
    max-width: 75%;
    min-width: 50%;
}
.card-header{
    text-align: center;
}
.card-header > p {
    margin-bottom:0;
}
</style>

<script type="ts">
import Vue from 'vue'
var marked = require('marked');
export default Vue.extend({

    computed: {
        descMd: function () {
            return marked(this.desc, { sanitize: true })
        },
        titleMd: function () {
            return marked(this.title, { sanitize: true })
        }
    },
    props:['title','desc','pic','link']
})
</script>