export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">Our Products</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Weltora Mini-Sub</h3>
            <p className="text-gray-700 text-sm">
              Compact and agile, perfect for underwater inspections and shallow-sea research.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Weltora Deep Explorer</h3>
            <p className="text-gray-700 text-sm">
              Built for deep-sea expeditions, long-range operation, and high-pressure environments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Weltora Hybrid Drone</h3>
            <p className="text-gray-700 text-sm">
              Dual-functionality drone for above and underwater inspection, mapping, and utility tasks.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
