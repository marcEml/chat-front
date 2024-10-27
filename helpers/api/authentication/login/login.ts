import { AxiosResponse } from "axios";
import apiClient from "../../apiClient";
import urlMapping from "@/helpers/urls/urlMapping";
import { handleApiErrorResponse } from "../../errorHandler";
import { LoginData, ResponseError, AuthResponseData } from "../../../apiInterface";

const endpoint = urlMapping.authentication.login;

const PostData = async (data: LoginData): Promise<AuthResponseData | ResponseError> => {
  try {
    const response: AxiosResponse<AuthResponseData> = await apiClient.post<AuthResponseData>(
      endpoint,
      data
    );

    return response.data;
  } catch (error: any) {
    return handleApiErrorResponse(error);
  }
};

export { PostData };
