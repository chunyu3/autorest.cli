import { GeneratePrimaryPropertySet, GeneratePrimaryPropertyGet } from '../Generator/Property/PropertyGenerator'
import { TFModuleOption } from '../TFModel/TFModel';
import { expect } from 'chai';
import 'mocha';

describe('get test', () => {
    it('should pass', () => {
        let result: string = "test";
        let tf_model: TFModuleOption = new TFModuleOption("unit_test_name", "uinttest_type", true);
        tf_model.GoTypeName = "string";
        tf_model.GoSchemaName = "go_scheme_name";
        tf_model.GoVariableName = "go_variable_name";
        var set_name = GeneratePrimaryPropertySet(tf_model);
        console.log(set_name);
        expect(set_name).to.equal("d.Set(\"go_scheme_name\", go_variable_name)");
        var get_name = GeneratePrimaryPropertyGet(tf_model);
        console.log(get_name);
        expect(get_name).to.equal("go_variable_name := d.Get(\"go_scheme_name\").(string)");
    });
});
