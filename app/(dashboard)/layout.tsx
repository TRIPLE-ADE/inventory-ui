import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-background font-sans">
      <Sidebar />
      <div className="w-[calc(100%-256px)] ml-auto">
        <Topbar />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
