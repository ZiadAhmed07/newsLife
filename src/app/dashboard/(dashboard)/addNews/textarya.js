"use client";

import { useEffect, useRef } from 'react';
import 'quill/dist/quill.snow.css'; // استيراد أنماط Quill
import Compressor from 'compressorjs';

const QuillEditor = ({ value, onChange }) => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  // التعامل مع تحميل الصورة وضغطها
  const handleImageUpload = (file) => {
    if (!file) return; // تأكد من وجود الملف

    new Compressor(file, {
      quality: 0.6, // ضبط الجودة حسب الحاجة
      success(result) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const imageUrl = e.target.result;
          const editor = editorRef.current;
          const range = editor.getSelection();
          editor.insertEmbed(range.index, 'image', imageUrl);
        };
        reader.readAsDataURL(result);
      },
      error(err) {
        console.error('Image compression error:', err.message);
      },
    });
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !quillRef.current) return;

    import('quill').then(({ default: Quill }) => {
      if (!editorRef.current) {
        editorRef.current = new Quill(quillRef.current, {
          theme: 'snow',
          modules: {
            toolbar: {
              container: [
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
              handlers: {
                image: () => {
                  const fileInput = document.createElement('input');
                  fileInput.type = 'file';
                  fileInput.accept = 'image/*';
                  fileInput.click();
                  fileInput.onchange = () => {
                    const file = fileInput.files[0];
                    if (file) handleImageUpload(file);
                  };
                }
              }
            },
          },
        });
      }

      const editor = editorRef.current;

      // تعيين محتوى المحرر بناءً على القيمة الخارجية
      if (value !== editor.root.innerHTML) {
        editor.root.innerHTML = value;
      }

      // التعامل مع تغييرات النص
      editor.on('text-change', () => {
        onChange(editor.root.innerHTML);
      });

      // تنظيف محرر Quill عند إلغاء تحميل المكون
      return () => {
        editor.off('text-change');
      };
    });
  }, [value, onChange]);

  return <div ref={quillRef} style={{ height: '400px', direction: 'ltr' }} />;
};

export default QuillEditor;
