export default function ArrowButton({ onClick, direction = "right" }: any) {
  if (direction == "left") {
    return (
      <button
        onClick={onClick}
        className="ml-auto flex items-center justify-center p-2 border border-black rounded-full
                         hover:bg-[#c56ecf] hover:text-white transition-colors"
      >
        &larr;
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className="ml-auto flex items-center justify-center p-2 border border-black rounded-full
                         hover:bg-[#c56ecf] hover:text-white transition-colors"
    >
      &rarr;
    </button>
  );
}
