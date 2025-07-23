const CategoryFilter = ({ categories, activeCategory, handleCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="200">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`px-6 py-2 rounded-full transition-all ${
            activeCategory === category
              ? 'text-orange-500 border-b-2 border-orange-500 bg-white'
              : 'text-gray-600 hover:text-orange-500'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;