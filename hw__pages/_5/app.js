const modal = document.querySelector(".modal")
const backdrop = document.querySelector(".backdrop")
const Open = document.querySelector("#open")
const Close = document.querySelector("#close")
const form = document.querySelector(".form")
const Radio = document.querySelectorAll('#color')

/* Task 1 */
Open.addEventListener("click", function(){
        modal.classList.add("show")
        backdrop.classList.add("show")
})

Close.addEventListener("click", function(){
        modal.classList.remove("show")
        backdrop.classList.remove("show")
})

/* Task 2 */

Radio[0].addEventListener("click", function(){
       console.log("RED")
       document.body.style.backgroundColor = Radio[0].value;
       
})
Radio[1].addEventListener("click", function(){
        console.log("RED")
        document.body.style.backgroundColor = Radio[1].value;
})
Radio[2].addEventListener("click", function(){
        console.log("RED")
        document.body.style.backgroundColor = Radio[2].value;
 })

/* Task 3 */

const NameInput = document.getElementById('name-input');
const NameOutput = document.getElementById('name-output');
NameInput.addEventListener("change", function(){
        if(NameInput.value.length > 0){
                NameOutput.innerHTML = NameInput.value
                console.log(1)
        }else{
                NameOutput.innerHTML = "незнайомець"
                console.log(2)
                
        }
})

/* Task 4 */


const ValidInput = document.getElementById('validation-input');

ValidInput.addEventListener("focus", function(){
        if (ValidInput.value.length >= 6 ){
                ValidInput.classList.remove("invalid")
                ValidInput.classList.add("valid")
                console.log(0)
        }else{
                ValidInput.classList.remove("valid")
                ValidInput.classList.add("invalid")
                console.log(1)
        }
        console.log(ValidInput.length)
})


/* Task 5 */

const Range = document.getElementById('font-size-control')
const Text = document.querySelector("#text")

Range.addEventListener("input", function(){
        console.log(Range.value)
        Text.style.fontSize = Range.value + "px"
})