import Image from "next/image";
import Link from "next/link";
import whatsapp from "/public/image/WhatsApp Image 2024-07-17 at 9.46.57 PM.WebP";
import GNews from "/public/icon/icons8-google-news-94.png";

export default function page() {
    return (
        <div className="flex justify-between gap-10">
            <div className="max-lg:hidden">
                <p className="w-[160px] h-[600px] bg-gray-200 sticky top-0 flex items-center justify-center">
                    160*600
                </p>
            </div>

            <div className="my-10 flex w-full flex-col gap-6 p-6">
                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="font-bold text-lg p-2 border border-r-8 border-r-red-700">
                            رسالة البوابة
                        </h3>
                        <p className="py-4">
                            إيمانا بأهمية العمل الإعلامي والدور الذي يقوم به الإعلام في تغيير
                            المجتمع وتزامنا مع سعي الدولة المصرية لتطوير الوعي لدى الشعب، ونقل
                            صورة مصر الحقيقية لدى العالم من خلال إعلامها الخارجي، تأتي “
                            الوطني نيوز” لتنقل الحدث وتطور الوعي وتعكس صورة مصر ومكانتها
                            خارجيا. الوطني نيوز ليست بوابة إعلامية داخلية وإنما هي مؤسسة
                            إعلامية شاملة تعبر عن الدولة المصرية شعبا وحكومة في الداخل والخارج
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg p-2 border border-r-8 border-r-red-700">
                            رؤيتنا للبوابة
                        </h3>
                        <p className="py-4">
                            عملا بميثاق الشرف الإعلامي وإيمانا بالأمانة المهنية وتقديرا لحب
                            الوطن واعتزازا به، نعمل على تغطية كافة مناطق جمهورية مصر العربية
                            لنقل الحدث فور حدوثه بكل موضوعية ونزاهة ومهنية. كما نعمل على نقل
                            صورة مصر الحقيقية إلى العالم من خلال تغطية الأحداث الخارجية ونقل
                            إنجازات الدولة المصرية وتطورها من قلب الحدث. نسعى لأن نكون الإعلام
                            الخارجي لمصر فنحن نفتقر وجود إعلاما خارجيا حقيقيا.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg p-2 border border-r-8 border-r-red-700">
                            أهداف البوابة
                        </h3>
                        <div className="py-4 flex flex-col gap-1">
                            <p>_ نقل الحدث بموضوعية</p>
                            <p>_ نقل الحقيقة بكل شفافية</p>
                            <p>_ تطوير الوعي العام وتنمية ثقافة الجمهور</p>
                            <p>_ الحفاظ على الذوق العام وهوية المجتمع</p>
                            <p>_ دعم القيم والمبادئ الأخلاقية في الشارع المصري</p>
                            <p>_ احترام الأسرة المصرية وحقها في المعرفة</p>
                            <p>_ إعلاء مبادئ ميثاق الشرف الإعلامي</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Link
                        href={"https://whatsapp.com/channel/0029Va6KQauGpLHNwhiXp90e"}
                        target="_blank"
                    >
                        <Image src={whatsapp} alt="..." className="w-full h-[300px]" />
                    </Link>
                </div>
                <div>
                    <Link
                        href={
                            "https://news.google.com/s/CBIwgvK0gKYB?sceid=EG:ar&sceid=EG:ar&r=0&oc=1"
                        }
                        target="_blank"
                        className="flex gap-4 items-center w-full shadow-md p-2 rounded-md"
                    >
                        <Image src={GNews} alt="..." width={50} />
                        <p className="font-bold">
                            تابعوا آخر أخبار الوطنى نيوز عبر Google News
                        </p>
                    </Link>
                </div>
            </div>

            <div className="max-md:hidden">
                <p className="w-[160px] h-[600px] bg-gray-200 sticky top-0 flex items-center justify-center">
                    160*600
                </p>
            </div>
        </div>
    );
}
