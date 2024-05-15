document.addEventListener("DOMContentLoaded", ()=>{
    let search = document.querySelector("#search");
    let searchFrequent = document.querySelector("#search-frequent");

    search.addEventListener("click" , (e)=>{
        searchFrequent.style.display='block';
        e.stopPropagation();
    });

    document.addEventListener("click" , ()=>{
        searchFrequent.style.display='none';
    });

    searchFrequent.addEventListener("click", (e)=>{
        e.stopPropagation();
    });
});