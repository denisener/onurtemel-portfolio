import FitParentTitle from "@/components/FitParentTitle";
import WorksGrid from "@/components/WorksGrid";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { getAllProjects, getSiteSettings } from "@/lib/api";

export const revalidate = 60;

const page = async () => {
  const [projects, siteSettings] = await Promise.all([
    getAllProjects(),
    getSiteSettings(),
  ]);

  return (
    <NathanLayout>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle title="My Works" innitialFontSize={363} />
            <Header activePage="4" showBlog={siteSettings?.showBlog} />
          </div>
        </section>
        <section className="no-top">
          <WorksGrid projects={projects} />
        </section>
      </div>
    </NathanLayout>
  );
};

export default page;
