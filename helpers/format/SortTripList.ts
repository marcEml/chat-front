import { DriverTripModel, TripModel } from "../interface";

const monthsMap: { [key: string]: number } = {
  Janvier: 0,
  Février: 1,
  Mars: 2,
  Avril: 3,
  Mai: 4,
  Juin: 5,
  Juillet: 6,
  Août: 7,
  Septembre: 8,
  Octobre: 9,
  Novembre: 10,
  Décembre: 11,
};

const daysMap: { [key: string]: number } = {
  Dimanche: 0,
  Lundi: 1,
  Mardi: 2,
  Mercredi: 3,
  Jeudi: 4,
  Vendredi: 5,
  Samedi: 6,
};

const parseDate = (dateStr: string): Date => {
  const [dayOfWeek, day, month, year] = dateStr.split(" ");
  const dayNum = parseInt(day, 10);
  const monthNum = monthsMap[month];
  const yearNum = parseInt(year, 10);

  return new Date(yearNum, monthNum, dayNum);
};

export const SortTripsByDate = (trips: TripModel[]): TripModel[] => {
  return trips.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
};

export const SortDriverTripsByDate = (trips: DriverTripModel[]): DriverTripModel[] => {
  return trips.sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());
};
