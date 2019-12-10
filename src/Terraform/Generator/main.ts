// this file is main entrance of terraform code generator
// four parts will automatically generated, including:
// 1. schema function, which returns *schema.Resource
// 2. CURD function, in each function, 3 or 4 may be called
// 3. flatten function: 
// 4. expand function:
// this four parts consist of a terraform source code

import { MethodGenerator } from '../Generator/Method/MethodGenerator'
import { FlattenMethodGenerator } from '../Generator/Flatten/FlattenMethodGenerator'
import { ExpandMethodGenerator } from '../Generator/Expand/ExpandMethodGenerator'

class Main {
    public constructor() {

    }

    // write generated code to output file directly
    public GenarateTerraformCode() {
        // pre-process:
        // step 1. construct CodeModel, which may include:
        //   1. parse yaml from cli common module
        //   2. merge override configure with main configure

        // main process:
        // step 1: generate schema function
        // step 2: generate CURD function
        let method_generator_ins = MethodGenerator.GetInstance();
        method_generator_ins.GenarateCreateFunction();
        method_generator_ins.GenerateReadFunction();
        method_generator_ins.GenerateUpdateFunction();
        method_generator_ins.GenerateDeleteFunction();

        // step 3: generate flatten function
        let flatten_method_generator_ins = FlattenMethodGenerator.GetInstance();
        flatten_method_generator_ins.GenarateFlattenFunction();

        // step 4: generate expand function
        let expand_method_generator_ins = ExpandMethodGenerator.GetInstance();
        expand_method_generator_ins.GenarateExpandFunction();

    }
}