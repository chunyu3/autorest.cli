import { TFModuleOption } from '../../TFModel/TFModel';

export function GeneratePrimaryPropertySet(tf_model: TFModuleOption): string {
    return "d.Set(\"" + tf_model.GoSchemaName + "\", " + tf_model.GoVariableName + ")";
}

export function GeneratePrimaryPropertyGet(tf_model: TFModuleOption): string {
    return tf_model.GoVariableName + " := " + "d.Get(\"" + tf_model.GoSchemaName + "\").(" + tf_model.GoTypeName + ")"
}