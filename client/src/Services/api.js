const url = "http://localhost:9000";

export const login = {
  LOGIN: `${url}/login/`,
  SIGN: `${url}/signup/`,
};

export const adminAPI = {
  USER: `${url}/users/`,
  COUNTRY: `${url}/pays/`,
  PROFILE: `${url}/profils/`,
  DOMAIN: `${url}/domaines/`,
  FORMATION: `${url}/formations/`,
  FORMATEUR: `${url}/formateurs/`,
  ORGANIZATION: `${url}/organismes/`,
  SESSION: `${url}/sessions/`,
};

export const userAPI = {
  SESSION: `${url}/sessions/`,
  PARTICIPANT: `${url}/participants/`,
  COUNTRY: `${url}/pays/`,
  PROFILE: `${url}/profils/`,
};
