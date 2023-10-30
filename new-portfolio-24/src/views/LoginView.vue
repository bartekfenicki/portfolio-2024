<template>

    <div class="p-4 lg:ml-64 lg:mr-64">

    <div class="me-auto ms-auto mt-32  w-full max-w-sm p-4 bg-gray-500 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-900 dark:border-gray-700">
        <form class="space-y-6 login" action="#">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign as Admin</h5>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" name="email" id="email" class="bg-gray-300 border
                 border-gray-700 text-gray-900 text-sm rounded-lg block w-full p-2.5
                  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400
                   dark:text-white" placeholder="example@admin.com" required>
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-300 border
                 border-gray-700 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600
                  dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
            </div>
            <button type="submit" class="w-full  text-white bg-purple-700
            hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 
            text-center dark:bg-purple-900 dark:hover:bg-purple-800">Login</button>
        </form>
    </div>

    </div>

</template>

<script setup>
/*
import { auth } from '../firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth';

//loging in to admin
const loginForm = document.querySelector('.login');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value

    signInWithEmailAndPassword(auth, email, password)
    .then ((cred) =>{
        console.log('user logged in:', cred.user)
    })
    .catch((err) =>{
        console.log(err.message)
    })

})
*/
</script>