import { LogCallback } from '../../index';
import { MapModuleGroup } from '../../Common/ModuleMap';
export class CodeModelTF
{
    public constructor(map: MapModuleGroup, overrides: any, sdkModelMap: any, tfRender: any, cb: LogCallback) {
        this.Map = map;
        this.Overrides = overrides;
        this.SdkModelMap = sdkModelMap;
        this._log = cb;
    }

    public Map: MapModuleGroup = null;

    public _log: LogCallback;
    private Overrides: any;
    private SdkModelMap: any = null;
}