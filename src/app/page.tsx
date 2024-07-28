import { ModeToggle } from "@/components/toggle-darkmode";
import Content from "@/components/ui/main/content/content";
import LeftSideBar from "@/components/ui/main/leftBar/left-sidebar";
import Header from "@/components/ui/main/header/header";
import RightSideBar from "@/components/ui/main/rightBar/right-bar";

export default function Home() {
  return (
    <main className="p-6 bg-[#f3f3f3]">
      <div>
        <Header/>
        {/* <ModeToggle/> */}
        <div className="flex mt-4">
          <div className="w-1/4">
            <LeftSideBar/>
          </div>
          <div className="w-2/4 mx-6">
            <Content/>
          </div>
          <div className="w-1/4">
            <RightSideBar/>
          </div>
        </div>
      </div>
    </main>
  );
}
