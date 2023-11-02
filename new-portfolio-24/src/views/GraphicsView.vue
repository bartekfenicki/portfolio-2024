<template>
  
  <div class="p-4 lg:ml-64 lg:mr-64">
      <p class="title-sub mt-8 me-6 text-end">
        WELCOME TO
      </p>
      <p class="title-main me-6 text-end">
        MY GRAPHICAL WORKS
      </p>

      <div v-for="graphic in graphics" :key="graphic.id" class="text-black">

{{ graphic.name }}
{{ graphic.description }}
<img :src="graphic.imgURL" alt=""  >


</div>

    </div>
      
  
    </template>


<script setup>

import {ref , onMounted} from 'vue'
import {db} from '../firebase.js'
import {collection, onSnapshot} from 'firebase/firestore'


const collectionRef = collection(db, 'graphics')

onMounted(()=> {
    onSnapshot(collectionRef, (querySnapshot) => {
        const fbGraphics = []
        querySnapshot.forEach((doc) => {

            console.log(doc.id, " => ", doc.data());

            const graphic = {
                id: doc.id,
                name: doc.data().name,
                description: doc.data().description,
                imgURL: doc.data().imgURL
            }
            fbGraphics.push(graphic)
        })
        graphics.value = fbGraphics
    })
})



const graphics = ref([

])





 
   
  


</script>
    
    <style scoped>
    .title-sub {
      font-size: 25px;
      }
    .title-main {
    font-size: 50px;
    }
    </style>