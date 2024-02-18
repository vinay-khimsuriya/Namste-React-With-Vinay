const initSlide = () =>{
    const imageList= document.querySelector(".slider-wrapper .image-slide");
    
    const slideButton= document.querySelectorAll(".slider-wrapper .slide-button");

    const maxScrollLength=imageList.scrollWidth - imageList.clientWidth - 20 ;

    const sliderScrollBar= document.querySelector(".container .slider-scrollbar");
    const sliderScrollThumb=sliderScrollBar.querySelector(".scrollbar-thumb");

//Handle ScrollBar Thumb Left
    sliderScrollThumb.addEventListener("mousedown", (e)=>{
        const startX = e.clientX;
        console.log(startX);
        const thumbPosition=sliderScrollThumb.offsetLeft;
        console.log(thumbPosition);

        //Upadate thumb postion at mouse move
        const updateMouseMove= (e)=>{
            const deltaX=e.clientX-startX;
            const newThumbPosition=thumbPosition + deltaX;
            const maxThumbPosition= sliderScrollBar.getBoundingClientRect().width - sliderScrollThumb.offsetWidth;
            const boundPosition=Math.max(0,Math.min(maxThumbPosition,newThumbPosition));
            
            const scrollPosition= (boundPosition/maxThumbPosition) * maxScrollLength;
            // sliderScrollThumb.style.left=`${newThumbPosition}px`;
            sliderScrollThumb.style.left=`${boundPosition}px`;
            imageList.scrollLeft=scrollPosition;
        
        }

        const updateMouseUp=(e=>{
            document.removeEventListener("mousemove", updateMouseMove);
            document.removeaddEventListener("mouseup", updateMouseUp);     
        })
        document.addEventListener("mousemove", updateMouseMove);
        document.addEventListener("mouseup", updateMouseUp);
        
    });


    // console.log(imageList.clientWidth);

    // console.log(imageList.scrollWidth);
    slideButton.forEach(button=>{
        button.addEventListener("click", ()=>{
            console.log(button);

            const direction=button.id=== "prev-btn" ? -1 : 1;
            const scrollamount=imageList.clientWidth*direction;
            imageList.scrollBy({left:scrollamount,behavior:"smooth"});
        })
    })
    const handleSlideButton=()=>{
        slideButton[0].style.display =imageList.scrollLeft <= 0 ? "none" : "block";
        slideButton[1].style.display = imageList.scrollLeft  >= maxScrollLength ? "none" : "block";
        // slideButton[1].style.display =imageList.scrollLeft >= maxScrolllenght ? "none" : "block";
        
// console.log(imageList.scrollLeft);
// console.log(maxScrollLength);
    }

    const updateScrollThumbPosition=()=>{
        const scrollPosition=imageList.scrollLeft;
        console.log(scrollPosition);
        const scrollThumbPosition= (scrollPosition/maxScrollLength) * (sliderScrollBar.clientWidth - sliderScrollThumb.clientWidth); 
        console.log(sliderScrollThumb.offsetWidth);
        sliderScrollThumb.style.left=`${scrollThumbPosition}px`
    }

    imageList.addEventListener("scroll", ()=>
    {
        handleSlideButton();
        updateScrollThumbPosition();
    })
}


window.addEventListener("load",initSlide);