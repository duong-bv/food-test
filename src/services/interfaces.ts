export interface OptionType {
  label: string;
  value: string;
}
export interface ApiResponse<T = any> {
  statusCode: number;
  message: string;
  status: string;
  timestamp: number;
  data?: T;
}

