import axios from "axios";

const handle = (promise: Promise<any>) => {
  return promise.then((data) => [data, undefined])
    .catch((error) => Promise.resolve([undefined, error]));
};

/**
 * @param {string[]} slices
 * @returns {string}
 */
const createFinalUrl = (...slices: string[]) => slices.filter(Boolean).join("");
export class ServiceApi {
  private base_url: string;
  constructor(endpoint: string) {
    this.base_url = endpoint;
  }

  async get(service: string, options = {}, params?: any, headers?: any) {
    const url = createFinalUrl(this.base_url, service);
    const [success, error] = await handle(
      axios.get(url, { params, headers, ...options }),
    );
    return { success, error };
  }

  async post(body, params, headers, service: string, options = {}) {
    const url = createFinalUrl(this.base_url, service);
    const [success, error] = await handle(
      axios.post(url, body, { params, headers, ...options }),
    );
    return { success, error };
  }

  async put(body, params, headers, service, options = {}) {
    const url = createFinalUrl(this.base_url, service);

    const [success, error] = await handle(
      axios.put(url, body, { params, headers, ...options }),
    );
    return { success, error };
  }

  async patch(body, params, headers, service, options = {}) {
    const url = createFinalUrl(this.base_url, service);

    const [success, error] = await handle(
      axios.patch(url, body, { params, headers, ...options }),
    );
    return { success, error };
  }

  async delete(params, headers, service, options = {}) {
    const url = createFinalUrl(this.base_url, service);
    const [success, error] = await handle(
      axios.delete(url, { params, headers, ...options }),
    );
    return { success, error };
  }
}
