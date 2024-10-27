export function getInitials(firstName: string, lastName: string): string {
  if (!firstName || !lastName) {
    return "";
  }

  const firstInitial = firstName.charAt(0).toUpperCase();
  const lastInitial = lastName.charAt(0).toUpperCase();

  return firstInitial + lastInitial;
}

export const formatPlace = (place?: string) => {
  var placeList = (place != "" && place != null) ? place.toString().split(",") : ["", ""];
  return `${placeList[0]}, ${placeList[1]}`;
};