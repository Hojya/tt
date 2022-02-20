

// function A(e){
//     const check = document.querySelector('.select').value = 2;
//     console.log(check);
//     const one = document.querySelector('.filtr-one');

//     if (check){
//         one.style.display = 'none';

//     }
// };

// const button = document.querySelector('.button');
// const select = document.querySelector('.select');
// let one = document.querySelector('.one');
// button.addEventListener('click', function(){
//     console.log(select.value);
//     if(select.value = "1") {
//         one.style.display = 'none';
//     }
//     else if(select.value = "2"){
//         one.style.display = 'block';
//     }
// })

// function testFunction(){
//     let select = document.querySelector(".select");
//     console.log(select.value);
// }




// const select = document.querySelector('.select');  

// select.onchange = function A(){
    

//     const select = document.querySelector(".select");
//     console.log(select.value);
//     if (select.index = 1){
//         const one = document.querySelector('.one');
//         const two = document.querySelector('.two'); 
//         one.classList.add('add');
//         two.classList.add('add');
    
//     }
    
//     }

    
// const select = document.querySelector(".select");
// select.onchange = function (){
//     // const select = document.querySelector(".select");

        
//         console.log(select.value);
//         if (select.Index ="4"){
//             // const one = document.querySelector('.one');
//             // const two = document.querySelector('.two'); 
//             // one.classList.add('add');
//             // two.classList.add('remove');
//         }
//         console.log('hgjg')


// var languagesSelect = myForm.language;
 
// function changeOption(){
     
//     var selection = document.getElementById("selection");
//     var selectedOption = languagesSelect.options[languagesSelect.selectedIndex];
//     console.log(selectedOption.value) 
//     selection.textContent = "Вы выбрали: " + selectedOption.text;
//     if(selectedOption.value="4"){
//         selection.className.add("red")
//         // selection.style.backgroundColor = 'inherit';
//         // selection.style.background= "yellow";
//     }
//     if(selectedOption.value="2"){
        
//         selection.className.add("green")
//         // selection.style.backgroundColor = 'green';
//         // selection.style.background= "red";
//     }
// }
 
// languagesSelect.addEventListener("change", changeOption);


// const select = document.querySelector('.selected');
// select.onchange = function () {
//     select.className = this.options[this.selectedIndex].className;
// }
        
        
    
    
    // select.onchange = function B(){
    //     const two = document.querySelector('.two');
    //      const one = document.querySelector('.one');
    //      const select = document.querySelector(".select");
    // //     console.log(select.value);
    // //     if(select.value="2"){
    // //         one.style.display = 'block';
    // //         two.style.display = 'block';    
        //  }
        
        //  }


     function showSingleDiv(i) {
         const prevBlockEl = document.querySelector('.single.active');
         const currBlockEl = document.querySelector(i);
        if ( prevBlockEl === currBlockEl) return;
         prevBlockEl && prevBlockEl.classList.remove('active');
         currBlockEl.classList.add('active');
     }


    // const save = document.querySelector('.save')
    // const input = document.querySelector('#input');
    // console.log(input)
    // save.addEventListener('click', function() 
    // { console.log("save")
        
    // input.value = 'Сгенерируемая ссылка';
    // link =  input.value.link("#") ;
    // console.log(link);
    // const newObject = new DOMParser().parseFromString(link, "text/xml").documentElement;
    // console.log(newObject)
    // })

    
    
    