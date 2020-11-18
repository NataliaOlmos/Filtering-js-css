const tabs = document.querySelectorAll(".tabs_wrap ul li");
const males = document.querySelectorAll(".male");
const females = document.querySelectorAll(".female");
const all = document.querySelectorAll(".item_wrap");

tabs.forEach((tab)=>{
    tab.addEventListener("click", () => {
        console.log("clicked")
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        })
        tab.classList.add("active");

        const tabval = tab.getAttribute("data-tabs")
        console.log(tabval);

        all.forEach((item)=>{
            item.style.display = "none"
        }) 


         if(tabval == "male"){
             males.forEach((male)=>{
                 male.style.display = "block";
             })

         }
         else if(tabval == "female"){
            females.forEach((female)=>{
                female.style.display = "block";
            })
         }
         else{
            all.forEach((item)=>{
                item.style.display = "block";
            })

         }
    })
})

