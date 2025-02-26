//// [/src/lib/a.d.ts.map]
{"version":3,"file":"a.d.ts","sourceRoot":"","sources":["../src/a.ts"],"names":[],"mappings":"AAAA,qBAAa,CAAC;IAAG,IAAI,SAAW;CAAE;AAGlC,MAAM,WAAW,CAAC;IAChB,CAAC,EAAE,CAAC,CAAC;CACN"}

//// [/src/src/a.ts]
export class B { prop = "hello"; }

class C { }
export interface A {
  b: B;
}


//// [/src/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "-15964756381-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> {}\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "-15964756381-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> {}\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };"
      },
      "./src/a.ts": {
        "version": "6651905050-export class B { prop = \"hello\"; }\n\nclass C { }\nexport interface A {\n  b: B;\n}\n",
        "signature": "-14608980923-export declare class B {\r\n    prop: string;\r\n}\r\nexport interface A {\r\n    b: B;\r\n}\r\n//# sourceMappingURL=a.d.ts.map"
      },
      "./src/c.ts": {
        "version": "429593025-import { A } from \"./a\";\n\nexport interface C {\n  a: A;\n}\n",
        "signature": "-21569163793-import { A } from \"./a\";\r\nexport interface C {\r\n    a: A;\r\n}\r\n//# sourceMappingURL=c.d.ts.map"
      },
      "./src/b.ts": {
        "version": "-2273488249-import { C } from \"./c\";\n\nexport interface B {\n  b: C;\n}\n",
        "signature": "25318058868-import { C } from \"./c\";\r\nexport interface B {\r\n    b: C;\r\n}\r\n//# sourceMappingURL=b.d.ts.map"
      }
    },
    "options": {
      "incremental": true,
      "target": 1,
      "module": 1,
      "declaration": true,
      "declarationMap": true,
      "sourceMap": true,
      "outDir": "./lib",
      "composite": true,
      "strict": true,
      "esModuleInterop": true,
      "alwaysStrict": true,
      "rootDir": "./src",
      "emitDeclarationOnly": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/b.ts": [
        "./src/c.ts"
      ],
      "./src/c.ts": [
        "./src/a.ts"
      ]
    },
    "exportedModulesMap": {
      "./src/b.ts": [
        "./src/c.ts"
      ],
      "./src/c.ts": [
        "./src/a.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../lib/lib.d.ts",
      "./src/a.ts",
      "./src/b.ts",
      "./src/c.ts"
    ]
  },
  "version": "FakeTSVersion"
}

