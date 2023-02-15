
// estrutura para buscar dados API 

async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/ArkaKyozu/js-developer-portfolio/main/data/profile.json";
    const fetching = await fetch(url)
    return await fetching.json()
}


