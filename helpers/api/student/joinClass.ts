import apiClient from "../apiClient";
import { AxiosResponse } from "axios";
import urlMapping from "@/helpers/urls/urlMapping";
import { handleApiErrorResponse } from "../errorHandler";
import { ResponseError, JoinClassResponseData, JoinClassData } from "../../apiInterface";

const endpoint = urlMapping.student.joinClass;

const JoinClass = async (data: JoinClassData): Promise<JoinClassResponseData | ResponseError> => {
  try {
    const response: AxiosResponse<JoinClassResponseData> = await apiClient.post<JoinClassResponseData>(
      endpoint,
      data
    );

    return response.data;
  } catch (error: any) {
    return handleApiErrorResponse(error);
  }
};

export default JoinClass;
