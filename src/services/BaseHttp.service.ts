import type { IErrorResponse } from "@/types";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

export default class BaseHttpService {
  private baseUrl =
    import.meta.env.VITEAPI_BASE_URL || "http://localhost:3000/api";

  private commonOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  private api: AxiosInstance;
  constructor(baseUrl = this.baseUrl) {
    this.baseUrl = baseUrl;
    this.api = axios.create({
      baseURL: this.baseUrl,
      headers: {
        ...this.commonOptions.headers,
      },
    });
  }

  async get<T>(endpoint: string, options = {}): Promise<T> {
    options = this.mergeOptions(options);
    return this.executeRequest(this.api.get(endpoint, options));
  }

  async post<T>(endpoint: string, data = {}, options = {}): Promise<T> {
    options = this.mergeOptions(options);
    return this.executeRequest(this.api.post(endpoint, data, options));
  }

  async put<T>(endpoint: string, data = {}, options = {}): Promise<T> {
    options = this.mergeOptions(options);
    return this.executeRequest(this.api.put(endpoint, data, options));
  }

  async delete<T>(endpoint: string, options = {}): Promise<T> {
    options = this.mergeOptions(options);
    return this.executeRequest(this.api.delete(endpoint, options));
  }

  async patch<T>(endpoint: string, data = {}, options = {}): Promise<T> {
    options = this.mergeOptions(options);
    return this.executeRequest(this.api.patch(endpoint, data, options));
  }

  private mergeOptions(options: AxiosRequestConfig = {}): AxiosRequestConfig {
    return {
      headers: { ...this.commonOptions.headers, ...options.headers },
      ...options,
    };
  }

  private async executeRequest<T>(
    request: Promise<AxiosResponse<T>>
  ): Promise<T> {
    try {
      const response = await request;
      return this.handleHttpResponse(response);
    } catch (error) {
      this.handleHttpError(error);
    }
  }

  private handleHttpResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  private handleHttpError(error: unknown): never {
    if (axios.isAxiosError(error) && error.response?.data) {
      throw error.response.data as IErrorResponse;
    }
    throw {
      message: "Network error or server is unreachable",
      status: 500,
    };
  }
}
