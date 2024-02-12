(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.clear-btn');
    let equal = document.querySelector('.equal-btn')
      
     //Selecting our buttons

    buttons.forEach(function(button){
        button.addEventListener('click', (e)=>{
            let value = e.target.dataset.num;
            screen.value +=  value;
        })

        equal.addEventListener('click', (e)=>{
            if(screen.value === '' || screen.value === undefined){
                screen.value = "";
            }else{
                let result = eval(screen.value);
                screen.value = result;
            }
        })
  
    })


    clear.addEventListener('click', (e)=>{
        screen.value = '';
    })

    


})();