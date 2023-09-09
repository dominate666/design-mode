/* （1）多态
多态最根本的作用就是通过把过程化的条件分支语句转化为对象的多态性，从而
消除这些条件分支语句 
  导演喊出“action”
    主角开始背台词
    照明师负责打灯光，
    群众演员假装中枪倒地
*/
// 修改前
var makeSound = function (animal) {
  if (animal instanceof Duck) {
    console.log("嘎嘎嘎");
  } else if (animal instanceof Chicken) {
    console.log("咯咯咯");
  }
};
var Duck = function () {};
var Chicken = function () {};
// makeSound(new Duck()); // 嘎嘎嘎
// makeSound(new Chicken()); // 咯咯咯

// 修改后 （多态思想--将“不变的事物”与 “可能改变的事物”分离开来）
// 1.所有的动物都会发出叫声
var makeSound = function (animal) {
  animal.sound();
};
// 2.把可变的部分各自封装起来
var Duck = function () {};
Duck.prototype.sound = function () {
  console.log("嘎嘎嘎");
};
var Chicken = function () {};
Chicken.prototype.sound = function () {
  console.log("咯咯咯");
};

/*3.如果有一天动物世界里又增加了一只狗，这时候只要简单地追加一些代码就可以了，
makeSound 函数而不用改动以前的*/
var Dog = function () {};
Dog.prototype.sound = function () {
  console.log("汪汪汪");
};
// makeSound(new Dog());

let googleMap = {
  show: function () {
    console.log("开始渲染谷歌地图");
  },
};
let baiduMap = {
  show: function () {
    console.log("开始渲染百度地图");
  },
};
let sosoMap = {
  show: function () {
    console.log("开始渲染搜搜地图");
  },
};

let renderMap = function (map) {
  if (map.show instanceof Function) {
    map.show();
  }
};
renderMap(baiduMap);
renderMap(googleMap);
renderMap(sosoMap);

/*
 （2）封装（封装的目的是将信息隐藏）
  
*/

let myObject = (function () {
  let _name = "seven";
  return {
    getName: function () {
      return _name;
    },
  };
})();
// console.log(myObject.getName());
// console.log(myObject._name);

