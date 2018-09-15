// 从 [0, number) 个数中生成随机数
function _random (number) {
  return Math.floor(Math.random() * number)
}

function random (number, count) {
  const numbers = Array.from({ length: number }, (_, x) => x + 1)
  const r = []
  for (let i = 0; i < count; i++) {
    const index = _random(number - i) 
    r.push(numbers[index])
    numbers.splice(index, 1)
  }
  return r
}

export default random
