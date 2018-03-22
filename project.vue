<template>
    <div class="project card" href="www.google.com">
        <div class="card-header" v-html="titleMd">
        </div>
        <img :src="'http://achopra.me/myApps/'+pic" :alt="title" class="card-img-top">
        <a v-if="repoLink" :href="repoLink"><img src="./img/github-corner-right.svg" class="github-ribbon" alt=""></a>
        <div class="card-body project-description" v-html="descMd">
        </div>
        <a class="projBtn btn btn-primary" :href="link">Visit</a>
    </div>
</template>

<style>
.github-ribbon{
    position: absolute;
    right:0;
    top:0;
}
.project-description > *::first-line{
    text-align: center;
}
.project-description > *{
    text-align: justify;
}
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
            return marked(this.desc, { sanitize: true ,gfm:true ,smartypants:true ,breaks: true})
        },
        titleMd: function () {
            return marked(this.title, { sanitize: true })
        }
    },
    props:['title','desc','pic','link','repoLink']
})
</script>