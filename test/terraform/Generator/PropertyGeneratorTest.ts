import { GeneratePrimaryPropertySet, GeneratePrimaryPropertyGet } from '../../../src/Terraform/Generator/Property/PropertyGenerator'
import { TFModuleOption } from '../../../src/Terraform/TFModel/TFModel';
import { expect } from 'chai';
import 'mocha';

describe('primary property generator test', () => {
    let tf_model: TFModuleOption = new TFModuleOption("unit_test_name", "uinttest_type", true);
    tf_model.GoTypeName = "string";
    tf_model.GoSchemaName = "go_scheme_name";
    tf_model.GoVariableName = "go_variable_name";
    it('setter function generator test must pass', () => {
        var set_name = GeneratePrimaryPropertySet(tf_model);
        console.log(set_name);
        expect(set_name).to.equal("d.Set(\"go_scheme_name\", go_variable_name)");
        tf_model.GoSchemaName = null;
        var null_set_name = GeneratePrimaryPropertySet(tf_model);
        console.log("null set nam is %s", (null_set_name));
        expect(null_set_name).to.equal("");
    });
    it('getter function generator test must pass', () => {
        tf_model.GoSchemaName = "go_scheme_name";
        var get_name = GeneratePrimaryPropertyGet(tf_model);
        console.log(get_name);
        expect(get_name).to.equal("go_variable_name := d.Get(\"go_scheme_name\").(string)");
        tf_model.GoTypeName = "";
        let null_get_name = GeneratePrimaryPropertyGet(tf_model);
        expect(null_get_name).to.equal("");
    });
});
