const logined_element = document.getElementById('logined');
const not_logined_element = document.getElementById('not_logined');

var login_state_bool = false;

if(login_state_bool) 
    logined_element.hidden = true;
else
    not_logined_element.hidden = true;