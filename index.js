const closeBtn = document.querySelector("#modal-btn")
const form = document.querySelector("#form")
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const btn2 = document.querySelector("#btn2")

const modal = document.querySelector("#modal")
const inpVal = input.value
const regEx = /^[a-zA-Z0-9]{5,99}$/
const newRegEx = regEx.test(input.value)

modal.classList.add('hidden')
btn2.classList.add('hidden')

form.addEventListener("submit" , (e)=> {
    e.preventDefault()
    if(inpVal == newRegEx) {
        input.value = ''
        input.classList.add('togri')
        btn.addEventListener("click" , ()=> {
            document.querySelector(".wrapper").classList.add('shadow')
            modal.classList.remove('hidden')
            if(true) {
                btn.classList.add('hidden')
                btn2.classList.remove('hidden')
                btn2.addEventListener("click" , ()=> {
                    location.reload()
                })
            }
        })
        
        closeBtn.addEventListener("click" ,()=> {
            document.querySelector(".wrapper").classList.remove('shadow')
            modal.classList.add('hidden')
        })
    }else{
        input.classList.add('error')
    }
})

