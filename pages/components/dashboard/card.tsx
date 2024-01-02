export default function Card({
  title,
  value,
}: {
  title: string;
  value: number | string;
}) {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <p
        className={`truncate rounded-xl bg-white text-center text-2xl`}
      >
        {value}
      </p>
      <div className="flex justify-center p-4">
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
    </div>
  );
}