import React from "react";

const Exhibit = ({ title, children }) => {
  return (
    <section className="bg-white border border-gray-200 rounded-xl p-6 my-6 shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
};

export default Exhibit;
