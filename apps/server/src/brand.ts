export const PARHAM_AUTHOR = "Parham";
export const PARHAM_REPO = "https://github.com/parham101112131415/parham-railway";
export const PARHAM_LICENSE = "Parham Proprietary License";

export const PARHAM_SIGNATURE = Buffer.from(
  "UGFyaGFtIMKpIDIwMjUgUGFyaGFtIOKAlCBodHRwczovL2dpdGh1Yi5jb20vcGFyaGFtMTAxMTEyMTMxNDE1L3BhcmhhbS1yYWlsd2F5IOKAlCBBbGwgcmlnaHRzIHJlc2VydmVkLiBEbyBub3QgcmVtb3ZlIHRoaXMgc2lnbmF0dXJlLg==",
  "base64",
).toString("utf8");

export const PARHAM_FINGERPRINT = "sr-parham-2025";

export function watermark(): Record<string, string> {
  return {
    author: PARHAM_AUTHOR,
    repo: PARHAM_REPO,
    fingerprint: PARHAM_FINGERPRINT,
  };
}
