document.addEventListener("DOMContentLoaded", ()=>{
    let search = document.querySelector("#search");
    let searchFrequent = document.querySelector("#search-frequent");
    let boxSeach = document.querySelector("#box-search");
    let iconSearch = document.querySelector("#icon-search");
    let buy = document.querySelector("#buy");
    let buyInformation = document.querySelector("#information");

    search.addEventListener("click" , (e)=>{
        searchFrequent.style.display='block';
        boxSeach.style.border='1px solid #4cd5dc';
        boxSeach.style.backgroundColor='#212529';
        iconSearch.style.color='#4cd5dc';
        buyInformation.style.display='none';
        e.stopPropagation();
    });

    buy.addEventListener("click" , (e)=>{
        buyInformation.style.display='block';
        searchFrequent.style.display='none';
        boxSeach.style.border='1px solid #5c5f61';
        boxSeach.style.backgroundColor='#040810';
        iconSearch.style.color='#5c5f61';
        e.stopPropagation();
    });

    document.addEventListener("click" , ()=>{
        searchFrequent.style.display='none';
        boxSeach.style.border='1px solid #5c5f61';
        boxSeach.style.backgroundColor='#040810';
        iconSearch.style.color='#5c5f61';
        buyInformation.style.display='none';
    });

    searchFrequent.addEventListener("click", (e)=>{
        e.stopPropagation();
    });
    buyInformation.addEventListener("click", (e)=>{
        e.stopPropagation();
    })
});

$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('.my-card-big').owlCarousel({
    autoWidth:true,
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



