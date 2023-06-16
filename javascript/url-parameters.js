const toReturn = () => {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query)

    console.log(urlParams.get("pet"))
    return urlParams.get("pet")
}