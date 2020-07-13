// Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.



let chart = {
    Zuckerberg: {
        Schroepfer: {
            Bosworth: {
                Steve: {},
                Kyle: {},
                Andra: {}
            },
            Zhao: {
                Richie: {},
                Sofia: {},
                Jen: {}
            }
        },
        Schrage: {
            VanDyck: {
                Sabrina: {},
                Michelle: {},
                Josh: {}
            },
            Swain: {
                Blanch: {},
                Tom: {},
                Joe: {}
            }
        }
    }
};

function orgChart(obj, depth = 0) {
    // let output;
    // for (let key in obj) {
    //     // console.log(" ".repeat(indent), key)
    //   output = orgChart(obj[key], indent + 4)
    // }
    // return output;

    let indent = " ".repeat(depth * 4);
    Object.keys(obj).forEach(key => {
        console.log(indent + key)
       return orgChart(obj[key], depth + 1)
    });
}

console.log(orgChart(chart))



// Zuckerberg
//     Schroepfer
//         Bosworth
//             Steve
//             Kyle
//             Andra
//         Zhao
//             Richie
//             Sofia
//             Jen
//     Schrage
//         VanDyck
//             Sabrina
//             Michelle
//             Josh
//         Swain
//             Blanch
//             Tom
//             Joe
//     Sandberg
//         Goler
//             Eddie
//             Julie
//             Annie
//        Hernandez
//             Rowi
//             Inga
//             Morgan
//        Moissinac
//             Amy
//             Chuck
//             Vinni
//        Kelley
//             Eric
//             Ana
//             Wes






