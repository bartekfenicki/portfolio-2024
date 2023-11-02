<template scoped>
<div class="p-4 lg:ml-64 lg:mr-64">

<div>
    <form @submit.prevent="addPhoto" class="flex flex-col justify-center  w-full">

        <input type="text" v-model="photoName" placeholder="Name" class="shadow-sm
        bg-gray-500 border border-gray-800 text-gray-900 text-sm 
        rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
        p-2.5 m-2">

        <input type="text" v-model="photoDate" placeholder="Date" class="shadow-sm
        bg-gray-500 border border-gray-800 text-gray-900 text-sm 
        rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
            p-2.5 m-2">

            <input type="file" label="File input" ref="myfile" @change="uploadImg">

        <button type="submit" :disabled="!photoName"
                class="bg-transparent hover:bg-green-700 text-green-900 font-semibold
                hover:text-white py-2 px-4 me-auto ms-auto w-48 border  border-green-700 hover:border-transparent rounded-lg">
                    Add Photo
        </button>
    </form>


</div>

<div v-for="photo in photos" :key="photo.id" class="text-black">

{{ photo.name }}
{{ photo.date }}
<img :src="photo.imgURL" alt=""  >
<button @click="deletePhoto(photo.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    delete 
</button>
        
</div>
</div>

</template>



<script setup scoped>
import {ref , onMounted, reactive} from 'vue'
import {db} from '../firebase.js'
import {collection, onSnapshot, addDoc, deleteDoc, doc} from 'firebase/firestore'
import {getStorage, uploadBytesResumable, ref as refS, getDownloadURL } from "firebase/storage";

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

const photoName = ref('')
const photoDate = ref('')


const addPhoto =() => {

    // Add a new document with a generated id.
    const docRef =  addDoc(collectionRef, {
        name: photoName.value,
        date: photoDate.value,
        imgURL: addItemData.imgURL
    });
    console.log("Document written with ID: ", docRef.id);

    photoName.value = ''
    photoDate.value = ''
}


const deletePhoto =  id => {
    deleteDoc(doc(db, 'photos', id))
}





// Add item data: title, description, image URL and have the button disabled until image is uploaded
const addItemData = reactive({
    imgURL: '',
  })
  
  const storage = getStorage();
   
  // Firebase storage upload image + get download URL + enable button after image uploaded
  const uploadImg = async(event) => {
    let file = event.target.files[0]; // get the file
    console.log("file", file)
  // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType: 'image/jpeg'
  };
  
  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = refS(storage, 'photography/' + file.name);
  
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);
  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');       
          break;
      }
    }, 
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
  
        // ...
  
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, 
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
  
          addItemData.imgURL = downloadURL // update variable imgURL and put the image URL link in it. 
      });
    }  
  );
  }

  </script>