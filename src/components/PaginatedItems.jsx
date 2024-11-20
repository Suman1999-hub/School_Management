import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Row, Col } from "reactstrap";

const PaginatedItems = ({
  items,
  totalItems,
  currentPage,
  itemsPerPage,
  // onItemsChange,
  onPageChange,
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const itemOffset = (currentPage - 1) * itemsPerPage;

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    if (onPageChange) onPageChange(event?.selected + 1);
  };

  useEffect(() => {
    // Fetch items from another resources.
    // const endOffset = itemOffset + itemsPerPage;
    // const newItems = items?.slice(itemOffset, endOffset);
    // onItemsChange(items);
  }, [items]);

  return (
    <>
      <Row className="align-items-center">
        <Col md={6}>
          <div className="tableCount">{`Showing ${itemOffset + 1} - ${
            itemOffset + itemsPerPage > totalItems
              ? totalItems
              : itemOffset + itemsPerPage
          } entries out of ${totalItems} entries`}</div>
        </Col>

        <Col md={6}>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            {...(currentPage && { forcePage: currentPage - 1 })}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className="pagination justify-content-end"
          />
        </Col>
      </Row>
    </>
  );
};

export default PaginatedItems;
