import apiClient from "../apiClient";
import { AxiosResponse } from "axios";
import urlMapping from "@/helpers/urls/urlMapping";
import { handleApiErrorResponse } from "../errorHandler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ResponseError, ResponseData } from "../../apiInterface";

const LogOut = async (): Promise<ResponseData | ResponseError> => {
  const token = await AsyncStorage.getItem("access_token");
  const endpoint = urlMapping.authentication.logout;

  try {
    const response: AxiosResponse<ResponseData> = await apiClient.get<ResponseData>(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    return handleApiErrorResponse(error);
  }
};

export default LogOut;
