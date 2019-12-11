// this class will generate CURD functions
// and it will call functions inside ../Property/PropertyGenerator.ts
// write generated code to out put file directly

import { GeneratePrimaryPropertySet, GeneratePrimaryPropertyGet } from '../Property/PropertyGenerator'
import { TFModuleMethod } from '../../TFModel/TFModel';

export class MethodGenerator {
    private static instance: MethodGenerator;
    private constructor() {

    }
    public static GetInstance() {
        return MethodGenerator.instance;
    }
    public GenarateCreateFunction(resourceName: string, method: TFModuleMethod, prefix: string, output: string[]) {
        output.push(prefix + "func resource" + resourceName + method.Name + "(d *schema.ResourceData, meta interface{}) error {");
        this.GenerateClientInitBlock(resourceName, prefix + "  ", output);
        //TODO: trigger TF render

        this.GeneratePrameterGetBlock(resourceName, method, prefix + "  ", output);
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

    private GenerateClientInitBlock(resouceName: string, prefix: string, output: string[]) {
        output.push(prefix + "client := meta.");
        output.push(prefix + "ctx, cancel := timeouts.For");
    }

    private GeneratePrameterGetBlock(resourceName: string, method: TFModuleMethod, prefix: string, output: string[])
    {

    }
}