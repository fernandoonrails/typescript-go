//// [tests/cases/compiler/sourceMapValidationDo.ts] ////

//// [sourceMapValidationDo.ts]
var i = 0;
do
{
    i++;
} while (i < 10);
do {
    i++;
} while (i < 20);

//// [sourceMapValidationDo.js]
var i = 0;
do {
    i++;
} while (i < 10);
do {
    i++;
} while (i < 20);
