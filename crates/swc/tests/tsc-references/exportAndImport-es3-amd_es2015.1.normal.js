// @filename: m2.ts
import f1 from "./m1";
//@module: amd
//@target: ES3
// @filename: m1.ts
export default function f1() {};
export default function f2() {
    f1();
};
