import React from 'react';
import { ApiService } from './api';
import { Helpers } from './api/helpers';
export const services = {
  api: new ApiService(),
  helpers: new Helpers(),
};

const servicesContext = React.createContext(services);
export const useServices = () => React.useContext(servicesContext);
