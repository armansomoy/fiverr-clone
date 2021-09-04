
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