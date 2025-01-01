const state = {
  everyPlayer: [],
  singlePlayer: '',
  foundPlayer: {}
}

const main = document.querySelector(`main`);

const getPlayers= async() => {
  const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2410-ftb-mt-web-pt/players');
  const players = await response.json();
  const allPlayers = players.data;
  state.everyPlayer = allPlayers.players;
  // console.log(allPlayers.players);
  renderPlayers();
}

const renderPlayers = async() => {
  const main = document.querySelector('main');
  const ul = document.createElement('ul');
  
  console.log(state.everyPlayer);
  const playerName = state.everyPlayer.map((everyPlayer) => {
    // console.log(everyPlayer.name);
    return `<li>${everyPlayer.name}</li>`;
  });
  ul.innerHTML = playerName.join('');

  main.replaceChildren (ul);

  const allULs = document.querySelectorAll('ul');

  allULs.forEach((allULs) => {
    allULs.addEventListener(`click`, (event) => {
      state.singlePlayer = event.target.innerText; 
      // console.log(event.target.innerText);
      // console.log(state.singlePlayer);
      renderPlayerDetails(event.target.innerText);
    })
  })
}

const renderPlayerDetails = (clickedPlayerName) => {
  console.log(clickedPlayerName);
 const foundPlayer = state.everyPlayer.find((player) => {
    return player.name === clickedPlayerName;
    
  });
  console.log(foundPlayer);

  const playerDetailsHTML = `
    <img src = "${state.singlePlayer.imageURL}"alt="puppy image"/>  
    <img src = "${state.everyPlayer.imageURL}"alt="puppy image"/>
    <img src = "${state.foundPlayer.imageURL}"alt="puppy image"/>
    <h2>${clickedPlayerName}</h2>
    <h3>${foundPlayer.breed}</h3>
    <h3>${foundPlayer.status}</h3>
    

    <button>Back</button>
  `;
  // console.log(playerDetailsHTML);

  main.innerHTML = playerDetailsHTML;
  
  const button = document.querySelector(`button`);
  button.addEventListener(`click`, renderPlayers)
  
}



getPlayers();

