import Loader from "@/components/loader/loader";


export default function Loading() {

    return (
        <div className="w-full h-screen absolute bg-gray-200/50 top-0 right-0 z-50 flex items-center justify-center">
            <Loader/>
        </div>
    )
  }