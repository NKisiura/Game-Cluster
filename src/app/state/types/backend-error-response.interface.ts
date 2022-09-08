export interface BackendErrorResponseInterface {
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: { [key: string]: string } | string;
}
