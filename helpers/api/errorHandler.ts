import { ResponseError } from "../apiInterface";

export const handleApiErrorResponse = (error: any): ResponseError => {
  if (error) {
    console.log("l'erreur est : ", error);
  }
  return {
    data: {
      message: "Erreur inconnue. Contactez l'administrateur.",
    },
    status: false,
  };
};
