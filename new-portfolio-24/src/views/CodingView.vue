<template>
    <div class="p-4 lg:ml-64 lg:mr-64">
      <p class="title-sub mt-8 ms-6">
        WELCOME TO
      </p>
      <p class="title-main ms-6">
        MY WEBSITES
      </p>

      <div v-for="site in sites" class="text-black">

        {{ site.name }}
        {{ site.description }}
        {{ site.link }}
        <img :src="site.imgURL" alt=""  >

      </div>


      
    </div>
    
    </template>


<script setup>
import {ref , onMounted} from 'vue'
import {db} from '../firebase.js'
import {collection, onSnapshot} from 'firebase/firestore'

const collectionRef = collection(db, 'sites')

onMounted(()=> {
    onSnapshot(collectionRef, (querySnapshot) => {
        const fbSites = []
        querySnapshot.forEach((doc) => {

            console.log(doc.id, " => ", doc.data());

            const site = {
                id: doc.id,
                name: doc.data().name,
                description: doc.data().description,
                link: doc.data().link,
                imgURL: doc.data().imgURL
            }
            fbSites.push(site)
        })
        sites.value = fbSites
    })
})

const sites = ref([

])

const siteName = ref('')
const siteDescription = ref('')
const siteLink = ref('')

</script>
    
    <style scoped>
    .title-sub {
      font-size: 25px;
      }
    .title-main {
    font-size: 50px;
    }
    </style>