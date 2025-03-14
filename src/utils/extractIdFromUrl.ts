export function extractIdFromUrl(url: string | undefined | null) {
  if (!url) return null;
  const match = url.match(/\/help-desk\/([a-f0-9]{24})$/);
  return match ? match[1] : null;
}
