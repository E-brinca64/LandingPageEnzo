document.addEventListener("DOMContentLoaded", function() {
    let personalPresentation = document.createElement("h1");
    personalPresentation.className = "personalPresentation";
    personalPresentation.textContent = "- Apresentação Pessoal -";
    document.body.appendChild(personalPresentation);

    let personalText = document.createElement("p");
    personalText.className = "personalText";
    personalText.textContent = "Olá, eu sou Enzo Brincalepe tenho 17 anos, moro em São Paulo, e estou no terceiro ano do ensino médio técnico da Fiap na área da programação. Atualmente, estou em busca de alguma oportunidade de ingressar no mercado de trabalho, seja como jovem aprendiz ou como estagiário.";
    document.body.appendChild(personalText);

    let bannerDiv = document.createElement("div");
    bannerDiv.className = "banner";

    let meImg = document.createElement("img");
    meImg.className = "meImg";
    meImg.src = "img/IMG_20231006_202513_199.jpg"; // Adicione o caminho da imagem
    meImg.alt = "Me";
    bannerDiv.appendChild(meImg);

    let sobreMimDiv = document.createElement("div");
    sobreMimDiv.className = "sobreMim";

    let aboutMe = document.createElement("p");
    aboutMe.className = "aboutMe";
    aboutMe.textContent = "😐 About Me";
    sobreMimDiv.appendChild(aboutMe);

    let aboutMeFact1 = document.createElement("p");
    aboutMeFact1.className = "aboutMeFact1";
    aboutMeFact1.textContent = "🔭 Desvendando O Universo Da Programação";
    sobreMimDiv.appendChild(aboutMeFact1);

    let aboutMeFact2 = document.createElement("p");
    aboutMeFact2.className = "aboutMeFact2";
    aboutMeFact2.textContent = "🎓 Estudante Front e Back End";
    sobreMimDiv.appendChild(aboutMeFact2);

    let aboutMeFact3 = document.createElement("p");
    aboutMeFact3.className = "aboutMeFact3";
    aboutMeFact3.textContent = "🎸 Guitarrista No Tempo Livre";
    sobreMimDiv.appendChild(aboutMeFact3);

    let aboutMeFact4 = document.createElement("p");
    aboutMeFact4.className = "aboutMeFact4";
    aboutMeFact4.textContent = "🚀 Buscando Oportunidades De Trabalho";
    sobreMimDiv.appendChild(aboutMeFact4);

    bannerDiv.appendChild(sobreMimDiv);
    document.body.appendChild(bannerDiv);

    let habilidadesDiv = document.createElement("div");
    habilidadesDiv.className = "habilidades";

    let habilidades = [
        { name: "Html", imgSrc: "img/html-5.png" },
        { name: "Css", imgSrc: "img/css-3.png" },
        { name: "JavaScript", imgSrc: "img/js.png" },
        { name: "Powerpoint", imgSrc: "img/powerpoint.png" },
        { name: "Exel", imgSrc: "img/excel.png" }
    ];

    habilidades.forEach(function(habilidade) {
        let card = document.createElement("div");
        card.className = "card";

        let img = document.createElement("img");
        img.src = habilidade.imgSrc;
        img.alt = habilidade.name;
        card.appendChild(img);

        let h2 = document.createElement("h2");
        h2.textContent = habilidade.name;
        card.appendChild(h2);

        habilidadesDiv.appendChild(card);
    });

    document.body.appendChild(habilidadesDiv);

    let contatosDiv = document.createElement("div");
    contatosDiv.className = "contatos";

    let gmailLink = document.createElement("a");
    gmailLink.href = "https://www.google.com";
    let gmailImg = document.createElement("img");
    gmailImg.className = "redes";
    gmailImg.src = "img/gmail.png";
    gmailImg.alt = "gmail";
    gmailLink.appendChild(gmailImg);
    contatosDiv.appendChild(gmailLink);

    let linkedinLink = document.createElement("a");
    linkedinLink.href = "https://www.linkedin.com/in/enzo-brincalepe/";
    let linkedinImg = document.createElement("img");
    linkedinImg.className = "redes";
    linkedinImg.src = "img/linkedin.png";
    linkedinImg.alt = "linkedin";
    linkedinLink.appendChild(linkedinImg);
    contatosDiv.appendChild(linkedinLink);

    let githubLink = document.createElement("a");
    githubLink.href = "https://github.com/E-brinca64";
    let githubImg = document.createElement("img");
    githubImg.className = "redes";
    githubImg.src = "img/github.png";
    githubImg.alt = "github";
    githubLink.appendChild(githubImg);
    contatosDiv.appendChild(githubLink);

    document.body.appendChild(contatosDiv);

    let agradecimentoLink = document.createElement("a");
    agradecimentoLink.href = "https://git.io/typing-svg";
    let imgAgradecimento = document.createElement("img");
    imgAgradecimento.src = "https://readme-typing-svg.demolab.com?font=Fira+Code&duration=5000&pause=1000&color=06F700&background=BB30FF00&center=true&vCenter=true&random=false&width=2100&lines=Obrigado+Por+Sua+Atenção";
    imgAgradecimento.alt = "Typing SVG";
    agradecimentoLink.appendChild(imgAgradecimento);
    document.body.appendChild(agradecimentoLink);
});
