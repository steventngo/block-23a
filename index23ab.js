const state = {
  everyPuppy: []
}

const getPuppies = async() => {
  const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2410-ftb-mt-web-pt/players');
  const puppies = await response.json();
  const allPuppies = puppies.data;
  state.everyPuppy = allPuppies;
  console.log(allPuppies);
  renderPuppies();
}

const renderPuppies = async() => {
  const main = document.querySelector('main');
  const ol = document.createElement('ol');
  console.log(state.everyPuppy);
  state.everyPuppy.map((singlePuppy) => {
    console.log(singlePuppy);
  })
}



getPuppies();