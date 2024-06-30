function displayError(inputElement, message) {
    inputElement.classList.add('error');
    inputElement.placeholder = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.classList.remove('error');
        element.placeholder = '';
    });
}

function displayMessage(message, isSuccess = false) {
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.textContent = message;
    messageContainer.className = isSuccess ? 'success' : 'error';
}

function clearForm() {
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("company").value = '';
    document.getElementById("title").value = '';
    document.getElementById("message").value = '';
}

function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const companyInput = document.getElementById("company");
    const titleInput = document.getElementById("title");
    const messageInput = document.getElementById("message");
    let isValid = true;

    clearErrors();
    displayMessage();

    // Name validation
    if (nameInput.value === "") {
        displayError(nameInput, 'Name is required');
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput.value === "") {
        displayError(emailInput, 'Email is required');
        isValid = false;
    } else if (!emailInput.value.match(emailPattern)) {
        displayError(emailInput, 'Invalid email format');
        isValid = false;
    }

    // Company name validation
    if (companyInput.value === "") {
        displayError(companyInput, 'Company name is required');
        isValid = false;
    }

    // Message title validation
    if (titleInput.value === "") {
        displayError(titleInput, 'Title is required');
        isValid = false;
    }

    // message validation
    if (messageInput.value === "") {
        displayError(messageInput, 'Message is required');
        isValid = false;
    }
    

    if (isValid) {
        // Form is valid, submit the form
        clearForm();
        displayMessage("Form successfully submitted!", true)
    }
}





document.addEventListener('DOMContentLoaded', function() {
    // Get the checkbox element
    var checkbox = document.getElementById('Check');

    // Add event listener to the checkbox's change event
    checkbox.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (checkbox.checked) {
            // Change background color when checked
            checkbox.style.backgroundColor = '#Ba4270';
        } else {
            // Change background color when unchecked
            checkbox.style.backgroundColor = '#ffffff';
        }
    });
});

fetch('data.json')
    .then(response => response.json())
    .then(data =>{
        let placeholder = document.querySelector("#pricing-container");
        let out = "";
        for(let product of data){
            out+= `
                <article>
                    <h3>
                        ${product.plan}
                    </h3>
                    <p class="details" >${product.detail}</p>
                    <h1 class="price" >${product.price}</h1>
                    <div class="details-container">
                        ${product.transaction ? `<div><img src="./assets/shared/desktop/icon-check.svg"/><p class="transaction" >Transaction</p> </div>`: `<p>Transaction</p>`}
                        ${product.auth ? `<div><img src="./assets/shared/desktop/icon-check.svg"/><p>Auth</p> </div>`: `<p>Auth</p>`}
                        ${product.identity ? `<div><img src="./assets/shared/desktop/icon-check.svg"/><p>Identity</p></div> `: `<p>Identity</p>`}
                        ${product.investments ? `<div><img src="./assets/shared/desktop/icon-check.svg"/><p>Investment</p> </div>`: `<div class="inactive-p"><p>Investment</p></div>`}
                        ${product.assets ? `<div><img src="./assets/shared/desktop/icon-check.svg"/><p>Assets</p></div> `: `<div class="inactive-p"><p>Assets</p></div>`}
                        ${product.liabilities ? `<div><img src="./assets/shared/desktop/icon-check.svg"/><p>Liabilities</p> </div>`: `<div class="inactive-p"><p>Liabilities</p></div>`}
                        ${product.income ? `<div><img src="./assets/shared/desktop/icon-check.svg"/><p>Income</p> </div>`: `<div class="inactive-p"><p>Income</p></div>`}
                    </div>
                    <button onclick="location.href='contact.html'">Request Access</button>
                </article>
            `
        }

        placeholder.innerHTML = out;
})

// script.js
const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  if (menu.style.left === '0px') {
    menu.style.left = '-250px';
  } else {
    menu.style.left = '0px';
  }
});

    