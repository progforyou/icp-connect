export function nns_stats (store) {
  store.on('@init', () => ({ nns_stats: [] }))

  store.on('nns_stats/set', ({ nns_stats }, data) => {
    return { nns_stats: data }
  })
}