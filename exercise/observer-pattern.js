/**
 *观察者模式
 * 包含三个关键点
 * 观察者和被观察者
 * 观察者列表
 * 观察者是被观察者是直接的关系
 * */

//观察者
class Observer{
    constructor(name) {
        this.name = name;
    }
    update(){
        console.log(`目标者通知我更新了，我是：${this.name}`);
    }
}
//被观察者
class Subject{
    constructor() {
        this.observers = [];//观察者列表
    }
    //添加观察者
    add(observer){
        this.observers.push(observer);
    }
    //删除观察者
    remove(observer){
        const idx = this.observers.findIndex(item => item === observer);
        if (idx > -1) {
            this.observers.splice(idx,1);
        }
    }
    //通知观察者
    notify(){
        this.observers.forEach(item=>{
            item.update();
        })
    }
}

const  fontObserver = new Observer('前端开发者');
const backObserver = new Observer('后端开发者');
const subject = new Subject();
subject.add(fontObserver);
subject.add(backObserver);
subject.notify();