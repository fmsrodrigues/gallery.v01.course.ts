import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/be3c2785-bc2a-4808-a0a7-9871cdedfcc4-dt7dfn.jpg",
  "https://utfs.io/f/f95b76fa-e9d4-4eb0-a07b-1101bf3fadfe-rxgda6.jpg",
  "https://utfs.io/f/703008f3-c48d-4541-80d9-4338bb193788-u4o42g.jpg",
  "https://utfs.io/f/6f94fcfa-9994-4cc9-b38b-b1209e23f689-kqi9aq.jpg"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany()
  console.log(posts)

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages].map((image, i) => (
          <div key={`${image.id}`} className="w-48">
            <img src={image.url} className="w-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
