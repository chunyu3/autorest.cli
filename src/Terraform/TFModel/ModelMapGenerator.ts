import { MapModuleGroup, ModuleOption } from '../../Common/ModuleMap';
import { TFModuleOption } from './TFModel';
import { LogCallback } from '../..';
export class ModelMapGenerator {
    public constructor(swagger: any,
                        cliName: string,
                        cb: LogCallback,
                        errorCb: LogCallback)
    {

    }
    public map:MapModuleGroup = null;
    public transfer()
    {
        let option:ModuleOption = new ModuleOption("option1", "str", false);
        let child: TFModuleOption = new TFModuleOption("childoption", "string", true);
        child.GoTypeName = "gotype"
        var arr: ModuleOption[] = [];
        let optionchild:TFModuleOption = option as TFModuleOption;
        // optionchild.GoTypeName = "option1go";
        arr.push(optionchild);
        arr.push(child);
        let tarr = arr as TFModuleOption[];
        tarr.forEach(option =>{
         
            // let o = option as TFModuleOption;
            // console.log(o.GoTypeName);
            console.log(option.GoTypeName + "," + option.NameSwagger);
        });
    }
}