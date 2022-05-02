// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from "axios";

declare module "axios" {
  interface AxiosInstance {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (config: AxiosRequestConfig): Promise<any>;
  }
}
