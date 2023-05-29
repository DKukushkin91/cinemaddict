
const authInit = {
  headers: {
    'Authorization': `Basic KAHUKYJlbl`,
    'Content-Type': 'application/json'
  }
};

const storageTest = async function setStorage() {
  const responseFilms = await fetch('https://13.ecmascript.pages.academy/cinemaddict/movies', authInit).then(response => {
    return response.json();
  }).then(result => {
    console.log('movies > ', result);
  });
}

const storageTestComments = async function setStorageComment() {
  const responseFilms = await fetch('https://13.ecmascript.pages.academy/cinemaddict/comments/1', authInit).then(response => {
    return response.json();
  }).then(result => {
    console.log('comments > ', result);
  });
}
// /comments/:
export {storageTest, storageTestComments}
