function QuerySection() {
    var requestType = document.querySelector('.request-type');
    var keyValueDiv = document.createElement('div');
    keyValueDiv.classList.add('key-value-pairs');
    keyValueDiv.innerHTML = `
        <div class="key-value-pair">
            <button class="rm-kv" onclick="removeKeyValuePair(this)">-</button>   
            <input type="text" placeholder="Parameter">
            <input type="text" placeholder="Value">
            <button class="add-kv" onclick="addKeyValuePair()">+</button>
        </div>
    `;
    requestType.innerHTML = ''; 
    requestType.appendChild(keyValueDiv);
}
/** */

function addKeyValuePair() {
    var keyValueDiv = document.querySelector('.key-value-pairs');
    var newPair = document.createElement('div');
    newPair.classList.add('key-value-pair');
    newPair.innerHTML = `
        <button class='rm-kv' onclick="removeKeyValuePair(this)">-</button>
        <input type="text" placeholder="Parameter">
        <input type="text" placeholder="Value">
        <button class="add-kv" onclick="addKeyValuePair()">+</button>
    `;
    keyValueDiv.insertBefore(newPair, document.getElementById('add-kv'));
}

function removeKeyValuePair(button) {
    button.parentNode.remove();
}

function fetchData(){

    let method = document.getElementById('http-methods-data').value
    let url =  document.getElementById('URL-data').value
    // console.log(method,url)
    const start = performance.now()
    fetch(url,{
        method:method,
        mode : "cors",
        headers: {
            "Content-Type": "application/json",
          }
    })
    .then(response => {

        const status = document.getElementById("status-data")
        if(response.ok){
            status.innerHTML = `Status : ${response.status} OK`
            status.style.color = 'green'
            status.style.fontSize ='large'
        }
        else{
            status.innerHTML = `Status : ${response.status}`
            status.style.color = 'red'
            status.style.fontSize ='large'
        }
        

        return response.json()
    })
    .then(data =>{

        // console.log(data.)
        const response_data = document.getElementById("response-data")
        response_data.innerHTML = `<p>${JSON.stringify(data.quote)}</p>`

        const size_data = document.getElementById("size-data");
        size_data.innerHTML = `Size: ${new Blob([data]).size} Byte`
        size_data.style.color ='green'
        size_data.style.fontSize ='large'
        
    }).catch(error => {
        console.error(error)
    })
    const end = performance.now()
    const time = (end - start).toFixed(3)

    const time_taken = document.getElementById("time-data")
    time_taken.innerHTML = `Time: ${time} ms`
    time_taken.style.color = 'green'
    time_taken.style.fontSize ='large'
}