import {encodeGeoHash} from "@utils/encodeGeohash";

const axios = require('axios');

export const useSearchLocations = (q: string, serviceType: string) => async () => {
  const { data } = await axios.get(`http://localhost:8080/search/locations?service_type=${serviceType}&q=${q}`)

  return data;
};

export const useEstatesListByLocation = (q: string, serviceType: string) => async () => {
  const locations = await axios.get(`http://localhost:8080/search/locations?service_type=${serviceType}&q=${q}`)
  const target_locations = locations["data"][0]
  const geohash = encodeGeoHash(target_locations["lat"], target_locations["lng"],5);

  const { data } = await axios.get(`http://localhost:8080/real_estates/onerooms?geohash=${geohash}`)

  return data;
};

export const useOneroomEstatesList = async () => {
  const { data } = await axios.get('http://localhost:8080/real_estates/onerooms');

  return data;
};

export const useOfficetelBuildingList = async () => {
  const { data } = await axios.get('http://localhost:8080/real_estates/buildings');

  return data;
};

export const useOfficetelEstatesList = (buildingId: any) => async() => {
  const { data } = await axios.get(`http://localhost:8080/real_estates/officetels?building_id=${buildingId}`);

  return data;
};

export const useEstate = (id: any) => async () => {
  const { data } = await axios(`http://localhost:8080/real_estates/${id}`);

  return data;
};
