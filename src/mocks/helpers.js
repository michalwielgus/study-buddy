export const authenticateRequest = (userToken) => {
  const token = localStorage.getItem('__be_token__') || null;
  return token === userToken;
};
