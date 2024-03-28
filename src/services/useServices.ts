import { httpClient } from "@/utils/http";
import { CompanyData, UserData } from "@/types";
import { AxiosResponse } from "axios";

export function useServices() {
  return {
    company: {
      getCompany: () => httpClient.get<any, AxiosResponse<CompanyData>>("/org_management/get_org_data"),
      updateCompany: (body: any) =>
        httpClient.put<any, AxiosResponse<CompanyData>>("/org_management/update_profile", body),
    },
    user: {
      getUserList: () => httpClient.get<any, AxiosResponse<UserData[]>>("/user_management/list_users"),
    },
  };
}
