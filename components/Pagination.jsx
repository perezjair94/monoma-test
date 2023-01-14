import Button from "./Button";

export default function Pagination({ offset, onSetOffset }) {
  const nextOffest = () => onSetOffset(offset + 10);
  const previousOffest = () => onSetOffset(offset - 10);

  return (
    <div className="flex justify-end space-x-2 mt-4">
      {offset >= 10 && (
        <Button isPrimary onClick={previousOffest}>
          Previous
        </Button>
      )}
      <Button isPrimary onClick={nextOffest}>
        Next
      </Button>
    </div>
  );
}
