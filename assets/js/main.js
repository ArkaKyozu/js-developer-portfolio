
// migrando os dados da profile.json para o perfil da pagina index.html 

function updateProfileInfo(profileData) {
    const photo = document.getElementById("profile.photo")
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById("profile.name")
    name.innerText = profileData.name

    const job = document.getElementById("profile.job")
    job.innerText = profileData.job

    const location = document.getElementById("profile.location")
    location.innerText = profileData.location

    const phone = document.getElementById("profile.phone")
    phone.innerText = profileData.phone
    phone.href = `tel: ${profileData.phone}`

    const email = document.getElementById("profile.email")
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

}

//preenchendo SoftSkills atraves da Api 

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById("profile.skills.softSkills")
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

// Preenchendo as hardSkills com as logos de tecnologias

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById("profile.skills.hardSkills")
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

// Inserção de dados de idioma da APi 

function updateLanguages(profileData) {
    const languages = document.getElementById("profile.languages")
    languages.innerHTML = profileData.languages.map(language => `<li>${language}`).join("")
}

// Inserindo Portfolio do GitHub no projeto 

function updatePortfolio(profileData) {
    const portfolio = document.getElementById("profile.portfolio")
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}<h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join("")
}

// Inserção das experiencias profissionais 

function updateProfessionalExpirience(profileData){
    const professionalexpirience = document.getElementById("profile.professionalExperience")
    professionalexpirience.innerHTML = profileData.professionalExperience.map(expirience => {
        return `
            <li>
                <h3 class="title">${expirience.name}</h3>
                <p class="periodo">${expirience.period}</p>
                <p>${expirience.description}</p>
            </li>
        `
    }).join("")
}



    // chamando os dados do API.js

    (async () => {
        const profileData = await fetchProfileData()
        updateProfileInfo(profileData)
        updateSoftSkills(profileData)
        updateHardSkills(profileData)
        updateLanguages(profileData)
        updatePortfolio(profileData)
        updateProfessionalExpirience(profileData)
    })()