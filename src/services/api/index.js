export const methods = {POST: 'POST', GET: 'GET'};
export default function callAPI({url = '', method = methods.GET}) {
  return new Promise(
    async (resolve, reject) =>
      await fetch(url, {method})
        .then(async res => res.json())
        .then(resolve)
        .catch(reject),
  );
}
