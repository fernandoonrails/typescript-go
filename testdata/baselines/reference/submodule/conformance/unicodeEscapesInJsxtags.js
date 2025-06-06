//// [tests/cases/conformance/jsx/unicodeEscapesInJsxtags.tsx] ////

//// [file.tsx]
import * as React from "react";
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "a-b": any;
            "a-c": any;
        }
    }
}
const Compa = (x: {x: number}) => <div>{"" + x}</div>;
const x = { video: () => null }

// unicode escape sequence is not allowed in tag name or JSX attribute name.
// tag name:
; <\u0061></a>
; <\u0061-b></a-b>
; <a-\u0063></a-c>
; <Comp\u0061 x={12} />
; <x.\u0076ideo />
; <\u{0061}></a>
; <\u{0061}-b></a-b>
; <a-\u{0063}></a-c>
; <Comp\u{0061} x={12} />

// attribute name
;<video data-\u0076ideo />
;<video \u0073rc="" />


//// [file.js]
const Compa = (x) => <div>{"" + x}</div>;
const x = { video: () => null };
<\u0061></a>;
<\u0061-b></a-b>;
<a-\u0063></a-c>;
<Comp\u0061 x={12}/>;
<x.\u0076ideo />;
<\u{0061}></a>;
<\u{0061}-b></a-b>;
<a-\u{0063}></a-c>;
<Comp\u{0061} x={12}/>;
<video data-\u0076ideo/>;
<video \u0073rc=""/>;
export {};
