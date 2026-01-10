import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Cache messages to avoid re-importing on every request
// Messages type from next-intl is complex nested structure, using unknown for flexibility
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const messageCache = new Map<string, any>();

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // Use cached messages if available
  if (!messageCache.has(locale)) {
    const messages = (await import(`../../messages/${locale}.json`)).default;
    messageCache.set(locale, messages);
  }

  return {
    locale,
    messages: messageCache.get(locale),
  };
});
