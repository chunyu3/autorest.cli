// this class will generate flatten functions
// and it will be called from ../Method/MethodGenerator.ts
// write generated code to out put file directly

export class FlattenMethodGenerator {
    private static instance: FlattenMethodGenerator;
    private constructor() {

    }
    public static GetInstance() {
        return FlattenMethodGenerator.instance;
    }
    public GenarateFlattenFunction() {
        return "";
    }
}