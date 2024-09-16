window.addEventListener("load", () => 
    {
        const loader = document.querySelector(".loader")
        loader.classList.add("loader--hidden");
        loader.addEventListener("transitionend", () =>{
            document.body.removeChild(loader);
        })
        
    });


    const toggleBtn = document.querySelector('.toggle_btn')
        const toggleBtnIcon =document.querySelector('.toggle_btn i')
        const dropDownMenu =document.querySelector('.dropdown_menu')

        toggleBtn.onclick = function (){
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classLis.contains('open')

            toggleBtnIcon.classList= isOpen
            ? 'bx bx-x'
            : 'bx bx-menu-alt-right'
        }

        const typed = new Typed('.multiple-text',{
            strings:[' tech terbagus',' tech berkualitas tinggi',' tech murah',''],
            typeSpeed:35,
            backSpeed:35,
            backDelay:100,
            loop:true,
        
        })