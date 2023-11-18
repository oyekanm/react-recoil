
async function useFetch(uri: string):Promise<{} | null> {

  const res = await fetch(uri);

  return res.json();
}

export default useFetch;
