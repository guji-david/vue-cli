let Vue; //vue的构造函数

const forEach = (obj, callback) => {
  Object.keys(obj).forEach(key => {
    callback(key, obj[key]);
  });
};

class ModuleCollection {
  constructor(options) {
    this.register([], options);
  }

  register(path, rootModule) {

    //
    let newModule = {
      _raw: rootModule,
      _children: {},
      state: rootModule.state
    };
    //
    if (path.length === 0) {
      this.root = newModule;
    } else {
    //   let parent = realparent;
    //   console.log(parent);
    //
    //   parent._children[path[path.length - 1]] = newModule;
      //[a,b,c]
      //array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
      // 参数	描述
      // total	必需。初始值, 或者计算结束后的返回值。
      // currentValue	必需。当前元素
      // currentIndex	可选。当前元素的索引
      // arr	可选。当前元素所属的数组对象。
      // initialValue	可选。传递给函数的初始值
      //reduce如果数组为空 (最后的参数)会传一个上一次的值,直接吧传入的值返回
       let parent = path.slice(0, -1).reduce((root, current) => {
       //这两种好像都好使
        console.log(root);
        console.log(current);
        return root._children[current]


        // return this.root._children[current];
      }, this.root);

      parent._children[path[path.length - 1]] = newModule;
    }
    if (rootModule.modules) {
      forEach(rootModule.modules, (moduleName, module) => {
        this.register(path.concat(moduleName), module,newModule);

      });

    }
  }
}

//我需要递归树 讲结果挂载 getters motations actions
const installModule = (store, state, path, rootModule) => {
  if (path.length > 0) {
    //子模块 把子模块的状态放到父模块上
    let parent = path.slice(0, -1).reduce((state, current) => {
      return state[current];
    }, state);
    Vue.set(parent, path[path.length - 1], rootModule.state);
  }

  //需要先处理根模块的getters属性
  let getters = rootModule._raw.getters;
  if (getters) {
    //给store 增加了getters属性
    forEach(getters, (getterName, fn) => {
      Object.defineProperty(store.getters, getterName, {
        get: () => {
          return fn(rootModule.state);
        }
      });
    });
  }

  let mutations = rootModule._raw.mutations;
  if (mutations) {
    forEach(mutations, (mutationName, fn) => {
      let arr =
        store.mutations[mutationName] || (store.mutations[mutationName] = []);
      arr.push(payload => {
        // fn.call(store,rootModule.state,payload)
        fn(rootModule.state, payload);
      });
    });
  }

  let actions = rootModule._raw.actions;
  if (actions) {
    forEach(actions, (actionName, fn) => {
      let arr = store.actions[actionName] || (store.actions[actionName] = []);
      arr.push(payload => {
        // fn.call(store,store,payload)
        fn(store, payload);
      });
    });
  }

  forEach(rootModule._children, (moduleName, module) => {
    installModule(store, state, path.concat(moduleName), module);
  });
};

class Store {
  constructor(options) {
    // this._s = options.state;
    this._vm = new Vue({
      //面试会问什么时候用到了newVue
      data: {
        state: options.state //八队想变成了可以监控的对象
      }
      // data() {
      //     return {
      //         state:options.state
      //     }
      // },
    });

    // let getters = options.getters || {}; //用户传递过来的getters
    this.getters = {};
    //把getters属性定义到 this.getters中,并且根据状态的变化重新执行此函数
    // forEach(getters, (getterName, fn) => {
    //   Object.defineProperty(this.getters, getterName, {
    //     // get(){ --- 这样写 会出问题 (应该是this指向的关系)
    //     get: () => {
    //       return fn(this.state);
    //     }
    //   });
    // });

    // let mutations = options.mutations || {};
    this.mutations = {};
    // forEach(mutations, (mutationName, fn) => {
    //   //先把用户传递过来的mutations放到我们的store实力上
    //   this.mutations[mutationName] = payload => {
    //     //如果希望调用的时方法(函数)的this也是store,这样可以保证每次调用是的this一致
    //     fn.call(this, this.state, payload);
    //     // fn(this.state,payload)
    //   };
    // });

    // let actions = options.actions || {};
    this.actions = {};
    // forEach(actions, (actionName, fn) => {
    //   this.actions[actionName] = payload => {
    //     //如果希望调用的时方法(函数)的this也是store,这样可以保证每次调用是的this一致,异步的时候不这么写 方法(函数) 中的this是undefind
    //     fn.call(this,this, payload);
    //     // fn(this, payload);
    //   };
    // });

    //这里视屏上说  1 是bind原理,但并未生效;
    // 2 & 3是可以生效的 ----- 最终使用的是es7的语法
    //1------
    // let {dispatch,commit} = this;
    // this.dispatch = ()=>{dispatch.call(this)};
    // this.commit = ()=>{commit.call(this)};

    //2------
    // let {dispatch,commit} = this;
    // this.dispatch = dispatch.bind(this);
    // this.commit = commit.bind(this);

    //3------
    this.dispatch = this.dispatch.bind(this);
    this.commit = this.commit.bind(this);

    //我需要先格式化一下当前用户传来的数据
    // let root = {
    //     _raw:rootModule,
    //     state:rootModule.state,
    //     _children:{
    //         a:{
    //             _raw:aModule,
    //             _children:{},
    //             state:{}
    //         },
    //         a:{
    //             _raw:bModule,
    //             _children:{},
    //             state:{}
    //         }
    //     }
    // }
    //收集所有的模块
    this.modules = new ModuleCollection(options);
    console.log("this.modules", this.modules);
    //this$store 包含着getters mutations actions
    installModule(this, this.state, [], this.modules.root); //安装模块
  }

  dispatch(type,payload){
  // dispatch = (type, payload) => {
    this.actions[type].forEach(fn => fn(payload));
  };

  commit(type,payload){
  // commit = (type, payload) => {
    //找到对应的action执行
    this.mutations[type].forEach(fn => fn(payload));
  };

  get state() {
    //store.state
    // return this._s;
    return this._vm.state; //上线是用实例了所以这里要在实例的state里面取
  }
}

//vue的组件渲染 先渲染父组件 再渲染子组件 深度优先
const install = _Vue => {
  Vue = _Vue;
  //我需要给每一个组件都注册一个this.$store的属性
  Vue.mixin({
    beforeCreate() {
      //生命周期在组件创建之前
      //需要先判别是父组件还是子组件,如果死子组件 应该把父组件的store增加给子组件
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store;
      } else {
        this.$store = this.$parent && this.$parent.$store;
      }
    }
  });
};

export default {
  install,
  Store
};

//namesapce 命名空间
//registeermodule
//store.subscribe() vuex 中间件
