(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment()

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.id}: ${el.name} -- ${el.email}`;
            $fragment.appendChild($li)
        })
        $fetch.appendChild($fragment)
    })
    .catch(error => {
        console.log("Error");
        let message = error.statusText || "mi querido amigo";
        $fetch.innerHTML = `Error ${error.status}: ${message}`
    })
    .finally()
})()