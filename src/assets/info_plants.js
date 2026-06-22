
import { getTranslation } from '../i18n/translations';

// Función para obtener las plantas con traducciones
export const getPlants = (t) => {
  return {
    "3": {
      id: 3,
      folder: "plants/cancun/",
      layout: "0.jpg",
      url: "plant-cancun",
      imgs: [1, 2, 3, 4],
      title: t.plants.cancun.title,
      place: t.plants.cancun.place,
      info: [
        {
          id: 4,
          list: t.plants.cancun.info.products.items
        },
        {
          id: 1,
          list: t.plants.cancun.info.capacity.items
        },
        {
          id: 3,
          list: t.plants.cancun.info.infrastructure.items
        },
        {
          id: 2,
          list: t.plants.cancun.info.weeklyProduction.items
        }
      ]
    },
    "4": {
      id: 4,
      folder: "plants/teotihuacan/",
      layout: "0.jpg",
      url: "plant-teotihuacan",
      imgs: [1, 2, 3, 4, 5],
      title: t.plants.teotihuacan.title,
      place: t.plants.teotihuacan.place,
      info: [
        {
          id: 4,
          list: t.plants.teotihuacan.info.products.items
        },
        {
          id: 1,
          list: t.plants.teotihuacan.info.capacity.items
        },
        {
          id: 3,
          list: t.plants.teotihuacan.info.infrastructure.items
        },
        {
          id: 2,
          list: t.plants.teotihuacan.info.weeklyProduction.items
        }
      ]
    },
    "6": {
      id: 6,
      folder: "plants/hidalgo/",
      layout: null,
      url: "plant-hidalgo",
      imgs: [1, 2, 3, 4, 5, 6],
      title: t.plants.hidalgo.title,
      place: t.plants.hidalgo.place,
      info: [
        {
          id: 4,
          list: t.plants.hidalgo.info.products.items
        },
        {
          id: 1,
          list: t.plants.hidalgo.info.capacity.items
        },
        {
          id: 3,
          list: t.plants.hidalgo.info.infrastructure.items
        },
        {
          id: 2,
          list: t.plants.hidalgo.info.weeklyProduction.items
        }
      ]
    }
  };
};

// Si necesitas los IDs de las plantas disponibles
export const plantIds = ['3', '4', '6'];

// Función para obtener una planta específica por ID
export const getPlantById = (t, id) => {
  const plants = getPlants(t);
  return plants[id] || null;
};

// Función para obtener todas las plantas como array
export const getPlantsArray = (t) => {
  const plants = getPlants(t);
  return Object.values(plants);
};