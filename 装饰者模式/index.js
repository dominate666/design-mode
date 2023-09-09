// @ts-nocheck
Function.prototype.before = function (beforefn) {
  let _self = this; // func.before(function () {})此时_self表示的是func这个函数
  return function () {
    beforefn.apply(this, arguments);
    return _self.apply(this, arguments);
  };
};

Function.prototype.after = function (afterfn) {
  let _self = this;
  return function () {
    let ret = _self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  };
};

let func = function test() {
  console.log(2);
};

func = func
  .before(function () {
    console.log(1);
  })
  .after(function () {
    console.log(3);
  });
func();
