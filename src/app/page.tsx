import AnimatedComponent from "@/components/AnimatedComponent";
import ImageCarousel from "@/components/ImageCarousel";
import posts from "../../posts";

export default function Home() {
  return (
    <main className="bg-red-100 min-h-screen p-5">
      <section className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Последние новости
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 my-10">
          {posts
            .slice()
            .reverse()
            .map((post) => (
              <div
                key={post.id}
                className="bg-white p-4 rounded-lg shadow-2xl"
              >
                <ImageCarousel images={post.images} />
                <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                <p className="mb-4 text-gray-600 text-left">{post.summary}</p>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
