

<template>
  
  <div class="p-4 lg:ml-64 lg:mr-64">
      <p class="title-sub mt-8 ms-6">
        WELCOME TO
      </p>
      <p class="title-main ms-6">
        MY PHOTO COLLECTION
      </p>
      

      <div class="w-48 h-52 overflow-hidden me-auto ms-auto">
        <img class="w-full h-full object-cover object-bottom rounded border" :src="image" alt="Default avatar">
      </div>

    </div>
   
    
    

    </template>

    <script>
    import image from "../assets/img/sampleimg.jpg"
    
    export default {
        data: function () {
            return {
                image: image
            }
        }
    }
  </script>
    
    <style scoped>
    .title-sub {
      font-size: 25px;
      }
    .title-main {
    font-size: 50px;
    }
    </style>