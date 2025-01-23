export interface IAsyncLoadingHook<T> {
  data: T;
  isLoading: boolean;
  error?: string;
}
