import apiClient from "../apiClient";
import { AxiosResponse } from "axios";
import urlMapping from "@/helpers/urls/urlMapping";
import { handleApiErrorResponse } from "../errorHandler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ResponseError, ClassData, RegistrationClassData } from "../../apiInterface";

const endpoint = urlMapping.teacher.createClass;

const CreateTeacherClass = async (
  data: RegistrationClassData
): Promise<ClassData | ResponseError> => {
  try {
    const token = await AsyncStorage.getItem("access_token");

    if (!token) {
      return {
        data: {
          message: "Token introuvable",
        },
        status: false,
      };
    }

    const response: AxiosResponse<ClassData> = await apiClient.post<ClassData>(endpoint, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    return handleApiErrorResponse(error);
  }
};

export default CreateTeacherClass;
