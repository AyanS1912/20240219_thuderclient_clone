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

        const read_data = response
        console.log(read_data)

        const status = document.getElementById("status-data")
        status.innerHTML = `Status : ${read_data.status}`
        status.style.color = 'green'

        

        // const responseSize = new Blob([read_data.text()]).size;
        // const size_taken =  document.getElementById("size-data")
        // // console.log(responseSize)
        // size_taken.innerHTML = ` Size: ${responseSize} Byte`
        // size_taken.style.color = 'green'

        return response.json()
    })
    .then(data =>{

        // console.log(data.)
        const response_data = document.getElementById("response-data")
        response_data.innerHTML = `<p>${JSON.stringify(data.quote)}</p>`
        
    }).catch(error => {
        console.error(error)
    })
    const end = performance.now()
    const time = (end - start).toFixed(3)

    const time_taken = document.getElementById("time-data")
    time_taken.innerHTML = `Time: ${time} ms`
    time_taken.style.color = 'green'
    // console.log(Math.round(time)+"ms")

}