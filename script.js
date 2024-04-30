let inputBox = document.querySelector('#floatingInput');
let addBtn = document.querySelector('#add-btn');
let activityContainer = document.querySelector('#activity-list');
let checkBoxesArray = [];
let idCount = 0;

addBtn.addEventListener('click',()=>{
    if(inputBox.value != "") {
        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.classList.add('delete-btn','btn', 'btn-danger');
        let activity = document.createElement('div');
        let activityText = document.createElement('div');
        activity.setAttribute('class','activity');
        activityContainer.insertAdjacentElement('beforeend',activity);
        activity.appendChild(activityText);

        let checkBox = document.createElement('div');
        let idStr = 'flexCheckDefault' + idCount;
        checkBox.setAttribute('class','form-check');
        checkBox.innerHTML = `
            <input class="form-check-input" type="checkbox" value="" id="${idStr}">
            <label class="form-check-label" for="${idStr}">
            ${inputBox.value}
            </label>`
        idCount++;
        activityText.insertAdjacentElement('afterbegin',checkBox);
        checkBoxesArray.push(checkBox);
        for(let i = 0; i < checkBoxesArray.length; i++) {
            checkBoxesArray[i].firstElementChild.addEventListener('click',()=>{
                if(checkBoxesArray[i].firstElementChild.checked == true) {
                    checkBoxesArray[i].lastChild.style.textDecoration = 'line-through';
                } else {
                    checkBoxesArray[i].lastChild.style.textDecoration = 'none';
                }
            })
        }

        activity.appendChild(deleteBtn);
        deleteBtn.addEventListener('click',()=>{
            deleteBtn.parentElement.remove()
        });
        if(activityContainer.childElementCount > 4) {
            activityContainer.style.overflowY = "scroll";
        }
    }
})