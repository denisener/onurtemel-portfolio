// ============================================================
// Veri Çekme Katmanı
// Laravel API'den veri çeker, bağlantı yoksa fallback kullanır
// ============================================================

import {
  fallbackProjects,
  fallbackPersonalInfo,
  fallbackServices,
  fallbackTestimonials,
  fallbackSkills,
  fallbackEducation,
  fallbackExperience,
  fallbackBlogPosts,
  fallbackSiteSettings,
} from "./fallbackData";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

/**
 * Laravel API'den veri çekmeyi dener, başarısız olursa fallback döndürür.
 * next: { revalidate: 60 } → ISR ile her 60 saniyede yeniden doğrulama
 */
async function fetchFromAPI(endpoint, fallback) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      console.warn(`API hata (${res.status}): ${endpoint}, fallback kullanılıyor`);
      return fallback;
    }
    const data = await res.json();
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return fallback;
    }
    return data;
  } catch (error) {
    console.warn("API bağlantı hatası, fallback kullanılıyor:", error.message);
    return fallback;
  }
}

/**
 * Laravel API'den gelen proje verisini frontend formatına dönüştürür
 */
function transformProject(p) {
  if (!p) return null;
  return {
    ...p,
    _id: String(p.id),
    slug: { current: p.slug },
    coverImage: p.cover_image,
    projectType: p.project_type,
  };
}

// ── PROJELER ──

export async function getAllProjects() {
  const data = await fetchFromAPI("/projects", fallbackProjects);
  return Array.isArray(data) ? data.map(transformProject) : fallbackProjects;
}

export async function getFeaturedProjects() {
  const fallback = fallbackProjects.filter((p) => p.featured);
  const data = await fetchFromAPI("/projects/featured", fallback);
  return Array.isArray(data) ? data.map(transformProject) : fallback;
}

export async function getProjectBySlug(slug) {
  const fallback = fallbackProjects.find(
    (p) => p.slug?.current === slug || p.slug === slug
  );
  const data = await fetchFromAPI(`/projects/${slug}`, fallback);
  return data ? transformProject(data) : fallback ? transformProject(fallback) : null;
}

// ── KİŞİSEL BİLGİLER ──

export async function getPersonalInfo() {
  const data = await fetchFromAPI("/personal-info", fallbackPersonalInfo);
  if (!data) return fallbackPersonalInfo;
  return {
    ...data,
    profileImage: data.profile_image,
    availableForWork: data.available_for_work,
    aboutTitle: data.about_title,
    titleFontSize: data.title_font_size,
  };
}

// ── SERVİSLER ──

export async function getServices() {
  return fetchFromAPI("/services", fallbackServices);
}

// ── BLOG ──

export async function getBlogPosts() {
  const data = await fetchFromAPI("/blog-posts", fallbackBlogPosts);
  if (!Array.isArray(data)) return fallbackBlogPosts;
  return data.map((p) => ({
    ...p,
    _id: String(p.id),
    slug: { current: p.slug },
    coverImage: p.cover_image,
    publishedAt: p.published_at,
  }));
}

export async function getBlogPostBySlug(slug) {
  const fallback = fallbackBlogPosts.find(
    (p) => p.slug?.current === slug || p.slug === slug
  );
  const data = await fetchFromAPI(`/blog-posts/${slug}`, fallback);
  if (!data) return fallback;
  return {
    ...data,
    _id: String(data.id),
    slug: { current: data.slug },
    coverImage: data.cover_image,
    publishedAt: data.published_at,
  };
}

// ── BECERİLER ──

export async function getSkills() {
  const data = await fetchFromAPI("/skills", fallbackSkills);
  if (!Array.isArray(data)) return fallbackSkills;
  return data.map((s) => ({
    ...s,
    _id: String(s.id),
    skillType: s.skill_type,
  }));
}

// ── EĞİTİM ──

export async function getEducation() {
  const data = await fetchFromAPI("/education", fallbackEducation);
  if (!Array.isArray(data)) return fallbackEducation;
  return data.map((e) => ({ ...e, _id: String(e.id) }));
}

// ── DENEYİM ──

export async function getExperience() {
  const data = await fetchFromAPI("/experiences", fallbackExperience);
  if (!Array.isArray(data)) return fallbackExperience;
  return data.map((e) => ({ ...e, _id: String(e.id) }));
}

// ── TESTİMONİAL ──

export async function getTestimonials() {
  const data = await fetchFromAPI("/testimonials", fallbackTestimonials);
  if (!Array.isArray(data)) return fallbackTestimonials;
  return data.map((t) => ({ ...t, _id: String(t.id) }));
}

// ── SİTE AYARLARI ──

export async function getSiteSettings() {
  const data = await fetchFromAPI("/site-settings", fallbackSiteSettings);
  if (!data) return fallbackSiteSettings;
  return {
    ...data,
    siteTitle: data.site_title,
    siteDescription: data.site_description,
    socialLinks: data.social_links,
    footerText: data.footer_text,
    marqueeTexts: data.marquee_texts,
    showStats: data.show_stats ?? true,
    showBlog: data.show_blog ?? true,
    showTestimonials: data.show_testimonials ?? true,
    showMarquee: data.show_marquee ?? true,
    contactEmail: data.contact_email,
  };
}
