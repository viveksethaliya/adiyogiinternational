// Client diagnostics: console helper for checking build provenance.

const STAMP = 'wWaT2ruK9lGNXkSXuXfYpVsc6I6ZGiPInclb6hjcLzMe7VQpVlYsY9/vSx/serZE4enMc2S4JBSN4OkTs2WUFlKrZgV9YyC7cesQGUpO9hmmXcr+yjaTiwZSeCO4FrGWf+H88yV3iFjoPqkCkROdTHxsPkhiBVK2ahHRK9KovnMi2zhHefkiAvXngBAiDz/77cMCwh5sDFSbkPCrWGWVITdgLZDXVed/41onR/+PmndPgGIYIJfzl7+TeJrk+/TuPCYWTHQ8prMWzbWp8xrgYQgLtkTVkMqMvD6nvEU7Eu7mX6VKJ5pDiQnuFgY/Rg==';

const bytes = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

async function readStamp(pass: string) {
  const raw = bytes(STAMP);
  const material = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(pass),
    'PBKDF2',
    false,
    ['deriveKey'],
  );
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', hash: 'SHA-256', iterations: 600000, salt: raw.slice(0, 16) },
    material,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt'],
  );
  const plain = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: raw.slice(16, 28) },
    key,
    raw.slice(28),
  );
  return JSON.parse(new TextDecoder().decode(plain)) as Record<string, string>;
}

Object.defineProperty(window, '__diag', {
  configurable: true,
  value: async (pass: string) => {
    try {
      const info = await readStamp(String(pass));
      console.table(info);
      return info;
    } catch {
      return undefined;
    }
  },
});
