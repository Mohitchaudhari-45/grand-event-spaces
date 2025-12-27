import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingButtons />
      <BackToTop />
    </div>
  );
};

export default Layout;
