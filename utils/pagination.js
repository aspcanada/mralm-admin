const getPagination = (page, limit) => {
  page = parseInt(page) || 0
  limit = parseInt(limit) || 10

  const from = page ? page * limit : 0
  const to = page ? from + limit - 1 : limit

  return { from, to }
}

export { getPagination }
