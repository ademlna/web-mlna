import { Photo } from "@/types/photo"

interface Props {
  photo: Photo
}

export default function PhotoCard({ photo }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={`/uploads/${photo.filename}`}
        alt={photo.caption}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg">{photo.caption}</h2>
        <p className="text-sm text-gray-500">
          By {photo.account.username}
        </p>
        {photo.location && (
          <p className="text-sm text-gray-400">
            📍 {photo.location}
          </p>
        )}
      </div>
    </div>
  )
}
