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

        li.children[0].href = "https://www." + liClass + ".com/" + userSocialMedia[liClass];
    }

    let divGithub = document.getElementById("divGithub");

    for (let a of divGithub.children) {
        a.href = "https://www.github.com/" + userSocialMedia.github;
    }
};

setLinksSocialMedia();