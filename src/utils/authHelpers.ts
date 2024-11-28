export const setAuthToken = (token: string) => {
  document.cookie = `token=${token}; path=/; Secure; HttpOnly; SameSite=Strict`;
};

export const getAuthToken = (): string | null => {
  const match = document.cookie.match(/(^|;) ?token=([^;]*)(;|$)/);
  return match ? match[2] : null;
};

export const removeAuthToken = () => {
  document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
};