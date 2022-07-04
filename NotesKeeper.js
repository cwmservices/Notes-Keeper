
const title=document.querySelector(".title");
const message=document.querySelector(".message"); 
const close=document.querySelector(".close"); 
const save=document.querySelector(".save"); 
const addNoteButton=document.querySelector(".addNoteButton"); 
const noteModal=document.querySelector(".noteModal");
const parentNote = document.querySelector('.parentNote');
const note = document.querySelector('.note');

addNoteButton.addEventListener('click',()=>{
    noteModal.style.display="flex";
    parentNote.style.display = "flex";
    addNoteButton.style.display="none";
    parentNote.style.backgroundColor = "blueviolet";
});

close.addEventListener("click",()=>{
    noteModal.style.display="none";
    addNoteButton.style.display="block";
    parentNote.style.backgroundColor = "";
})

let titleNote;
let messageNote;
let editBtnDom; 
let deleteBtnDom; 
let saveNoteInput;
let div;
let titleNoteInput;
let messageNoteInput;

save.addEventListener('click',()=>{
    
    titleNote = title.value;
    messageNote = message.value;
    noteModal.style.display = "none";
    parentNote.style.backgroundColor = "";
    addNoteButton.style.display="block";
    parentNote.style.display = "none";
    title.value="";
    message.value="";
    addNote();
})

function addNote(){
    div = document.createElement('div');
    div.setAttribute('class','notecontainer');

    const titleDiv = document.createElement('div');
    titleDiv.setAttribute('class','titleDiv');
    const titleDom = document.createElement('input');
    titleDom.setAttribute('class','titleDom');
    titleDom.value=titleNote;
    titleDom.setAttribute('readonly','true');
    titleDiv.appendChild(titleDom);
    const messageDiv = document.createElement('div');
    messageDiv.setAttribute('class','messageDiv');
    const messageDom = document.createElement('textarea');
    messageDom.setAttribute('class','messageDom');
    messageDom.value=messageNote;
    messageDom.setAttribute('readonly','true');
    titleDom.setAttribute('readonly','true');
    messageDiv.appendChild(messageDom)
    deleteBtnDom = document.createElement('button');
    deleteBtnDom.setAttribute('class','deleteBtnDom');
    deleteBtnDom.innerText="Delete";
    editBtnDom = document.createElement('button');
    editBtnDom.setAttribute('class','editBtnDom');
    editBtnDom.innerText="Edit";
    div.appendChild(titleDom);
    div.appendChild(messageDom);
    div.appendChild(deleteBtnDom);
    div.appendChild(editBtnDom);

    note.appendChild(div);

    editAndDelete(deleteBtnDom,editBtnDom,div);

}


function editAndDelete(deleteBtn,editBtn){
    deleteBtn.addEventListener('click',(e)=>{
        e.target.parentNode.style.display="none";
    })
    
    editBtn.addEventListener('click',(e)=>{
        titleNoteInput = e.target.parentNode.children[0];
        messageNoteInput = e.target.parentNode.children[1];
        titleNoteInput.removeAttribute('readonly');
        messageNoteInput.removeAttribute('readonly');
        titleNoteInput.focus();
        e.target.style.display="none";
        e.target.parentNode.children[2].style.display="none";
        saveNoteInput = document.createElement("button");
        saveNoteInput.innerText="Save";
        saveNoteInput.setAttribute('class','saveNoteInput');
        e.target.parentNode.appendChild(saveNoteInput);
        saveNote(titleNoteInput,messageNoteInput);
    })
    
   
    function saveNote(titleInputBox,messageInputBox){
        saveNoteInput.addEventListener('click',(e)=>{
            titleNote = titleInputBox.value;
            messageNote = messageInputBox.value;    
            e.target.style.display = "none";
            console.log(e.target.parentNode.children[2])
            e.target.parentNode.children[2].style.display = "inline";
            e.target.parentNode.children[3].style.display = "inline";
            e.target.parentNode.children[0].setAttribute('readonly','true');
            e.target.parentNode.children[1].setAttribute('readonly','true');        
        })
    }  
}

