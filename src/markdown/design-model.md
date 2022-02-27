# 设计模式

面向对象：多态、继承、封装

### 为何使用面向对象？

### UML类图

### 设计原则



* 何为设计？《UNIX/LINUX设计哲学》

1. 小既是美

2. 让每个程序只做好一件事。大程序是一个个小的程序的集合。

3. 快速建立原型

4. 舍弃高效率而取可移植性

5. 采用纯文本来存储数据

6. 充分利用软件的杠杆效应（软件复用）

7. 使用shell脚本来提高杠杆效应和可移植性

8. 避免强制性的用户界面

9. 让每个程序都称为过滤器

小准则： 允许用户定制环境、尽量使操作系统内核小而轻量化、使用小写字母并尽量简短、沉默是金、各部分之和大于整体、寻求90%的解决方案

* 五大设计原则(S O L I D)

S: 单一职责原则。一个程序只做好一件事、如果功能过于复杂就拆分开，每个部分保持独立

O: 开放封闭原则。对扩展开放，对修改封闭。增加需求，扩展新代码，而非修改已有代码。这是软件设计的终极目标

L: 李氏置换原则。子类能覆盖父类。父类能出现的地方子类就能出现。js中使用较少（弱类型&继承使用较少）

I: 接口独立原则。保持接口的单一独立，避免出现“胖接口”。js使用较少

D: 依赖导致原则。面向接口编程，依赖于抽象而不依赖于具体。使用方只关注接口而不关注具体类的实现。js使用较少


* 从设计到模式

看个关于设计的题，方便理解
```js
/**
 * 题目
 * 打车时，可以打专车或者快车。任何车都有车牌号和名称
 * 不同车价格不同，快车每公里1元，专车每公里2元
 * 行程开始时，显示车辆信息
 * 行程结束时，显示打车金额（假定5公里）
 * 
 * 
 * 分析题目
 * 1. 任何车都有车牌号和名称。这里就可以看出这是最基本的类中该有的属性。也就是每辆车都有车牌号和名称
 * 2. 打车时，可以打专车或者快车。这里可以看出有两种车型。这两种车型除了价格不同，剩下的都一样。也就是说它继承自父类car
 * 3. 行程开始时\行车结束时。行程是一个单独的类，需要引用车的属性。这里比较难理解
 */

class Car {
    constructor(number, name) {
        this.number = number;
        this.name = name;
    }
}

class Kuaiche extends Car {
    constructor(number, name) {
        super(number, name);
        this.price = 1;
    }
}

class Zhuanche extends Car {
    constructor(number, name) {
        super(number, name);
        this.price = 2;
    }
}

class Trip {
    constructor(car) {
        this.car = car;
    }
    start() {
        console.log(`行程开始 车牌号${this.car.number}`)
    }
    end() {
        console.log(`行程结束 金额：${this.car.price * 5}`)
    }
}

let kuai = new Kuaiche(100, '桑塔纳');
let trip = new Trip(kuai);
trip.start();
trip.end();
```

### 23种设计模式介绍

* 创建型

1. 工厂模式（工厂方法模式，抽象工厂模式，建造者模式）

    将new操作单独封装

    遇到new时，就要考虑是否该使用工厂模式

2. 单例模式

    一个类只有一个实例

    

3. 原型模式

* 结构型

1. 适配器模式

2. 装饰器模式

3. 代理模式

4. 外观模式

5. 桥接模式

6. 组合模式

7. 享元模式

* 行为型 - 1

1. 策略模式

2. 模版方法模式

3. 观察者模式

4. 迭代器模式

5. 职责链模式

6. 命令模式

* 行为型 - 2

1. 备忘录模式

2. 状态模式

3. 访问者模式

4. 中介者模式

5. 解释器模式