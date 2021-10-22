const linksSocialMedia = {
  github: 'Furioncoding',
  youtube: 'channel/UC6QRsU6s9wy5JGge_xnxSNA',
  facebook: 'pedro.lucas.589',
  instagram: 'pedrolopss',
  twitter: 'pedrollopesb'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

// i = i + 1
// i++

// ser humano conta algo a partir de: 12345678910
// computador conta algo a partir de: 0123456789

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
