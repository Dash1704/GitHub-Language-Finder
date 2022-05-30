const getLanguage = async(user) => {
  const userRepops = await fetch(`https://api.github.com/users/${user}/repos`)
  const dataRepo = await userRepops.json()

  const arrayOfLanguages = dataRepo.map((repo) => {
    return repo.language
  })

  const favouriteLanguage  = arrayOfLanguages.sort((a, b) => 
  arrayOfLanguages.filter(v => v===a).length 
  - arrayOfLanguages.filter(v => v===b).length).pop()

  return favouriteLanguage
}

const returnLanguage = async () => {
  const out1 = document.getElementById('output1')
  const userInput = document.getElementById('user').value
  const languageOnScreen = getLanguage(userInput)
  out1.innerText = await languageOnScreen
}


