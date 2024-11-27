import { Intervention } from "./intervention";

export class Evenement {
    constructor(
        public id:number,
        public jour :string ,
        public date :Date,
        public destination:string,
        public image:string,
        public cn:number,
        public test:boolean,
        public  intervention:Intervention[] ,

    ){}
}
