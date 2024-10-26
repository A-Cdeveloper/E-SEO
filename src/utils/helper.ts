export const removeHttps = (url: string | null | undefined) => {
  if (!url) return;

  let finalStr = url.replace("https://", "").replace("http://", "");

  if (finalStr.endsWith("/")) {
    finalStr = finalStr.slice(0, -1);
  }

  return finalStr;
};
