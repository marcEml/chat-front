export function formatTime(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
}

export function timeSince(dateTimeString: string): string {
  const inputDate = new Date(dateTimeString);
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const diffInMs = currentDate.getTime() - inputDate.getTime();

  // Calculate the difference in days
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  // Calculate the difference in weeks
  const diffInWeeks = Math.floor(diffInDays / 7);

  // Calculate the difference in months
  const diffInMonths =
    (currentDate.getFullYear() - inputDate.getFullYear()) * 12 +
    (currentDate.getMonth() - inputDate.getMonth());

  if (diffInMonths > 0) {
    return `${diffInMonths} mois`;
  } else if (diffInWeeks > 0) {
    return `${diffInWeeks} semaine(s)`;
  } else {
    return `${diffInDays} jour(s)`;
  }
}

export function formatDateToFrench(dateTimeString: string): string {
  const daysOfWeek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

  const monthsOfYear = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const date = new Date(dateTimeString);

  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const dayOfMonth = date.getUTCDate();
  const month = monthsOfYear[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  return `${dayOfWeek} ${dayOfMonth} ${month} ${year}`;
}
