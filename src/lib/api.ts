/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/api.ts
import qs from "qs";

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";

export async function fetchFromStrapi<T>(
  endpoint: string,
  options: RequestInit = {},
  queryParams?: Record<string, any>
): Promise<T> {
  let query = "";

  if (queryParams) {
    query = `?${qs.stringify(queryParams, { encodeValuesOnly: true })}`;
  }
  console.log("Bad URL:", `${STRAPI_URL}/api/${endpoint}${query}`);

  const res = await fetch(`${STRAPI_URL}/api/${endpoint}${query}`, {
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    ...options,
  });

  if (!res.ok) {
    console.log("Bad URL:", `${STRAPI_URL}/api/${endpoint}${query}`);
    throw new Error(`Strapi fetch failed: ${res.statusText}`);
  }

  return res.json();
}
