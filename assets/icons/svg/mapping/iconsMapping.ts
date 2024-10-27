import CarIcon from "../ui/car";
import EyeIcon from "../ui/eyes";

import PlusIcon from "../ui/plus";
import StarIcon from "../ui/star";
import UserIcon from "../ui/user";
import BackIcon from "../ui/back";
import CallIcon from "../ui/call";
import EditIcon from "../ui/edit";
import BookIcon from "../ui/book";

import RadioIcon from "../ui/radio";
import CheckIcon from "../ui/check";
import SeatsIcon from "../ui/seats";
import MinusIcon from "../ui/minus";
import PhoneIcon from "../ui/phone";
import EmailIcon from "../ui/email";
import TrashIcon from "../ui/trash";
import AlertIcon from "../ui/alert";

import StyletIcon from "../ui/stylet";
import UploadIcon from "../ui/uplaod";
import DollarIcon from "../ui/dollar";
import CameraIcon from "../ui/camera";
import XCrossIcon from "../ui/xcross";

import MapPinIcon from "../ui/map.pin";
import GalleryIcon from "../ui/gallery";

import PostCardIcon from "../ui/postcard";
import SecurityIcon from "../ui/security";
import CalendarIcon from "../ui/calendar";
import DropDownIcon from "../ui/dropdown";

import TwoUsersIcon from "../ui/two.users";
import NoteTextIcon from "../ui/note.text";

import TimeSpeedIcon from "../ui/timeSpeed";
import PlayStoreIcon from "../ui/playstore";

import CheckMarkIcon from "../ui/check.mark";
import MoneyHandIcon from "../ui/money.hand";
import ThreeDotsIcon from "../ui/three.dots";
import CircleIcon from "../ui/circle.dashed";
import ThumbUpIcon from "../ui/thumb.up.tsx";

import ChevronUpIcon from "../ui/chrevron-up";

import ArrowBottomIcon from "../ui/arrowBottom";
import CircleCheckIcon from "../ui/circleCheck";

import ArrowTopRight from "../ui/arrow.top.right";

import SecurityLockIcon from "../ui/security.lock";
import CalendarSearch from "../ui/search.calendar";
import ToastDefaultIcon from "../ui/toast.default";
import ToastSuccessIcon from "../ui/toast.success";
import NotificationIcon from "../ui/notifications";

import ChevronRightIcon from "../ui/chrevron-right";
import { StyleProp, ViewStyle } from "react-native";

import CalendarPending from "../ui/calendar.pending";
import ToastCriticalIcon from "../ui/toast.critical";
import CalendarCheckIcon from "../ui/calendar.check";
import CalendarClockIcon from "../ui/calendar.clock";

import CalandarResearch from "../ui/calendar.research";
import CalendarRemoveIcon from "../ui/calendar.remove";
import TripDetailsBarIcon from "../ui/trip.details.bar";

import ArrowRepeatCircleIcon from "../ui/arrow.repeat.circle";
import CirclePlaceholderOnIcon from "../ui/circle.placeholder.on";

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  size: "sm" | "md" | "lg" | "xl";
};

type IconComponentType = React.FC<IconProps>;

interface IconsMapping {
  [key: string]: IconComponentType;
}

const iconsMapping: IconsMapping = {
  eye: EyeIcon,
  car: CarIcon,

  call: CallIcon,
  edit: EditIcon,
  back: BackIcon,
  star: StarIcon,
  user: UserIcon,
  plus: PlusIcon,

  trash: TrashIcon,
  seats: SeatsIcon,
  radio: RadioIcon,
  phone: PhoneIcon,
  check: CheckIcon,
  minus: MinusIcon,
  email: EmailIcon,

  dollar: DollarIcon,
  xcross: XCrossIcon,
  camera: CameraIcon,
  upload: UploadIcon,
  mapPin: MapPinIcon,
  BookIcon: BookIcon,

  thumbUp: ThumbUpIcon,

  gallery: GalleryIcon,
  AlertIcon: AlertIcon,

  StyletIcon: StyletIcon,
  dropdown: DropDownIcon,
  security: SecurityIcon,
  calendar: CalendarIcon,
  postcard: PostCardIcon,
  twoUsers: TwoUsersIcon,

  circleDashed: CircleIcon,
  threeDots: ThreeDotsIcon,
  moneyHand: MoneyHandIcon,
  chevronUp: ChevronUpIcon,
  timeSpeed: TimeSpeedIcon,
  playstore: PlayStoreIcon,

  NoteTextIcon: NoteTextIcon,

  ArrowTopRight: ArrowTopRight,
  circleCheck: CircleCheckIcon,
  arrowBottom: ArrowBottomIcon,
  CheckMarkIcon: CheckMarkIcon,

  toastDefault: ToastDefaultIcon,
  toastSuccess: ToastSuccessIcon,
  chevronRight: ChevronRightIcon,
  CalendarSearch: CalendarSearch,

  toastCritical: ToastCriticalIcon,
  calandarCheck: CalendarCheckIcon,
  calandarClock: CalendarClockIcon,
  calendarPending: CalendarPending,

  CalandarResearch: CalandarResearch,
  NotificationIcon: NotificationIcon,
  calandarRemove: CalendarRemoveIcon,
  SecurityLockIcon: SecurityLockIcon,

  tripDetailsBarIcon: TripDetailsBarIcon,

  ArrowRepeatCircleIcon: ArrowRepeatCircleIcon,

  CirclePlaceholderOnIcon: CirclePlaceholderOnIcon,
};

export default iconsMapping;
