export function getBookingUrl(category, serviceName) {
  const params = new URLSearchParams({ category })
  if (serviceName) {
    params.set('service', serviceName)
  }
  return `/book?${params.toString()}`
}

export function extractServicesFromCatalog(catalog) {
  return catalog.categories.flatMap((category) =>
    category.groups.flatMap((group) => group.items.map((item) => item.name)),
  )
}
