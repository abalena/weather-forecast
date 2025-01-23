export type TAsyncHookCallWrapperFn = (
  executeFn: () => Promise<void>,
  loadingSetter: (isLoading: boolean) => void
) => () => Promise<void>;

export const asyncHookCallWrapper: TAsyncHookCallWrapperFn = (
  executeFn,
  loadingSetter
) => {
  return async () => {
    loadingSetter(true);
    try {
      await executeFn();
    } catch (e: unknown) {
      console.error(e); //TODO:add error handler
    } finally {
      loadingSetter(false);
    }
  };
};
