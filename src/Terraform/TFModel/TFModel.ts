import { ModuleOption } from '../../Common/ModuleMap';
export class TFModuleOption extends ModuleOption {
    public constructor(name: string, type: string, required: boolean)
    {
        super(name, type, required);
    }
    public GoTypeName: string = null;
    public GoFieldName: string = null;
    public GoVariableName: string = null;
    public GoSchemaName: string = null;
    public ValidateFunc: string = null;
    public IsForceNew: boolean = false;
    public IsFlatten: boolean = false;
    public SchemaFunc: string = null;
    public FlattenFunc: string = null;
    public ExpandFunc: string = null;
}