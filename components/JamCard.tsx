interface JamCardProps {
  title: string;
  date: string;
  description: string;
  link: string;
  image: string;
}

export function JamCard({
  title,
  date,
  description,
  link,
  image,
}: JamCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl shadow-md bg-white hover:shadow-xl transition"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{date}</p>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </a>
  );
}
