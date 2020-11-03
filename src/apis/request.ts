import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Canceler,
  AxiosError,
} from 'axios';
import httpStaus from '../constants/httpStatus';

const { CancelToken } = axios;

interface PromiseWithCancel<R> extends Promise<R> {
  cancel?: () => void;
}

export default class Request {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'appConfig.BASE_API_URL',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  setToken = (token: string) => {
    this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  get = <T = any, R = AxiosResponse<T>>(
    url: string,
    config: AxiosRequestConfig = {},
  ): PromiseWithCancel<R> => {
    let cancel: Canceler;
    const apiConfig = {
      params: {
        ...config.params,
      },
      ...config,
      cancelToken: new CancelToken((c: any) => {
        cancel = c;
      }),
    };
    const request: PromiseWithCancel<R> = this.api
      .get(url, apiConfig)
      .then(mapData)
      .catch(mapError);
    request.cancel = () => cancel();
    return request;
  };

  post = <T = any, R = AxiosResponse<T>>(
    url: string,
    body?: any,
    config: AxiosRequestConfig = {},
  ) => {
    let cancel: Canceler;
    const apiConfig = {
      params: {
        ...config.params,
      },
      ...config,
      cancelToken: new CancelToken((c: any) => {
        cancel = c;
      }),
    };
    const request: PromiseWithCancel<R> = this.api
      .post(url, body, apiConfig)
      .then(mapData)
      .catch(mapError);
    request.cancel = () => cancel();
    return request;
  };

  put = <T = any, R = AxiosResponse<T>>(
    url: string,
    body?: any,
    config: AxiosRequestConfig = {},
  ) => {
    let cancel: Canceler;
    const apiConfig = {
      params: {
        ...config.params,
      },
      ...config,
      cancelToken: new CancelToken((c: any) => {
        cancel = c;
      }),
    };
    const request: PromiseWithCancel<R> = this.api
      .put(url, body, apiConfig)
      .then(mapData)
      .catch(mapError);
    request.cancel = () => cancel();
    return request;
  };

  patch = <T = any, R = AxiosResponse<T>>(
    url: string,
    body?: any,
    config: AxiosRequestConfig = {},
  ) => {
    let cancel: Canceler;
    const apiConfig = {
      params: {
        ...config.params,
      },
      ...config,
      cancelToken: new CancelToken((c: any) => {
        cancel = c;
      }),
    };
    const request: PromiseWithCancel<R> = this.api
      .patch(url, body, apiConfig)
      .then(mapData)
      .catch(mapError);
    request.cancel = () => cancel();
    return request;
  };

  delete = <T = any, R = AxiosResponse<T>>(
    url: string,
    config: AxiosRequestConfig = {},
  ): PromiseWithCancel<R> => {
    let cancel: Canceler;
    const apiConfig = {
      params: {
        ...config.params,
      },
      ...config,
      cancelToken: new CancelToken((c: any) => {
        cancel = c;
      }),
    };
    const request: PromiseWithCancel<R> = this.api
      .delete(url, apiConfig)
      .then(mapData)
      .catch(mapError);
    request.cancel = () => cancel();
    return request;
  };
}
export function mapData(res: AxiosResponse<any>) {
  return res.data.data;
}
export function mapError(err: AxiosError<any>) {
  if (
    err &&
    err.response &&
    err.response.status === httpStaus.StatusUnauthorized
  ) {
    localStorage.clear();
  } else if (err && err.response) {
  }
  throw err;
}
