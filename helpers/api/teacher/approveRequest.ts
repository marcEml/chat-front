import apiClient from "../apiClient";
import { AxiosResponse } from "axios";
import urlMapping from "@/helpers/urls/urlMapping";
import { handleApiErrorResponse } from "../errorHandler";
import { ResponseError, ApproveResponseData, ApproveData } from "../../apiInterface";

const endpoint = urlMapping.teacher.approve;

const ApproveRequest = async (data: ApproveData): Promise<ApproveResponseData | ResponseError> => {
  try {
    const response: AxiosResponse<ApproveResponseData> = await apiClient.post<ApproveResponseData>(
      endpoint,
      data
    );

    return response.data;
  } catch (error: any) {
    return handleApiErrorResponse(error);
  }
};

export default ApproveRequest;
