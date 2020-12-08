export function checkNotNil<T>(
  value: T,
  message: string = 'Value can not be nil'
) {
  if (value === null || value === undefined) {
    throw new Error(message);
  }
  return value;
}

export default {
  checkNotNil,
};
