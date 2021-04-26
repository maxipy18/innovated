   
    const progressImg = document.querySelector('.progress-img'); 
    
    

    window.onload = function(){
        let progressImgImg = document.querySelector('.progress-img img');
        progressImg.style.minHeight = `${progressImgImg.offsetHeight}px`;
    };

    

    window.addEventListener('resize', ()=>{
        let progressImgImg = document.querySelector('.progress-img img');
        progressImg.style.minHeight = `${progressImgImg.offsetHeight}px`;
    });






