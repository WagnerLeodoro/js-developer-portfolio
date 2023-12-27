async function fetchProfileData() {
  const url =
    'https://raw.githubusercontent.com/WagnerLeodoro/portfolio-api/main/profile.json'
  const response = await fetch(url)
  const profileData = await response.json()
  return profileData
}
