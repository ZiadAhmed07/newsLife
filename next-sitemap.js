
module.exports = {
    siteUrl: 'https://www.alwatanynews.com', // عنوان موقعك
    generateRobotsTxt: true, // لتوليد ملف robots.txt
    exclude: ['/dashboard/**'], // استثناء أي صفحات لا تريد تضمينها في خريطة الموقع
    transform: async (config, path) => {
      // تخصيص تحويل الصفحات بناءً على متطلباتك
      // يمكنك إضافة شروط لتعديل بيانات الخريطة بشكل ديناميكي
      return {
        loc: path, // عنوان URL للصفحة
        lastmod: new Date().toISOString(), // تاريخ آخر تعديل
        priority: 0.7, // الأولوية
      };
    },
  };
  