<template>
  
  <div class="p-4 lg:ml-64 lg:mr-64">
      <p class="title-sub mt-8 me-6 text-end">
        WELCOME TO
      </p>
      <p class="title-main me-6 text-end">
        MY GRAPHICAL WORKS
      </p>

      <div v-for="graphic in graphics" :key="graphic.id" class="mt-10 w-full">

        <div class="max-w-sm p-4 rounded-lg shadow-lg me-auto ms-auto" style="background-color: #282828;">
          <img class="w-full" :src="graphic.imgURL" alt="">
          <div class="px-6 py-4">
            <div class="font-bold text-2xl mb-2 text-center">{{ graphic.name }}</div>
            <p class="text-gray-200 text-base text-center">
              {{ graphic.description }}
            </p>
          </div>
        </div>

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
    @media screen and (max-width:450px) {
      .title-sub {
      font-size: 15px;
      }
    .title-main {
    font-size: 30px;
    }
    }
    </style>