export default function Search({
  searchTerm,
  setSearchTerm,
  handleSearch,
  isReset,
  handleReset,
}) {
  console.log('🚀 ~ searchTerm:', searchTerm)
  return (
    <div className="flex justify-center ">
      <input
        type="text"
        placeholder="Search by title or description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 mb-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-[100px]"
      />
      <div className="flex gap-2">
        <button
          disabled={!searchTerm}
          onClick={handleSearch}
          className=" bg-blue-500 text-white
        px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500  h-12 "
        >
          Go
        </button>
        {isReset && (
          <button
            onClick={handleReset}
            className=" bg-green-500 text-white
        px-4 py-2  rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-12"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  )
}
