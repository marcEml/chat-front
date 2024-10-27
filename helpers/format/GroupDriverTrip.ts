import { DriverTripGroup, DriverTripModel } from "../interface";
import { convertToStringDate } from "./MomentDateTimeFormat";

export const groupListByDate = (list: Array<DriverTripModel>): Array<DriverTripGroup> => {
  let returnList: Array<DriverTripGroup> = [];
  let dates: Array<string> = [];

  // Get today's date (without time)
  const today = new Date().toISOString().slice(0, 10);

  // Iterate over the trip list to group by date, only include today or future trips
  list.forEach((item) => {
    const tripDate = item.date.slice(0, 10);

    // Only process trips that are today or in the future
    if (tripDate >= today && !dates.includes(tripDate)) {
      dates.push(tripDate);
      returnList.push({
        date: tripDate,
        trips: [],
      });
    }
  });

  // Populate the trips for each group
  returnList.forEach((group) => {
    list.forEach((trip: DriverTripModel) => {
      const tripDate = trip.date.slice(0, 10);
      if (group.date === tripDate && tripDate >= today) {
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

  // Sort groups by date, most outdated first, most up-to-date last
  returnList.sort((a, b) => {
    const dateA = new Date(a.date === "Aujourd'hui" ? today : a.date);
    const dateB = new Date(b.date === "Aujourd'hui" ? today : b.date);
    return dateA.getTime() - dateB.getTime(); // Ascending order (outdated first)
  });

  return returnList;
};
