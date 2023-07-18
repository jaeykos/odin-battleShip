class DOM {
  static placeShipHover() {}

  static getTile(row: number, col: number) {
    const n = 10 * row + col + 1
    return <HTMLScriptElement>(
      document.querySelector(".placementTile:nth-child(" + n + ")")
    )
  }

  static getTileCoord(tileElement: HTMLElement): number[] {
    const parent = tileElement.parentNode
    if (parent != null) {
      const index = Array.prototype.indexOf.call(parent.children, tileElement)

      const row = Math.floor(index / 10)

      const col = index % 10

      return [row, col]
    } else {
      return []
    }
  }
}

export { DOM }