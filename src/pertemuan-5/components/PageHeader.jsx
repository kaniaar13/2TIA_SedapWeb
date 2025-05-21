import Dashboard from "../pages/Dashboard";

export default function PageHeader() {
    return (
      <div
        id="pageheader-container"
        className="flex items-center justify-between p-4"
      >
        <div id="pageheader-left" className="flex flex-col">
          <span id="page-title" className="text-3xl font-semibold">
            Dashboard
          </span>
          <div
            id="breadcrumb-links"
            className="flex items-center font-medium space-x-2 mt-2"
          >
            <span id="breadcrumb-home" className="text-gray-500">
              Dashboard
            </span>
            <span id="breadcrumb-separator" className="text-gray-500">
              /
            </span>
            <span id="breadcrumb-current" className="text-gray-500">
              Order List
            </span>
          </div>
        </div>
        <div id="action-button" className="flex space-x-2">
        <span className="bg-[#3c3c3c] text-pink-400 font-mono text-sm px-2 py-1 rounded">
          Add
        </span>
        <span className="bg-[#3c3c3c] text-orange-300 font-mono text-sm px-2 py-1 rounded">
          Export
        </span>
        <span className="bg-[#3c3c3c] text-red-400 font-mono text-sm px-2 py-1 rounded">
          Kembali
        </span>
      </div>
    </div>
  );
}