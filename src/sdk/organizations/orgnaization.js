import { loanClient } from "../client/loan-client";

export const addOrganization = async (
  org_code,
  org_name,
  org_type,
  description,
  registration_number,
  license_number,
  registration_date,
  email,
  phone,
  address,
  city,
  county,
  country,
  primary_currency,
  timezone,
) => {
  try {
    const response = await loanClient.post(`/organisations`, {
      org_code,
      org_name,
      org_type,
      description,
      registration_number,
      license_number,
      registration_date,
      email,
      phone,
      address,
      city,
      county,
      country,
      primary_currency,
      timezone,
    });
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const getOrganizations = async () => {
  try {
    const response = await loanClient.get(
      `/organisations?includeInactive=true`,
    );
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};
