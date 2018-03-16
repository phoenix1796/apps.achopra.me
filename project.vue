<template>
    <div class="project card" href="www.google.com">
        <div class="card-header">
            {{title}}
        </div>
        <div class="card-body project-description">
            {{desc}}
        </div>
        <a class="projBtn btn btn-primary">Visit</a>
    </div>
</template>

<style>
.projBtn{
    margin: 2vmax auto;
    max-width: 75%;
    min-width: 50%;
}
/* .project{
    margin:1vmax 1vmax;
}
.project:hover {
    transform: translate(10%,10%,0);
}
@media (min-width: 600px) {
    .project{
        width:95%;
    }
}
@media (min-width: 768px){
    .project{
        width: 45%;
    }
}
@media (min-width: 992px){
    .projBtn{
        margin: 0.5vmax auto;
    }
    .project{
        width: 25%;
        }
} */
</style>

<script type="ts">
import Vue from 'vue'
export default Vue.extend({
    props:['title','desc']
})
</script>