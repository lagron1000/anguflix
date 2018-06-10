export class Review {
    name : string;
    rating : number;
    text: string;
    constructor(){}
}
export class Movie {
    public _id : number;
    public imgUrl: string;
    public title: string;
    public year: number;
    public price: number;
    public shortDescription: string;
    public fullDescription: string;
    public director : string;
    public reviews : Array<Object>
    constructor() {}
}


// new Schema({
//     'imgUrl' : String,
//     'title' : String,
//     'year' : Number,
//     'price' : Number,
//     'shortDescription' : String,
//     'fullDescription' : String,
//     'director' : String,
//     'reviews': [{
//         'name': String,
//         'rating': {
//             type: Number,
//             min: 0,
//             max: 5
//         },
//         'text': String      
//     }]