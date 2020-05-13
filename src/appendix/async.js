
const demoValue = false
const myPromise = new Promise((resolve,reject) => {
    if (demoValue) {
    setTimeout(() => {
        resolve('I have succeeded')
    },3000)
  } else {
    reject('I have failed')
  }
})

myPromise.then(value => console.log(value)).then(rejectedValue => console.log(rejectedValue))


// reslove for getting the value
// we can get the desired value by deriving using then
// reject - to get error
