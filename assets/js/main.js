

function updateProfileInfo(profileData){
    const photo = document.getElementById(`profile.photo`)
    photo.src= profileData.photo
    photo.alt= profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel ${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `email ${profileData.email}`
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById(`profile.skills.softSkills`)
    softSkills.innerHTML = profileData.skills.softSkills.map(skill =>`<li>${skill}</li>`).join('')
}

function updateProfileLanguages(profileData){
    const languagens = document.getElementById(`profile.languages`)
    languagens.innerHTML = profileData.languages.map(language =>`<li>${language}</li>`).join('')
}

function updateProfilePortfolio(profileData){
    const portfolio = document.getElementById(`profile.portfolio`)
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return`
        
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" 
                target="_blank">${project.url}</a>
                <a href="${project.certificate}"
                target="_blank">${project.certificate}</a>
            </li>
        `
    }).join('')
}
function updateprofileProfessionalExperience(profileData){
    const professionalExperience = document.getElementById(`profile.professionalExperience`)
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience =>{
        return`
            <li>
                <h3 class="title ">${experience.name}</h3>
                <p class="period"> ${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')

}

(async () =>{
    // A resposta da requisição é armazenada na variável "fetching". Agora, usamos "await" novamente para esperar a conversão da resposta em um objeto JSON.
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateProfileLanguages(profileData)
    updateProfilePortfolio(profileData)
    updateprofileProfessionalExperience(profileData)

})()