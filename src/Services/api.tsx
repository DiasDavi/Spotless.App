import axios from "axios";
import { Adress, ServiceProvider, User } from "../Types";

const baseURL = "http://localhost";
const basePort = "5264";

/* ###################################### */
/* ################ USER ################ */
/* ###################################### */

export async function getUser() {
  try {
    const response = axios.get(`/api/Users`, {
      baseURL: `${baseURL}:${basePort}`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserByID(id: number) {
  try {
    const response = axios.get(`/api/Users/${id}`, {
      baseURL: `${baseURL}:${basePort}`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function postUser(data: User) {
  try {
    const response = axios.post(`/api/Users`, data, {
      baseURL: `${baseURL}:${basePort}`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function putUser(data: User) {
  try {
    const response = axios.put(`/api/Users`, data, {
      baseURL: `${baseURL}:${basePort}`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteUser(id: number) {
  try {
    const response = axios.delete(`/api/Users/${id}`, {
      baseURL: `${baseURL}:${basePort}`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

/* ###################################### */
/* ###################################### */
/* ###################################### */

/* ###################################### */
/* ######### SERVICE PROVIDER ########### */
/* ###################################### */

export async function getServiceProvider() {
  try {
    const response = axios.get(`/api/ServiceProviders`, {
      baseURL: `${baseURL}:${basePort}`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getServiceProviderByID(id: number) {
  try {
    const response = axios.get(`/api/ServiceProviders/${id}`, {
      baseURL: `${baseURL}:${basePort}`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function postServiceProvider(data: ServiceProvider) {
  try {
    const response = axios.post(`/api/ServiceProviders`, data, {
      baseURL: `${baseURL}:${basePort}`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function putServiceProvider(data: ServiceProvider) {
  try {
    const response = axios.put(`/api/ServiceProviders`, data, {
      baseURL: `${baseURL}:${basePort}`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteServiceProvider(id: number) {
  try {
    const response = axios.delete(`/api/ServiceProviders/${id}`, {
      baseURL: `${baseURL}:${basePort}`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

/* ###################################### */
/* ###################################### */
/* ###################################### */

/* ###################################### */
/* ############## ADDRESS ############### */
/* ###################################### */

export async function getAddress() {
  try {
    const response = axios.get(`/api/Addresses`, {
      baseURL: `${baseURL}:${basePort}`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getAddressByID(id: number) {
  try {
    const response = axios.get(`/api/Addresses/${id}`, {
      baseURL: `${baseURL}:${basePort}`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function postAddress(data: Adress) {
  try {
    const response = axios.post(`/api/Addresses`, data, {
      baseURL: `${baseURL}:${basePort}`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function putAddress(data: Adress) {
  try {
    const response = axios.put(`/api/Addresses`, data, {
      baseURL: `${baseURL}:${basePort}`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteAddress(id: number) {
  try {
    const response = axios.delete(`/api/Addresses/${id}`, {
      baseURL: `${baseURL}:${basePort}`,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

/* ###################################### */
/* ###################################### */
/* ###################################### */
