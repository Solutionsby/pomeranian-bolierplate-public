export async function requestHendler(method, id, extraParam, data) {
  return new Promise(async (resolve, reject) => {
    let endOfUrl = '';

    if (id) {
      endOfUrl = '/' + id;
    }
    if (extraParam) {
      endOfUrl = endOfUrl + '/markAsDone';
    }

    const respons = await fetch(`http://localhost:3333/api/todo${endOfUrl}`, {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const jesonResponse = await respons.json();

    if (respons.status === 200) {
      resolve(jesonResponse);
    }
    if (respons.status !== 200) {
      reject(`- ${respons.status}`);
    }
  });
}
export const setterFunction = (value, setter) => {
  setter(value);
};
