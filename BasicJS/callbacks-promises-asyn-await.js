// console.log('test')

// const Hello = () => {
//     console.log('Set Timeout used');
// }
// setTimeout(Hello, 2000);
// console.log('after test');

// const Home = (house) => {
//     console.log(`This my home ${house}`)
// }

// const welcomeGreet = (name, callHome) => {
//     callHome(name);
// }

// welcomeGreet('Meerut', Home);

// for (let i = 1; i <= 5; i++) {
//     let str = '';
//     for (let j = 1; j <= i; j++) {
//         str = str + '*';
//     }
//     console.log(str)
// }

// for (let i = 5; i >= 1; --i) {
//     let str = '';
//     for (let j = 1; j <= i; j++) {
//         str += '*';
//     }
//     console.log(str);
// }


// // callback hell - too many nested callbacks inside each other
// const getData = (dataID, getNextData) => {
//     setTimeout(() => {
//         console.log(dataID);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000)
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4)
//         })
//     });
// })


// // promises
// let promise = new Promise((res, rej) => {
//     console.log('Promise');
//     res(() => {
//         console.log('printed')
//     });
//     // rej(() => {
//     //     console.log('error cause')
//     // });
// });



// const ashCount = (count, callAsh) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log(name);
//             res('resolved');
//             if (callAsh) {
//                 callAsh();
//             }
//         }, 2000);
//     })
// }

// ashCount(1, () => {
//     ashCount(3, () => {
//         ashCount(5)
//     })
// })

const getPromise = () => {
    return new Promise((res, rej) => {
        console.log("i'm a promise");
        res('solved');
        // rej('error')
    })
};
let promise = getPromise();

promise.then((res) => {
    console.log('fulfilled')
})
promise.catch((err) => {
    console.log('rejected')
});


const helloSam = async () => {
    const result = await setTimeout(() => {
        console.log('hello sam');
    }, 2000);
}

helloSam();