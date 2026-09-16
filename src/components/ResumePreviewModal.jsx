import React, { useEffect, useRef, useState } from "react";

const RESUME_URL = "/resume/Akshay_Karthick_MS_Resume.docx";

const ResumePreviewModal = ({ onClose }) => {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const [{ renderAsync }, res] = await Promise.all([
          import("docx-preview"),
          fetch(RESUME_URL),
        ]);
        const blob = await res.blob();
        if (cancelled || !containerRef.current) return;
        await renderAsync(blob, containerRef.current, undefined, {
          className: "resume-preview-doc",
          inWrapper: false,
        });
        if (!cancelled) setStatus("ready");
      } catch (err) {
        console.error("Resume preview failed:", err);
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4'
      onClick={onClose}
    >
      <div
        className='bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-tertiary'>
          <h3 className='text-white font-bold text-[18px]'>Resume Preview</h3>
          <div className='flex items-center gap-3'>
            <a
              href={RESUME_URL}
              download
              className='text-[13px] font-medium text-white bg-[#804dee] hover:bg-[#6b3fd1] transition-colors px-4 py-2 rounded-lg'
            >
              Download
            </a>
            <button
              type='button'
              onClick={onClose}
              aria-label='Close preview'
              className='text-white text-[20px] leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10'
            >
              ×
            </button>
          </div>
        </div>

        <div className='overflow-y-auto p-6 bg-[#f4f4f6] flex-1'>
          {status === "loading" && (
            <p className='text-center text-gray-500 py-20'>Loading resume…</p>
          )}
          {status === "error" && (
            <p className='text-center text-red-500 py-20'>
              Couldn't render the preview. Try the Download button instead.
            </p>
          )}
          <div ref={containerRef} />
        </div>
      </div>
    </div>
  );
};

export default ResumePreviewModal;
