
<template>

<div class="page container">
    <div class="title">Welcome to testing#1 {{Header}}</div>
    <!-- <div class="subtitle">How are you ?</div> -->
    <div class="projectList">
        <!-- eslint-disable-next-line -->
        <project v-for="project in projAry"
            :key="project.title"
            :title="project.title"
            :desc="project.desc"
            :pic="project.pic"
        ></project>
    </div>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</div>

</template>

<style>
    body{
        background-color: #f7f7fa;
        background-size: cover;
    }
    .title{
        text-align: center;
        font-weight: bold;
        font-size: xx-large;
        margin:1.5vmax 0;
        color:#0f0f0f;  
    }
    .projectList{
        display:grid;
        grid-gap: 1vmax;
        grid-template-columns: repeat(auto-fill, minmax(20em,1fr));
        text-align: justify;
    }
</style>

<script type="ts">
import Vue from 'vue'
import project from "./project"
let projAry = [
    {title:"_Proj#1_",
     desc:"_lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum_"
    },
    {title:"**Proj#2*_*",
     desc:"***lorem ispsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum***"
    }
]
export default Vue.extend({
    components:{
        project: project
    },
    data:()=>({
        projAry:projAry,
        Header: "Apps.achopra.me"
    }),
    mounted(){
        fetch("http://achopra.me/myApps/api.json")
        .then((response)=>response.json())
        .then(data=>{
            console.log(data)
            this.projAry = data
        })
    }
})
</script>