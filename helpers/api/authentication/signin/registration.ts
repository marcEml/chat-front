import { AxiosResponse } from "axios";
import apiClient from "../../apiClient";
import urlMapping from "@/helpers/urls/urlMapping";
import { handleApiErrorResponse } from "../../errorHandler";

import { ResponseError, RegistrationResponseData, RegistrationData } from "../../../apiInterface";

const endpoint = urlMapping.authentication.signin;

const PostData = async (
  data: RegistrationData
): Promise<RegistrationResponseData | ResponseError> => {
  try {
    const response: AxiosResponse<RegistrationResponseData> =
      await apiClient.post<RegistrationResponseData>(endpoint, data);

    return response.data;
  } catch (error: any) {
    return handleApiErrorResponse(error);
  }
};

export { PostData };
