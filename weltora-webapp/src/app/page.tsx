export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-800">Weltora</div>
          <div className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="/products" className="text-gray-700 hover:text-blue-600">Products</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-4 text-blue-900">Weltora Submersibles</h1>
        <p className="text-xl mb-6">
          Innovating underwater exploration with reliable and cutting-edge submersible solutions.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
      {/* About Section */}
      <section id="about" className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            At <strong>Weltora Submersibles</strong>, we specialize in crafting advanced underwater vehicles
            for research, exploration, and industrial applications. Our mission is to push the boundaries of
            marine technology, offering high-performance, reliable, and innovative solutions for deep-sea operations.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-20 py-6">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Weltora Submersibles. All rights reserved.</p>
          <p className="mt-2">
            Designed with 💙 in India | <a href="mailto:info@weltora.com" className="text-blue-600 hover:underline">info@weltora.com</a>
          </p>
        </div>
      </footer>

    </main>
  );
}
