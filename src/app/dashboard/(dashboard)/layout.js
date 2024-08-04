import CheckAdmin from "./_components/checkAdmin";
import Navbar from "./_components/header/navbar";
import Sitbar from "./_components/header/sitbar";



export default function RootLayout({ children }) {
  return (
    <div className="bg-gray-200 min-h-screen">
      <CheckAdmin/>
      <Navbar/>
      <Sitbar/>
      <div className=" w-full min-h-screen p-4 pt-[80px] pr-[220px] max-sm:pr-4 max-sm:px-4">
        {children}
      </div>
    </div>
  );
}
