// this class will generate CURD functions
// and it will call functions inside ../Property/PropertyGenerator.ts
// write generated code to out put file directly

import { GeneratePrimaryPropertySet, GeneratePrimaryPropertyGet } from '../Property/PropertyGenerator'

export class MethodGenerator {
    private static instance: MethodGenerator;
    private constructor() {

    }
    public static GetInstance() {
        return MethodGenerator.instance;
    }
    public GenarateCreateFunction() {
        return "";
    }
    public GenerateReadFunction() {
        return "";
    }
    public GenerateUpdateFunction() {
        return "";
    }
    public GenerateDeleteFunction() {
        return "";
    }
}