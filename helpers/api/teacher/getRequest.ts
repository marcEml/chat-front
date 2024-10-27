import apiClient from "../apiClient";
import { AxiosResponse } from "axios";
import urlMapping from "@/helpers/urls/urlMapping";
import { handleApiErrorResponse } from "../errorHandler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ResponseError, RequestData } from "../../apiInterface";

const endpoint = urlMapping.teacher.getRequest;

const GetClassRequests = async (): Promise<RequestData | ResponseError> => {
  const token = await AsyncStorage.getItem("access_token");

  try {
    if (token) {
      const response: AxiosResponse<RequestData> = await apiClient.get<RequestData>(endpoint, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });
      return response.data;
    } else {
      return {
        data: {
          message: "Token introuvable",
        },
        status: false,
      };
    }
  } catch (error: any) {
    return handleApiErrorResponse(error);
  }
};

export default GetClassRequests;
