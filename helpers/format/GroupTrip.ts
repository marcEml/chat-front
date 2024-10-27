import { TripModel, TripGroup, DriverTripModel } from "../interface";
import { convertToStringDate } from "./MomentDateTimeFormat";

export const groupListByDate = (list: Array<TripModel>, addToday: boolean = false): Array<TripGroup> => {
  let returnList: Array<TripGroup> = [];
  let dates: Array<string> = [];

  // Add today's date
  if (addToday) {

    const today = new Date().toISOString().slice(0, 10);
    dates.push(today);
    returnList.push({
      date: today,
      trips: [],
    });

  }

  // Iterate over the trip list to group by date
  list.forEach((item) => {
    const tripDate = item.date.slice(0, 10);
    if (!dates.includes(tripDate)) {
      dates.push(tripDate);
      returnList.push({
        date: tripDate,
        trips: [],
      });
    }
  });

  // Populate the trips for each group
  returnList.forEach((group) => {
    list.forEach((trip) => {
      if (group.date === trip.date.slice(0, 10)) {
        group.trips.push(trip);
      }
    });
  });

  // Format the date for display
  returnList.forEach((group) => {
    const groupDate = new Date(group.date);
    const todayDate = new Date().toDateString();

    if (groupDate.toDateString() === todayDate) {
      group.date = "Aujourd'hui";
    } else {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);

      if (groupDate.toDateString() === tomorrow.toDateString()) {
        group.date = "Demain";
      } else {
        group.date = convertToStringDate(groupDate, "ddd DD MMMM");
      }
    }
  });

  return returnList;
};
