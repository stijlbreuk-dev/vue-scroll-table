export const PaginationButtonType = {
  NUMBER: 'NUMBER',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  ELLIPSIS: 'ELLIPSIS'
};

/**
 * @typedef {Object} PaginationButton
 * @property {number} page
 * @property {string} label
 * @property {boolean} disabled
 * @property {boolean} current
 * @property {PaginationButtonType} type
 */

/**
 * Returns an array of pagination buttons
 * @param {number} totalPages
 * @param {number} currentPage
 * @returns {Array<PaginationButton>} pagination buttons
 */
export function getPaginationButtons(totalPages, currentPage) {
  if (totalPages < 1) return [];
  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;

  if (totalPages <= 7) {
    // Variant complete

    return [
      getPreviousButton(currentPage === 1),
      ...Array.from({ length: totalPages }, (_, i) => ({
        page: i + 1,
        label: i + 1,
        disabled: false,
        current: i + 1 === currentPage,
        buttonType: PaginationButtonType.NUMBER
      })),
      getNextButton(currentPage === totalPages)
    ];
  }

  if (totalPages > 7 && currentPage <= 4) {
    // Variant from left
    return [
      getPreviousButton(currentPage === 1),
      ...Array.from({ length: 5 }, (_, i) => ({
        page: i + 1,
        label: i + 1,
        disabled: false,
        current: i + 1 === currentPage,
        buttonType: PaginationButtonType.NUMBER
      })),
      getEllipsisButton(),
      {
        page: totalPages,
        label: totalPages,
        disabled: false,
        current: false,
        buttonType: PaginationButtonType.NUMBER
      },
      getNextButton(currentPage === totalPages)
    ];
  }

  const compare = 4;
  if (totalPages > 7 && currentPage > totalPages - compare) {
    // Variant from right
    return [
      getPreviousButton(currentPage === 1),
      {
        page: 1,
        label: 1,
        disabled: false,
        current: false,
        buttonType: PaginationButtonType.NUMBER
      },
      getEllipsisButton(),
      ...Array.from({ length: 5 }, (_, i) => ({
        page: totalPages - compare + i,
        label: totalPages - compare + i,
        disabled: false,
        current: totalPages - compare + i === currentPage,
        buttonType: PaginationButtonType.NUMBER
      })),
      getNextButton(currentPage === totalPages)
    ];
  }

  // Variant from middle
  if (totalPages > 7 && currentPage > 4 && currentPage <= totalPages - 4) {
    return [
      getPreviousButton(currentPage === 1),
      {
        page: 1,
        label: 1,
        disabled: false,
        current: false,
        buttonType: PaginationButtonType.NUMBER
      },
      getEllipsisButton(),
      ...Array.from({ length: 3 }, (_, i) => ({
        page: currentPage - 1 + i,
        label: currentPage - 1 + i,
        disabled: false,
        current: currentPage - 1 + i === currentPage,
        buttonType: PaginationButtonType.NUMBER
      })),
      getEllipsisButton(),
      {
        page: totalPages,
        label: totalPages,
        disabled: false,
        current: false,
        buttonType: PaginationButtonType.NUMBER
      },
      getNextButton(currentPage === totalPages)
    ];
  }
}

function getPreviousButton(disabled) {
  return {
    page: -1,
    label: 'Previous',
    disabled,
    current: false,
    buttonType: PaginationButtonType.LEFT
  };
}

function getNextButton(disabled) {
  return {
    page: -1,
    label: 'Next',
    disabled,
    current: false,
    buttonType: PaginationButtonType.RIGHT
  };
}

function getEllipsisButton() {
  return {
    page: -1,
    label: '...',
    disabled: false,
    current: false,
    buttonType: PaginationButtonType.ELLIPSIS
  };
}
