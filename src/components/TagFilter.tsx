type TagFilterProps = {
  tags: string[];
  selectedTags: string[];
  onTagClick: (tag: string) => void;
};

const TagFilter = ({ tags, selectedTags, onTagClick }: TagFilterProps) => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-4 md:grid-cols-6 lg:flex lg:flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagClick(tag)}
            className={`px-3 py-1 rounded-sm border text-gray-800 border-gray-300 text-xs md:text-sm cursor-pointer  transition-colors ${
              selectedTags.includes(tag)
                ? "bg-green-400 "
                : "bg-gray-100 hover:bg-green-200 "
            }`}
          >
            {tag.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
