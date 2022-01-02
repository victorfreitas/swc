// @allowJs: true
// @checkJs: true
// @outDir: /out
// @lib: es6
// @declaration: true
// @filename: index.js
export class A {
    /** @returns {this} */ method() {
        return this;
    }
}
class Base extends A {
    // This method is required to reproduce #35932
    verify() {}
}
export { Base as default };
