
<template>

<div class="page container">
    <div class="title">Welcome to {{Header}}</div>
    <!-- <div class="subtitle">How are you ?</div> -->
    <div class="projectList">
        <!-- eslint-disable-next-line -->
        <project v-for="project in projAry"
            :key="project.title"
            :title="project.title"
            :desc="project.desc"
        ></project>
    </div>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</div>

</template>

<style>
    body{
        background-image: url('./bg.jpg');
        background-size: cover;
    }
    .title{
        text-align: center;
        font-weight: bold;
        font-size: xx-large;
        margin:1.5vmax 0;
        color:#f0ffff;  
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
    {title:"Proj#1",
     desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {title:"Proj#2",
     desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {title:"Proj#3",
     desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {title:"Proj#4",
     desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },

    {title:"Proj#5",
     desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {title:"Proj#6",
     desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {title:"Proj#8",
     desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
]
export default Vue.extend({
    components:{
        project: project
    },
    data:()=>({
        projAry:[],
        Header: "Apps.achopra.me"
    }),
    mounted(){      
        fetch("https://jsonplaceholder.typicode.com/posts/1 ")
        .then(response=>response.json())
        .then(data=>{   
            console.log(data)
            this.projAry = [{title:"ASD",desc:JSON.stringify(data)}]
        })
    }
})
</script>