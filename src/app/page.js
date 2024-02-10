import Header from "@/components/Header";



export default function Home() {
  return (
    <main>
      <Header />
      <section className="p-4 pt-32 max-w-4xl mx-auto">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one link<br /> for everything
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Share your links, social profile, contact info and more on a single page
          </h2>
        </div>
        <form className="inline-flex items-center shadow-lg shadow-gray-700/20">
          <span className="bg-white py-4 pl-4">
            linksync.com/
          </span>
          <input type="text" className="py-4" placeholder="username" />
          <button type="submit" className="bg-blue-500 text-white py-4 px-6">
            Join for Free
          </button>
        </form>
      </section>
    </main>
  )
}
