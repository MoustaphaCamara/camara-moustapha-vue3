import { ref } from "vue";
import { defineStore } from "pinia";
import ky from "ky";
import { Amiibo } from "../shared/interfaces/Amiibo.ts";

const api = "https://www.amiiboapi.com/api/amiibo/";
const amiibos = ref<Amiibo[]>([]);
const amiibo = ref<Amiibo | Amiibo[] | null>(null);

export const useAmiiboStore = defineStore("amiibo", () => {
  const fetchAmiibos = async (name: string): Promise<Amiibo[]> => {
    try {
      amiibo.value = await ky.get(`${api}?gameseries=${name}`).json()
    } catch (e) {
      console.error(e);
    }
  };

  const fetchByName = async (name: string): Promise<Amiibo | Amiibo[]> => {
    try {
      amiibo.value = await ky.get(`${api}?character=${name}`).json();
    } catch (e) {
      console.error(e);
    }
  };

  return { fetchAmiibos, amiibos, fetchByName, amiibo };
});
