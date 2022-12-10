export function parseJsonToObject(str: string): object | undefined {
  try {
    const obj = JSON.parse(str);
    return obj;
  } catch (err) {
    return undefined;
  }
}

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}
