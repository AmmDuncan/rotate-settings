import { httpClient } from "@/utils/http";
import { CompanyData, UserData } from "@/types";
import { AxiosResponse } from "axios";

/**
 * Returns an object containing methods to interact with company and user services.
 *
 * @returns An object with methods to interact with company and user services
 */
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
