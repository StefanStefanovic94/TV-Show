export const FetchShows=(url)=>{
    return fetch(url)
    .then((response)=>response.json())
}