import { TFModuleOption } from '../../TFModel/TFModel';

export function GeneratePrimaryPropertySet(tf_model: TFModuleOption): string {
    if (tf_model.GoSchemaName == null || tf_model.GoVariableName == null || tf_model.GoSchemaName == "" || tf_model.GoVariableName == "") {
        console.log("null name detected, code gen may fail, GoSchemaName is %s and GoVariableName is %s", tf_model.GoSchemaName, tf_model.GoVariableName);
        return "";
    }
    return "d.Set(\"" + tf_model.GoSchemaName + "\", " + tf_model.GoVariableName + ")";
}

export function GeneratePrimaryPropertyGet(tf_model: TFModuleOption): string {
    if (tf_model.GoSchemaName == null || tf_model.GoVariableName == null || tf_model.GoTypeName == null || tf_model.GoSchemaName == "" || tf_model.GoVariableName == "" || tf_model.GoTypeName == "") {
        console.log("null name detected, code gen may fail, GoSchemaName is %s and GoVariableName is %s and GoTypeName is %s", tf_model.GoSchemaName, tf_model.GoVariableName, tf_model.GoTypeName);
        return "";
    }
    return tf_model.GoVariableName + " := " + "d.Get(\"" + tf_model.GoSchemaName + "\").(" + tf_model.GoTypeName + ")"
}