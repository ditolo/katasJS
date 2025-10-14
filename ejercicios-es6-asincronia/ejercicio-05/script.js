/* Dado el siguiente javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

function printStreamers() {
    const input = document.getElementById('filter-input').value;
    const filteredStreamers = streamers.filter (streamer => streamer.name.toLowerCase().includes(input.toLowerCase()));
    console.log(filteredStreamers);
    const streamerContainer = document.getElementById('streamers-container');
    streamerContainer.innerHTML = '';
    filteredStreamers.forEach(streamer => {
        const listElement = document.createElement('li');
        listElement.innerText = streamer.name
        const streamerContainer = document.getElementById('streamers-container');
        streamerContainer.appendChild(listElement);
    });
}