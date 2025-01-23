// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleError = (e: any) => {
  console.error(e.message);

  if (e instanceof Error) {
    return `Error: ${e.message}`;
  }

  if (typeof e === "string") {
    return `Error: ${e}`;
  }

  return "An unknown error occurred.";
};
