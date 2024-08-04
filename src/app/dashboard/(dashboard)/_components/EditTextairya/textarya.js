'use client'

import { useEffect, useRef } from 'react';
import 'quill/dist/quill.snow.css'; // استيراد أنماط Quill

const QuillEditor = ({ value, onChange }) => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !quillRef.current) return;

    import('quill').then(({ default: Quill }) => {
    if (!editorRef.current) {
      editorRef.current = new Quill(quillRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // عناوين
            [{ 'font': [] }, { 'size': [] }], // خط
            [{ 'list': 'ordered' }, { 'list': 'bullet' }], // قوائم
            [{ 'script': 'sub' }, { 'script': 'super' }], // نصوص تحتية وعلوية
            [{ 'align': [] }], // محاذاة
            ['bold', 'italic', 'underline'], // تنسيقات
            ['link', 'image'], // روابط وصور
            [{ 'color': [] }, { 'background': [] }], // ألوان النص والخلفية
            [{ 'direction': 'rtl' }], // اتجاه النص
            ['clean'] // مسح التنسيق
          ],
        },
      });
    }

    const editor = editorRef.current;

    // تعيين محتوى المحرر بناءً على القيمة الخارجية
    if (value !== editor.root.innerHTML) {
      editor.root.innerHTML = value || '';
    }

    // التعامل مع تغييرات النص
    const textChangeHandler = () => {
      const html = editor.root.innerHTML;
      onChange(html);
    };

    editor.on('text-change', textChangeHandler);

    // تنظيف محرر Quill عند إلغاء تحميل المكون
    return () => {
      editor.off('text-change', textChangeHandler);
    };
  });
  }, [value, onChange]);

  return <div ref={quillRef} style={{ height: '400px', direction: 'ltr' }} />;
};

export default QuillEditor;
