let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#number-input');

// numberInput.addEventListener('input', getFactAjax);
// // Using ajax
// function getFactAjax(){
//     let number = numberInput.value;
    
//     // Request to api
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://numbersapi.com/'+number);
//     xhr.onload = function(){
//         if(this.status == 200 && number !== ''){
//             fact.style.display = 'block';
//             factText.innerText = this.responseText;
//         }
//     }

//     xhr.send()
// }

// Using Fetch
numberInput.addEventListener('input', getFactFetch);

function getFactFetch(){
    let number = numberInput.value;

    fetch('http://numbersapi.com/'+number)
        .then(response => response.text())
        .then((data)=>{
            if(number != '') {
                fact.style.display = 'block'
                factText.innerText = data;
            }
        })
        .catch(err => console.log(err))

}