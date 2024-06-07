// const mongoose = require("mongoose")

// mongoose.connect("mongodb://127.0.0.1:27017/users")
// .then(()=> console.log("Connection succesful...."))
// .catch((err)=> console.log(err));

// // Create Schema //
// const playlistSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     ctype : String,
//     videos: Number,
//     author: String,
//     active: Boolean
// })

// // Create Douments //

// const Playlist = new mongoose.model("Playlist",playlistSchema);

// const createDocument = async () =>{
//     const reactPlaylist = new Playlist({
//         name : "Javascript",
//         ctype : "Frontend",
//         videos: 50,
//         author: "Kunal Kailas Bodkhe",
//         active: true
//     })

//     const result = await reactPlaylist.save();
//     console.log(result)

// }

// createDocument();


// Connect To Database Of Mongodb //

// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/users")
// .then(()=> console.log("Connection Successful.........."))
// .catch((err)=> console.log(err));


// // // Creating Schema of Of the doucments //

// const mongoschema = new mongoose.Schema({
//     name : String,
//     ctype: String,
//     age : Number,
//     lang : String
// })


// // creating Doucments //

// const doclist = new mongoose.model("Playlist",mongoschema);



// const createdocslist = async () =>{
//     const langdocs = new doclist({
//         name: "kunal",
//         ctype : "Backend",
//         age : 18,
//         lang: "c++"
//     })
//     const langdocs1 = new doclist({
//         name: "nikjil",
//         ctype: "Frontend",
//         age:18,
//         lang: "Python"
//     })
//     const langdocs2 = new doclist({
//         name: "rohan",
//         ctype: "backend",
//         age:18,
//         lang: "js"
//     })
//     const result1 = await langdocs.save();
//     console.log(result1)


// } 

// createdocslist();


const { create } = require("hbs");
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/users")
    .then(() => console.log("Connection Succesfull....."))
    .catch((err) => console.log(err));


const mongooseschema = new mongoose.Schema({
    name: String,
    age: Number,
    lang: String,
    Degree: String
})

const playlistdata = new mongoose.model("Playlist", mongooseschema)


const docsdatamongo = async () => {
    // const createdata = new playlistdata({
    //     name: "kunal",
    //     age: 18,
    //     lang: "Javascript",
    //     degree: "BCA"
    // })
    // const createdata2 = new playlistdata({
    //     name: "Ankit",
    //     age: 18,
    //     lang: "Ruby",
    //     degree: "B Tech"
    // })
    // const createdata3 = new playlistdata({
    //     name: "kunal",
    //     age: 18,
    //     lang: "PHP",
    //     degree: "BCS"
    // })
    // const createdata4 = new playlistdata({
    //     name: "roahn",
    //     age: 18,
    //     lang: "PHP",
    //     degree: "BCS"
    // })

    const createdataobj = new playlistdata({
        name: "bhushan",
        age: 19,
        lang: "Go",
        degree: "MBA"
    })
    const createdataobj2 = new playlistdata({
        name: "Aditya",
        age: 20,
        lang: "R",
        degree: "EK DIN ME PAISA DOUBLE"
    })
    const createdataobj3 = new playlistdata({
        name: "Sudarshan",
        age: 17,
        lang: "nodejs",
        degree: "lassan"
    })
    const createdataob4 = new playlistdata({
        name: "Yogesh",
        age: 19,
        lang: "Go",
        degree: "MBA"
    })

    const result = await playlistdata.insertMany([createdataobj, createdataobj2, createdataobj3, createdataob4]);
    console.log(result)

}

// docsdatamongo();


// ~~ How to read Document Data in vs code ~~ //

// const getdata = async () =>{
//     const results = await playlistdata.find({videos: {$gt: 18}})
//     .limit(2)
//     console.log(results)

// }
// getdata()


// ~~~ Comparison operator ~~~ //


//~~~ in operator ~~~//
// const getdatas = async () => {
//     const results = await playlistdata.find({ lang: { $in: ["PHP", "kunal"] } })
//     console.log(results)
// }

// getdatas()


// ~~~ nin operator ~~~ //
// const getdatas = async () => {
//     const results = await playlistdata.find({ lang: { $nin: ["PHP", "kunal"] } })
//     console.log(results)
// }

// getdatas()


//~~~ or operator ~~~//

// const getdatas = async () =>{
//     const results = await playlistdata
//     .find({$or: [{lang: "Go"},{age: 19}]})
//     console.log(results)

// }

// getdatas()


//~~~ and operator ~~~//

// const getdatas = async () =>{
//     const results = await playlistdata
//     .find({$and: [{lang: "Go"},{age: 19}]})
//     console.log(results)

// }

// getdatas()




//~~~ count document number and sorting  ~~~//

// const getdatas = async () => {
//     const results = await playlistdata
//     .find({ $and: [{age:18}]})
//     // .countDocuments();
//     .sort({name:1})
//     console.log(results)

// }

// getdatas()



// ~~~~update documents~~~~ //


// const updatedata = async (_id) => {
//     try{
//     const results = await playlistdata.updateOne({ _id },{
//         $set: {
//             lang: "c++"
//         }
//     });
// }catch(err){
//     console.log(err)

// }

    


// }


// updatedata("6562de23fcc2a8c9d1aad106")




// const updatedata = async (_id) => {
//     try{
//     const results = await playlistdata.findByIdAndUpdate({ _id },{
//         $set: {
//             age: 17
//         }
//     });

// }catch(err){
//     console.log(err)

// }

// }
// updatedata("6562de23fcc2a8c9d1aad106")




// ~~~ Delete documents ~~~//

// const deletedocumnt = async (_id) =>{
//     try{
//         const results = await playlistdata.findByIdAndDelete({_id});
//     }
//     catch(err){
//         console.log(err)

//     }
// }

// deletedocumnt("6562de23fcc2a8c9d1aad105")