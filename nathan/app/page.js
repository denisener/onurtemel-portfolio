import About from "@/components/About";
import AvailableForWork from "@/components/AvailableForWork";
import Blog from "@/components/Blog";
import FitParentTitle from "@/components/FitParentTitle";
import MarqueeNathan from "@/components/MarqueeNathan";
import Services from "@/components/Services";
import HomeWorks from "@/components/HomeWorks";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import {
  getFeaturedProjects,
  getPersonalInfo,
  getServices,
  getBlogPosts,
  getSiteSettings,
} from "@/lib/api";

export const revalidate = 60;

const page = async () => {
  const [featuredProjects, personalInfo, services, blogPosts, siteSettings] =
    await Promise.all([
      getFeaturedProjects(),
      getPersonalInfo(),
      getServices(),
      getBlogPosts(),
      getSiteSettings(),
    ]);

  const pageStyles = {
    "--primary-color": "#ffffff",
    "--primary-color-rgb": "255, 255, 255",
    "--secondary-color": "#ffffff",
    "--secondary-color-rgb": "255, 255, 255",
  };
  return (
    <NathanLayout rootElements={pageStyles}>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle
              title={personalInfo?.name || "NATHAN"}
              baseFontSize={personalInfo?.titleFontSize || null}
            />
            <Header activePage="1" showBlog={siteSettings?.showBlog} />
          </div>
          <div className="spacer-double" />
          <AvailableForWork personalInfo={personalInfo} showStats={siteSettings?.showStats} />
        </section>
        <About personalInfo={personalInfo} />
        <Services services={services} />
        <HomeWorks projects={featuredProjects} />
        {siteSettings?.showMarquee !== false && (
          <MarqueeNathan texts={siteSettings?.marqueeTexts} />
        )}
        {siteSettings?.showBlog !== false && (
          <Blog posts={blogPosts} />
        )}
      </div>
    </NathanLayout>
  );
};
export default page;
