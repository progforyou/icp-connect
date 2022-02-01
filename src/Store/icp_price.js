export function icp_price (store) {
  store.on('@init', () => ({ icp_price: {} }))

  store.on('icp_price/set', ({ icp_price }, data) => {
    return { icp_price: data }
  })
}