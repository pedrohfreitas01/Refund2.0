import foodSvg from "../assets/food.svg";
import others from "../assets/others.svg";
import services from "../assets/services.svg";
import transport from "../assets/transport.svg";
import accommodation from "../assets/accommodation.svg";

export const CATEGORIES = {
  food: {
    name: "Alimentação",
    icon: foodSvg,
  },
  transport: {
    name: "Transporte",
    icon: transport,
  },
  accommodation: {
    name: "Hospedagem",
    icon: accommodation,
  },
  services: {
    name: "Serviços",
    icon: services,
  },
  others: {
    name: "Outros",
    icon: others,
  },
};

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;
