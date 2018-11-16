const searchApi = async () => {
  const response = await fetch("/default/testOrder");
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};
export default searchApi;
