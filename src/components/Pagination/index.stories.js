import React, { useState } from "react";

import Pagination from ".";

import { paginationOptions } from "@/twoopstracker/config";

export default {
  title: "Section/Pagination",
  argTypes: {},
};

function Template({
  itemsCount,
  page: pageProp,
  pageSize: pageSizeProp,
  ...args
}) {
  const [page, setPage] = useState(pageProp);
  const [pageSize, setPageSize] = useState(pageSizeProp);
  const handleChangePage = (_, value) => setPage(value);
  const handleChangePageSize = (_, value) => setPageSize(value);
  const count = Math.ceil(itemsCount / pageSize);
  return (
    <Pagination
      {...args}
      count={count}
      onChangePage={handleChangePage}
      onChangePageSize={handleChangePageSize}
      page={page}
      pageSize={pageSize}
    />
  );
}

export const Default = Template.bind({});

Default.args = {
  ...paginationOptions,
  page: 1,
  pageSize: "20",
  itemsCount: 101,
};
