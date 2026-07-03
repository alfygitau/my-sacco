import { loanClient } from "../client/loan-client";

export const addOrganization = async (
  org_code,
  org_name,
  org_type,
  description,
  logo_url,
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
      logo_url,
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

export const editOrganization = async (
  id,
  org_code,
  org_name,
  org_type,
  description,
  logo_url,
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
    const response = await loanClient.patch(`/organisations/${id}`, {
      org_code,
      org_name,
      org_type,
      description,
      logo_url,
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

export const getOrganization = async (id) => {
  try {
    const response = await loanClient.get(`/organisations/${id}`);
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};
