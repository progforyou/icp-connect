export function tokens (store) {
  store.on('@init', () => ({ tokens: [] }))

  store.on('tokens/set', ({ tokens }, tokenList) => {
    return { tokens: tokenList }
  })
}