//// [tests/cases/compiler/es6ClassTest.ts] ////

//// [es6ClassTest.ts]
class Bar {
    public goo: number;
    public prop1(x) {
        return x;
    }

    constructor (n) { }
}

// new-style class
class Foo  extends Bar {
	foo:number;
	gar = 0;
	zoo:string = "zoo";
	x: any;

	bar() { return 0; }

	private boo();
	private boo(x?) { return x; }

    static statVal = 0;

	constructor();
	constructor(x?, private y?:string, public z?=0) {
        super(x);
		this.x = x;
        this.gar = 5;
	 }
}

var f = new Foo();

declare module AmbientMod {
	export class Provide {
		foo:number;
		zoo:string;

		constructor();
		
		private boo();
		bar();
	}
}


//class GetSetMonster {


//  // attack(target) {
//  //     WScript.Echo("Attacks " + target);
//  // }
//  // The contextual keyword "get" followed by an identifier and
//  // a curly body defines a getter in the same way that "get"
//  // defines one in an object literal.
//  // get isAlive() {
//  //   return this.health > 0;
//  // }
 
//  // Likewise, "set" can be used to define setters.
//  set health(value:number) {
//    if (value < 0) {
//      throw new Error('Health must be non-negative.')
//    }
//    this.health = value
//  }
//  get health() { return 0; }

//  constructor(this.name: string, health: number) {
//    this.health = 0;
//  }
//}


//class bar {

//   static fnOverload( );

//   static fnOverload(foo: string){ } // no error

//   constructor(){};    

//}


//// [es6ClassTest.js]
class Bar {
    goo;
    prop1(x) {
        return x;
    }
    constructor(n) { }
}
// new-style class
class Foo extends Bar {
    y;
    z;
    foo;
    gar = 0;
    zoo = "zoo";
    x;
    bar() { return 0; }
    boo(x) { return x; }
    static statVal = 0;
    constructor(x, y, z = 0) {
        super(x);
        this.y = y;
        this.z = z;
        this.x = x;
        this.gar = 5;
    }
}
var f = new Foo();
//class GetSetMonster {
//  // attack(target) {
//  //     WScript.Echo("Attacks " + target);
//  // }
//  // The contextual keyword "get" followed by an identifier and
//  // a curly body defines a getter in the same way that "get"
//  // defines one in an object literal.
//  // get isAlive() {
//  //   return this.health > 0;
//  // }
//  // Likewise, "set" can be used to define setters.
//  set health(value:number) {
//    if (value < 0) {
//      throw new Error('Health must be non-negative.')
//    }
//    this.health = value
//  }
//  get health() { return 0; }
//  constructor(this.name: string, health: number) {
//    this.health = 0;
//  }
//}
//class bar {
//   static fnOverload( );
//   static fnOverload(foo: string){ } // no error
//   constructor(){};    
//}
