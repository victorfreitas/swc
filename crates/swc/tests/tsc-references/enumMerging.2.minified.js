//// [enumMerging.ts]
// Enum with only constant members across 2 declarations with the same root module
// Enum with initializer in all declarations with constant members with the same root module
var M1, M2, M3, M4, M5, M6, M11, EImpl1, EImpl11, EImpl12, EConst1, EConst11, M21, EComp2, EComp21, EComp22, EInit, EInit1, EInit2, M41, Color, M51, Color1, M61, A, Color2, M62, A1, Color3, A2;
M11 = M1 || (M1 = {}), (EImpl11 = EImpl1 || (EImpl1 = {}))[EImpl11.A = 0] = "A", EImpl11[EImpl11.B = 1] = "B", EImpl11[EImpl11.C = 2] = "C", (EImpl12 = EImpl1 || (EImpl1 = {}))[EImpl12.D = 1] = "D", EImpl12[EImpl12.E = 2] = "E", EImpl12[EImpl12.F = 3] = "F", (EConst1 = M11.EConst1 || (M11.EConst1 = {}))[EConst1.A = 3] = "A", EConst1[EConst1.B = 2] = "B", EConst1[EConst1.C = 1] = "C", (EConst11 = M11.EConst1 || (M11.EConst1 = {}))[EConst11.D = 7] = "D", EConst11[EConst11.E = 9] = "E", EConst11[EConst11.F = 8] = "F", (EComp21 = EComp2 = (M21 = M2 || (M2 = {})).EComp2 || (M21.EComp2 = {}))[EComp21.A = 3] = "A", EComp21[EComp21.B = 3] = "B", EComp21[EComp21.C = 3] = "C", (EComp22 = EComp2 = M21.EComp2 || (M21.EComp2 = {}))[EComp22.D = 3] = "D", EComp22[EComp22.E = 3] = "E", EComp22[EComp22.F = 3] = "F", EComp2.A, EComp2.B, EComp2.C, EComp2.D, EComp2.E, EComp2.F, M3 || (M3 = {}), (EInit1 = EInit || (EInit = {}))[EInit1.A = 0] = "A", EInit1[EInit1.B = 1] = "B", (EInit2 = EInit || (EInit = {}))[EInit2.C = 1] = "C", EInit2[EInit2.D = 2] = "D", EInit2[EInit2.E = 3] = "E", (Color = (M41 = M4 || (M4 = {})).Color || (M41.Color = {}))[Color.Red = 0] = "Red", Color[Color.Green = 1] = "Green", Color[Color.Blue = 2] = "Blue", (Color1 = (M51 = M5 || (M5 = {})).Color || (M51.Color = {}))[Color1.Red = 0] = "Red", Color1[Color1.Green = 1] = "Green", Color1[Color1.Blue = 2] = "Blue", (Color2 = (A = (M61 = M6 || (M6 = {})).A || (M61.A = {})).Color || (A.Color = {}))[Color2.Red = 0] = "Red", Color2[Color2.Green = 1] = "Green", Color2[Color2.Blue = 2] = "Blue", (Color3 = (A1 = A2 = (M62 = M6 || (M6 = {})).A || (M62.A = {})).Color || (A1.Color = {}))[Color3.Yellow = 1] = "Yellow", A2.Color.Yellow, A2.Color.Red;
