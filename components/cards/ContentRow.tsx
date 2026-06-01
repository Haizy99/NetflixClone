import ContentCard from "./ContentCard";

type Content = {
  id: number;
  title: string;
  imageUrl: string;
};

type Props = {
  title: string;
  contents: Content[];
};

export default function ContentRow({ title, contents }: Props) {
  return (
    <div className="px-8 md:px-16 mb-10">
      {/* Row title */}
      <h2 className="text-white text-lg md:text-xl font-semibold mb-3">
        {title}
      </h2>

      {/* Scrollable row */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {contents.map((item) => (
          <ContentCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
