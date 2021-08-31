
// note toggler 

let note_toggle = document.getElementById('note-toggle');
let note_area = document.querySelector('.note-area');
let note_status = false;

note_toggle = () => {

    if (note_status ===  true) {
        note_area.style.display = 'none';
        note_status = false
    }
    else{
        note_area.style.display = 'block';
        note_status = true;
}
}

function selectMe(){
 console.log('mehedi');
}


// drobdown
// let message_toggle = document.querySelector('.message_toggle');
let message_area = document.querySelector('#message-dropdown');
let message_status = false;

message_toggle = () => {

    if (message_status ===  true) {
        message_area.style.display = 'none';
        message_status = !message_status
    }
    else{
        message_area.style.display = 'block';
        message_status = !message_status
}
console.log(message_status);
}

