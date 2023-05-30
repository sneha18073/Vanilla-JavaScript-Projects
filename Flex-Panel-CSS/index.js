        const panels = document.querySelectorAll('.panel')

        /* For some reason its not working need to find out the reason */
   /*      const toggleOpen = (e) =>{
            console.log("hello")
            e.target.classList.toggle('open')
        } */
     /*   const toggleOpen_Active = (e) =>{
           console.log(e.propertyName)
           if(e.propertyName.includes('flex' )){ 
               e.target.classList.toggle('open-active')
            }
        } */
 
      function toggleOpen(){
        // console.log("hello")
        this.classList.toggle('open')
     
      }
 
      function toggleOpen_Active(e){
        // console.log(e.propertyName)
        if(e.propertyName.includes('flex')){
            this.classList.toggle('open-active')
        }
      }
        panels.forEach(panel => panel.addEventListener('click', toggleOpen))
        panels.forEach(panel => panel.addEventListener('transitionend' , toggleOpen_Active)) 

