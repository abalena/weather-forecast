import { handleError } from "./handle-error";

export type TAsyncHookCallWrapperFn = (
  executeFn: () => Promise<void>,
  loadingSetter: (isLoading: boolean) => void,
  errorSetter?: (errorMessage?: string) => void
) => () => Promise<void>;

export const asyncHookCallWrapper: TAsyncHookCallWrapperFn = (
  executeFn,
  loadingSetter,
  errorSetter
) => {
  return async () => {
    loadingSetter(true);
    errorSetter?.(undefined);
    try {
      await executeFn();
    } catch (e: unknown) {
      const errorMsg = handleError(e);
      errorSetter?.(errorMsg);
    } finally {
      loadingSetter(false);
    }
  };
};
