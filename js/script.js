let option_select = document.getElementById('option_select');
let check_checked = document.getElementById('select');
let radio = document.getElementById('radio');



option_select.addEventListener('change', select_option = () => {
    if (option_select.value === "Choose a reason") {
        document.getElementById("optional").style.display = "none";
        document.getElementById('deactive_button').type = 'button';
        document.getElementById('deactive_button').style.backgroundColor = "#d5d4d2";

    } else {
        document.getElementById("optional").style.display = "inherit";
        document.getElementById('deactive_button').type = 'submit';
        document.getElementById('deactive_button').style.backgroundColor = "#1dbf73";
        document.getElementById('deactive_button').style.color = "#fff";

    }
});

// radio.addEventListener('click', radio_select = () => {
//     if (document.getElementById("button").value == "no") {
//         document.getElementById("button").innerHTML = "Save";
//     }
//     else{
//         document.getElementById("button").innerHTML = "Update Form W-9";
//     }
// })



let gig_status = true;
let get_on = document.querySelector('.get-on');
let get_of = document.querySelector('.get-of');
let get_of2 = document.querySelector('.get-of2');
let get_onfo = document.querySelector('.gig-onof');

get_onfo.addEventListener('click', function () {
    if (gig_status === true) {
        gig_status = false;
        get_of.style.width = '32px'
        get_of.style.height = '20px'
        get_of2.style.display = 'block'
        get_of.style.right = '0px'
    } else {
        gig_status = true;;
        get_of.style.width = '20px'
        get_of.style.height = '19px'
        get_of2.style.display = 'none'
        get_of.style.right = '1px'
    }
})
if (gig_status === true) {

} else {
    get_of.style.width = '10px'
}