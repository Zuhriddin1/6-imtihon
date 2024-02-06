import BaseUrl from "../constant/BaseUrl";
export const getProducts = async (catId) => {
  const url = catId
    ? BaseUrl + `/countries/${catId}/country`
    : BaseUrl + "/country";
  const res = await fetch(url);
  return res.json();
};

export const getRegions = async () => {
  const res = await fetch(BaseUrl + "/countries");
  return res.json();
};
