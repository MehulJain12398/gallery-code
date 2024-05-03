import Link from "next/link";
import { db } from "~/server/db";

const mockURLs = [
  "https://utfs.io/f/bf60441f-6b13-4f1d-8f8a-81ee9554c6fe-ol1cn7.jpg",
  "https://utfs.io/f/b2f047cd-a7b3-4ac8-bf8c-1c36af67192c-xx2v4u.jpg",
  "https://utfs.io/f/98e54921-71a0-4303-a0d8-7b0a2921939a-yg4xbx.jpg",
  "https://utfs.io/f/ac5da5a9-2937-41c5-8618-bcf213a95400-yxaid0.jpg",
  "https://utfs.io/f/471d0904-12d1-429f-86c2-91a3870963c7-p5dnfz.jpg"
]

const mockImages = mockURLs.map((url,index) => ({
  id:index+1,
  url
}))

export default async function HomePage() {

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages,...mockImages,...mockImages].map((image,id) => (
          <div key={image.id + "-" + id} className="w-48">
            <img src={image.url} alt="image" className="w-48 h-48" />
          </div>
        ))}
      </div>
    </main>
  );
}
