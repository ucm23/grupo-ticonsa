// src/config/features.js
import { RiBuilding2Line, RiFolderUserLine, RiFolderChartLine, RiNurseLine, RiShakeHandsLine, RiThumbUpLine } from "react-icons/ri";

export const getFeatures = (t) => [
  {
    "id": 0,
    "img": "/imgs/004.jpg",
    "name": t.home.pretensadoPostensado,
    "description": t.home.pretensadoDesc,
    "icon": RiFolderChartLine,
    "url": "/prefabricado"
  },
  {
    "id": 0,
    "img": "/imgs/004.jpg",
    "name": t.home.pretensadoPostensado,
    "description": t.home.pretensadoDesc,
    "icon": RiFolderChartLine,
    "url": "/productos"
  },
  {
    "id": 1,
    "img": "/imgs/005.jpg",
    "name": t.home.diseñoEstructural,
    "description": t.home.diseñoDesc,
    "icon": RiBuilding2Line,
    "url": "/ingenieria"
  },
  {
    "id": 3,
    "img": "/services_card5.jpg",
    "name": t.home.fabricacion,
    "description": t.home.fabricacionDesc,
    "icon": RiShakeHandsLine,
    "url": "/fabricacion"
  },
  {
    "id": 4,
    "img": "/imgs/002.jpg",
    "name": t.home.transporteMontaje,
    "description": t.home.transporteDesc,
    "icon": RiThumbUpLine,
    "url": "/transporte"
  },
  {
    "id": 2,
    "img": "/imgs/people.jpeg",
    "name": t.home.supervision,
    "description": t.home.supervisionDesc,
    "icon": RiNurseLine,
    "url": "/supervision"
  },
  {
    "id": 5,
    "img": "/imgs/002.jpg",
    "name": t.home.mejoraContinua,
    "description": t.home.mejoraDesc,
    "icon": RiFolderChartLine,
    "url": ""
  }
];