export type CompanyData = {
  org_id: string;
  main_domain: string;
  unique_name: string;
  display_name: string;
  parent_org: unknown;
  organization_state: string;
  organization_type: string;
  onboarding_type: string;
  created_time: string;
  last_updated: string;
  _id: string;
  profile: {
    company_logo: string;
    contact_name: string;
    contact_email: string;
    industry: string;
  };
  information: {
    name: string;
    sector: null;
    employees: null;
    revenues: null;
  };
  children: unknown[];
  domains: string[];
  onboarding_data: {
    activeStep: number;
    complete: boolean;
    consented: boolean;
    form: unknown[];
  };
  lifecycle_events: unknown[];
};

export type UserData = {
  user_id: string;
  email: string;
  name: string;
  picture: string;
  email_verified: boolean;
  user_metadata: {
    role: number;
    org: string;
  };
  last_login: string;
  given_name: string | null;
  family_name: string | null;
  blocked: boolean;
};
