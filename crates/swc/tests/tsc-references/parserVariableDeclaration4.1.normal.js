//// [parserVariableDeclaration4.ts]
//! 
//!   x `declare` modifier not allowed for code already in an ambient context
//!    ,-[1:1]
//!  1 | declare module M {
//!  2 |    declare var v;
//!    :    ^^^^^^^
//!  3 | }
//!    `----
