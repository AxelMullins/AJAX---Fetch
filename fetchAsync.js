(() => {
    const $fetchAsync = document.getElementById("fetchAsync"),
        $fragment = document.createDocumentFragment();

    (async function getData() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await res.json();

            if (!res.ok) throw res;

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.id}: ${el.name} -- ${el.email}`;
                $fragment.appendChild($li);
            })

            $fetchAsync.appendChild($fragment);
        }
        catch (error) {
            console.log("Error");
            let message = error.statusText || "mi querido amigo";
            $fetchAsync.innerHTML = `Error ${error.status}: ${message}`;
        }
    })();
})();