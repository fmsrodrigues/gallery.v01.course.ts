import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={`${image.id}`} className="w-48 flex flex-col">
            <img src={image.url} className="w-full" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
