

<template>
  
  <div class="p-4 lg:ml-64 lg:mr-64">
      <p class="title-sub mt-8 ms-6">
        WELCOME TO
      </p>
      <p class="title-main ms-6">
        MY PHOTO COLLECTION
      </p>
      
      <div v-for="photo in photos" :key="photo.id" class="w-full mt-10">
  
        <figure class="max-w-sm ms-auto me-auto">
          <img class="h-auto max-w-full rounded-lg" :src="photo.imgURL" alt="">
          <figcaption class="mt-2 text-md text-center text-gray-50">{{ photo.name }}</figcaption>
          <figcaption class="mt-2 text-sm text-center text-purple-200 italic"> {{ photo.date }}</figcaption>
        </figure>
        

      </div>
      
    </div>
   
    
    

    </template>

<script setup>

import {ref , onMounted} from 'vue'
import {db} from '../firebase.js'
import {collection, onSnapshot} from 'firebase/firestore'


const collectionRef = collection(db, 'photos')

onMounted(()=> {
    onSnapshot(collectionRef, (querySnapshot) => {
        const fbPhotos = []
        querySnapshot.forEach((doc) => {

            console.log(doc.id, " => ", doc.data());

            const photo = {
                id: doc.id,
                name: doc.data().name,
                date: doc.data().date,
                imgURL: doc.data().imgURL
            }
            fbPhotos.push(photo)
        })
        photos.value = fbPhotos
    })
})



const photos = ref([

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