const phoneInput = document.getElementById('phone_input')
const phoneButton = document.getElementById('phone_button')
const phoneResult = document.getElementById('phone_result')

let regExp1 = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneInput.value = '+996 '

phoneButton.addEventListener('click', () =>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'CORRECT'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'UNCORRECT'
        phoneResult.style.color = 'red'
    }
})

const tabContent = document.querySelectorAll('.tab_content_block');
const tabsParent = document.querySelector('.tab_content_items');
const tabs = document.querySelectorAll('.tab_content_item');

let count = 0;

const hideTabContent = () => {
    tabContent.forEach((element) => {
      element.style.display = 'none'  
    })
    tabs.forEach((element) => {
        element.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
     tabContent[index].style.display = 'block'
     tabs[index].classList.add('tab_content_item_active')
}

tabsParent.onclick = (event) => {
    const targetElement = event.target
    if (targetElement.classList.contains('tab_content_item')){
        tabs.forEach((tab, tabIndex) => {
            if(targetElement === tab){
                hideTabContent()
                count = tabIndex
                showTabContent(count)
            }
        }
    )}
}

const goSlide = () => {
    count++
    if(count >= tabs.length) {
        count = 0
    }
    hideTabContent(count)
    showTabContent(count)
}
setInterval(goSlide, 3000)

hideTabContent()
showTabContent()

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const convert = (element, target, target2) => {
    element.oninput = () =>{
        const request = new XMLHttpRequest()
        request.open("GET","../data/convert.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const data = JSON.parse(request.response)
            if(element === som){
                usd.value = (element.value / data.usd).toFixed(2)
                eur.value = (element.value / data.eur).toFixed(2)
            }else if(element === usd){
                som.value = (element.value * data.usd).toFixed(2)
                eur.value = (element.value * (data.eur / data.usd)).toFixed(2)
            }else if(element === eur){
                som.value = (element.value * data.eur).toFixed(2)
                usd.value = (element.value * (data.usd / data.eur)).toFixed(2)
            }
            element.value == '' && (target.value = '')
            element.value == '' && (target2.value = '')
        }
    }
}

convert(som, usd, eur)
convert(usd, som, eur)
convert(eur, som, usd)


// som.addEventListener('input',() => {
//     const request = new XMLHttpRequest()
//     request.open("GET","../data/convert.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.addEventListener('load',() => {
//         const data = JSON.parse(request.response)
//         usd.value = (som.value / data.usd).toFixed(2)
//     })
// })

