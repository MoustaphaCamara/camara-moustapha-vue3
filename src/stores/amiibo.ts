import { ref } from "vue";
import { defineStore } from "pinia";
import ky from "ky";
import { Amiibo } from "../shared/interfaces/Amiibo.ts";

const api = "https://www.amiiboapi.com/api/amiibo/";
const amiibos = ref<Amiibo[]>([]);
const amiibo = ref<Amiibo | Amiibo[] | null>(null);

export const useAmiiboStore = defineStore("amiibo", () => {
  const fetchAmiibos = async (): Promise<Amiibo[]> => {
    try {
      amiibos.value = await ky
        .get("https://www.amiiboapi.com/api/amiibo/")
        .json();
    } catch (e) {
      console.error(e);
    }
  };

  const fetchByName = async (name: string): Promise<Amiibo | Amiibo[]> => {
    try {
      amiibos.value = await ky.get(`${api}?character=${name}`).json();
    } catch (e) {
      console.error(e);
    }
  };

  return { amiibos, fetchByName, amiibo };
});
