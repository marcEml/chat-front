import FaqIcon from "../nav/faq";
import TrajetIcon from "../nav/trajet";
import RechercheIcon from "../nav/recherche";
import PassengerIcon from "../nav/passenger";
import ReservationIcon from "../nav/reservation";
import MonCompteDriverIcon from "../nav/monCompteDriver";
import MonComptePassengerIcon from "../nav/monComptePassenger";

type IconProps = {
  dark?: boolean;
  focused: boolean;
  size?: "md" | "lg" | "xl";
};

type IconComponentType = React.FC<IconProps>;

interface NavIconsMapping {
  [key: string]: IconComponentType;
}

const navIconsMapping: NavIconsMapping = {
  "faq": FaqIcon,
  "trajet": TrajetIcon,
  "recherche": RechercheIcon,
  "passenger": PassengerIcon,
  "reservation": ReservationIcon,
  "moncompte-driver": MonCompteDriverIcon,
  "moncompte-passenger": MonComptePassengerIcon,
};

export default navIconsMapping;
