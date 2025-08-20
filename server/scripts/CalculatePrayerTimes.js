var SolarCalculationsConstants=
{
    PI : 3.1415926535897932384626433832795028841971,
	SUN_RADIUS : 0.26667,
    L_COUNT : 6,
   	B_COUNT : 2,
	R_COUNT : 5,
	Y_COUNT : 63,
	L_MAX_SUBCOUNT : 64,
	B_MAX_SUBCOUNT : 5,
	R_MAX_SUBCOUNT : 40,

	 ABCTerm : { TERM_A:0, TERM_B:1, TERM_C: 2,TERM_COUNT:3 },
	 XTerm : { TERM_X0:0, TERM_X1:1, TERM_X2: 2, TERM_X3:3, TERM_X4:4, TERM_X_COUNT:5 },
	 PSI: { TERM_PSI_A:0, TERM_PSI_B:1, TERM_EPS_C: 2, TERM_EPS_D:3, TERM_PE_COUNT:4 },
	 JD :{ JD_MINUS:0, JD_ZERO:1, JD_PLUS: 2, JD_COUNT:3 },
	 Sun :{ SUN_TRANSIT:0, SUN_RISE:1, SUN_SET: 2, SUN_COUNT:3 },

   TERM_Y_COUNT : 5,

	 l_subcount/*[L_COUNT]*/ : [ 64, 34, 20, 7, 3, 1 ],
	 b_subcount/*[B_COUNT]*/ : [ 5, 2 ],
	 r_subcount/*[R_COUNT]*/ : [ 40, 10, 6, 2, 1 ],

	///////////////////////////////////////////////////
	///  Earth Periodic Terms
	///////////////////////////////////////////////////
	 L_TERMS/*[L_COUNT][L_MAX_SUBCOUNT] [TERM_COUNT]*/:
[
[
	[175347046.0,0,0],
	[3341656.0,4.6692568,6283.07585],
	[34894.0,4.6261,12566.1517],
	[3497.0,2.7441,5753.3849],
	[3418.0,2.8289,3.5231],
	[3136.0,3.6277,77713.7715],
	[2676.0,4.4181,7860.4194],
	[2343.0,6.1352,3930.2097],
	[1324.0,0.7425,11506.7698],
	[1273.0,2.0371,529.691],
	[1199.0,1.1096,1577.3435],
	[990,5.233,5884.927],
	[902,2.045,26.298],
	[857,3.508,398.149],
	[780,1.179,5223.694],
	[753,2.533,5507.553],
	[505,4.583,18849.228],
	[492,4.205,775.523],
	[357,2.92,0.067],
	[317,5.849,11790.629],
	[284,1.899,796.298],
	[271,0.315,10977.079],
	[243,0.345,5486.778],
	[206,4.806,2544.314],
	[205,1.869,5573.143],
	[202,2.458,6069.777],
	[156,0.833,213.299],
	[132,3.411,2942.463],
	[126,1.083,20.775],
	[115,0.645,0.98],
	[103,0.636,4694.003],
	[102,0.976,15720.839],
	[102,4.267,7.114],
	[99,6.21,2146.17],
	[98,0.68,155.42],
	[86,5.98,161000.69],
	[85,1.3,6275.96],
	[85,3.67,71430.7],
	[80,1.81,17260.15],
	[79,3.04,12036.46],
	[75,1.76,5088.63],
	[74,3.5,3154.69],
	[74,4.68,801.82],
	[70,0.83,9437.76],
	[62,3.98,8827.39],
	[61,1.82,7084.9],
	[57,2.78,6286.6],
	[56,4.39,14143.5],
	[56,3.47,6279.55],
	[52,0.19,12139.55],
	[52,1.33,1748.02],
	[51,0.28,5856.48],
	[49,0.49,1194.45],
	[41,5.37,8429.24],
	[41,2.4,19651.05],
	[39,6.17,10447.39],
	[37,6.04,10213.29],
	[37,2.57,1059.38],
	[36,1.71,2352.87],
	[36,1.78,6812.77],
	[33,0.59,17789.85],
	[30,0.44,83996.85],
	[30,2.74,1349.87],
	[25,3.16,4690.48]
],
[
	[628331966747.0,0,0],
	[206059.0,2.678235,6283.07585],
	[4303.0,2.6351,12566.1517],
	[425.0,1.59,3.523],
	[119.0,5.796,26.298],
	[109.0,2.966,1577.344],
	[93,2.59,18849.23],
	[72,1.14,529.69],
	[68,1.87,398.15],
	[67,4.41,5507.55],
	[59,2.89,5223.69],
	[56,2.17,155.42],
	[45,0.4,796.3],
	[36,0.47,775.52],
	[29,2.65,7.11],
	[21,5.34,0.98],
	[19,1.85,5486.78],
	[19,4.97,213.3],
	[17,2.99,6275.96],
	[16,0.03,2544.31],
	[16,1.43,2146.17],
	[15,1.21,10977.08],
	[12,2.83,1748.02],
	[12,3.26,5088.63],
	[12,5.27,1194.45],
	[12,2.08,4694],
	[11,0.77,553.57],
	[10,1.3,6286.6],
	[10,4.24,1349.87],
	[9,2.7,242.73],
	[9,5.64,951.72],
	[8,5.3,2352.87],
	[6,2.65,9437.76],
	[6,4.67,4690.48],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0]
],
[
	[52919.0,0,0],
	[8720.0,1.0721,6283.0758],
	[309.0,0.867,12566.152],
	[27,0.05,3.52],
	[16,5.19,26.3],
	[16,3.68,155.42],
	[10,0.76,18849.23],
	[9,2.06,77713.77],
	[7,0.83,775.52],
	[5,4.66,1577.34],
	[4,1.03,7.11],
	[4,3.44,5573.14],
	[3,5.14,796.3],
	[3,6.05,5507.55],
	[3,1.19,242.73],
	[3,6.12,529.69],
	[3,0.31,398.15],
	[3,2.28,553.57],
	[2,4.38,5223.69],
	[2,3.75,0.98],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0]

],
[
	[289.0,5.844,6283.076],
	[35,0,0],
	[17,5.49,12566.15],
	[3,5.2,155.42],
	[1,4.72,3.52],
	[1,5.3,18849.23],
	[1,5.97,242.73],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0]

],
[
	[114.0,3.142,0],
	[8,4.13,6283.08],
	[1,3.84,12566.15],
	[0,0,0 ],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],

],
[
	[1,3.14,0],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0],
	[0,0,0]

]
],
	 B_TERMS/*[B_COUNT][B_MAX_SUBCOUNT] [TERM_COUNT]*/:
[
[
	[280.0,3.199,84334.662],
	[102.0,5.422,5507.553],
	[80,3.88,5223.69],
	[44,3.7,2352.87],
	[32,4,1577.34]
],
[
	[9,3.9,5507.55],
	[6,1.73,5223.69],
	[0,0,0],
	[0,0,0],
	[0,0,0]
]
],

	 R_TERMS/*[R_COUNT][R_MAX_SUBCOUNT] [TERM_COUNT]*/:
	[
[
	[100013989.0,0,0],
	[1670700.0,3.0984635,6283.07585],
	[13956.0,3.05525,12566.1517],
	[3084.0,5.1985,77713.7715],
	[1628.0,1.1739,5753.3849],
	[1576.0,2.8469,7860.4194],
	[925.0,5.453,11506.77],
	[542.0,4.564,3930.21],
	[472.0,3.661,5884.927],
	[346.0,0.964,5507.553],
	[329.0,5.9,5223.694],
	[307.0,0.299,5573.143],
	[243.0,4.273,11790.629],
	[212.0,5.847,1577.344],
	[186.0,5.022,10977.079],
	[175.0,3.012,18849.228],
	[110.0,5.055,5486.778],
	[98,0.89,6069.78],
	[86,5.69,15720.84],
	[86,1.27,161000.69],
	[65,0.27,17260.15],
	[63,0.92,529.69],
	[57,2.01,83996.85],
	[56,5.24,71430.7],
	[49,3.25,2544.31],
	[47,2.58,775.52],
	[45,5.54,9437.76],
	[43,6.01,6275.96],
	[39,5.36,4694],
	[38,2.39,8827.39],
	[37,0.83,19651.05],
	[37,4.9,12139.55],
	[36,1.67,12036.46],
	[35,1.84,2942.46],
	[33,0.24,7084.9],
	[32,0.18,5088.63],
	[32,1.78,398.15],
	[28,1.21,6286.6],
	[28,1.9,6279.55],
	[26,4.59,10447.39]
],
[
	[103019.0,1.10749,6283.07585],
	[1721.0,1.0644,12566.1517],
	[702.0,3.142,0],
	[32,1.02,18849.23],
	[31,2.84,5507.55],
	[25,1.32,5223.69],
	[18,1.42,1577.34],
	[10,5.91,10977.08],
	[9,1.42,6275.96],
	[9,0.27,5486.78],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	  [0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	  [0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ]

],
[
	[4359.0,5.7846,6283.0758],
	[124.0,5.579,12566.152],
	[12,3.14,0],
	[9,3.63,77713.77],
	[6,1.87,5573.14],
	[3,5.47,18849.23],
	  [0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	  [0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	  [0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ]

],
[
	[145.0,4.273,6283.076],
	[7,3.92,12566.15],
	  [0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	  [0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	  [0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	  [0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ]

],
[
	[4,2.56,6283.08],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	  [0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	  [0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	  [0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ],
	[0,0,0 ]

]
	],
	////////////////////////////////////////////////////////////////
	///  Periodic Terms for the nutation in longitude and obliquity
	////////////////////////////////////////////////////////////////

 Y_TERMS/*[Y_COUNT][TERM_Y_COUNT]*/:
[
[0,0,0,0,1],
[-2,0,0,2,2],
[0,0,0,2,2],
[0,0,0,0,2],
[0,1,0,0,0],
[0,0,1,0,0],
[-2,1,0,2,2],
[0,0,0,2,1],
[0,0,1,2,2],
[-2,-1,0,2,2],
[-2,0,1,0,0],
[-2,0,0,2,1],
[0,0,-1,2,2],
[2,0,0,0,0],
[0,0,1,0,1],
[2,0,-1,2,2],
[0,0,-1,0,1],
[0,0,1,2,1],
[-2,0,2,0,0],
[0,0,-2,2,1],
[2,0,0,2,2],
[0,0,2,2,2],
[0,0,2,0,0],
[-2,0,1,2,2],
[0,0,0,2,0],
[-2,0,0,2,0],
[0,0,-1,2,1],
[0,2,0,0,0],
[2,0,-1,0,1],
[-2,2,0,2,2],
[0,1,0,0,1],
[-2,0,1,0,1],
[0,-1,0,0,1],
[0,0,2,-2,0],
[2,0,-1,2,1],
[2,0,1,2,2],
[0,1,0,2,2],
[-2,1,1,0,0],
[0,-1,0,2,2],
[2,0,0,2,1],
[2,0,1,0,0],
[-2,0,2,2,2],
[-2,0,1,2,1],
[2,0,-2,0,1],
[2,0,0,0,1],
[0,-1,1,0,0],
[-2,-1,0,2,1],
[-2,0,0,0,1],
[0,0,2,2,1],
[-2,0,2,0,1],
[-2,1,0,2,1],
[0,0,1,-2,0],
[-1,0,1,0,0],
[-2,1,0,0,0],
[1,0,0,0,0],
[0,0,1,2,0],
[0,0,-2,2,2],
[-1,-1,1,0,0],
[0,1,1,0,0],
[0,-1,1,2,2],
[2,-1,-1,2,2],
[0,0,3,2,2],
[2,-1,0,2,2],
],
 PE_TERMS/*[Y_COUNT][TERM_PE_COUNT]*/:[
[-171996,-174.2,92025,8.9],
[-13187,-1.6,5736,-3.1],
[-2274,-0.2,977,-0.5],
[2062,0.2,-895,0.5],
[1426,-3.4,54,-0.1],
[712,0.1,-7,0],
[-517,1.2,224,-0.6],
[-386,-0.4,200,0],
[-301,0,129,-0.1],
[217,-0.5,-95,0.3],
[-158,0,0,0],
[129,0.1,-70,0],
[123,0,-53,0],
[63,0,0,0],
[63,0.1,-33,0],
[-59,0,26,0],
[-58,-0.1,32,0],
[-51,0,27,0],
[48,0,0,0],
[46,0,-24,0],
[-38,0,16,0],
[-31,0,13,0],
[29,0,0,0],
[29,0,-12,0],
[26,0,0,0],
[-22,0,0,0],
[21,0,-10,0],
[17,-0.1,0,0],
[16,0,-8,0],
[-16,0.1,7,0],
[-15,0,9,0],
[-13,0,7,0],
[-12,0,6,0],
[11,0,0,0],
[-10,0,5,0],
[-8,0,3,0],
[7,0,-3,0],
[-7,0,0,0],
[-7,0,3,0],
[-7,0,3,0],
[6,0,0,0],
[6,0,-3,0],
[6,0,-3,0],
[-6,0,3,0],
[-6,0,3,0],
[5,0,0,0],
[-5,0,3,0],
[-5,0,3,0],
[-5,0,3,0],
[4,0,0,0],
[4,0,0,0],
[4,0,0,0],
[-4,0,0,0],
[-4,0,0,0],
[-4,0,0,0],
[3,0,0,0],
[-3,0,0,0],
[-3,0,0,0],
[-3,0,0,0],
[-3,0,0,0],
[-3,0,0,0],
[-3,0,0,0],
[-3,0,0,0],
]
}

class SolarClaculations
{
 year;
	 month;
	 day;		
	timeZone;
	fractionOfDay;
	dut1 = 0; //seconds FOR DAY IN THE YEAR 
	delta_t = 67; //FOR JDE
	Alpha;//geocentric right ascention
	jd;
	jc;
	jce;
	jde;
	jme;
	l;
	b;
	r;
	theta;
	beta;
	x0;          //mean elongation (moon-sun) [degrees]
	x1;          //mean anomaly (sun) [degrees]
	x2;          //mean anomaly (moon) [degrees]
	x3;          //argument latitude (moon) [degrees]
	x4;          //ascending longitude (moon) [degrees]
    del_psi;
	del_epsilon;
	epsilon0;    //ecliptic mean obliquity [arc seconds]
	epsilon;     //ecliptic true obliquity  [degrees]
	
	del_tau;     //aberration correction [degrees]
	lamda;       //apparent sun longitude [degrees]
	nu0;         //Greenwich mean sidereal time [degrees]
	nu;          //Greenwich sidereal time [degrees]
	
	alpha;       //geocentric sun right ascension [degrees]
	delta;       //geocentric sun declination [degrees]
	
	h;           //observer hour angle [degrees]
	xi;          //sun equatorial horizontal parallax [degrees]
	del_alpha;   //sun right ascension parallax [degrees]
	delta_prime; //topocentric sun declination [degrees]
	alpha_prime; //topocentric sun right ascension [degrees]
	h_prime;     //topocentric local hour angle [degrees]
	
	e0;          //topocentric elevation angle (uncorrected) [degrees]
	del_e;       //atmospheric refraction correction [degrees]
	e;           //topocentric elevation angle (corrected) [degrees]
	
	eot;         //equation of time [minutes]
	srha;        //sunrise hour angle [degrees]
	ssha;        //sunset hour angle [degrees]
	sta        //sun transit altitude [degrees]	
          JulianEphemerisDay(jd)
			{
	
				return jd + this.delta_t / 86400.0;
			}
			JulianCentury(jd)
			{
				return (jd - 2451545.0) / 36525.0;
			}
			JulianEphemerisCentury(jde)
			{
				return (jde - 2451545.0) / 36525.0;
			}
			JulianEphemerisMillennium(jce)
			{
				return (jce / 10.0);
	
			}
			 sun_mean_longitude( jme)
			{
				return this.limit_degrees(280.4664567 + jme * (360007.6982779 + jme * (0.03032028 +
								jme * (1 / 49931.0 + jme * (-1 / 15300.0 + jme * (-1 / 2000000.0))))));
			}
			 limit_degrees(degrees)
			{
				var limited;
	
				degrees /= 360.0;
				limited = 360.0 * (degrees - Math.floor(degrees));
				if (limited < 0) limited += 360.0;
	
				return limited;
			}
			 rad2deg( radians)
			{
				return (180.0 / SolarCalculationsConstants.PI) * radians;
			}
			 deg2rad( degrees)
			{
				return (SolarCalculationsConstants.PI / 180.0) * degrees;
			}
			 earth_values( term_sum,  count,  jme)
			{
				var i;
				var sum = 0;
	
				for ( var i = 0; i < count; i++)
					sum += term_sum[i] * Math.pow(jme, i);
	
				sum /= 1.0e8;
	
				return sum;
			}
			JulianDay()
			{
				var d = this.day + this.fractionOfDay;
				d += (this.dut1 / 3600);
				if (this.month <= 2)
				{
					this.month += 12;
					this.year -= 1;
				}
	
				var julianDay = Math.floor(365.25 * (this.year + 4716)) +  Math.floor(30.6001 * (this.month + 1)) + d - 1524.5;
				if (julianDay > 2299160.0)
				{
					var a = Math.floor(this.year / 100);
					julianDay += (2 - a + Math.floor(a / 4));
				}
				return julianDay;
			}
			
	
			 earth_heliocentric_longitude( jme)
			{
				 var sum =[];
				var A;
				var B;
				var C;
	
				for ( var l = 0; l < SolarCalculationsConstants.L_COUNT; l++)
				{
					sum[l] = 0.0;
					for ( var i = 0; i < SolarCalculationsConstants.l_subcount[l]; i++)
					{
						A = SolarCalculationsConstants.L_TERMS[l][ i][ SolarCalculationsConstants.ABCTerm.TERM_A];
						B = SolarCalculationsConstants.L_TERMS[l][ i][ SolarCalculationsConstants.ABCTerm.TERM_B];
						C = SolarCalculationsConstants.L_TERMS[l][ i][ SolarCalculationsConstants.ABCTerm.TERM_C];
						sum[l] += A * Math.cos(B + C * jme);
	
					}
					//sum[i] = earth_periodic_term_summation(SolarCalculationsConstants.L_TERMS[l], SolarCalculationsConstants.l_subcount[l], jme);
	
				}
				return this.limit_degrees(this.rad2deg(this.earth_values(sum, SolarCalculationsConstants.L_COUNT, jme)));	
			}
	
			 earth_heliocentric_latitude( jme)
			{
				var sum= [];
				var A;
				var B;
				var C;
				for ( var b = 0; b < SolarCalculationsConstants.B_COUNT; b++)
				{
					sum[b] = 0.0;
					for ( var i = 0; i < SolarCalculationsConstants.b_subcount[b]; i++)
					{
						A = SolarCalculationsConstants.B_TERMS[b][ i][ SolarCalculationsConstants.ABCTerm.TERM_A];
						B = SolarCalculationsConstants.B_TERMS[b][ i][ SolarCalculationsConstants.ABCTerm.TERM_B];
						C = SolarCalculationsConstants.B_TERMS[b][ i][ SolarCalculationsConstants.ABCTerm.TERM_C];
						sum[b] += A * Math.cos(B + C * jme);
	
					}
					//sum[b] = earth_periodic_term_summation(B_TERMS[i], b_subcount[i], jme);
	
				}
	
				return this.rad2deg(this.earth_values(sum, SolarCalculationsConstants.B_COUNT, jme));
	
			}
	
			 earth_radius_vector( jme)
			{
				var sum = [];
				var A;
				var B;
				var C;
				for ( var  r = 0; r < SolarCalculationsConstants.R_COUNT; r++)
				{
					sum[r] = 0.0;
					for ( var i = 0; i < SolarCalculationsConstants.r_subcount[r]; i++)
					{
						A = SolarCalculationsConstants.R_TERMS[r][ i][ SolarCalculationsConstants.ABCTerm.TERM_A];
						B = SolarCalculationsConstants.R_TERMS[r][ i][ SolarCalculationsConstants.ABCTerm.TERM_B];
						C = SolarCalculationsConstants.R_TERMS[r][ i][ SolarCalculationsConstants.ABCTerm.TERM_C];
						sum[r] += A * Math.cos(B + C * jme);
	
					}
					//sum[i] = earth_periodic_term_summation(R_TERMS[i], r_subcount[i], jme);
	
	
				}
	
				return this.earth_values(sum, SolarCalculationsConstants.R_COUNT, jme);
	
			}
			 third_order_polynomial( a,  b,  c,  d,  x)
			{
				return ((a * x + b) * x + c) * x + d;
			}
			 xy_term_summation( i,  x/*[TERM_X_COUNT]*/)
			{
				var j;
				var sum = 0;
	
				for ( var j = 0; j < SolarCalculationsConstants.TERM_Y_COUNT; j++)
					sum += x[j] * SolarCalculationsConstants.Y_TERMS[i][ j];
	
				return sum;
			}
			 mean_elongation_moon_sun( jce)
			{
				return this.third_order_polynomial(1.0 / 189474.0, -0.0019142, 445267.11148, 297.85036, jce);
			}
			 mean_anomaly_sun( jce)
			{
				return this.third_order_polynomial(-1.0 / 300000.0, -0.0001603, 35999.05034, 357.52772, jce);
			}
	
			 mean_anomaly_moon( jce)
			{
				return this.third_order_polynomial(1.0 / 56250.0, 0.0086972, 477198.867398, 134.96298, jce);
			}
	
			 argument_latitude_moon( jce)
			{
				return this.third_order_polynomial(1.0 / 327270.0, -0.0036825, 483202.017538, 93.27191, jce);
			}
	
			 ascending_longitude_moon( jce)
			{
				return this.third_order_polynomial(1.0 / 450000.0, 0.0020708, -1934.136261, 125.04452, jce);
			}
			 nutation_longitude_and_obliquity( jce,  x,   del_psi, del_epsilon)
			{
				
				var xy_term_sum, sum_psi = 0, sum_epsilon = 0;
	
				for ( var i = 0; i < SolarCalculationsConstants.Y_COUNT; i++)
				{
					xy_term_sum = this.deg2rad(this.xy_term_summation(i, x));
					sum_psi += (SolarCalculationsConstants.PE_TERMS[i][SolarCalculationsConstants.PSI.TERM_PSI_A] + jce * SolarCalculationsConstants.PE_TERMS[i][ SolarCalculationsConstants.PSI.TERM_PSI_B]) * Math.sin(xy_term_sum);
					sum_epsilon += (SolarCalculationsConstants.PE_TERMS[i][ SolarCalculationsConstants.PSI.TERM_EPS_C] + jce * SolarCalculationsConstants.PE_TERMS[i][SolarCalculationsConstants.PSI.TERM_EPS_D]) * Math.cos(xy_term_sum);
				}
	
				del_psi = sum_psi / 36000000.0;
				del_epsilon = sum_epsilon / 36000000.0;
			return [del_psi,del_epsilon]

			}
			 ecliptic_mean_obliquity( jme)
			{
				var u = jme / 10.0;
	
				return 84381.448 + u * (-4680.93 + u * (-1.55 + u * (1999.25 + u * (-51.38 + u * (-249.67 +
								   u * (-39.05 + u * (7.12 + u * (27.87 + u * (5.79 + u * 2.45)))))))));
			}
			 ecliptic_true_obliquity( delta_epsilon,  epsilon0)
			{
				return delta_epsilon + epsilon0 / 3600.0;
			}
			 aberration_correction( r)
			{
				return -20.4898 / (3600.0 * r);
			}
			 apparent_sun_longitude( theta,  delta_psi,  delta_tau)
			{
				return theta + delta_psi + delta_tau;
			}
			 greenwich_mean_sidereal_time( jd,  jc)
			{
				return this.limit_degrees(280.46061837 + 360.98564736629 * (jd - 2451545.0) +
												   jc * jc * (0.000387933 - jc / 38710000.0));
			}
			 greenwich_sidereal_time( nu0,  delta_psi,  epsilon)
			{
				return nu0 + delta_psi * Math.cos(this.deg2rad(epsilon));
			}
			 geocentric_right_ascension( lamda,  epsilon,  beta)
			{
				var lamda_rad = this.deg2rad(lamda);
				var epsilon_rad = this.deg2rad(epsilon);
	
				return this.limit_degrees(this.rad2deg(Math.atan2(Math.sin(lamda_rad) * Math.cos(epsilon_rad) -
												   Math.tan(this.deg2rad(beta)) * Math.sin(epsilon_rad), Math.cos(lamda_rad))));
			}
			 geocentric_declination( beta,  epsilon,  lamda)
			{
				var beta_rad = this.deg2rad(beta);
				var epsilon_rad = this.deg2rad(epsilon);
	
				return this.rad2deg(Math.asin(Math.sin(beta_rad) * Math.cos(epsilon_rad) +
									Math.cos(beta_rad) * Math.sin(epsilon_rad) * Math.sin(this.deg2rad(lamda))));
			}
	
	
			 geocentric_longitude(l)
			{
				var theta = l + 180.0;
	
				if (theta >= 360.0) theta -= 360.0;
	
				return theta;
			}
	
			 geocentric_latitude(b)
			{
				return -b;
			}
			 calculate_geocentric_sun_right_ascension_and_declination()
			{
				var x = [];
	
				this.l = this.earth_heliocentric_longitude(this.jme);
				this.b = this.earth_heliocentric_latitude(this.jme);
				this.r = this.earth_radius_vector(this.jme);
	
				this.theta = this.geocentric_longitude(this.l);
				this.beta = this.geocentric_latitude(this.b);
	
				x[SolarCalculationsConstants.XTerm.TERM_X0] = this.x0 = this.mean_elongation_moon_sun(this.jce);
				x[SolarCalculationsConstants.XTerm.TERM_X1] = this.x1 = this.mean_anomaly_sun(this.jce);
				x[SolarCalculationsConstants.XTerm.TERM_X2] = this.x2 = this.mean_anomaly_moon(this.jce);
				x[SolarCalculationsConstants.XTerm.TERM_X3] = this.x3 = this.argument_latitude_moon(this.jce);
				x[SolarCalculationsConstants.XTerm.TERM_X4] = this.x4 = this.ascending_longitude_moon(this.jce);
	
				var del_psi_delepselon=this.nutation_longitude_and_obliquity(this.jce, x,  this.del_psi,  this.del_epsilon);
				this.del_psi=del_psi_delepselon[0];
				this.del_epsilon=del_psi_delepselon[1];
				this.epsilon0 = this.ecliptic_mean_obliquity(this.jme);
				this.epsilon = this.ecliptic_true_obliquity(this.del_epsilon, this.epsilon0);
	
				this.del_tau = this.aberration_correction(this.r);
				this.lamda = this.apparent_sun_longitude(this.theta, this.del_psi, this.del_tau);
				this.nu0 = this.greenwich_mean_sidereal_time(this.jd, this.jc);
				this.nu = this.greenwich_sidereal_time(this.nu0, this.del_psi, this.epsilon);
	
				this.alpha = this.geocentric_right_ascension(this.lamda, this.epsilon, this.beta);
				this.delta = this.geocentric_declination(this.beta, this.epsilon, this.lamda);
			}
			 limit_minutes( minutes)
			{
				var limited = minutes;
	
				if (limited < -20.0) limited += 1440.0;
				else if (limited > 20.0) limited -= 1440.0;
	
				return limited;
			}
	
			 EquationOfTime( m,  alpha,  del_psi,  epsilon)
			{
				return this.limit_minutes(4.0 * (m - 0.0057183 - alpha + del_psi * Math.cos(this.deg2rad(epsilon))));
			}
			 sun_equatorial_horizontal_parallax( r)
			{
				return 8.794 / (3600.0 * r);
			}
	
			  ClaculateEquationOfTimeInDegrees()
			{
				this.jd = this.JulianDay();
				this.jde = this.JulianEphemerisDay(this.jd);
				this.jce = this.JulianEphemerisCentury(this.jde);
				this.jme = this.JulianEphemerisMillennium(this.jce);
				this.jc = this.JulianCentury(this.jd);
				//Sun Mean Longitude
				var M = this.sun_mean_longitude(this.jme);
				this.calculate_geocentric_sun_right_ascension_and_declination();
				this.eot = this.EquationOfTime(M, this.alpha, this.del_psi, this.epsilon); //in minutes
				this.xi = this.sun_equatorial_horizontal_parallax(this.r);
	
				return this.eot / 60;
	
	
			}

			 right_ascension_parallax_and_topocentric_dec( latitude,  elevation,
			    xi,  h,  delta,   delta_alpha,   delta_prime)
			{
				var delta_alpha_rad;
				var lat_rad = this.deg2rad(latitude);
				var xi_rad = this.deg2rad(xi);
				var h_rad = this.deg2rad(h);
				var delta_rad = this.deg2rad(delta);
				var u = Math.atan(0.99664719 * Math.tan(lat_rad));
				var y = 0.99664719 * Math.sin(u) + elevation * Math.sin(lat_rad) / 6378140.0;
				var x = Math.cos(u) + elevation * Math.cos(lat_rad) / 6378140.0;
	
				delta_alpha_rad = Math.atan2(-x * Math.sin(xi_rad) * Math.sin(h_rad),
											  Math.cos(delta_rad) - x * Math.sin(xi_rad) * Math.cos(h_rad));
	
				delta_prime = this.rad2deg(Math.atan2((Math.sin(delta_rad) - y * Math.sin(xi_rad)) * Math.cos(delta_alpha_rad),
											  Math.cos(delta_rad) - x * Math.sin(xi_rad) * Math.cos(h_rad)));
	
				delta_alpha = this.rad2deg(delta_alpha_rad);
				return [delta_alpha,delta_prime]
			}
	
			 observer_hour_angle( nu,  longitude,  alpha_deg)
			{
				return this.limit_degrees(nu + longitude - alpha_deg);
			}
			  topocentric_local_hour_angle( h,  delta_alpha)
			{
				return h - delta_alpha;
			}
			  topocentric_elevation_angle( latitude,  delta_prime,  h_prime)
			{
				 lat_rad = this.deg2rad(latitude);
				 delta_prime_rad = this.deg2rad(delta_prime);
	
				return this.rad2deg(Math.asin(Math.sin (lat_rad) * Math.sin (delta_prime_rad) +
									Math.cos(lat_rad) * Math.cos(delta_prime_rad) * Math.cos(this.deg2rad(h_prime))));
			}
			  atmospheric_refraction_correction( pressure,  temperature,
													  atmos_refract,  e0)
			{
				 this.del_e = 0;
	
				if (e0 >= -1 * (SolarCalculationsConstants.SUN_RADIUS + atmos_refract))
				this.del_e = (pressure / 1010.0) * (283.0 / (273.0 + temperature)) *
							 1.02 / (60.0 * Math.tan(this.deg2rad(e0 + 10.3 / (e0 + 5.11))));
	
				return this.del_e;
			}
}
	

//----------------------- PrayTimes Class ------------------------
class PrayTimesCalculater
{
	constructor(day,month,year)
	{
		this.day=day;
		this.month=month;
		this.year=year;
	}
	var	
	// Time Names
	timeNames = {
		imsak    : 'Imsak',
		fajr     : 'Fajr',
		sunrise  : 'Sunrise',
		dhuhr    : 'Dhuhr',
		asr      : 'Asr',
		sunset   : 'Sunset',
		maghrib  : 'Maghrib',
		isha     : 'Isha',
		midnight : 'Midnight'
	};
	fajerAngle=18.0;
	ishaAngle=18.0;
	juristicMethodForAsr;
	//Location Settings
	 timeZone;
	latitude; longitude; elevation;// Height Above Sea,      // coordinates
	distanceToEastInKm=0;//for fajer and shrouq consider my location to the east of my coordinates
	temperatureInC;
	atmosphericPressureInmB;
	numOfIteration = 10;
	R = 6371;
	FajerPrayTime;
	ShrouqPrayTime;
	ThuhurPrayTime;
	AsrPrayTime;
	MaghribPrayTime;
	IshaaPrayTime;
	HorizontalParallax = 0.0024;
	FajerOffset=0;
	ShrouqOffset=0;
	ThuhurOffset=0;
	IshaaOffset=0;
	AsrOffset=0;
	MaghribOffset=0;	
	solar = new SolarClaculations();
	CalculationMethods = {
		Standard: {
			name: 'Standard',
			params: { fajr: 18, isha: 18 } },
		Egypt: {
			name: 'Egyptian General Authority of Survey',
			params: { fajr: 19.5, isha: 17.5 } },
		MWL: {
			name: 'Muslim World League',
			params: { fajr: 18, isha: 17 } },
		ISNA: {
			name: 'Islamic Society of North America (ISNA)',
			params: { fajr: 18, isha: 18 } },		
		/*Makkah: {
			name: 'Umm Al-Qura University, Makkah',
			params: { fajr: 18.5, isha: '90 min' } },*/  // fajr was 19 degrees before 1430 hijri
		Karachi: {
			name: 'University of Islamic Sciences, Karachi',
			params: { fajr: 18, isha: 18 } },
		Tehran: {
			name: 'Institute of Geophysics, University of Tehran',
			params: { fajr: 17.7, isha: 14, maghrib: 4.5, midnight: 'Jafari' } },  // isha is not explicitly specified in this method
		Jafari: {
			name: 'Shia Ithna-Ashari, Leva Institute, Qum',
			params: { fajr: 16, isha: 14, maghrib: 4, midnight: 'Jafari' } }
	};
		
	AsrMethod = {
		Standard: {name: 'Standard' },// Shafi`i, Maliki, Ja`fari, Hanbali
		Hanafi:   {name: 'Hanafi'}	// Hanafi
	};
	setMethod(fajer, isha)
	{	
		this.fajerAngle=fajer;
		this.ishaAngle=isha;
	}
	setAsrJuristicMethod(method)
	{
		if(method=="Hanafi")
		this.juristicMethodForAsr=1;
		else
		this.juristicMethodForAsr=0;
	}
	setLocationSettings(latitude,longitude,elevation,timeZone)
	{	
		this.timeZone=timeZone;
		this.latitude=latitude;
		this.longitude=longitude;
		this.elevation=elevation;      
	}
	setRefractionSetting(atmosphericPressureInmB,temperatureInC)
	{
		this.temperatureInC=temperatureInC;
		this.atmosphericPressureInmB=atmosphericPressureInmB;
	}
	ForFajerAndShrouqeConsiderMyLocationToEastOfMyDefultLocation(distanceInKm)
	{
		this.distanceToEastInKm=distanceInKm;
	}
	setOffset(OffsetInMinutes)
	{
	this.FajerOffset=OffsetInMinutes['offset']['fajr']/60;
	
	this.ThuhurOffset=OffsetInMinutes['offset']['dhuhr']/60;
	this.AsrOffset=OffsetInMinutes['offset']['asr']/60;
	this.MaghribOffset=OffsetInMinutes['offset']['maghrib']/60;	
	this.IshaaOffset=OffsetInMinutes['offset']['isha']/60;

	console.log()

	
	}
	CalculateThuhurPrayTime( day,  month,  year,  timeOfDay,  timeZone,  longitude)
	{
		var middleLongitude = timeZone * 15;//indegrees
		var differenceOfLongitude = (middleLongitude - longitude) / 15.0; //inHours
		this.solar.year = year;
		this.solar.month = month;
		this.solar.day = day;
		this.solar.fractionOfDay = timeOfDay - (timeZone / 24.0);
		var equationOfTimeInHours = this.solar.ClaculateEquationOfTimeInDegrees();
		this.HorizontalParallax = this.solar.xi;
		var ThuhurPrayTime = 12 + differenceOfLongitude - equationOfTimeInHours;
		return ThuhurPrayTime;

	}
	 CalculateSemiDiameterOfSun()
	{
		//double R = 1.00014 - (0.01671 * Math.Cos(g * Math.PI / 180)) - (0.00014 * Math.Cos(2 * g * Math.PI / 180));
		var R = this.solar.r;
		var Semidiameter = SolarCalculationsConstants.SUN_RADIUS/ R;

		return Semidiameter; //In Degrees
	}
	 CalculateHourAngleInTime( zenithAngleInDegree,  latitude)
	{
		var cosineOfHourAngle = (Math.cos(zenithAngleInDegree * Math.PI / 180) - (Math.sin(latitude * Math.PI / 180) * Math.sin(/*δ*/this.solar.delta * Math.PI / 180))) / ((Math.cos(latitude * Math.PI / 180) * Math.cos(/*δ*/this.solar.delta * Math.PI / 180)));
		var hourAngleInDegree = Math.acos(cosineOfHourAngle) * 180 / Math.PI;
		var HourAngleInTime = hourAngleInDegree / 15;
		return HourAngleInTime;
	}


	 CalculatePrayTimes()
	{
		var timeofDay = 0.5;
		/***********************************Calculate fajer Pray Time***************************/
		//we Moving to east certain distance to get accurate fajer time
		for ( var i = 0; i < this.numOfIteration; i++)
		{

			if (i == 0)
				timeofDay = 0.5;

		    var  newLongitude = this.longitude + Math.atan2(Math.sin(this.distanceToEastInKm / this.R) * Math.cos(this.latitude * Math.PI / 180), Math.cos(this.distanceToEastInKm / this.R) - Math.sin(this.latitude * Math.PI / 180) * Math.sin(this.latitude * Math.PI / 180)) * 180 / Math.PI;
			newLongitude = (newLongitude + 540) % 360 - 180;
			var modifiedThuhurTimeForFajer = this.CalculateThuhurPrayTime(this.day, this.month, this.year, timeofDay, this.timeZone, newLongitude);
			var zenithAngleInDegreeForFajer = 90 + this.fajerAngle;
			var hourAngleForFajerInTime = this.CalculateHourAngleInTime(zenithAngleInDegreeForFajer, this.latitude);
			this.FajerPrayTime = modifiedThuhurTimeForFajer - hourAngleForFajerInTime;
			timeofDay = this.FajerPrayTime / 24.0;
		}
		/***********************************Calculate shrouq Pray Time***************************/
		for ( var i = 0; i < this.numOfIteration; i++)
		{

			if (i == 0)
				timeofDay = 0.5;
			var	newLongitude = this.longitude + Math.atan2(Math.sin(this.distanceToEastInKm / this.R) * Math.cos(this.latitude * Math.PI / 180), Math.cos(this.distanceToEastInKm / this.R) - Math.sin(this.latitude * Math.PI / 180) * Math.sin(this.latitude * Math.PI / 180)) * 180 / Math.PI;
			newLongitude = (newLongitude + 540) % 360 - 180;
			var modifiedThuhurTimeForShrouq = this.CalculateThuhurPrayTime(this.day, this.month, this.year, timeofDay, this.timeZone, newLongitude);
			var semiDimeterOfSun = this.CalculateSemiDiameterOfSun();

			var Refraction = (0.569333 * ((0.28 * this.atmosphericPressureInmB) / (this.temperatureInC + 273)));
			var HorizonDecrease = 0.035333 * Math.sqrt(this.elevation);
			var zenithAngleInDegreeForShrouq = 90 + semiDimeterOfSun + Refraction + HorizonDecrease - this.HorizontalParallax;
			var hourAngleForShrouqInTime = this.CalculateHourAngleInTime(zenithAngleInDegreeForShrouq, this.latitude);
			this.ShrouqPrayTime = modifiedThuhurTimeForShrouq - hourAngleForShrouqInTime;
			timeofDay = this.ShrouqPrayTime / 24;
		}

		/***********************************Calculate Thuhur Pray Time***************************/
		for (  var i = 0; i < this.numOfIteration; i++)
		{

			if (i == 0)
				timeofDay = 0.5;
				this.ThuhurPrayTime = this.CalculateThuhurPrayTime(this.day, this.month, this.year, timeofDay, this.timeZone, this.longitude);
			timeofDay = this.ThuhurPrayTime / 24;

		}
		/***********************************Calculate Asr Pray Time***************************/
		for ( var i = 0; i < this.numOfIteration; i++)
		{

			if (i == 0)
				timeofDay = 0.5;
			var  modifiedThuhurTimeForAsr = this.CalculateThuhurPrayTime(this.day, this.month, this.year, timeofDay, this.timeZone, this.longitude);
			var zenithAngleInDegreeForAsr = 0;
			var a = Math.asin((Math.sin(this.latitude * Math.PI / 180) * Math.sin(/*δ*/this.solar.delta * Math.PI / 180)) + (Math.cos(this.latitude * Math.PI / 180) * Math.cos(/*δ*/this.solar.delta * Math.PI / 180))) * 180 / Math.PI;
			//cotInverse(z) =tanInverse(1/z)
			switch (this.juristicMethodForAsr)
			{
				case 0: //Shafi'i, Maliki, Ja'fari, and Hanbali (STANDARD)
					{
						zenithAngleInDegreeForAsr = 90 - Math.atan(1 / (1 + (1 / Math.tan(a * Math.PI / 180)))) * 180 / Math.PI;

						break;
					}
				case 1: //Hanafi
					{
						zenithAngleInDegreeForAsr = 90 - Math.atan(1 / (2 + (1 / Math.tan(a * Math.PI / 180)))) * 180 / Math.PI;

						break;
					}
			}

			var h = 90 - zenithAngleInDegreeForAsr;
			var Refraction = (1 / Math.tan(h + (7.31 / (h + 4.4)))) * ((0.28 * this.atmosphericPressureInmB) / (this.tempreatureInC + 273));

			this.solar.del_e = this.solar.atmospheric_refraction_correction(this.atmosphericPressureInmB, this.temperatureInC, 0.5667, h);

			//zenithAngleInDegreeForAsr += (Refraction / 60);
			zenithAngleInDegreeForAsr += this.solar.del_e;
			var hourAngleForAsrInTime = this.CalculateHourAngleInTime(zenithAngleInDegreeForAsr, this.latitude);
			this.AsrPrayTime = modifiedThuhurTimeForAsr + hourAngleForAsrInTime;
			timeofDay = this.AsrPrayTime / 24;

		}
		/***********************************Calculate Maghrib Pray Time***************************/
		for ( var i = 0; i < this.numOfIteration; i++)
		{

			if (i == 0)
				timeofDay = 0.5;
			var modifiedThuhurTimeForMaghrib = this.CalculateThuhurPrayTime(this.day, this.month, this.year, timeofDay, this.timeZone, this.longitude);
			var semiDimeterOfSun = this.CalculateSemiDiameterOfSun();

			var Refraction = (0.569333 * ((0.28 * this.atmosphericPressureInmB) / (this.temperatureInC + 273)));
			var HorizonDecrease = 0.035333 * Math.sqrt(this.elevation);
			var zenithAngleInDegreeForMaghrib = 90 + semiDimeterOfSun + Refraction + HorizonDecrease - this.HorizontalParallax;
			var hourAngleForMaghribInTime = this.CalculateHourAngleInTime(zenithAngleInDegreeForMaghrib, this.latitude);
			this.MaghribPrayTime = modifiedThuhurTimeForMaghrib + hourAngleForMaghribInTime;
			timeofDay = this.MaghribPrayTime / 24;
		}
		/***********************************Calculate Ishaa Pray Time***************************/
		for (  var i = 0; i < this.numOfIteration; i++)
		{

			if (i == 0)
				timeofDay = 0.5;
			var modifiedThuhurTimeForIshaa = this.CalculateThuhurPrayTime(this.day, this.month, this.year, timeofDay, this.timeZone, this.longitude);
			var zenithAngleInDegreeForIshaa = 90 + this.ishaAngle;
			var hourAngleForIshaaInTime = this.CalculateHourAngleInTime(zenithAngleInDegreeForIshaa, this.latitude);
			this.IshaaPrayTime = modifiedThuhurTimeForIshaa + hourAngleForIshaaInTime;
			timeofDay = this.IshaaPrayTime / 24;
		}
	}
	getTimes(timeformat='12h',accuracy='minutes')
	{	
		this.CalculatePrayTimes();
		var times = { 
			 fajr: (this.FajerPrayTime+this.FajerOffset), sunrise: this.ShrouqPrayTime, dhuhr: (this.ThuhurPrayTime+this.ThuhurOffset), 
			asr: (this.AsrPrayTime+this.AsrOffset), maghrib: (this.MaghribPrayTime+this.MaghribOffset), isha: (this.IshaaPrayTime+this.IshaaOffset)
		};
		for (var i in times)
			times[i] = this.getFormattedTime(times[i], timeformat,accuracy); 
		return times;

		

	}
	twoDigitsFormat(num) 
	{
		return (num <10) ? '0'+ num : num;
	}
	getFormattedTime(time,format,accuracy) {
		if (isNaN(time))
			{return 'invalidTime';}
		//time = DMath.fixHour(time+ 0.5/ 60);  // add 0.5 minutes to round
		var hours = Math.floor(time); 
		var minutes_Seconds = (time-hours)*60;
		var minutes = Math.floor(minutes_Seconds);
		var seconds = Math.floor((minutes_Seconds-minutes)*60);
		var hour = (format == '24h') ? this.twoDigitsFormat(hours) : this.twoDigitsFormat((hours+ 12 -1)% 12+ 1);
		if(accuracy=='seconds'){
		return hour+ ':'+ this.twoDigitsFormat(minutes)+':'+this.twoDigitsFormat(seconds);
		}
		else 
		{
			// 00:60, 13:00, 24:00 times on screen issue fixed by AhmadShaker
			if(seconds > 26)
			{
				minutes = minutes+1;
			}

			if(minutes == 60)
			{
				minutes = 0;
				hours = hours +1;
				if (hours == 23)
				{
					hours = 0;
				}
				if (hours == 13)
				{
					hours = 0;
				}
				hour = (format == '24h') ? this.twoDigitsFormat(hours) : this.twoDigitsFormat((hours+ 12 -1)% 12+ 1);
			}
			//
			return hour+ ':'+ this.twoDigitsFormat(minutes);

		}
	}



	
}







//---------------------- Degree-Based Math Class -----------------------





//---------------------- Init Object -----------------------


//var prayTimes = new PrayTimesCalculater();



module.exports = PrayTimesCalculater