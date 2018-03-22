<template>
    <div class="project card" href="www.google.com">
        <div class="card-header" v-html="titleMd">
        </div>
        <img :src="'http://achopra.me/myApps/'+pic" :alt="title" class="card-img-top">
        <a target="_blank" :href="repoLink" v-if="typeof repoLink !== undefined">
            <img src="//not/asd" class="github-ribbon">
        </a>
        <div class="card-body project-description" v-html="descMd">
        </div>
        <a class="projBtn btn btn-primary" :href="link">Visit</a>
    </div>
</template>

<style>
.github-ribbon{
    background: url("img/github-corner-right.svg") no-repeat;
    position: absolute;
    right:0;
    top:0;
    user-select: none;
    -webkit-user-drag: none;
    width:80px;
    height:80px;
    padding-left: 80px;
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