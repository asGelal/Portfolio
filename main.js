const gitapi_url = 'https://api.github.com/users/asGelal/repos';
async function getrepo() {
    const response = await fetch(gitapi_url);
    const data = await response.json();

    let l = data.length;

    var leng = parseInt(l);

    for (i = 0; i < leng; i++) {
        let repoName = "";
        repoName = data[i]['name'];
        // console.log(repoName);
        switch (repoName) {
            case "-The-Python-Workshop":
                repoUrlP = data[i]['html_url'];
                document.getElementById("TPW").href = repoUrlP;
                // console.log(repoUrl);
                break;
            case "Travery_webdev":
                repoUrlT = data[i]['html_url'];
                document.getElementById("TP").href = repoUrlT;
                // console.log(repoUrl);
                break;
            case "Portfolio":
                repoUrlPf = data[i]['html_url'];
                document.getElementById("Portf").href = repoUrlPf;

                // console.log(repoUrl);
                break;
            default:
                continue;
        }
    }


}
getrepo();