   
    const progressImg = document.querySelector('.progress-img');
    const offersControlBtn = document.querySelectorAll('.offers-control-btn');
    const offersCardPriceValue = document.querySelectorAll('.offers-card__price-value');
    const offersCardPeriod = document.querySelectorAll('.offers-card__period');
    const yearPrice = [240, 360, 600];
    const monthPrice = [20, 30, 50] 
        

    window.onload = function(){
        let progressImgImg = document.querySelector('.progress-img img');
        progressImg.style.minHeight = `${progressImgImg.offsetHeight}px`;
    };

    

    window.addEventListener('resize', ()=>{
        let progressImgImg = document.querySelector('.progress-img img');
        progressImg.style.minHeight = `${progressImgImg.offsetHeight}px`;
    });


    function deactivate(){
        offersControlBtn.forEach(item=>{
            item.classList.remove('active');
        })
    };

    offersControlBtn.forEach(item=>{
        item.addEventListener('click', (event)=>{
            if(!item.classList.contains('active')){
                deactivate();
                item.classList.add('active');
                console.log(event.target.classList);
                if(event.target.classList.contains('year-btn')){
                    offersCardPriceValue.forEach((elem, i)=>{
                        elem.textContent = yearPrice[i]
                    });
                    offersCardPeriod.forEach(elem=>{
                        elem.textContent = 'Per of year';
                    });
                };
                if(event.target.classList.contains('month-btn')){
                    offersCardPriceValue.forEach((elem, i)=>{
                        elem.textContent = monthPrice[i]
                    });
                    offersCardPeriod.forEach(elem=>{
                        elem.textContent = 'Per of month';
                    });
                };
            }
           
        });
    });



