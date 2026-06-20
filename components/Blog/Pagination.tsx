import Link from "next/link";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  getUrl: (page: number) => string;
};

export default function Pagination({
  totalPages,
  currentPage,
  getUrl,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
      {currentPage > 1 && (
        <Link
          href={getUrl(currentPage - 1)}
          className="rounded-full border border-[#DCE7F5] bg-white px-5 py-3 text-sm font-black text-[#0D2444] transition hover:bg-[#EAF2FF]"
        >
          Prev
        </Link>
      )}

      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;
        const isActive = currentPage === page;

        return (
          <Link
            key={page}
            href={getUrl(page)}
            className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-black transition ${
              isActive
                ? "bg-[#0D2444] text-white shadow-lg shadow-[#0D2444]/20"
                : "border border-[#DCE7F5] bg-white text-[#0D2444] hover:bg-[#EAF2FF]"
            }`}
          >
            {page}
          </Link>
        );
      })}

      {currentPage < totalPages && (
        <Link
          href={getUrl(currentPage + 1)}
          className="rounded-full bg-[#0D2444] px-5 py-3 text-sm font-black text-white transition hover:bg-[#315E91]"
        >
          Next
        </Link>
      )}
    </div>
  );
}
