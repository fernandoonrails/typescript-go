//// [tests/cases/conformance/jsx/tsxSpreadAttributesResolution15.tsx] ////

//// [file.tsx]
import React = require('react');

interface ComponentProps {
    property1: string;
    property2: number;
}

export default function Component(props: ComponentProps) {
    return (
        <AnotherComponent {...props} property2 AnotherProperty1="hi"/>
    );
}

interface AnotherComponentProps {
    property1: string;
    AnotherProperty1: string;
    property2: boolean;
}

function AnotherComponent({ property1 }: AnotherComponentProps) {
    return (
        <span>{property1}</span>
    );
}

//// [file.jsx]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
function Component(props) {
    return (<AnotherComponent {...props} property2 AnotherProperty1="hi"/>);
}
function AnotherComponent({ property1 }) {
    return (<span>{property1}</span>);
}
