export const redirectToExample = () => {
  const redirectPath = '/example';
  if (typeof window !== 'undefined') window.location.href = redirectPath;

  return redirectPath;
};
