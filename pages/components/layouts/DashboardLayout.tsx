import Head from "next/head";
import SideNav from "../dashboard/sidenav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta name="description" content="Dashboard with facts about the world of Harry Potter" />
        <title>Mundo Hogwarts</title>
      </Head>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </>
  );
}