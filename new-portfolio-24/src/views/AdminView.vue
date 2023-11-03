<script setup>
import { RouterLink} from 'vue-router'

</script>


<template>
<div class="p-4 lg:ml-64 lg:mr-64">
    <p class="title-main text-center mt-10">
        ADMIN PANEL
      </p>
<div class="flex flex-col mt-16 sm:mt-32">
    <RouterLink to="/adminSite" class="m-6 w-80 me-auto ms-auto text-center text-lg sm:text-2xl text-green-600 hover:text-white  border-2 border-green-800 hover:bg-green-700  rounded-lg">MANAGE WEBSITES</RouterLink>
    <RouterLink to="/adminGraphic" class="m-6 w-80 me-auto ms-auto text-center text-lg sm:text-2xl text-green-600 hover:text-white  border-2 border-green-800 hover:bg-green-700  rounded-lg">MANAGE GRAPHICS</RouterLink>
    <RouterLink to="/adminPhoto" class="m-6 w-80 me-auto ms-auto text-center text-lg sm:text-2xl text-green-600 hover:text-white  border-2 border-green-800 hover:bg-green-700  rounded-lg">MANAGE PHOTOGRAPHY</RouterLink>

</div>
    


</div>
 </template>

 <style scoped>
  .title-main {
    font-size: 50px;
    }
    @media screen and (max-width:450px) {
    .title-main {
    font-size: 30px;
    }
    }
</style>
 
 

