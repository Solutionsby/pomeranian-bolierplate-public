export async function requestHendler(method, id, extraParam) {
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
    });
    const jesonResponse = await respons.json();

    if (respons.status === 200) {
      resolve(jesonResponse);
    }
    // Heding satus - what error we had
    if (respons.status !== 200 && jesonResponse.message) {
      reject('ups Something go wrong');
    }
  });
}
