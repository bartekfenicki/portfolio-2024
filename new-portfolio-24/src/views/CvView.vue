<template>
  
  <div class="p-4 lg:ml-64 lg:mr-64">
      <p class="title-sub mt-8 me-6 text-end">
        WELCOME TO
      </p>
      <p class="title-main me-6 text-end">
        MY PERSONAL CV
      </p>
      
      <iframe width="760" height="415"
       src="https://www.youtube.com/embed/a1Cn7MsHdxs" 
        title="YouTube video player" frameborder="0" 
        class="me-auto ms-auto mt-10 w"
        allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
      <p class="text-center text-lg mt-16">
        <a :href="pdfFilePath" target="_blank" class="text-center px-16 py-4 text-green-600 hover:text-white  border-2 border-green-800 hover:bg-green-700  rounded-lg w-full">
        View CV in PDF
      </a>
      </p>
      



    </div>
    
    

    </template>

    <script scoped>
  export default {
  data() {
    return {
      pdfFilePath: '../assets/img/cv-bartek-2024.pdf',
    };
  },
};
  
  </script>
    
    <style scoped>
    .title-sub {
      font-size: 25px;
      }
    .title-main {
    font-size: 50px;
    }
    iFrame {
      width: 650px;
       height: 355px;
    }

    @media screen and (max-width:1200px) {
      iFrame {
        width: 500px;
        height: 300px;
      }
    }
    @media screen and (max-width:600px) {
      iFrame {
        width: 400px;
        height: 250px;
      }
    }
    @media screen and (max-width:450px) {
      iFrame {
        width: 300px;
        height: 200px;
      }
      .title-sub {
      font-size: 15px;
      }
    .title-main {
    font-size: 30px;
    }
    }

    </style>