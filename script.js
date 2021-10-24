const userSocialMedia = {
    youtube: "channel/UC1N_a3S154MEOOCsKAAe54Q",
    instagram: "debora.pereiragoncalves",
    twitter: "sitewebvolei",
    github: "deboragoncalves",
    facebook: ""
}

setLinksSocialMedia = () => {
    let listSocialMedia = document.getElementById("listSocialMedia");

    // listSocialMedia.children = retorna uma lista com todos os elementos filhos

    for (let li of listSocialMedia.children) {
        let liClass = li.getAttribute("class");

        // pegar filhos da li: li.children. 0 é o primeiro: a
        // userSocialMedia[liClass] = userSocialMedia.github, .youtube, .facebook

        li.children[0].href = `https://www.${liClass}.com/${userSocialMedia[liClass]}`;        
    }
};

setLinksSocialMedia();

getInformationsGithub = () => {
    const url = `https://api.github.com/users/${userSocialMedia.github}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {        
        let userName = document.getElementById("name");
        userName.textContent = data.name;

        let userGithub = document.getElementById("userGithub");
        userGithub.textContent = data.login;

        let linkUserGithub = document.getElementById("linkUserGithub");
        linkUserGithub.href = data.html_url;

        let imageGithub = document.getElementById("imageGithub");
        imageGithub.href = data.html_url;

        let userPhoto = document.getElementById("userPhoto");
        userPhoto.src = data.avatar_url;
    });
}

getInformationsGithub();