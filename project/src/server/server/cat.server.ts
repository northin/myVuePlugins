import { Injectable } from '@nestjs/common';
import { Cat } from './../interface/cat.interface';
import { Message } from '../interface/messgae.interface';

@Injectable()
export class CatServer{
    private readonly cats:Cat[]= [{name:'sk1',age:12},{name:'sk2',age:12},{name:'sk3',age:12}]
    private readonly message: Message = {errorCode:0,errorMsg:'添加成功'}
    create(cat: Cat){
        this.cats.push(cat)
    }

    findAll(): Cat[]{
        return this.cats
    }

    find():Cat{
        return this.cats[0]
    }

    add(cat: Cat):Message{
        try {
            this.cats.push(cat)
            return this.message;
        } catch (error) {
            this.message.errorCode = 1;
            this.message.errorMsg = error
            return this.message

        }
        
    }

    remove(arr:Array<any>,val:String):Array<any>{
        let pos: number
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if(element == val){
                pos = i
            }
        }
        arr.splice(pos,1)
        return arr
    }

    del(obj:number):Message{
        try {
            this.cats.splice(obj,1)
            return this.message;
        } catch (error) {
            this.message.errorCode = 1;
            this.message.errorMsg = error
            return this.message

        }
        
    }
}
