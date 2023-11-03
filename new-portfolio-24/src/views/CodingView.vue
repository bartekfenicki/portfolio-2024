<template>
    <div class="p-4 lg:ml-64 lg:mr-64">
      <p class="title-sub mt-8 ms-6">
        WELCOME TO
      </p>
      <p class="title-main ms-6">
        MY WEBSITES
      </p>

      <div v-for="site in sites" class="w-full mt-10">

        <div class="max-w-sm p-4 rounded-lg shadow-lg me-auto ms-auto" style="background-color: #282828;">
          <img class="w-full" :src="site.imgURL" alt="">
          <div class="px-6 py-4">
            <div class="font-bold text-2xl mb-2 text-center">{{ site.name }}</div>
            <p class="text-gray-200 text-base text-center">
              {{ site.description }}
            </p>
          </div>
         <p class="text-green-700 text-center">
          <a :href="site.link">view the site</a>
         </p> 
        </div>

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
    @media screen and (max-width:450px) {
      .title-sub {
      font-size: 15px;
      }
    .title-main {
    font-size: 30px;
    }
    }
    </style>