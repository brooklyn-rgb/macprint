import { cookies } from 'next/headers';

export const getCookie = async (name: string) => (await cookies()).get(name)?.value;
export const setCookie = async (name: string, value: string, options = {}) =>
  (await cookies()).set(name, value, { path: '/', ...options });
export const deleteCookie = async (name: string) => (await cookies()).delete(name);
