// this file is main entrance of terraform code generator
// four parts will automatically generated, including:
// 1. schema function, which returns *schema.Resource
// 2. CURD function, in each function, 3 or 4 may be called
// 3. flatten function: 
// 4. expand function:
// this four parts consist of a terraform source code
import { AutoRestExtension, Channel } from '@azure-tools/autorest-extension-base';
import { ModelMapGenerator } from './TFModel/ModelMapGenerator';

// class Main {
//     public constructor() {

//     }

//     // write generated code to output file directly
//     public GenarateTerraformCode() {
//         // pre-process:
//         // step 1. construct CodeModel, which may include:
//         //   1. parse yaml from cli common module
//         //   2. merge override configure with main configure

//         // main process:
//         // step 1: generate schema function
//         // step 2: generate CURD function
//         let method_generator_ins = MethodGenerator.GetInstance();
//         method_generator_ins.GenarateCreateFunction();
//         method_generator_ins.GenerateReadFunction();
//         method_generator_ins.GenerateUpdateFunction();
//         method_generator_ins.GenerateDeleteFunction();

//         // step 3: generate flatten function
//         let flatten_method_generator_ins = FlattenMethodGenerator.GetInstance();
//         flatten_method_generator_ins.GenarateFlattenFunction();

//         // step 4: generate expand function
//         let expand_method_generator_ins = ExpandMethodGenerator.GetInstance();
//         expand_method_generator_ins.GenarateExpandFunction();

//     }
// }

export async function main()
{
    const extension = new AutoRestExtension();
    extension.Add("terraform", async autoRestApi => {
        let log = await autoRestApi.GetValue("log");
        function Info(s: string)
        {
            if (log)
            {
                autoRestApi.Message({
                    Channel: Channel.Information,
                    Text: s
                });
            }
        }

        function Error(s: string)
        {
            autoRestApi.Message({
                Channel: Channel.Error,
                Text: s
            });
        }

        try
        {
            // read files offered to this plugin
            const inputFileUris = await autoRestApi.ListInputs();

            const inputFiles: string[] = await Promise.all(inputFileUris.map(uri => autoRestApi.ReadFile(uri)));

            let writeIntermediate: boolean = false;

            // namespace is the only obligatory option
            // we will derive default "package-name" and "root-name" from it
            const namespace = await autoRestApi.GetValue("namespace");

            if (!namespace)
            {
                Error("\"namespace\" is not defined, please add readme.cli.md file to the specification.");
                return;
            }

            // package name and group name can be guessed from namespace
            let packageName = await autoRestApi.GetValue("package-name") || namespace.replace(/\./g, '-');
            let cliName = await autoRestApi.GetValue("group-name") || await autoRestApi.GetValue("cli-name") || packageName.split('-').pop();

            // this will be obsolete
            let adjustments = await autoRestApi.GetValue("adjustments");

            let cliCommandOverrides = await autoRestApi.GetValue("cmd-override");
            let optionOverrides = await autoRestApi.GetValue("option-override");

            let testScenario: any[] = await autoRestApi.GetValue("test-setup") || await autoRestApi.GetValue("test-scenario");

            // TODO: parser input parameters

            for (let iff of inputFiles)
            {
                let climodel = JSON.parse(iff);

                let mapGenerator = new ModelMapGenerator(climodel, cliName, function(msg: string) {
                    if (log == "map")
                    {
                        Info(msg);
                    }
                }, Error);

            }

        }
        catch (e)
        {
            Error(e.message + " -- " + JSON.stringify(e.stack));
        }
    });
}

main();