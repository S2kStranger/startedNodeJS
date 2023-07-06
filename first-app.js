console.log('a');
console.log('b');
const fun1=() => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve('d'),0);
        
    });
    return promise;
}

setTimeout(() => {
    console.log('c');
    fun1().then(res => {
        console.log(res)
        return fun1();
    })
    .then(res => console.log('e'));
},3000);

