export default function Pagination({ offset, onSetOffset }) {
  const nextOffest = () => onSetOffset(offset + 10);
  const previousOffest = () => onSetOffset(offset - 10);

  return (
    <div className="flex justify-end space-x-2 mt-4">
      {offset >= 10 && (
        <button
          className="bg-red-500 text-white px-2 p-1 rounded-md"
          onClick={previousOffest}
        >
          Previous
        </button>
      )}
      <button
        className="bg-red-500 text-white px-2 p-1 rounded-md"
        onClick={nextOffest}
      >
        Next
      </button>
    </div>
  );
}
