import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Row, Col } from "reactstrap";

const PaginatedItems = ({ items, itemsPerPage, setCurrentItems }) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items, setCurrentItems]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <Row className="align-items-center">
      <Col md={6}>
        <div className="tableCount">
          Showing {items.slice(itemOffset, itemOffset + itemsPerPage).length} of{" "}
          {items.length} entries
        </div>
      </Col>
      <Col md={6}>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          containerClassName="pagination justify-content-end"
        />
      </Col>
    </Row>
  );
};

export default PaginatedItems;
