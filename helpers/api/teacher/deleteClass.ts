import apiClient from "../apiClient";
import { AxiosResponse } from "axios";
import urlMapping from "@/helpers/urls/urlMapping";
import { handleApiErrorResponse } from "../errorHandler";

import { ResponseError, DeletionResponseData, DeletionClassData } from "../../apiInterface";
import AsyncStorage from "@react-native-async-storage/async-storage";

const endpoint = urlMapping.teacher.deleteClass;

const deleteTeacherClass = async (
  data: DeletionClassData
): Promise<DeletionResponseData | ResponseError> => {
  const token = await AsyncStorage.getItem("access_token");

  if (!token) {
    return {
      data: {
        message: "Token introuvable",
      },
      status: false,
    };
  }

  try {
    const response: AxiosResponse<DeletionResponseData> =
      await apiClient.post<DeletionResponseData>(endpoint, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    return response.data;
  } catch (error: any) {
    return handleApiErrorResponse(error);
  }
};

export default deleteTeacherClass;
