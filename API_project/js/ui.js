class UI {
    constructor(){
    this.profile = document.querySelector('#profile')
        }
        showProfile(user) {
            // console.log(user);
            this.profile.innerHTML = `
            <div class="card card-body mb-3">
  <div class="row">
    <div class="col-md-3">
      <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
      <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
    </div>
    <div class="col-md-9">
      <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
      <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>
      <span class="badge badge-success">Followers : ${user.followers}</span>
      <span class="badge badge-info">Followings : ${user.following}</span>
    <br><br>
    <ul class="list-group">
      <li class="list-group-item">Company : ${user.company}</li>
      <li class="list-group-item">Website/Blog : ${user.Blog}</li>
      <li class="list-group-item">Location : ${user.location}</li>
      <li class="list-group-item">Members  Since : ${user.created_at} </li>
    </ul>
    </div>
  </div>
</div>  
<h3 class="page-heading mb-3">Latest Repos</h3>
<div id="repos"></div>
            `;
        }
        showAlert(msg, className){
            // Clear any remaining alerts
            this.clearAlert();
            // Create div
            const div = document.createElement('div');
            // add classes
            div.className = className;
            // add text
            div.appendChild(document.createTextNode(msg));
            // Get parent 
            const container = document.querySelector('.searchContainer');
            // get search box 
            const search = document.querySelector('.search');
            // insert alert 
            container.insertBefore(div , search)
            setTimeout( () => {
                this.clearAlert();
            },3000)
        }
        clearAlert(){
            const currentAlert = document.querySelector('.alert')
            if(currentAlert){
                currentAlert.remove();
            }
        }
        clearProfile(){
            this.profile.innerHTML='';
        }
        showRepos(repos) {
            let output = ''
            repos.forEach( repo => {
                output += `
                
                <div class="card card-body mb-2">
                <div class="row">
                <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                <span class="badge-primary">Stars ${repo.stargazers_count}</span>
                <span class="badge-secondary">Watcher ${repo.watchers_count}</span>
                <span class="badge-success">Forks ${repo.forks_count}</span>
                </div>
                </div>
                </div>
                `
            });
        document.querySelector('#repos').innerHTML = output;
        }
}