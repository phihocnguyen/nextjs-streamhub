import { ModeToggle } from "@/components/toggle-darkmode";
import Content from "@/components/ui/main/content/content";
import LeftSideBar from "@/components/ui/main/leftBar/left-sidebar";
import Header from "@/components/ui/main/header/header";
import RightSideBar from "@/components/ui/main/rightBar/right-bar";

export default function Home() {
  
  return (
    <main className="">
      <div className="">
        <div className="fixed top-0 w-full z-20">
          <Header/>
        </div>
        <ModeToggle/>
        <div className="flex top-4 left-0 relative">
          <div className="w-1/4 fixed top-16">
            <LeftSideBar/>
          </div>
          <div className="w-2/4 mx-4 mt-8 absolute left-[50%] translate-x-[-50%] z-10">
            <Content/>
          </div>
          <div className="w-1/4 fixed top-16 right-[-16px] z-30">
            <RightSideBar/>
          </div>
        </div>
      </div>
    </main>
  );
}
