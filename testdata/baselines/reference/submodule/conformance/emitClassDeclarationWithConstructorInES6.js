//// [tests/cases/conformance/es6/classDeclaration/emitClassDeclarationWithConstructorInES6.ts] ////

//// [emitClassDeclarationWithConstructorInES6.ts]
class A {
    y: number;
    constructor(x: number) {
    }
    foo(a: any);
    foo() { }
}

class B {
    y: number;
    x: string = "hello";
    _bar: string;

    constructor(x: number, z = "hello", ...args) {
        this.y = 10;
    }
    baz(...args): string;
    baz(z: string, v: number): string {
        return this._bar;
    } 
}




//// [emitClassDeclarationWithConstructorInES6.js]
class A {
    y;
    constructor(x) {
    }
    foo() { }
}
class B {
    y;
    x = "hello";
    _bar;
    constructor(x, z = "hello", ...args) {
        this.y = 10;
    }
    baz(z, v) {
        return this._bar;
    }
}
