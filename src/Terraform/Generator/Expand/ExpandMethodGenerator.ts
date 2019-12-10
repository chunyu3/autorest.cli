// this class will generate expand functions
// and it will be called from ../Method/MethodGenerator.ts
// write generated code to out put file directly

export class ExpandMethodGenerator {
    private static instance: ExpandMethodGenerator;
    private constructor() {

    }
    public static GetInstance() {
        return ExpandMethodGenerator.instance;
    }
    public GenarateExpandFunction() {
        return "";
    }
}