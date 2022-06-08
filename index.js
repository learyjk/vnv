const freedom = (ring, key) => {
  let moves = key.length;
  let keyIdx = 0
  let ringIdx = 0
  while (keyIdx < key.length) {
    let leftIdx = ringIdx
    let leftMoves = 0;
    let rightIdx = ringIdx
    let rightMoves = 0;

    //look left
    while (ring[leftIdx] !== key[keyIdx]) {
      if (leftIdx === 0) {
        leftIdx = ring.length - 1
      } else {
        leftIdx--;
      }
      leftMoves++;
    }
    //look right
    while (ring[rightIdx] !== key[keyIdx]) {
      if (rightIdx === ring.length - 1) {
        rightIdx = 0
      } else {
        rightIdx++;
      }
      rightMoves++;
    }
    if (leftMoves < rightMoves) {
      moves += leftMoves;
      ringIdx = leftIdx;
    } else {
      moves += rightMoves;
      ringIdx = rightIdx;
    }

    keyIdx++;
  }
  return moves
}

let ring = 'godding'
let key = 'gdogn'

console.log(freedom(ring, key))