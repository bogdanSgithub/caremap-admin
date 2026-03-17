import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// Categories
export const CATEGORIES = [
  {
    id: "meals",
    name: "Meal Programs",
    icon: "fast-food",
    provider: "ion",
  },
  
  {
    id: "fridge",
    name: "Community Fridges",
    icon: "food-bank",
    provider: "material",
  },

  {
    id: "dropin",
    name: "Drop-in Centres",
    icon: "home-outline",
    provider: "ion",
  },
  {
    id: "housing",
    name: "Housing Services",
    icon: "other-houses",
    provider: "material",
  },
  {
    id: "other",
    name: "Other Services",
    icon: "ellipsis-horizontal-circle-outline",
    provider: "ion",
  },
];

//category colors
export const CATEGORY_COLORS: Record<string, string> = {
  meals: "#FF7043",
  fridge: "#4CAF50",
  dropin: "#42A5F5",
  housing: "#AB47BC",
  other: "#9E9E9E",
};

// Icon renderer
export const CategoryIcon = ({
  provider,
  name,
  size = 20,
  color = "#111",
}: {
  provider: "ion" | "fa6" | "material";
  name: string;
  size?: number;
  color?: string;
}) => {
  switch (provider) {
    case "fa6":
      return <FontAwesome6 name={name} size={size} color={color} />;
    case "material":
      return <MaterialIcons name={name} size={size} color={color} />;
    default:
      return <Ionicons name={name as any} size={size} color={color} />;
  }
};