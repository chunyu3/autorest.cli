import { expect } from 'chai';
import 'mocha';
import { LoadSDKModelConfig} from '../../../src/Terraform/TFModel/CodeModelTF';
describe("TFModel Test", ()=>{
    it('pass', () => {
        //let map:any[] = LoadSDKModelConfig("D:\\project\\autorest.cli\\test\\terraform\\TFModel\\SDKModelTest.yml");
        let map2:any[] = LoadSDKModelConfig("./src/Terraform/TFModel/TypeMapping.yml");
    });
});