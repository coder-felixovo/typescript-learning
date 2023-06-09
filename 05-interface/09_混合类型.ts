// 混合类型
// 举例：一个对象可以同时作为函数和对象使用，并带有额外的属性
{
  interface Counter {
    (start: number): string
    interval: number
    reset(): void
  }
  function getCounter(): Counter {
    let counter = <Counter>function (start: number) { }
    counter.interval = 123
    counter.reset = function () { }
    return counter
  }
  let c = getCounter()
  c(10)
  c.reset()
  c.interval = 5.0
  console.log(c)
}