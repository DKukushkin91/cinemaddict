
const authInit = {
  headers: {
    'Authorization': `Basic KAHUKYJlbl`,
    'Content-Type': 'application/json'
  }
};

async function setStorage() {
  let a1 = {};

  const responseFilms = await fetch('https://13.ecmascript.pages.academy/cinemaddict/movies', authInit).then((response) => {
    return response.json();
  }).then((res) => {

    a1 = res;

    console.log('a1 > ', a1);

  });

  return await a1
}

let storage = setStorage();

export {storage}
