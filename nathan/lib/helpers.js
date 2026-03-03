// ============================================================
// Yardımcı Fonksiyonlar
// Medya yolları ve YouTube URL dönüşümleri
// ============================================================

/**
 * Resimler kendi sunucudan sunuluyor (public/ altından).
 * Bu fonksiyon path'ini doğru formata çevirir.
 */
export const getImageUrl = (path) => {
  if (!path) return "/images/misc/placeholder.webp";
  // Zaten tam URL ise dokunma
  if (path.startsWith("http")) return path;
  // Başında / yoksa ekle
  return path.startsWith("/") ? path : `/${path}`;
};

/**
 * YouTube URL'sinden embed URL'sine çevir
 * Desteklenen formatlar:
 *   https://www.youtube.com/watch?v=VIDEO_ID
 *   https://youtu.be/VIDEO_ID
 *   https://www.youtube.com/embed/VIDEO_ID
 */
export const getYouTubeEmbedUrl = (url) => {
  if (!url) return null;
  if (url.includes("/embed/")) return url;

  let videoId = null;
  const watchMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtube\.com\/watch\?.+&v=)([^&]+)/
  );
  if (watchMatch) videoId = watchMatch[1];

  if (!videoId) {
    const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
    if (shortMatch) videoId = shortMatch[1];
  }

  if (videoId) return `https://www.youtube.com/embed/${videoId}`;
  return url;
};

/**
 * YouTube URL'sinden thumbnail URL'si çıkar
 */
export const getYouTubeThumbnail = (url) => {
  if (!url) return null;

  let videoId = null;
  const watchMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtube\.com\/watch\?.+&v=)([^&]+)/
  );
  if (watchMatch) videoId = watchMatch[1];

  if (!videoId) {
    const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
    if (shortMatch) videoId = shortMatch[1];
  }

  if (!videoId) {
    const embedMatch = url.match(/youtube\.com\/embed\/([^?&]+)/);
    if (embedMatch) videoId = embedMatch[1];
  }

  if (videoId) return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  return null;
};
