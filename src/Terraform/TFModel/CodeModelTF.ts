import { LogCallback } from '../../index';
import { MapModuleGroup, Module } from '../../Common/ModuleMap';
export class CodeModelTF
{
    public constructor(map: MapModuleGroup, overrides: any, sdkModelMap: any, tfRender: any, cb: LogCallback) {
        this.Map = map;
        this.Overrides = overrides;
        this.SdkModelMap = sdkModelMap;
        this._log = cb;
    }

    public Generate() : MapModuleGroup
    {
        let map: MapModuleGroup = new MapModuleGroup();
        for (var idx = 0; idx < map.Modules.length; idx++) {
            this.AddModule(map.Modules[idx]);
        }
        return map;
    }

    public AddModule(module:Module)
    {

    }

    public GetOptionTypeMap(stype: string, format: string): ModuleTypeMaping
    {
        let typemap: ModuleTypeMaping;
        switch(stype)
        {
            case "number":
                {
                    if (format == "int32") {
                        typemap = this.SdkModelMap["integer"];
                    } else if (format == "double") {
                        typemap = this.SdkModelMap["double"];
                    }
                    break;
                }
            default:
                    typemap = this.SdkModelMap[stype];
        }

        return typemap;
    }

    /** 
     * paramter:
     * * stype: the type defined in swagger
     * * format: the format of an number, e.g. int32. for type except number, format is empty string.
     * * kind: define what the type is for, schema, gosdk
    */
    public GetOptionType(stype: string, format:string, kind: string): string
    {
        let type:string;
        let typemap: ModuleTypeMaping;
        switch(stype)
        {
            case "number":
                {
                    if (format == "int32") {
                        typemap = this.SdkModelMap["integer"];
                    } else if (format == "double") {
                        typemap = this.SdkModelMap["double"];
                    }
                    break;
                }
            default:
                    typemap = this.SdkModelMap[stype];
        }

        if (kind == "schema") {
            type = typemap.SchemaType;
        } else if (kind == "gosdk") {
            type = typemap.GOSDKType;
        } else {
            type = typemap.PropertyType;
        }

        return type;

    }

    public Map: MapModuleGroup = null;

    public _log: LogCallback;
    private Overrides: any;
    private SdkModelMap: any = null;
}

export class ModuleTypeMaping {
    public constructor(ptype: string, stype: string, sdktype: string) {
        this.PropertyType = ptype;
        this.SchemaType = stype;
        this.GOSDKType = sdktype;
    }
    public PropertyType: string = "";
    public SchemaType: string = "";
    public GOSDKType: string = "";
}

export function LoadSDKModelConfig(path: string): {[key:string]:ModuleTypeMaping;}
{
    const yaml = require('js-yaml');
    const fs   = require('fs');
    var map : { [key:string]:ModuleTypeMaping; } = {};
    // Get document, or throw exception on error
    try {
      const doc = yaml.safeLoad(fs.readFileSync(path, 'utf8'));
      //console.log(doc);
      let models = doc.modeltypes;
      //console.log(models);
      for (var idx = 0; idx < models.length; idx++)
      {
          let typemap = new ModuleTypeMaping(models[idx].property_type, models[idx].schema_type, models[idx].go_type);
          //console.log(sdkmap);
          map[models[idx].property_type] = typemap;
      }

    } catch (e) {
      console.log(e);
    }
    console.log(map);
    return map;
}

