import { ModuleOption } from '../../Common/ModuleMap';
import { MethodGenerator } from '../Generator/Method/MethodGenerator';
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
export enum TFModuleOptionKind
{
    MODULE_OPTION_PATH,
    MODULE_OPTION_BODY,
    MODULE_OPTION_PLACEHOLDER,
    MODULE_OPTION_HEADER
}

export enum TFModuleMethodKind
{
    MODULE_METHOD_CREATE,
    MODULE_METHOD_UPDATE,
    MODULE_METHOD_DELETE,
    MODULE_METHOD_GET,
    MODULE_METHOD_LIST,
    MODULE_METHOD_ACTION,
    MODULE_METHOD_GET_OTHER,
    MODULE_METHOD_OTHER
}
export class TFModuleMethod
{
    public Name: string = null;
    public Options: string[] = null;
    public RequiredOptions: string[] = null;
    public Url: string = "";
    public HttpMethod: string = "";
    public IsAsync: boolean = false;
    public Documentation: string = "";
    public Kind: TFModuleMethodKind;
}

export class TFModuel
{
    public ModuleName: string = null;
    public Options: TFModuleOption[] = null;
    public Methods: TFModuleMethod[] = null;
    public ResponseFields: TFModuleOption[] = null;
    public ModuleOperationNameUpper: string = null;
    public ModuleOperationName: string = null;
    public ObjectName: string = null;
    public ResourceNameFieldInResponse: string = null;
    public NeedsDeleteBeforeUpdate: boolean = false;
    public NeedsForceUpdate: boolean = false;
    public NeedImported: boolean = false;
    // public CannotTestUpdate: boolean = false;
    public Provider: string = "";
    public ApiVersion: string = "";
    // public Examples: Example[];
}