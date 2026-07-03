import { loanClient } from "../client/loan-client";

export const getLoanProducts = async () => {
  try {
    const response = await loanClient.get(`/loan-products`);
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const getLoanProduct = async (id) => {
  try {
    const response = await loanClient.get(`/loan-products/${id}`);
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
};
