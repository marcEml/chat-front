import { TripModel, TripGroup } from "../interface";
import { convertToStringDate } from "./MomentDateTimeFormat";

export const groupListByDate = (list: Array<TripModel>): Array<TripGroup> => {

    var returnList: Array<TripGroup> = [];
    var dates: Array<string> = [];

    list.forEach((item) => {
        if (!dates.includes(item.date.slice(0, 10))) {
            dates.push(item.date.slice(0, 10));
            returnList.push({
                date: item.date.slice(0, 10),
                trips: []
            });
        }
    });

    returnList.map((group) => {
        list.forEach((trip) => {
            if (group.date == trip.date.slice(0, 10)) {
                group.trips.push(trip);
            }
        });
    });

    returnList.map((group) => {
        if (new Date(group.date).toDateString().slice(0, 10) == new Date().toDateString().slice(0, 10)) {
            group.date = "Aujourd'hui";
        }
        else {
            const cur = new Date();
            const oth = new Date();
            cur.setDate(oth.getDate() + 1);

            if (new Date(group.date).toDateString().slice(0, 10) == cur.toDateString().slice(0, 10)) {
                group.date = "Demain";
            } else {
                group.date = convertToStringDate(new Date(group.date), "ddd DD MMMM");
            }
        }
    });

    return returnList;
}