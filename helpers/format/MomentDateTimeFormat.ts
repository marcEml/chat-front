import "moment/locale/fr";
import moment from "moment";

const convertToDate = (date: Date) => {
  return moment(date).format("Dddd DD MMMM YYYY");
};

const convertToDateAndTime = (date: Date) => {
  return moment(date).format("dddd DD MMMM YYYY - HH:mm");
};

const formatDate = (date: string, toFrenchLocale: boolean = true): string => {

  const pattern = toFrenchLocale ? "DD/MM/YYYY" : "YYYY-MM-DD";

  const parsedDate = moment(date, "DD MMMM YYYY", "fr", true);

  if (!parsedDate.isValid()) {
    throw new Error("Invalid date format");
  }

  const formattedDate = parsedDate.format(pattern);
  return formattedDate;
};


const convertToDateShort = (date: Date) => {
  return moment(date).format("DD MMMM YYYY");
};

const convertToStringDate = (date: Date, format: string = "DD MMMM YYYY") => {
  return moment(date).format(format);
};

const convertToTime = (date: Date) => {
  return moment(date).format("H:mm");
};

export { convertToDate, convertToDateAndTime, convertToDateShort, convertToTime, convertToStringDate, formatDate };
