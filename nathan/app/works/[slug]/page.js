import FitParentTitle from "@/components/FitParentTitle";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectVideos from "@/components/ProjectVideos";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { getAllProjects, getProjectBySlug } from "@/lib/api";
import { getImageUrl } from "@/lib/helpers";

// ISR — proje detay sayfaları statik oluşturulur, 60 sn cache
export const revalidate = 60;

// Statik parametreleri oluştur
export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug?.current || project.slug || "unknown",
  }));
}

// Dinamik meta taglar (SEO)
export async function generateMetadata({ params }) {
  const project = await getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Proje Bulunamadı" };
  }
  return {
    title: `${project.title} — Portfolio`,
    description: project.overview || `${project.title} - ${project.category}`,
  };
}

const ProjectDetailPage = async ({ params }) => {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return (
      <NathanLayout>
        <div className="section-dark no-bottom no-top" id="content">
          <div id="top" />
          <section className="py-5 text-center">
            <h2>Proje bulunamadı</h2>
            <p>Bu slug ile eşleşen proje yok: {params.slug}</p>
          </section>
        </div>
      </NathanLayout>
    );
  }

  const isPhoto =
    project.projectType === "photo" || project.projectType === "mixed";
  const isVideo =
    project.projectType === "video" || project.projectType === "mixed";
  const isMixed = project.projectType === "mixed";

  return (
    <NathanLayout>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />

        {/* Başlık */}
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle
              title={project.title?.toUpperCase() || "PROJECT"}
              innitialFontSize={498.2}
            />
            <Header activePage="works" />
          </div>
        </section>

        {/* Proje Detayları */}
        <section className="no-top">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-2">
                <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                  Project Details
                </div>
              </div>
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-12">
                    {/* Özet ve Hedefler */}
                    <div
                      className="row g-4 gx-5 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="col-sm-6">
                        <h4>Overview</h4>
                        <p className="no-bottom">
                          {project.overview || "Proje detayı henüz eklenmemiş."}
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <h4>Objectives</h4>
                        <ul className="ul-style-2">
                          {(project.objectives || []).map((obj, i) => (
                            <li key={i}>{obj}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="spacer-double" />

                    {/* Meta Bilgiler */}
                    <div
                      className="row g-4 gx-5 wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <div className="col-lg-3 col-sm-2">
                        <h6>Category</h6>
                        {project.category || "-"}
                      </div>
                      <div className="col-lg-3 col-sm-2">
                        <h6>Awards</h6>
                        {project.awards || "-"}
                      </div>
                      <div className="col-lg-3 col-sm-2">
                        <h6>Client</h6>
                        {project.client || project.title}
                      </div>
                      <div className="col-lg-3 col-sm-2">
                        <h6>Year</h6>
                        {project.year || "-"}
                      </div>
                    </div>

                    {/* Proje Tipi Badge */}
                    <div className="spacer-single" />
                    <div className="wow fadeInUp" data-wow-delay=".6s">
                      <span
                        style={{
                          display: "inline-block",
                          padding: "6px 16px",
                          borderRadius: "20px",
                          fontSize: "14px",
                          fontWeight: "600",
                          background:
                            project.projectType === "video"
                              ? "rgba(255, 0, 0, 0.15)"
                              : project.projectType === "mixed"
                              ? "rgba(255, 165, 0, 0.15)"
                              : "rgba(0, 150, 255, 0.15)",
                          color:
                            project.projectType === "video"
                              ? "#ff4444"
                              : project.projectType === "mixed"
                              ? "#ff9900"
                              : "#0096ff",
                        }}
                      >
                        {project.projectType === "video"
                          ? "🎬 Video Projesi"
                          : project.projectType === "mixed"
                          ? "📷🎬 Karma Proje"
                          : "📷 Fotoğraf Projesi"}
                      </span>
                    </div>

                    <div className="spacer-double" />

                    {/* ── Karma Proje: Tab Yapısı ── */}
                    {isMixed && <MixedProjectTabs project={project} />}

                    {/* ── Sadece Fotoğraf ── */}
                    {isPhoto && !isMixed && (
                      <ProjectGallery gallery={project.gallery} />
                    )}

                    {/* ── Sadece Video ── */}
                    {isVideo && !isMixed && (
                      <ProjectVideos videos={project.videos} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Müşteri Yorumu */}
        {project.testimonial?.quote && (
          <section className="no-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-2">
                  <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                    Client Says
                  </div>
                </div>
                <div className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">
                  <h2 className="lh-1">{project.testimonial.quote}</h2>
                  <p>
                    {project.testimonial.name}
                    {project.testimonial.role
                      ? `, ${project.testimonial.role}`
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </NathanLayout>
  );
};

// Karma proje (mixed) için tab bileşeni
const MixedProjectTabs = ({ project }) => {
  return <MixedTabsClient project={project} />;
};

export default ProjectDetailPage;

// Client component: tab geçişi
import MixedTabsClient from "@/components/MixedTabsClient";
