import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";


export default function RootLayout({ children }) {
  return (
    <div>
      <Header/>
      <div className="w-full max-w-[1360px] relative ">
        {children}
      </div>
      <Footer/>
    </div>
  );
}
