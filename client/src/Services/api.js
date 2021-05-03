const url = "http://localhost:9000";

export const login = {
  LOGIN: `${url}/login`,
};

export const adminAPI = {
  USER: `${url}/users/`,
  COUNTRY: `${url}/pays/`,
  PROFILE: `${url}/profils/`,
  DOMAIN: `${url}/domaines/`,
  ORGANIZATION: `${url}/organismes/`,
};

export const userAPI = {
  FORMATION: `${url}/formations/`,
  FORMATEUR: `${url}/formateurs/`,
  SESSION: `${url}/sessions/`,
  PARTICIPANT: `${url}/participants/`,
  ORGANIZATION: `${url}/organismes/`,
};
