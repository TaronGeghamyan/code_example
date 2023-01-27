import { useCallback, useRef } from 'react';

export interface UseGetLatest<T> {
  (): () => T;
}

export function useGetLatest<T>(value: T): ReturnType<UseGetLatest<T>> {
  const ref = useRef(value);
  ref.current = value;
  return useCallback(() => ref.current, []);
}
