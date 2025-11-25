import React from "react";

function ResumeUi({ r }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col justify-between h-36">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded p-2 bg-blue-50 flex items-center justify-center">
          📄
        </div>
        <div>
          <div className="text-sm font-medium">{r.title}</div>
          <div className="text-xs text-gray-400">Created: {r.date}</div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <div className="text-blue-600 text-sm px-3 py-1 rounded bg-blue-50">
          View
        </div>
        <div className="text-white text-sm px-3 py-1 rounded bg-blue-600">
          Download PDF
        </div>
      </div>
    </div>
  );
}

export default ResumeUi;
