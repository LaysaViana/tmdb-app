import { PageButton, PaginationContainer } from '../../pages/Home/Home.styles';

import Chevron_Left from '../../assets/icons/Chevron_Left.svg';
import Chevron_Right from '../../assets/icons/Chevron_Right.svg';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | '...')[] = [];
    const maxVisible = 4;
    let startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    if (startPage > 1) pages.push(1);
    if (startPage > 2) pages.push('...');

    for (let i = startPage; i <= endPage; i++) pages.push(i);

    if (endPage < totalPages - 1) pages.push('...');
    if (endPage < totalPages) pages.push(totalPages);

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Chevron_Left />
      </PageButton>

      {pages.map((p, index) =>
        p === '...' ? null : (
          <PageButton
            key={index}
            $active={p === currentPage}
            onClick={() => onPageChange(p as number)}
          >
            {p}
          </PageButton>
        ),
      )}

      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Chevron_Right />
      </PageButton>
    </PaginationContainer>
  );
}
