import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24 text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Your Smart <span className="text-blue-600">AI Personal Assistant</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Save time, stay organized, and get more done with an intelligent assistant built to help you manage your day.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link href="/ai-personal">
              <span className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Try AI Assistant
              </span>
            </Link>
            <Link href="/upgrade">
              <span className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Upgrade Now
              </span>
            </Link>
          </div>
        </div>

        {/* Right Image or Illustration */}
        <div className="flex-1">
          <img
            src="/ai-illustration.png"
            alt="AI Assistant Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
