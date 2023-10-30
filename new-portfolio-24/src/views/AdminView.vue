<template>

<div class="p-4 lg:ml-64 lg:mr-64">

   <form class="add">
      <label for="name">Website Name:</label>
      <input class="bg-black" type="text" name="name" id="name" required>
      <label  for="description">Description:</label>
      <input class="bg-black" type="text" name="description" id="description" required>
      <label for="link">Link:</label>
      <input class="bg-black" type="text" name="link" id="link" required>

      <button>ADD A WEBSITE</button>
   </form>

   <form  class="delete">
      <label for="id">Website ID:</label>
      <input type="text" name="id" id="id" required>
      <button>DELETE A WEBSITE</button>
   </form>

   



</div>
 </template>
 
 <script setup>
 /*
import {getRef} from '../firebase.js'

onSnapshot(getRef, (snapshot)=> {
    let codings = []

    snapshot.docs.forEach((doc) => {
        codings.push({ ...doc.data(), id: doc.id })
    })
    console.log(codings)
})

//adding documents
 const addCodingForm = document.querySelector('.add');
addCodingForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(getRef, {
        name: addCodingForm.name.value ,
        description: addCodingForm.description.value, 
        link: addCodingForm.link.value
    })
    .then (() => {
        addCodingForm.reset()
    })
     
})



//deleting documents
const deleteCodingForm = document.querySelector('.delete');
deleteCodingForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, 'codings', deleteCodingForm.id.value)

    deleteDoc(docRef)
    .then (() => {
        deleteCodingForm.reset()
    })
})
*/
</script>
  