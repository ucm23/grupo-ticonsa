// src/config/features.js
import { RiBuilding2Line, RiFolderUserLine, RiFolderChartLine, RiNurseLine, RiShakeHandsLine, RiThumbUpLine } from "react-icons/ri";

export const getFeatures_ = (t) => [
{
      "id": 4,
      "name": t.features.conventionalSystems.name,
      "description": t.features.conventionalSystems.description,
      "icon": RiFolderChartLine,
    },
    {
      "id": 7,
      "name": t.features.prestressingUse.name,
      "description": t.features.prestressingUse.description,
      "icon": RiFolderUserLine,
    },
    {
      "id": 7,
      "name": t.features.advantages.name,
      "description": t.features.advantages.description,
      "icon": RiThumbUpLine,
      "url": "/prefabricado#features"
    },
];