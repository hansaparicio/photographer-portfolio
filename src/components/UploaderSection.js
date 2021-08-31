import Uploader from "../pages/Uploader";

export default function UploaderSection() {
    return (
      <div className="border border-gray-200 flex flex-col rounded-lg overflow-hidden">
        <div className="bg-blue-500">
          <h1 className="text-white font-bold text-2xl p-3">Portfolio Dashboard</h1>
        </div>
        <Uploader />
      </div>
    );
}
