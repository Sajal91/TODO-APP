let inputBox = document.querySelector('#floatingInput');
let addBtn = document.querySelector('#add-btn');
let activityContainer = document.querySelector('#activity-list');

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
        activityText.innerHTML = ">> " + inputBox.value;
        activity.appendChild(deleteBtn);
        deleteBtn.addEventListener('click',()=>{
            deleteBtn.parentElement.remove()
        });
        if(activityContainer.childElementCount > 4) {
            activityContainer.style.overflowY = "scroll";
        }
    }
})