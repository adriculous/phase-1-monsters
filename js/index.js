function monstersList() {
    fetch('http://localhost:3000/monsters/?_limit=50_page=2')
        .then(resp => resp.json())
        .then(data => {
            document.querySelector('monster-container').innerHTML = ''
            for (let monster in monstersList) {

            }
        })
}