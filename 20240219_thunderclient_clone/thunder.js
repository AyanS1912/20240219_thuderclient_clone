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
    requestType.innerHTML = ''; // Clear previous content
    requestType.appendChild(keyValueDiv);
}

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