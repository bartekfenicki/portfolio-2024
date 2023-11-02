

<template>
  
  <div class="p-4 lg:ml-64 lg:mr-64">
      <p class="title-sub mt-8 ms-6">
        WELCOME TO
      </p>
      <p class="title-main ms-6">
        MY PHOTO COLLECTION
      </p>
      
      <div v-for="photo in photos" :key="photo.id" class="text-black">

        {{ photo.name }}
        {{ photo.date }}
        <img :src="photo.imgURL" alt=""  >


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
    </style>