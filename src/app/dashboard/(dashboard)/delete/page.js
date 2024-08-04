import AdminDelete from "./adminDelete";
import CategoryDelete from "./categoryDelete";
import Comment from "./comment";
import Contact from "./contactDelete";
import MessDelete from "./messDelete";
import NewsDelete from "./newsDelete";
import UserDelete from "./userDelete";


export default function page() {
  return (
    <div className="flex flex-col gap-6">
        <AdminDelete/>
        <UserDelete/>
        <NewsDelete/>
        <CategoryDelete/>
        <MessDelete/>
        <Contact/>
        <Comment/>
    </div>
  )
}
