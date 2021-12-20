async function addGame() {
    window.location.href = "/allgames";
    const game = {
        name: document.getElementById("name-input").value,
        description: document.getElementById("description-input").value,
        platform: document.getElementById("platform-input").value,
        genre: document.getElementById("genre-input").value

    }
    let res = null;
    try {
        res = await fetch('/api/games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(game)
        })
    }
    catch (e) {
        console.log(err)
        window.location.reload()
        document.getElementById("form-message").innerHTML = "Error adding game";
    }
    if (null) {
        alert()
    }

}