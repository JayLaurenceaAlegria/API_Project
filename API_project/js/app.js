// init Github 
const github = new Github();
const ui = new UI();


// search input
const searchUser = document.querySelector('#searchUser');

// search input event listener 
searchUser.addEventListener('keyup' , e => {
    // get input text
    const userText = e.target.value; 
    if(userText !== ''){
        // make http call 
        github.getUser(userText)
        .then(data => {
            // check user data
            if(data.profile.message === 'Not Found'){
            //    show alert 
                ui.showAlert('User not found' ,'alert alert-danger');
            } else {
            //  show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    } else {
        ui.clearProfile();
    }
});