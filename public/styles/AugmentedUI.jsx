import { createGlobalStyle } from 'styled-components';

const AugmentedUI = createGlobalStyle`
@supports (--foo:, 0 0) and ((clip-path:polygon(0 0, 100% 0, 50% 50%)) or (-webkit-clip-path:polygon(0 0, 100% 0, 50% 50%))) {
  [data-augmented-ui] {
    --aug-clip-tl1: ;
    --aug-clip-tl2: ;
    --aug-step-tl1: ;
    --aug-step-tl2: ;
    --aug-rect-tl1: ;
    --aug-rect-tl2: ;
    --aug-round-tl1: ;
    --aug-round-tl2: ;
    --aug-scoop-tl1: ;
    --aug-scoop-tl2: ;
    --aug-clip-t1: ;
    --aug-clip-t2: ;
    --aug-step-t1: ;
    --aug-step-t2: ;
    --aug-rect-t1: ;
    --aug-rect-t2: ;
    --aug-round-t1: ;
    --aug-round-t2: ;
    --aug-scoop-t1: ;
    --aug-scoop-t2: ;
    --aug-clip-tr1: ;
    --aug-clip-tr2: ;
    --aug-step-tr1: ;
    --aug-step-tr2: ;
    --aug-rect-tr1: ;
    --aug-rect-tr2: ;
    --aug-round-tr1: ;
    --aug-round-tr2: ;
    --aug-scoop-tr1: ;
    --aug-scoop-tr2: ;
    --aug-clip-r1: ;
    --aug-clip-r2: ;
    --aug-step-r1: ;
    --aug-step-r2: ;
    --aug-rect-r1: ;
    --aug-rect-r2: ;
    --aug-round-r1: ;
    --aug-round-r2: ;
    --aug-scoop-r1: ;
    --aug-scoop-r2: ;
    --aug-clip-br1: ;
    --aug-clip-br2: ;
    --aug-step-br1: ;
    --aug-step-br2: ;
    --aug-rect-br1: ;
    --aug-rect-br2: ;
    --aug-round-br1: ;
    --aug-round-br2: ;
    --aug-scoop-br1: ;
    --aug-scoop-br2: ;
    --aug-clip-b1: ;
    --aug-clip-b2: ;
    --aug-step-b1: ;
    --aug-step-b2: ;
    --aug-rect-b1: ;
    --aug-rect-b2: ;
    --aug-round-b1: ;
    --aug-round-b2: ;
    --aug-scoop-b1: ;
    --aug-scoop-b2: ;
    --aug-clip-bl1: ;
    --aug-clip-bl2: ;
    --aug-step-bl1: ;
    --aug-step-bl2: ;
    --aug-rect-bl1: ;
    --aug-rect-bl2: ;
    --aug-round-bl1: ;
    --aug-round-bl2: ;
    --aug-scoop-bl1: ;
    --aug-scoop-bl2: ;
    --aug-clip-l1: ;
    --aug-clip-l2: ;
    --aug-step-l1: ;
    --aug-step-l2: ;
    --aug-rect-l1: ;
    --aug-rect-l2: ;
    --aug-round-l1: ;
    --aug-round-l2: ;
    --aug-scoop-l1: ;
    --aug-scoop-l2: ;
    --aug-tl1-alt-join-in: ;
    --aug-tl1-alt-join-out: ;
    --aug-tl2-alt-join-in: ;
    --aug-tl2-alt-join-out: ;
    --aug-tl1: initial;
    --aug-tl2: initial;
    --aug-tl1-width: initial;
    --aug-tl1-height: initial;
    --aug-tl2-width: initial;
    --aug-tl2-height: initial;
    --aug-tl-inset1: initial;
    --aug-tl-inset2: initial;
    --aug-tl-extend1: initial;
    --aug-tl-extend2: initial;
    --aug-t1-alt-join-in: ;
    --aug-t1-alt-join-out: ;
    --aug-t2-alt-join-in: ;
    --aug-t2-alt-join-out: ;
    --aug-t1: initial;
    --aug-t2: initial;
    --aug-t1-width: initial;
    --aug-t1-height: initial;
    --aug-t2-width: initial;
    --aug-t2-height: initial;
    --aug-t-inset1: initial;
    --aug-t-extend1: initial;
    --aug-tr1-alt-join-in: ;
    --aug-tr1-alt-join-out: ;
    --aug-tr2-alt-join-in: ;
    --aug-tr2-alt-join-out: ;
    --aug-tr1: initial;
    --aug-tr2: initial;
    --aug-tr1-width: initial;
    --aug-tr1-height: initial;
    --aug-tr2-width: initial;
    --aug-tr2-height: initial;
    --aug-tr-inset1: initial;
    --aug-tr-inset2: initial;
    --aug-tr-extend1: initial;
    --aug-tr-extend2: initial;
    --aug-r1-alt-join-in: ;
    --aug-r1-alt-join-out: ;
    --aug-r2-alt-join-in: ;
    --aug-r2-alt-join-out: ;
    --aug-r1: initial;
    --aug-r2: initial;
    --aug-r1-width: initial;
    --aug-r1-height: initial;
    --aug-r2-width: initial;
    --aug-r2-height: initial;
    --aug-r-inset1: initial;
    --aug-r-extend1: initial;
    --aug-br1-alt-join-in: ;
    --aug-br1-alt-join-out: ;
    --aug-br2-alt-join-in: ;
    --aug-br2-alt-join-out: ;
    --aug-br1: initial;
    --aug-br2: initial;
    --aug-br1-width: initial;
    --aug-br1-height: initial;
    --aug-br2-width: initial;
    --aug-br2-height: initial;
    --aug-br-inset1: initial;
    --aug-br-inset2: initial;
    --aug-br-extend1: initial;
    --aug-br-extend2: initial;
    --aug-b1-alt-join-in: ;
    --aug-b1-alt-join-out: ;
    --aug-b2-alt-join-in: ;
    --aug-b2-alt-join-out: ;
    --aug-b1: initial;
    --aug-b2: initial;
    --aug-b1-width: initial;
    --aug-b1-height: initial;
    --aug-b2-width: initial;
    --aug-b2-height: initial;
    --aug-b-inset1: initial;
    --aug-b-extend1: initial;
    --aug-bl1-alt-join-in: ;
    --aug-bl1-alt-join-out: ;
    --aug-bl2-alt-join-in: ;
    --aug-bl2-alt-join-out: ;
    --aug-bl1: initial;
    --aug-bl2: initial;
    --aug-bl1-width: initial;
    --aug-bl1-height: initial;
    --aug-bl2-width: initial;
    --aug-bl2-height: initial;
    --aug-bl-inset1: initial;
    --aug-bl-inset2: initial;
    --aug-bl-extend1: initial;
    --aug-bl-extend2: initial;
    --aug-l1-alt-join-in: ;
    --aug-l1-alt-join-out: ;
    --aug-l2-alt-join-in: ;
    --aug-l2-alt-join-out: ;
    --aug-l1: initial;
    --aug-l2: initial;
    --aug-l1-width: initial;
    --aug-l1-height: initial;
    --aug-l2-width: initial;
    --aug-l2-height: initial;
    --aug-l-inset1: initial;
    --aug-l-extend1: initial;
    --aug-border: ;
    --aug-delegated-border: ;
    --aug-border-all: 1px;
    --aug-border-y: initial;
    --aug-border-x: initial;
    --aug-border-top: initial;
    --aug-border-right: initial;
    --aug-border-bottom: initial;
    --aug-border-left: initial;
    --aug-border-bg: currentColor;
    --aug-border-opacity: initial;
    --aug_0: var(--aug-border) 0px;
    --aug_1: initial;
    --aug_2: var(--aug_0, var(--aug-border-top, var(--aug-border-y, var(--aug-border-all))));
    --aug_3: var(--aug_0, var(--aug-border-right, var(--aug-border-x, var(--aug-border-all))));
    --aug_4: var(--aug_0, var(--aug-border-bottom, var(--aug-border-y, var(--aug-border-all))));
    --aug_5: var(--aug_0, var(--aug-border-left, var(--aug-border-x, var(--aug-border-all))));
    --aug-inlay: ;
    --aug-delegated-inlay: ;
    --aug-inlay-all: 3px;
    --aug-inlay-y: initial;
    --aug-inlay-x: initial;
    --aug-inlay-top: initial;
    --aug-inlay-right: initial;
    --aug-inlay-bottom: initial;
    --aug-inlay-left: initial;
    --aug-inlay-bg: rgba(128, 128, 128, 0.5);
    --aug-inlay-opacity: initial;
    --aug_6: var(--aug-inlay) 0px;
    --aug_7: initial;
    --aug_8: var(--aug_6, calc(var(--aug-inlay-top, var(--aug-inlay-y, var(--aug-inlay-all))) + var(--aug_2)));
    --aug_9: var(--aug_6, calc(var(--aug-inlay-right, var(--aug-inlay-x, var(--aug-inlay-all))) + var(--aug_3)));
    --aug_a: var(--aug_6, calc(var(--aug-inlay-bottom, var(--aug-inlay-y, var(--aug-inlay-all))) + var(--aug_4)));
    --aug_b: var(--aug_6, calc(var(--aug-inlay-left, var(--aug-inlay-x, var(--aug-inlay-all))) + var(--aug_5)));
    --aug_c: var(--aug_6, var(--aug-inlay-top, var(--aug-inlay-y, var(--aug-inlay-all))));
    --aug_d: var(--aug_6, var(--aug-inlay-right, var(--aug-inlay-x, var(--aug-inlay-all))));
    --aug_e: var(--aug_6, var(--aug-inlay-bottom, var(--aug-inlay-y, var(--aug-inlay-all))));
    --aug_f: var(--aug_6, var(--aug-inlay-left, var(--aug-inlay-x, var(--aug-inlay-all))));
    --aug-tl1-clipmod-x: 0.5;
    --aug-tl1-clipmod-y: 0.5;
    --aug-tl2-clipmod-x: 0.5;
    --aug-tl2-clipmod-y: 0.5;
    --aug-t1-clipmod-x: 0.5;
    --aug-t1-clipmod-y: 0.5;
    --aug-t2-clipmod-x: 0.5;
    --aug-t2-clipmod-y: 0.5;
    --aug-tr1-clipmod-x: 0.5;
    --aug-tr1-clipmod-y: 0.5;
    --aug-tr2-clipmod-x: 0.5;
    --aug-tr2-clipmod-y: 0.5;
    --aug-r1-clipmod-x: 0.5;
    --aug-r1-clipmod-y: 0.5;
    --aug-r2-clipmod-x: 0.5;
    --aug-r2-clipmod-y: 0.5;
    --aug-br1-clipmod-x: 0.5;
    --aug-br1-clipmod-y: 0.5;
    --aug-br2-clipmod-x: 0.5;
    --aug-br2-clipmod-y: 0.5;
    --aug-b1-clipmod-x: 0.5;
    --aug-b1-clipmod-y: 0.5;
    --aug-b2-clipmod-x: 0.5;
    --aug-b2-clipmod-y: 0.5;
    --aug-bl1-clipmod-x: 0.5;
    --aug-bl1-clipmod-y: 0.5;
    --aug-bl2-clipmod-x: 0.5;
    --aug-bl2-clipmod-y: 0.5;
    --aug-l1-clipmod-x: 0.5;
    --aug-l1-clipmod-y: 0.5;
    --aug-l2-clipmod-x: 0.5;
    --aug-l2-clipmod-y: 0.5;
    --aug-t-center: initial;
    --aug-t-offset: initial;
    --aug-r-center: initial;
    --aug-r-offset: initial;
    --aug-b-center: initial;
    --aug-b-offset: initial;
    --aug-l-center: initial;
    --aug-l-offset: initial;
    --aug_g: 0.156434465040;
    --aug_h: 0.30901699437;
    --aug_i: 0.45399049974;
    --aug_j: 0.58778525229;
    --aug_k: 0.70710678119;
    --aug_l: 0.80901699437;
    --aug_m: 0.89100652419;
    --aug_n: 0.95105651629;
    --aug_o: 0.987688340595;
    --aug_p: initial;
    --aug_q: initial;
    --aug_r: initial;
    --aug_s: initial;
    --aug_t: initial;
    --aug_u: initial;
    --aug_v: initial;
    --aug_w: initial;
    --aug_x: initial;
    --aug_y: initial;
    --aug_z: initial;
    --aug_A: initial;
    --aug_B: initial;
    --aug_C: initial;
    --aug_D: initial;
    --aug_E: initial;
    --aug_F: initial;
    --aug_G: initial;
    --aug_H: initial;
    --aug_I: initial;
    --aug_J: initial;
    --aug_K: initial;
    --aug_L: initial;
  }

  [data-augmented-ui-reset] {
    --aug_0: initial;
    --aug_6: initial;
    --aug_M: initial;
    --aug_N: initial;
    --aug_O: initial;
    --aug_P: initial;
    --aug_Q: initial;
    --aug_R: initial;
    --aug_S: initial;
    --aug_T: initial;
    --aug_U: initial;
    --aug_V: initial;
    --aug_W: initial;
    --aug_X: initial;
    --aug_Y: initial;
    --aug_Z: initial;
    --aug_10: initial;
    --aug_11: initial;
    --aug_12: initial;
    --aug_13: initial;
    --aug_14: initial;
    --aug_15: initial;
    --aug_16: initial;
    --aug_17: initial;
    --aug_18: initial;
    --aug_19: initial;
    --aug_1a: initial;
    --aug_1b: initial;
    --aug_1c: initial;
    --aug_1d: initial;
    --aug_1e: initial;
    --aug_1f: initial;
    --aug_1g: initial;
    --aug_1h: initial;
    --aug_1i: initial;
    --aug_1j: initial;
    --aug_1k: initial;
    --aug_1l: initial;
    --aug_1m: initial;
    --aug_1n: initial;
    --aug_1o: initial;
    --aug_1p: initial;
    --aug_1q: initial;
    --aug_1r: initial;
    --aug_1s: initial;
    --aug_1t: initial;
    --aug_1u: initial;
    --aug_1v: initial;
    --aug_1w: initial;
    --aug_1x: initial;
    --aug_1y: initial;
    --aug_1z: initial;
    --aug_1A: initial;
    --aug_1B: initial;
    --aug_1C: initial;
    --aug_1D: initial;
    --aug_1E: initial;
    --aug_1F: initial;
    --aug_1G: initial;
    --aug_1H: initial;
    --aug_1I: initial;
    --aug_1J: initial;
  }

  [data-augmented-ui] {
    --aug_M: var(--aug-clip-tl1) var(--aug-step-tl1) var(--aug-rect-tl1) var(--aug-round-tl1) var(--aug-scoop-tl1);
    --aug_N: var(--aug-clip-tl2) var(--aug-step-tl2) var(--aug-rect-tl2) var(--aug-round-tl2) var(--aug-scoop-tl2);
    --aug_O: var(--aug_M) 0px;
    --aug_P: var(--aug_N) 0px;
    --aug_Q: var(--aug-clip-tl1) 0px;
    --aug_R: var(--aug-clip-tl2) 0px;
    --aug_S: var(--aug-clip-t1) var(--aug-step-t1) var(--aug-rect-t1) var(--aug-round-t1) var(--aug-scoop-t1);
    --aug_T: var(--aug-clip-t2) var(--aug-step-t2) var(--aug-rect-t2) var(--aug-round-t2) var(--aug-scoop-t2);
    --aug_U: var(--aug_S) 0px;
    --aug_V: var(--aug_T) 0px;
    --aug_W: var(--aug-clip-t1) 0px;
    --aug_X: var(--aug-clip-t2) 0px;
    --aug_Y: var(--aug-clip-tr1) var(--aug-step-tr1) var(--aug-rect-tr1) var(--aug-round-tr1) var(--aug-scoop-tr1);
    --aug_Z: var(--aug-clip-tr2) var(--aug-step-tr2) var(--aug-rect-tr2) var(--aug-round-tr2) var(--aug-scoop-tr2);
    --aug_10: var(--aug_Y) 0px;
    --aug_11: var(--aug_Z) 0px;
    --aug_12: var(--aug-clip-tr1) 0px;
    --aug_13: var(--aug-clip-tr2) 0px;
    --aug_14: var(--aug-clip-r1) var(--aug-step-r1) var(--aug-rect-r1) var(--aug-round-r1) var(--aug-scoop-r1);
    --aug_15: var(--aug-clip-r2) var(--aug-step-r2) var(--aug-rect-r2) var(--aug-round-r2) var(--aug-scoop-r2);
    --aug_16: var(--aug_14) 0px;
    --aug_17: var(--aug_15) 0px;
    --aug_18: var(--aug-clip-r1) 0px;
    --aug_19: var(--aug-clip-r2) 0px;
    --aug_1a: var(--aug-clip-br1) var(--aug-step-br1) var(--aug-rect-br1) var(--aug-round-br1) var(--aug-scoop-br1);
    --aug_1b: var(--aug-clip-br2) var(--aug-step-br2) var(--aug-rect-br2) var(--aug-round-br2) var(--aug-scoop-br2);
    --aug_1c: var(--aug_1a) 0px;
    --aug_1d: var(--aug_1b) 0px;
    --aug_1e: var(--aug-clip-br1) 0px;
    --aug_1f: var(--aug-clip-br2) 0px;
    --aug_1g: var(--aug-clip-b1) var(--aug-step-b1) var(--aug-rect-b1) var(--aug-round-b1) var(--aug-scoop-b1);
    --aug_1h: var(--aug-clip-b2) var(--aug-step-b2) var(--aug-rect-b2) var(--aug-round-b2) var(--aug-scoop-b2);
    --aug_1i: var(--aug_1g) 0px;
    --aug_1j: var(--aug_1h) 0px;
    --aug_1k: var(--aug-clip-b1) 0px;
    --aug_1l: var(--aug-clip-b2) 0px;
    --aug_1m: var(--aug-clip-bl1) var(--aug-step-bl1) var(--aug-rect-bl1) var(--aug-round-bl1) var(--aug-scoop-bl1);
    --aug_1n: var(--aug-clip-bl2) var(--aug-step-bl2) var(--aug-rect-bl2) var(--aug-round-bl2) var(--aug-scoop-bl2);
    --aug_1o: var(--aug_1m) 0px;
    --aug_1p: var(--aug_1n) 0px;
    --aug_1q: var(--aug-clip-bl1) 0px;
    --aug_1r: var(--aug-clip-bl2) 0px;
    --aug_1s: var(--aug-clip-l1) var(--aug-step-l1) var(--aug-rect-l1) var(--aug-round-l1) var(--aug-scoop-l1);
    --aug_1t: var(--aug-clip-l2) var(--aug-step-l2) var(--aug-rect-l2) var(--aug-round-l2) var(--aug-scoop-l2);
    --aug_1u: var(--aug_1s) 0px;
    --aug_1v: var(--aug_1t) 0px;
    --aug_1w: var(--aug-clip-l1) 0px;
    --aug_1x: var(--aug-clip-l2) 0px;
    --aug_1K: var(--aug_O, var(--aug-tl1-width, var(--aug-tl1, 15px)));
    --aug_1L: var(--aug_O, var(--aug-tl1-height, var(--aug-tl1, 15px)));
    --aug_1M: var(--aug_P, var(--aug-tl2-width, var(--aug-tl2, 15px)));
    --aug_1N: var(--aug_P, var(--aug-tl2-height, var(--aug-tl2, 15px)));
    --aug_1O: var(--aug-tl-inset1, 0px);
    --aug_1P: var(--aug-tl-inset2, 0px);
    --aug_1Q: var(--aug_P, var(--aug-tl-extend1, 0px));
    --aug_1R: var(--aug_P, var(--aug-tl-extend2, 0px));
    --aug_1S: var(--aug_U, var(--aug-t1-width, var(--aug-t1, 15px)));
    --aug_1T: var(--aug_U, var(--aug-t1-height, var(--aug-t1, 15px)));
    --aug_1U: var(--aug_V, var(--aug-t2-width, var(--aug-t2, 15px)));
    --aug_1V: var(--aug_V, var(--aug-t2-height, var(--aug-t2, 15px)));
    --aug_1W: var(--aug-t-inset1, 0px);
    --aug_1X: calc(var(--aug_1W) + var(--aug_1T) - var(--aug_1V));
    --aug_1Y: var(--aug_U, var(--aug-t-extend1, 0px));
    --aug_1Z: (var(--aug_1S) + var(--aug_1Y) + var(--aug_1U));
    --aug_20: var(--aug_10, var(--aug-tr1-width, var(--aug-tr1, 15px)));
    --aug_21: var(--aug_10, var(--aug-tr1-height, var(--aug-tr1, 15px)));
    --aug_22: var(--aug_11, var(--aug-tr2-width, var(--aug-tr2, 15px)));
    --aug_23: var(--aug_11, var(--aug-tr2-height, var(--aug-tr2, 15px)));
    --aug_24: var(--aug-tr-inset1, 0px);
    --aug_25: var(--aug-tr-inset2, 0px);
    --aug_26: var(--aug_11, var(--aug-tr-extend1, 0px));
    --aug_27: var(--aug_11, var(--aug-tr-extend2, 0px));
    --aug_28: var(--aug_16, var(--aug-r1-width, var(--aug-r1, 15px)));
    --aug_29: var(--aug_16, var(--aug-r1-height, var(--aug-r1, 15px)));
    --aug_2a: var(--aug_17, var(--aug-r2-width, var(--aug-r2, 15px)));
    --aug_2b: var(--aug_17, var(--aug-r2-height, var(--aug-r2, 15px)));
    --aug_2c: var(--aug-r-inset1, 0px);
    --aug_2d: calc(var(--aug_2c) + var(--aug_28) - var(--aug_2a));
    --aug_2e: var(--aug_16, var(--aug-r-extend1, 0px));
    --aug_2f: (var(--aug_29) + var(--aug_2e) + var(--aug_2b));
    --aug_2g: var(--aug_1c, var(--aug-br1-width, var(--aug-br1, 15px)));
    --aug_2h: var(--aug_1c, var(--aug-br1-height, var(--aug-br1, 15px)));
    --aug_2i: var(--aug_1d, var(--aug-br2-width, var(--aug-br2, 15px)));
    --aug_2j: var(--aug_1d, var(--aug-br2-height, var(--aug-br2, 15px)));
    --aug_2k: var(--aug-br-inset1, 0px);
    --aug_2l: var(--aug-br-inset2, 0px);
    --aug_2m: var(--aug_1d, var(--aug-br-extend1, 0px));
    --aug_2n: var(--aug_1d, var(--aug-br-extend2, 0px));
    --aug_2o: var(--aug_1i, var(--aug-b1-width, var(--aug-b1, 15px)));
    --aug_2p: var(--aug_1i, var(--aug-b1-height, var(--aug-b1, 15px)));
    --aug_2q: var(--aug_1j, var(--aug-b2-width, var(--aug-b2, 15px)));
    --aug_2r: var(--aug_1j, var(--aug-b2-height, var(--aug-b2, 15px)));
    --aug_2s: var(--aug-b-inset1, 0px);
    --aug_2t: calc(var(--aug_2s) + var(--aug_2p) - var(--aug_2r));
    --aug_2u: var(--aug_1i, var(--aug-b-extend1, 0px));
    --aug_2v: (var(--aug_2o) + var(--aug_2u) + var(--aug_2q));
    --aug_2w: var(--aug_1o, var(--aug-bl1-width, var(--aug-bl1, 15px)));
    --aug_2x: var(--aug_1o, var(--aug-bl1-height, var(--aug-bl1, 15px)));
    --aug_2y: var(--aug_1p, var(--aug-bl2-width, var(--aug-bl2, 15px)));
    --aug_2z: var(--aug_1p, var(--aug-bl2-height, var(--aug-bl2, 15px)));
    --aug_2A: var(--aug-bl-inset1, 0px);
    --aug_2B: var(--aug-bl-inset2, 0px);
    --aug_2C: var(--aug_1p, var(--aug-bl-extend1, 0px));
    --aug_2D: var(--aug_1p, var(--aug-bl-extend2, 0px));
    --aug_2E: var(--aug_1u, var(--aug-l1-width, var(--aug-l1, 15px)));
    --aug_2F: var(--aug_1u, var(--aug-l1-height, var(--aug-l1, 15px)));
    --aug_2G: var(--aug_1v, var(--aug-l2-width, var(--aug-l2, 15px)));
    --aug_2H: var(--aug_1v, var(--aug-l2-height, var(--aug-l2, 15px)));
    --aug_2I: var(--aug-l-inset1, 0px);
    --aug_2J: calc(var(--aug_2I) + var(--aug_2E) - var(--aug_2G));
    --aug_2K: var(--aug_1u, var(--aug-l-extend1, 0px));
    --aug_2L: (var(--aug_2F) + var(--aug_2K) + var(--aug_2H));
    --aug_2N: calc(var(--aug_1P) + var(--aug_1N) + var(--aug_1Q) + var(--aug_1L));
    --aug_2O: calc(var(--aug_1O) + var(--aug_1K) + var(--aug_1R) + var(--aug_1M));
    --aug_2Q: calc(100% - (var(--aug_25) + var(--aug_22) + var(--aug_26) + var(--aug_20)));
    --aug_2T: calc(var(--aug_24) + var(--aug_21) + var(--aug_27) + var(--aug_23));
    --aug_2V: calc(100% - (var(--aug_2l) + var(--aug_2j) + var(--aug_2m) + var(--aug_2h)));
    --aug_2W: calc(100% - (var(--aug_2k) + var(--aug_2g) + var(--aug_2n) + var(--aug_2i)));
    --aug_2Y: calc(var(--aug_2B) + var(--aug_2y) + var(--aug_2C) + var(--aug_2w));
    --aug_31: calc(100% - (var(--aug_2A) + var(--aug_2x) + var(--aug_2D) + var(--aug_2z)));
    --aug_32: var(--aug-t-center, var(--aug_2O) / 2 + var(--aug_2Q) / 2) + var(--aug-t-offset, 0px);
    --aug_33: calc(var(--aug_32) - var(--aug_1Z) / 2);
    --aug_35: calc(var(--aug_32) + var(--aug_1Z) / 2);
    --aug_37: var(--aug-r-center, var(--aug_2T) / 2 + var(--aug_2V) / 2) + var(--aug-r-offset, 0px);
    --aug_39: calc(var(--aug_37) - var(--aug_2f) / 2);
    --aug_3b: calc(var(--aug_37) + var(--aug_2f) / 2);
    --aug_3c: var(--aug-b-center, var(--aug_2W) / 2 + var(--aug_2Y) / 2) + var(--aug-b-offset, 0px);
    --aug_3d: calc(var(--aug_3c) + var(--aug_2v) / 2);
    --aug_3f: calc(var(--aug_3c) - var(--aug_2v) / 2);
    --aug_3h: var(--aug-l-center, var(--aug_2N) / 2 + var(--aug_31) / 2) + var(--aug-l-offset, 0px);
    --aug_3j: calc(var(--aug_3h) + var(--aug_2L) / 2);
    --aug_3l: calc(var(--aug_3h) - var(--aug_2L) / 2);
    --aug_3m: calc(var(--aug_1O) + var(--aug_1K));
    --aug_3n: var(--aug_2O);
    --aug_3o: var(--aug_33);
    --aug_3p: var(--aug_35);
    --aug_3q: var(--aug_2Q);
    --aug_3r: calc(100% - var(--aug_25) - var(--aug_22));
    --aug_3s: calc(100% - var(--aug_2c) - var(--aug_28));
    --aug_3t: calc(100% - var(--aug_2d) - var(--aug_2a));
    --aug_3u: calc(100% - var(--aug_2k) - var(--aug_2g));
    --aug_3v: var(--aug_2W);
    --aug_3w: var(--aug_3d);
    --aug_3x: var(--aug_3f);
    --aug_3y: var(--aug_2Y);
    --aug_3z: calc(var(--aug_2B) + var(--aug_2y));
    --aug_3A: calc(var(--aug_2I) + var(--aug_2E));
    --aug_3B: calc(var(--aug_2J) + var(--aug_2G));
    --aug_3C: var(--aug_2N);
    --aug_3D: calc(var(--aug_1P) + var(--aug_1N));
    --aug_3E: calc(var(--aug_1W) + var(--aug_1T));
    --aug_3F: calc(var(--aug_1X) + var(--aug_1V));
    --aug_3G: calc(var(--aug_24) + var(--aug_21));
    --aug_3H: var(--aug_2T);
    --aug_3I: var(--aug_39);
    --aug_3J: var(--aug_3b);
    --aug_3K: var(--aug_2V);
    --aug_3L: calc(100% - var(--aug_2l) - var(--aug_2j));
    --aug_3M: calc(100% - var(--aug_2s) - var(--aug_2p));
    --aug_3N: calc(100% - var(--aug_2t) - var(--aug_2r));
    --aug_3O: calc(100% - var(--aug_2A) - var(--aug_2x));
    --aug_3P: var(--aug_31);
    --aug_3Q: var(--aug_3j);
    --aug_3R: var(--aug_3l);
    --aug_3S: var(--aug_1O) + var(--aug_5) + var(--aug_f);
    --aug_3T: var(--aug_1P) + var(--aug_1N) + var(--aug_1Q) + var(--aug_2) + var(--aug_c);
    --aug_3U: var(--aug_1O) + var(--aug_1K) + var(--aug_1R) + var(--aug_5) + var(--aug_f);
    --aug_3V: var(--aug_1P) + var(--aug_2) + var(--aug_c);
    --aug_3W: var(--aug_33) + var(--aug_1S) - var(--aug_3) - var(--aug_d);
    --aug_3X: var(--aug_1W) + var(--aug_2) + var(--aug_c);
    --aug_3Y: var(--aug_35) - var(--aug_1U) + var(--aug_5) + var(--aug_f);
    --aug_3Z: var(--aug_1X) + var(--aug_2) + var(--aug_c);
    --aug_40: var(--aug_2Q) + var(--aug_20) - var(--aug_3) - var(--aug_d);
    --aug_41: var(--aug_24) + var(--aug_2) + var(--aug_c);
    --aug_42: 100% - var(--aug_25) - var(--aug_3) - var(--aug_d);
    --aug_43: var(--aug_2T) - var(--aug_23) + var(--aug_2) + var(--aug_c);
    --aug_44: 100% - var(--aug_2c) - var(--aug_3) - var(--aug_d);
    --aug_45: var(--aug_39) + var(--aug_29) - var(--aug_4) - var(--aug_e);
    --aug_46: 100% - var(--aug_2d) - var(--aug_3) - var(--aug_d);
    --aug_47: var(--aug_3b) - var(--aug_2b) + var(--aug_2) + var(--aug_c);
    --aug_48: 100% - var(--aug_2k) - var(--aug_3) - var(--aug_d);
    --aug_49: var(--aug_2V) + var(--aug_2h) - var(--aug_4) - var(--aug_e);
    --aug_4a: var(--aug_2W) + var(--aug_2i) - var(--aug_3) - var(--aug_d);
    --aug_4b: 100% - var(--aug_2l) - var(--aug_4) - var(--aug_e);
    --aug_4c: var(--aug_3d) - var(--aug_2o) + var(--aug_5) + var(--aug_f);
    --aug_4d: 100% - var(--aug_2s) - var(--aug_4) - var(--aug_e);
    --aug_4e: var(--aug_3f) + var(--aug_2q) - var(--aug_3) - var(--aug_d);
    --aug_4f: 100% - var(--aug_2t) - var(--aug_4) - var(--aug_e);
    --aug_4g: var(--aug_2Y) - var(--aug_2w) + var(--aug_5) + var(--aug_f);
    --aug_4h: 100% - var(--aug_2A) - var(--aug_4) - var(--aug_e);
    --aug_4i: var(--aug_2B) + var(--aug_5) + var(--aug_f);
    --aug_4j: var(--aug_31) + var(--aug_2z) - var(--aug_4) - var(--aug_e);
    --aug_4k: var(--aug_2I) + var(--aug_5) + var(--aug_f);
    --aug_4l: var(--aug_3j) - var(--aug_2F) + var(--aug_2) + var(--aug_c);
    --aug_4m: var(--aug_2J) + var(--aug_5) + var(--aug_f);
    --aug_4n: var(--aug_3l) + var(--aug_2H) - var(--aug_4) - var(--aug_e);
  }

  [data-augmented-ui-border],
  [data-augmented-ui-inlay] {
    --aug_1: var(--aug-border) 0px;
    --aug_2: var(--aug_1, var(--aug-border-top, var(--aug-border-y, var(--aug-border-all))));
    --aug_3: var(--aug_1, var(--aug-border-right, var(--aug-border-x, var(--aug-border-all))));
    --aug_4: var(--aug_1, var(--aug-border-bottom, var(--aug-border-y, var(--aug-border-all))));
    --aug_5: var(--aug_1, var(--aug-border-left, var(--aug-border-x, var(--aug-border-all))));
    --aug_7: var(--aug-inlay) 0px;
    --aug_8: var(--aug_7, calc(var(--aug-inlay-top, var(--aug-inlay-y, var(--aug-inlay-all))) + var(--aug_2)));
    --aug_9: var(--aug_7, calc(var(--aug-inlay-right, var(--aug-inlay-x, var(--aug-inlay-all))) + var(--aug_3)));
    --aug_a: var(--aug_7, calc(var(--aug-inlay-bottom, var(--aug-inlay-y, var(--aug-inlay-all))) + var(--aug_4)));
    --aug_b: var(--aug_7, calc(var(--aug-inlay-left, var(--aug-inlay-x, var(--aug-inlay-all))) + var(--aug_5)));
    --aug_c: var(--aug_7, var(--aug-inlay-top, var(--aug-inlay-y, var(--aug-inlay-all))));
    --aug_d: var(--aug_7, var(--aug-inlay-right, var(--aug-inlay-x, var(--aug-inlay-all))));
    --aug_e: var(--aug_7, var(--aug-inlay-bottom, var(--aug-inlay-y, var(--aug-inlay-all))));
    --aug_f: var(--aug_7, var(--aug-inlay-left, var(--aug-inlay-x, var(--aug-inlay-all))));
  }

  [data-augmented-ui-border],
  [data-augmented-ui]::after {
    --aug_p: var(--aug-border) none;
    --aug_q: var(--aug-delegated-border) "";
    content: var(--aug_p, var(--aug_q, none));
    --aug_r: var(--aug-border) 1;
    --aug_s: var(--aug-border) static;
    --aug_t: var(--aug-border) auto;
    --aug_u: var(--aug_t, 0px);
    opacity: var(--aug_r, var(--aug-border-opacity, 1));
    position: var(--aug_s, absolute);
    top: var(--aug_u);
    right: var(--aug_u);
    bottom: var(--aug_u);
    left: var(--aug_u);
    background: var(--aug_p, var(--aug-border-bg, none));
    pointer-events: var(--aug_t, none);
    --aug_4o: var(--aug-border, , var(--aug_5) calc(var(--aug_2N) + var(--aug_2)), -1px calc(var(--aug_2N) + var(--aug_2)), -1px calc(100% + 1px), calc(100% + 1px) calc(100% + 1px), calc(100% + 1px) -1px, -1px -1px, -1px calc(var(--aug_2N) + var(--aug_2)), var(--aug_5) calc(var(--aug_2N) + var(--aug_2)));
    --aug_C: var(--aug-border) INVAL1D;
    --aug_D: var(--aug-border);
    --aug_4p: var(--aug_5);
    --aug_4q: var(--aug_3);
    --aug_4r: var(--aug_2);
    --aug_4s: var(--aug_4);
    --aug_4t: var(--aug_f);
    --aug_4u: var(--aug_d);
    --aug_4v: var(--aug_c);
    --aug_4w: var(--aug_e);
  }

  [data-augmented-ui-inlay],
  [data-augmented-ui]::before {
    --aug_w: var(--aug-inlay) none;
    --aug_x: var(--aug-delegated-inlay) "";
    content: var(--aug_w, var(--aug_x, none));
    --aug_y: var(--aug-inlay) 1;
    --aug_z: var(--aug-inlay) static;
    --aug_A: var(--aug-inlay) auto;
    --aug_B: var(--aug_A, 0px);
    opacity: var(--aug_y, var(--aug-inlay-opacity, 1));
    position: var(--aug_z, absolute);
    top: var(--aug_B);
    right: var(--aug_B);
    bottom: var(--aug_B);
    left: var(--aug_B);
    background: var(--aug_w, var(--aug-inlay-bg, none));
    z-index: var(--aug_A, -1);
    --aug_4o: ;
    --aug_C: var(--aug-inlay) INVAL1D;
    --aug_D: var(--aug-inlay);
    --aug_4p: var(--aug_b);
    --aug_4q: var(--aug_9);
    --aug_4r: var(--aug_8);
    --aug_4s: var(--aug_a);
    --aug_4t: 0px;
    --aug_4u: 0px;
    --aug_4v: 0px;
    --aug_4w: 0px;
  }

  [data-augmented-ui-border],
  [data-augmented-ui]::after,
  [data-augmented-ui-inlay],
  [data-augmented-ui]::before {
    --aug_4x: var(--aug-step-tl1, calc(var(--aug_1O) + var(--aug_4p)) calc(var(--aug_1P) + var(--aug_1N) + var(--aug_1Q) + var(--aug_4r)), );
    --aug_4y: var(--aug-step-tl2, calc(var(--aug_1O) + var(--aug_1K) + var(--aug_1R) + var(--aug_4p)) calc(var(--aug_1P) + var(--aug_4r)), );
    --aug_4z: var(--aug-step-t1, calc(var(--aug_33) + var(--aug_1S) - var(--aug_4q)) calc(var(--aug_1W) + var(--aug_4r)), );
    --aug_4A: var(--aug-step-t2, calc(var(--aug_35) - var(--aug_1U) + var(--aug_4p)) calc(var(--aug_1X) + var(--aug_4r)), );
    --aug_4B: var(--aug-step-tr1, calc(var(--aug_2Q) + var(--aug_20) - var(--aug_4q)) calc(var(--aug_24) + var(--aug_4r)), );
    --aug_4C: var(--aug-step-tr2, calc(100% - var(--aug_25) - var(--aug_4q)) calc(var(--aug_2T) - var(--aug_23) + var(--aug_4r)), );
    --aug_4D: var(--aug-step-r1, calc(100% - var(--aug_2c) - var(--aug_4q)) calc(var(--aug_39) + var(--aug_29) - var(--aug_4s)), );
    --aug_4E: var(--aug-step-r2, calc(100% - var(--aug_2d) - var(--aug_4q)) calc(var(--aug_3b) - var(--aug_2b) + var(--aug_4r)), );
    --aug_4F: var(--aug-step-br1, calc(100% - var(--aug_2k) - var(--aug_4q)) calc(var(--aug_2V) + var(--aug_2h) - var(--aug_4s)), );
    --aug_4G: var(--aug-step-br2, calc(var(--aug_2W) + var(--aug_2i) - var(--aug_4q)) calc(100% - var(--aug_2l) - var(--aug_4s)), );
    --aug_4H: var(--aug-step-b1, calc(var(--aug_3d) - var(--aug_2o) + var(--aug_4p)) calc(100% - var(--aug_2s) - var(--aug_4s)), );
    --aug_4I: var(--aug-step-b2, calc(var(--aug_3f) + var(--aug_2q) - var(--aug_4q)) calc(100% - var(--aug_2t) - var(--aug_4s)), );
    --aug_4J: var(--aug-step-bl1, calc(var(--aug_2Y) - var(--aug_2w) + var(--aug_4p)) calc(100% - var(--aug_2A) - var(--aug_4s)), );
    --aug_4K: var(--aug-step-bl2, calc(var(--aug_2B) + var(--aug_4p)) calc(var(--aug_31) + var(--aug_2z) - var(--aug_4s)), );
    --aug_4L: var(--aug-step-l1, calc(var(--aug_2I) + var(--aug_4p)) calc(var(--aug_3j) - var(--aug_2F) + var(--aug_4r)), );
    --aug_4M: var(--aug-step-l2, calc(var(--aug_2J) + var(--aug_4p)) calc(var(--aug_3l) + var(--aug_2H) - var(--aug_4s)), );
    --aug_4N: var(--aug-rect-tl1, calc(var(--aug_1O) + var(--aug_1K) + var(--aug_4p)) calc(var(--aug_2N) + var(--aug_4r)), );
    --aug_4O: var(--aug-rect-tl2, calc(var(--aug_2O) + var(--aug_4p)) calc(var(--aug_1P) + var(--aug_1N) + var(--aug_4r)), );
    --aug_4P: var(--aug-rect-t1, calc(var(--aug_33) - var(--aug_4q)) calc(var(--aug_1W) + var(--aug_1T) + var(--aug_4r)), );
    --aug_4Q: var(--aug-rect-t2, calc(var(--aug_35) + var(--aug_4p)) calc(var(--aug_1X) + var(--aug_1V) + var(--aug_4r)), );
    --aug_4R: var(--aug-rect-tr1, calc(var(--aug_2Q) - var(--aug_4q)) calc(var(--aug_24) + var(--aug_21) + var(--aug_4r)), );
    --aug_4S: var(--aug-rect-tr2, calc(100% - var(--aug_25) - var(--aug_22) - var(--aug_4q)) calc(var(--aug_2T) + var(--aug_4r)), );
    --aug_4T: var(--aug-rect-r1, calc(100% - var(--aug_2c) - var(--aug_28) - var(--aug_4q)) calc(var(--aug_39) - var(--aug_4s)), );
    --aug_4U: var(--aug-rect-r2, calc(100% - var(--aug_2d) - var(--aug_2a) - var(--aug_4q)) calc(var(--aug_3b) + var(--aug_4r)), );
    --aug_4V: var(--aug-rect-br1, calc(100% - var(--aug_2k) - var(--aug_2g) - var(--aug_4q)) calc(var(--aug_2V) - var(--aug_4s)), );
    --aug_4W: var(--aug-rect-br2, calc(var(--aug_2W) - var(--aug_4q)) calc(100% - var(--aug_2l) - var(--aug_2j) - var(--aug_4s)), );
    --aug_4X: var(--aug-rect-b1, calc(var(--aug_3d) + var(--aug_4p)) calc(100% - var(--aug_2s) - var(--aug_2p) - var(--aug_4s)), );
    --aug_4Y: var(--aug-rect-b2, calc(var(--aug_3f) - var(--aug_4q)) calc(100% - var(--aug_2t) - var(--aug_2r) - var(--aug_4s)), );
    --aug_4Z: var(--aug-rect-bl1, calc(var(--aug_2Y) + var(--aug_4p)) calc(100% - var(--aug_2A) - var(--aug_2x) - var(--aug_4s)), );
    --aug_50: var(--aug-rect-bl2, calc(var(--aug_2B) + var(--aug_2y) + var(--aug_4p)) calc(var(--aug_31) - var(--aug_4s)), );
    --aug_51: var(--aug-rect-l1, calc(var(--aug_2I) + var(--aug_2E) + var(--aug_4p)) calc(var(--aug_3j) + var(--aug_4r)), );
    --aug_52: var(--aug-rect-l2, calc(var(--aug_2J) + var(--aug_2G) + var(--aug_4p)) calc(var(--aug_3l) - var(--aug_4s)), );
    --aug_53: var(--aug_4p) * var(--aug-tl1-clipmod-x);
    --aug_54: var(--aug_4r) * var(--aug-tl1-clipmod-y);
    --aug_55: (var(--aug_Q, var(--aug-tl1-alt-join-in) 0px));
    --aug_56: (var(--aug_Q, var(--aug-tl1-alt-join-in) var(--aug_54)));
    --aug_57: (var(--aug_Q, var(--aug-tl1-alt-join-out) var(--aug_53)));
    --aug_58: (var(--aug_Q, var(--aug-tl1-alt-join-out) 0px));
    --aug_59: var(--aug_55, var(--aug_53));
    --aug_5a: var(--aug_56, 0px);
    --aug_5b: var(--aug_57, 0px);
    --aug_5c: var(--aug_58, var(--aug_54));
    --aug_5d: var(--aug-clip-tl1, );
    --aug_5e: var(--aug_4p) * var(--aug-tl2-clipmod-x);
    --aug_5f: var(--aug_4r) * var(--aug-tl2-clipmod-y);
    --aug_5g: (var(--aug_R, var(--aug-tl2-alt-join-in) 0px));
    --aug_5h: (var(--aug_R, var(--aug-tl2-alt-join-in) var(--aug_5f)));
    --aug_5i: (var(--aug_R, var(--aug-tl2-alt-join-out) var(--aug_5e)));
    --aug_5j: (var(--aug_R, var(--aug-tl2-alt-join-out) 0px));
    --aug_5k: var(--aug_5g, var(--aug_5e));
    --aug_5l: var(--aug_5h, 0px);
    --aug_5m: var(--aug_5i, 0px);
    --aug_5n: var(--aug_5j, var(--aug_5f));
    --aug_5o: var(--aug-clip-tl2, );
    --aug_5p: var(--aug_4q) * var(--aug-t1-clipmod-x);
    --aug_5q: var(--aug_4r) * var(--aug-t1-clipmod-y);
    --aug_5r: (var(--aug_W, var(--aug-t1-alt-join-in) var(--aug_5p)));
    --aug_5s: (var(--aug_W, var(--aug-t1-alt-join-in) 0px));
    --aug_5t: (var(--aug_W, var(--aug-t1-alt-join-out) var(--aug_5p)));
    --aug_5u: (var(--aug_W, var(--aug-t1-alt-join-out) 0px));
    --aug_5v: var(--aug_5r, 0px);
    --aug_5w: var(--aug_5s, var(--aug_5q));
    --aug_5x: var(--aug_5t, var(--aug_4q));
    --aug_5y: var(--aug_5u, var(--aug_5q));
    --aug_5z: var(--aug-clip-t1, );
    --aug_5A: var(--aug_4p) * var(--aug-t2-clipmod-x);
    --aug_5B: var(--aug_4r) * var(--aug-t2-clipmod-y);
    --aug_5C: (var(--aug_X, var(--aug-t2-alt-join-in) var(--aug_5A)));
    --aug_5D: (var(--aug_X, var(--aug-t2-alt-join-in) 0px));
    --aug_5E: (var(--aug_X, var(--aug-t2-alt-join-out) var(--aug_5A)));
    --aug_5F: (var(--aug_X, var(--aug-t2-alt-join-out) 0px));
    --aug_5G: var(--aug_5C, var(--aug_4p));
    --aug_5H: var(--aug_5D, var(--aug_5B));
    --aug_5I: var(--aug_5E, 0px);
    --aug_5J: var(--aug_5F, var(--aug_5B));
    --aug_5K: var(--aug-clip-t2, );
    --aug_5L: var(--aug_4q) * var(--aug-tr1-clipmod-x);
    --aug_5M: var(--aug_4r) * var(--aug-tr1-clipmod-y);
    --aug_5N: (var(--aug_12, var(--aug-tr1-alt-join-in) var(--aug_5L)));
    --aug_5O: (var(--aug_12, var(--aug-tr1-alt-join-in) 0px));
    --aug_5P: (var(--aug_12, var(--aug-tr1-alt-join-out) 0px));
    --aug_5Q: (var(--aug_12, var(--aug-tr1-alt-join-out) var(--aug_5M)));
    --aug_5R: var(--aug_5N, 0px);
    --aug_5S: var(--aug_5O, var(--aug_5M));
    --aug_5T: var(--aug_5P, var(--aug_5L));
    --aug_5U: var(--aug_5Q, 0px);
    --aug_5V: var(--aug-clip-tr1, );
    --aug_5W: var(--aug_4q) * var(--aug-tr2-clipmod-x);
    --aug_5X: var(--aug_4r) * var(--aug-tr2-clipmod-y);
    --aug_5Y: (var(--aug_13, var(--aug-tr2-alt-join-in) var(--aug_5W)));
    --aug_5Z: (var(--aug_13, var(--aug-tr2-alt-join-in) 0px));
    --aug_60: (var(--aug_13, var(--aug-tr2-alt-join-out) 0px));
    --aug_61: (var(--aug_13, var(--aug-tr2-alt-join-out) var(--aug_5X)));
    --aug_62: var(--aug_5Y, 0px);
    --aug_63: var(--aug_5Z, var(--aug_5X));
    --aug_64: var(--aug_60, var(--aug_5W));
    --aug_65: var(--aug_61, 0px);
    --aug_66: var(--aug-clip-tr2, );
    --aug_67: var(--aug_4q) * var(--aug-r1-clipmod-x);
    --aug_68: var(--aug_4s) * var(--aug-r1-clipmod-y);
    --aug_69: (var(--aug_18, var(--aug-r1-alt-join-in) 0px));
    --aug_6a: (var(--aug_18, var(--aug-r1-alt-join-in) var(--aug_68)));
    --aug_6b: (var(--aug_18, var(--aug-r1-alt-join-out) 0px));
    --aug_6c: (var(--aug_18, var(--aug-r1-alt-join-out) var(--aug_68)));
    --aug_6d: var(--aug_69, var(--aug_67));
    --aug_6e: var(--aug_6a, 0px);
    --aug_6f: var(--aug_6b, var(--aug_67));
    --aug_6g: var(--aug_6c, var(--aug_4s));
    --aug_6h: var(--aug-clip-r1, );
    --aug_6i: var(--aug_4q) * var(--aug-r2-clipmod-x);
    --aug_6j: var(--aug_4r) * var(--aug-r2-clipmod-y);
    --aug_6k: (var(--aug_19, var(--aug-r2-alt-join-in) 0px));
    --aug_6l: (var(--aug_19, var(--aug-r2-alt-join-in) var(--aug_6j)));
    --aug_6m: (var(--aug_19, var(--aug-r2-alt-join-out) 0px));
    --aug_6n: (var(--aug_19, var(--aug-r2-alt-join-out) var(--aug_6j)));
    --aug_6o: var(--aug_6k, var(--aug_6i));
    --aug_6p: var(--aug_6l, var(--aug_4r));
    --aug_6q: var(--aug_6m, var(--aug_6i));
    --aug_6r: var(--aug_6n, 0px);
    --aug_6s: var(--aug-clip-r2, );
    --aug_6t: var(--aug_4q) * var(--aug-br1-clipmod-x);
    --aug_6u: var(--aug_4s) * var(--aug-br1-clipmod-y);
    --aug_6v: (var(--aug_1e, var(--aug-br1-alt-join-in) 0px));
    --aug_6w: (var(--aug_1e, var(--aug-br1-alt-join-in) var(--aug_6u)));
    --aug_6x: (var(--aug_1e, var(--aug-br1-alt-join-out) var(--aug_6t)));
    --aug_6y: (var(--aug_1e, var(--aug-br1-alt-join-out) 0px));
    --aug_6z: var(--aug_6v, var(--aug_6t));
    --aug_6A: var(--aug_6w, 0px);
    --aug_6B: var(--aug_6x, 0px);
    --aug_6C: var(--aug_6y, var(--aug_6u));
    --aug_6D: var(--aug-clip-br1, );
    --aug_6E: var(--aug_4q) * var(--aug-br2-clipmod-x);
    --aug_6F: var(--aug_4s) * var(--aug-br2-clipmod-y);
    --aug_6G: (var(--aug_1f, var(--aug-br2-alt-join-in) 0px));
    --aug_6H: (var(--aug_1f, var(--aug-br2-alt-join-in) var(--aug_6F)));
    --aug_6I: (var(--aug_1f, var(--aug-br2-alt-join-out) var(--aug_6E)));
    --aug_6J: (var(--aug_1f, var(--aug-br2-alt-join-out) 0px));
    --aug_6K: var(--aug_6G, var(--aug_6E));
    --aug_6L: var(--aug_6H, 0px);
    --aug_6M: var(--aug_6I, 0px);
    --aug_6N: var(--aug_6J, var(--aug_6F));
    --aug_6O: var(--aug-clip-br2, );
    --aug_6P: var(--aug_4p) * var(--aug-b1-clipmod-x);
    --aug_6Q: var(--aug_4s) * var(--aug-b1-clipmod-y);
    --aug_6R: (var(--aug_1k, var(--aug-b1-alt-join-in) var(--aug_6P)));
    --aug_6S: (var(--aug_1k, var(--aug-b1-alt-join-in) 0px));
    --aug_6T: (var(--aug_1k, var(--aug-b1-alt-join-out) var(--aug_6P)));
    --aug_6U: (var(--aug_1k, var(--aug-b1-alt-join-out) 0px));
    --aug_6V: var(--aug_6R, 0px);
    --aug_6W: var(--aug_6S, var(--aug_6Q));
    --aug_6X: var(--aug_6T, var(--aug_4p));
    --aug_6Y: var(--aug_6U, var(--aug_6Q));
    --aug_6Z: var(--aug-clip-b1, );
    --aug_70: var(--aug_4q) * var(--aug-b2-clipmod-x);
    --aug_71: var(--aug_4s) * var(--aug-b2-clipmod-y);
    --aug_72: (var(--aug_1l, var(--aug-b2-alt-join-in) var(--aug_70)));
    --aug_73: (var(--aug_1l, var(--aug-b2-alt-join-in) 0px));
    --aug_74: (var(--aug_1l, var(--aug-b2-alt-join-out) var(--aug_70)));
    --aug_75: (var(--aug_1l, var(--aug-b2-alt-join-out) 0px));
    --aug_76: var(--aug_72, var(--aug_4q));
    --aug_77: var(--aug_73, var(--aug_71));
    --aug_78: var(--aug_74, 0px);
    --aug_79: var(--aug_75, var(--aug_71));
    --aug_7a: var(--aug-clip-b2, );
    --aug_7b: var(--aug_4p) * var(--aug-bl1-clipmod-x);
    --aug_7c: var(--aug_4s) * var(--aug-bl1-clipmod-y);
    --aug_7d: (var(--aug_1q, var(--aug-bl1-alt-join-in) var(--aug_7b)));
    --aug_7e: (var(--aug_1q, var(--aug-bl1-alt-join-in) 0px));
    --aug_7f: (var(--aug_1q, var(--aug-bl1-alt-join-out) 0px));
    --aug_7g: (var(--aug_1q, var(--aug-bl1-alt-join-out) var(--aug_7c)));
    --aug_7h: var(--aug_7d, 0px);
    --aug_7i: var(--aug_7e, var(--aug_7c));
    --aug_7j: var(--aug_7f, var(--aug_7b));
    --aug_7k: var(--aug_7g, 0px);
    --aug_7l: var(--aug-clip-bl1, );
    --aug_7m: var(--aug_4p) * var(--aug-bl2-clipmod-x);
    --aug_7n: var(--aug_4s) * var(--aug-bl2-clipmod-y);
    --aug_7o: (var(--aug_1r, var(--aug-bl2-alt-join-in) var(--aug_7m)));
    --aug_7p: (var(--aug_1r, var(--aug-bl2-alt-join-in) 0px));
    --aug_7q: (var(--aug_1r, var(--aug-bl2-alt-join-out) 0px));
    --aug_7r: (var(--aug_1r, var(--aug-bl2-alt-join-out) var(--aug_7n)));
    --aug_7s: var(--aug_7o, 0px);
    --aug_7t: var(--aug_7p, var(--aug_7n));
    --aug_7u: var(--aug_7q, var(--aug_7m));
    --aug_7v: var(--aug_7r, 0px);
    --aug_7w: var(--aug-clip-bl2, );
    --aug_7x: var(--aug_4p) * var(--aug-l1-clipmod-x);
    --aug_7y: var(--aug_4r) * var(--aug-l1-clipmod-y);
    --aug_7z: (var(--aug_1w, var(--aug-l1-alt-join-in) 0px));
    --aug_7A: (var(--aug_1w, var(--aug-l1-alt-join-in) var(--aug_7y)));
    --aug_7B: (var(--aug_1w, var(--aug-l1-alt-join-out) 0px));
    --aug_7C: (var(--aug_1w, var(--aug-l1-alt-join-out) var(--aug_7y)));
    --aug_7D: var(--aug_7z, var(--aug_7x));
    --aug_7E: var(--aug_7A, 0px);
    --aug_7F: var(--aug_7B, var(--aug_7x));
    --aug_7G: var(--aug_7C, var(--aug_4r));
    --aug_7H: var(--aug-clip-l1, );
    --aug_7I: var(--aug_4p) * var(--aug-l2-clipmod-x);
    --aug_7J: var(--aug_4s) * var(--aug-l2-clipmod-y);
    --aug_7K: (var(--aug_1x, var(--aug-l2-alt-join-in) 0px));
    --aug_7L: (var(--aug_1x, var(--aug-l2-alt-join-in) var(--aug_7J)));
    --aug_7M: (var(--aug_1x, var(--aug-l2-alt-join-out) 0px));
    --aug_7N: (var(--aug_1x, var(--aug-l2-alt-join-out) var(--aug_7J)));
    --aug_7O: var(--aug_7K, var(--aug_7I));
    --aug_7P: var(--aug_7L, var(--aug_4s));
    --aug_7Q: var(--aug_7M, var(--aug_7I));
    --aug_7R: var(--aug_7N, 0px);
    --aug_7S: var(--aug-clip-l2, );
    --aug_7T: var(--aug-round-tl1, calc(var(--aug_3m) - var(--aug_o) * (var(--aug_1K) - var(--aug_4p))) calc(var(--aug_3C) - var(--aug_g) * (var(--aug_1L) - var(--aug_4r))), calc(var(--aug_3m) - var(--aug_n) * (var(--aug_1K) - var(--aug_4p))) calc(var(--aug_3C) - var(--aug_h) * (var(--aug_1L) - var(--aug_4r))), calc(var(--aug_3m) - var(--aug_m) * (var(--aug_1K) - var(--aug_4p))) calc(var(--aug_3C) - var(--aug_i) * (var(--aug_1L) - var(--aug_4r))), calc(var(--aug_3m) - var(--aug_l) * (var(--aug_1K) - var(--aug_4p))) calc(var(--aug_3C) - var(--aug_j) * (var(--aug_1L) - var(--aug_4r))), calc(var(--aug_3m) - var(--aug_k) * (var(--aug_1K) - var(--aug_4p))) calc(var(--aug_3C) - var(--aug_k) * (var(--aug_1L) - var(--aug_4r))), calc(var(--aug_3m) - var(--aug_j) * (var(--aug_1K) - var(--aug_4p))) calc(var(--aug_3C) - var(--aug_l) * (var(--aug_1L) - var(--aug_4r))), calc(var(--aug_3m) - var(--aug_i) * (var(--aug_1K) - var(--aug_4p))) calc(var(--aug_3C) - var(--aug_m) * (var(--aug_1L) - var(--aug_4r))), calc(var(--aug_3m) - var(--aug_h) * (var(--aug_1K) - var(--aug_4p))) calc(var(--aug_3C) - var(--aug_n) * (var(--aug_1L) - var(--aug_4r))), calc(var(--aug_3m) - var(--aug_g) * (var(--aug_1K) - var(--aug_4p))) calc(var(--aug_3C) - var(--aug_o) * (var(--aug_1L) - var(--aug_4r))), );
    --aug_7U: var(--aug-round-tl2, calc(var(--aug_3n) - var(--aug_o) * (var(--aug_1M) - var(--aug_4p))) calc(var(--aug_3D) - var(--aug_g) * (var(--aug_1N) - var(--aug_4r))), calc(var(--aug_3n) - var(--aug_n) * (var(--aug_1M) - var(--aug_4p))) calc(var(--aug_3D) - var(--aug_h) * (var(--aug_1N) - var(--aug_4r))), calc(var(--aug_3n) - var(--aug_m) * (var(--aug_1M) - var(--aug_4p))) calc(var(--aug_3D) - var(--aug_i) * (var(--aug_1N) - var(--aug_4r))), calc(var(--aug_3n) - var(--aug_l) * (var(--aug_1M) - var(--aug_4p))) calc(var(--aug_3D) - var(--aug_j) * (var(--aug_1N) - var(--aug_4r))), calc(var(--aug_3n) - var(--aug_k) * (var(--aug_1M) - var(--aug_4p))) calc(var(--aug_3D) - var(--aug_k) * (var(--aug_1N) - var(--aug_4r))), calc(var(--aug_3n) - var(--aug_j) * (var(--aug_1M) - var(--aug_4p))) calc(var(--aug_3D) - var(--aug_l) * (var(--aug_1N) - var(--aug_4r))), calc(var(--aug_3n) - var(--aug_i) * (var(--aug_1M) - var(--aug_4p))) calc(var(--aug_3D) - var(--aug_m) * (var(--aug_1N) - var(--aug_4r))), calc(var(--aug_3n) - var(--aug_h) * (var(--aug_1M) - var(--aug_4p))) calc(var(--aug_3D) - var(--aug_n) * (var(--aug_1N) - var(--aug_4r))), calc(var(--aug_3n) - var(--aug_g) * (var(--aug_1M) - var(--aug_4p))) calc(var(--aug_3D) - var(--aug_o) * (var(--aug_1N) - var(--aug_4r))), );
    --aug_7V: var(--aug-round-t1, calc(var(--aug_3o) + var(--aug_g) * (var(--aug_1S) - var(--aug_4q))) calc(var(--aug_3E) - var(--aug_o) * (var(--aug_1T) - var(--aug_4r))), calc(var(--aug_3o) + var(--aug_h) * (var(--aug_1S) - var(--aug_4q))) calc(var(--aug_3E) - var(--aug_n) * (var(--aug_1T) - var(--aug_4r))), calc(var(--aug_3o) + var(--aug_i) * (var(--aug_1S) - var(--aug_4q))) calc(var(--aug_3E) - var(--aug_m) * (var(--aug_1T) - var(--aug_4r))), calc(var(--aug_3o) + var(--aug_j) * (var(--aug_1S) - var(--aug_4q))) calc(var(--aug_3E) - var(--aug_l) * (var(--aug_1T) - var(--aug_4r))), calc(var(--aug_3o) + var(--aug_k) * (var(--aug_1S) - var(--aug_4q))) calc(var(--aug_3E) - var(--aug_k) * (var(--aug_1T) - var(--aug_4r))), calc(var(--aug_3o) + var(--aug_l) * (var(--aug_1S) - var(--aug_4q))) calc(var(--aug_3E) - var(--aug_j) * (var(--aug_1T) - var(--aug_4r))), calc(var(--aug_3o) + var(--aug_m) * (var(--aug_1S) - var(--aug_4q))) calc(var(--aug_3E) - var(--aug_i) * (var(--aug_1T) - var(--aug_4r))), calc(var(--aug_3o) + var(--aug_n) * (var(--aug_1S) - var(--aug_4q))) calc(var(--aug_3E) - var(--aug_h) * (var(--aug_1T) - var(--aug_4r))), calc(var(--aug_3o) + var(--aug_o) * (var(--aug_1S) - var(--aug_4q))) calc(var(--aug_3E) - var(--aug_g) * (var(--aug_1T) - var(--aug_4r))), );
    --aug_7W: var(--aug-round-t2, calc(var(--aug_3p) - var(--aug_o) * (var(--aug_1U) - var(--aug_4p))) calc(var(--aug_3F) - var(--aug_g) * (var(--aug_1V) - var(--aug_4r))), calc(var(--aug_3p) - var(--aug_n) * (var(--aug_1U) - var(--aug_4p))) calc(var(--aug_3F) - var(--aug_h) * (var(--aug_1V) - var(--aug_4r))), calc(var(--aug_3p) - var(--aug_m) * (var(--aug_1U) - var(--aug_4p))) calc(var(--aug_3F) - var(--aug_i) * (var(--aug_1V) - var(--aug_4r))), calc(var(--aug_3p) - var(--aug_l) * (var(--aug_1U) - var(--aug_4p))) calc(var(--aug_3F) - var(--aug_j) * (var(--aug_1V) - var(--aug_4r))), calc(var(--aug_3p) - var(--aug_k) * (var(--aug_1U) - var(--aug_4p))) calc(var(--aug_3F) - var(--aug_k) * (var(--aug_1V) - var(--aug_4r))), calc(var(--aug_3p) - var(--aug_j) * (var(--aug_1U) - var(--aug_4p))) calc(var(--aug_3F) - var(--aug_l) * (var(--aug_1V) - var(--aug_4r))), calc(var(--aug_3p) - var(--aug_i) * (var(--aug_1U) - var(--aug_4p))) calc(var(--aug_3F) - var(--aug_m) * (var(--aug_1V) - var(--aug_4r))), calc(var(--aug_3p) - var(--aug_h) * (var(--aug_1U) - var(--aug_4p))) calc(var(--aug_3F) - var(--aug_n) * (var(--aug_1V) - var(--aug_4r))), calc(var(--aug_3p) - var(--aug_g) * (var(--aug_1U) - var(--aug_4p))) calc(var(--aug_3F) - var(--aug_o) * (var(--aug_1V) - var(--aug_4r))), );
    --aug_7X: var(--aug-round-tr1, calc(var(--aug_3q) + var(--aug_g) * (var(--aug_20) - var(--aug_4q))) calc(var(--aug_3G) - var(--aug_o) * (var(--aug_21) - var(--aug_4r))), calc(var(--aug_3q) + var(--aug_h) * (var(--aug_20) - var(--aug_4q))) calc(var(--aug_3G) - var(--aug_n) * (var(--aug_21) - var(--aug_4r))), calc(var(--aug_3q) + var(--aug_i) * (var(--aug_20) - var(--aug_4q))) calc(var(--aug_3G) - var(--aug_m) * (var(--aug_21) - var(--aug_4r))), calc(var(--aug_3q) + var(--aug_j) * (var(--aug_20) - var(--aug_4q))) calc(var(--aug_3G) - var(--aug_l) * (var(--aug_21) - var(--aug_4r))), calc(var(--aug_3q) + var(--aug_k) * (var(--aug_20) - var(--aug_4q))) calc(var(--aug_3G) - var(--aug_k) * (var(--aug_21) - var(--aug_4r))), calc(var(--aug_3q) + var(--aug_l) * (var(--aug_20) - var(--aug_4q))) calc(var(--aug_3G) - var(--aug_j) * (var(--aug_21) - var(--aug_4r))), calc(var(--aug_3q) + var(--aug_m) * (var(--aug_20) - var(--aug_4q))) calc(var(--aug_3G) - var(--aug_i) * (var(--aug_21) - var(--aug_4r))), calc(var(--aug_3q) + var(--aug_n) * (var(--aug_20) - var(--aug_4q))) calc(var(--aug_3G) - var(--aug_h) * (var(--aug_21) - var(--aug_4r))), calc(var(--aug_3q) + var(--aug_o) * (var(--aug_20) - var(--aug_4q))) calc(var(--aug_3G) - var(--aug_g) * (var(--aug_21) - var(--aug_4r))), );
    --aug_7Y: var(--aug-round-tr2, calc(var(--aug_3r) + var(--aug_g) * (var(--aug_22) - var(--aug_4q))) calc(var(--aug_3H) - var(--aug_o) * (var(--aug_23) - var(--aug_4r))), calc(var(--aug_3r) + var(--aug_h) * (var(--aug_22) - var(--aug_4q))) calc(var(--aug_3H) - var(--aug_n) * (var(--aug_23) - var(--aug_4r))), calc(var(--aug_3r) + var(--aug_i) * (var(--aug_22) - var(--aug_4q))) calc(var(--aug_3H) - var(--aug_m) * (var(--aug_23) - var(--aug_4r))), calc(var(--aug_3r) + var(--aug_j) * (var(--aug_22) - var(--aug_4q))) calc(var(--aug_3H) - var(--aug_l) * (var(--aug_23) - var(--aug_4r))), calc(var(--aug_3r) + var(--aug_k) * (var(--aug_22) - var(--aug_4q))) calc(var(--aug_3H) - var(--aug_k) * (var(--aug_23) - var(--aug_4r))), calc(var(--aug_3r) + var(--aug_l) * (var(--aug_22) - var(--aug_4q))) calc(var(--aug_3H) - var(--aug_j) * (var(--aug_23) - var(--aug_4r))), calc(var(--aug_3r) + var(--aug_m) * (var(--aug_22) - var(--aug_4q))) calc(var(--aug_3H) - var(--aug_i) * (var(--aug_23) - var(--aug_4r))), calc(var(--aug_3r) + var(--aug_n) * (var(--aug_22) - var(--aug_4q))) calc(var(--aug_3H) - var(--aug_h) * (var(--aug_23) - var(--aug_4r))), calc(var(--aug_3r) + var(--aug_o) * (var(--aug_22) - var(--aug_4q))) calc(var(--aug_3H) - var(--aug_g) * (var(--aug_23) - var(--aug_4r))), );
    --aug_7Z: var(--aug-round-r1, calc(var(--aug_3s) + var(--aug_o) * (var(--aug_28) - var(--aug_4q))) calc(var(--aug_3I) + var(--aug_g) * (var(--aug_29) - var(--aug_4s))), calc(var(--aug_3s) + var(--aug_n) * (var(--aug_28) - var(--aug_4q))) calc(var(--aug_3I) + var(--aug_h) * (var(--aug_29) - var(--aug_4s))), calc(var(--aug_3s) + var(--aug_m) * (var(--aug_28) - var(--aug_4q))) calc(var(--aug_3I) + var(--aug_i) * (var(--aug_29) - var(--aug_4s))), calc(var(--aug_3s) + var(--aug_l) * (var(--aug_28) - var(--aug_4q))) calc(var(--aug_3I) + var(--aug_j) * (var(--aug_29) - var(--aug_4s))), calc(var(--aug_3s) + var(--aug_k) * (var(--aug_28) - var(--aug_4q))) calc(var(--aug_3I) + var(--aug_k) * (var(--aug_29) - var(--aug_4s))), calc(var(--aug_3s) + var(--aug_j) * (var(--aug_28) - var(--aug_4q))) calc(var(--aug_3I) + var(--aug_l) * (var(--aug_29) - var(--aug_4s))), calc(var(--aug_3s) + var(--aug_i) * (var(--aug_28) - var(--aug_4q))) calc(var(--aug_3I) + var(--aug_m) * (var(--aug_29) - var(--aug_4s))), calc(var(--aug_3s) + var(--aug_h) * (var(--aug_28) - var(--aug_4q))) calc(var(--aug_3I) + var(--aug_n) * (var(--aug_29) - var(--aug_4s))), calc(var(--aug_3s) + var(--aug_g) * (var(--aug_28) - var(--aug_4q))) calc(var(--aug_3I) + var(--aug_o) * (var(--aug_29) - var(--aug_4s))), );
    --aug_80: var(--aug-round-r2, calc(var(--aug_3t) + var(--aug_g) * (var(--aug_2a) - var(--aug_4q))) calc(var(--aug_3J) - var(--aug_o) * (var(--aug_2b) - var(--aug_4r))), calc(var(--aug_3t) + var(--aug_h) * (var(--aug_2a) - var(--aug_4q))) calc(var(--aug_3J) - var(--aug_n) * (var(--aug_2b) - var(--aug_4r))), calc(var(--aug_3t) + var(--aug_i) * (var(--aug_2a) - var(--aug_4q))) calc(var(--aug_3J) - var(--aug_m) * (var(--aug_2b) - var(--aug_4r))), calc(var(--aug_3t) + var(--aug_j) * (var(--aug_2a) - var(--aug_4q))) calc(var(--aug_3J) - var(--aug_l) * (var(--aug_2b) - var(--aug_4r))), calc(var(--aug_3t) + var(--aug_k) * (var(--aug_2a) - var(--aug_4q))) calc(var(--aug_3J) - var(--aug_k) * (var(--aug_2b) - var(--aug_4r))), calc(var(--aug_3t) + var(--aug_l) * (var(--aug_2a) - var(--aug_4q))) calc(var(--aug_3J) - var(--aug_j) * (var(--aug_2b) - var(--aug_4r))), calc(var(--aug_3t) + var(--aug_m) * (var(--aug_2a) - var(--aug_4q))) calc(var(--aug_3J) - var(--aug_i) * (var(--aug_2b) - var(--aug_4r))), calc(var(--aug_3t) + var(--aug_n) * (var(--aug_2a) - var(--aug_4q))) calc(var(--aug_3J) - var(--aug_h) * (var(--aug_2b) - var(--aug_4r))), calc(var(--aug_3t) + var(--aug_o) * (var(--aug_2a) - var(--aug_4q))) calc(var(--aug_3J) - var(--aug_g) * (var(--aug_2b) - var(--aug_4r))), );
    --aug_81: var(--aug-round-br1, calc(var(--aug_3u) + var(--aug_o) * (var(--aug_2g) - var(--aug_4q))) calc(var(--aug_3K) + var(--aug_g) * (var(--aug_2h) - var(--aug_4s))), calc(var(--aug_3u) + var(--aug_n) * (var(--aug_2g) - var(--aug_4q))) calc(var(--aug_3K) + var(--aug_h) * (var(--aug_2h) - var(--aug_4s))), calc(var(--aug_3u) + var(--aug_m) * (var(--aug_2g) - var(--aug_4q))) calc(var(--aug_3K) + var(--aug_i) * (var(--aug_2h) - var(--aug_4s))), calc(var(--aug_3u) + var(--aug_l) * (var(--aug_2g) - var(--aug_4q))) calc(var(--aug_3K) + var(--aug_j) * (var(--aug_2h) - var(--aug_4s))), calc(var(--aug_3u) + var(--aug_k) * (var(--aug_2g) - var(--aug_4q))) calc(var(--aug_3K) + var(--aug_k) * (var(--aug_2h) - var(--aug_4s))), calc(var(--aug_3u) + var(--aug_j) * (var(--aug_2g) - var(--aug_4q))) calc(var(--aug_3K) + var(--aug_l) * (var(--aug_2h) - var(--aug_4s))), calc(var(--aug_3u) + var(--aug_i) * (var(--aug_2g) - var(--aug_4q))) calc(var(--aug_3K) + var(--aug_m) * (var(--aug_2h) - var(--aug_4s))), calc(var(--aug_3u) + var(--aug_h) * (var(--aug_2g) - var(--aug_4q))) calc(var(--aug_3K) + var(--aug_n) * (var(--aug_2h) - var(--aug_4s))), calc(var(--aug_3u) + var(--aug_g) * (var(--aug_2g) - var(--aug_4q))) calc(var(--aug_3K) + var(--aug_o) * (var(--aug_2h) - var(--aug_4s))), );
    --aug_82: var(--aug-round-br2, calc(var(--aug_3v) + var(--aug_o) * (var(--aug_2i) - var(--aug_4q))) calc(var(--aug_3L) + var(--aug_g) * (var(--aug_2j) - var(--aug_4s))), calc(var(--aug_3v) + var(--aug_n) * (var(--aug_2i) - var(--aug_4q))) calc(var(--aug_3L) + var(--aug_h) * (var(--aug_2j) - var(--aug_4s))), calc(var(--aug_3v) + var(--aug_m) * (var(--aug_2i) - var(--aug_4q))) calc(var(--aug_3L) + var(--aug_i) * (var(--aug_2j) - var(--aug_4s))), calc(var(--aug_3v) + var(--aug_l) * (var(--aug_2i) - var(--aug_4q))) calc(var(--aug_3L) + var(--aug_j) * (var(--aug_2j) - var(--aug_4s))), calc(var(--aug_3v) + var(--aug_k) * (var(--aug_2i) - var(--aug_4q))) calc(var(--aug_3L) + var(--aug_k) * (var(--aug_2j) - var(--aug_4s))), calc(var(--aug_3v) + var(--aug_j) * (var(--aug_2i) - var(--aug_4q))) calc(var(--aug_3L) + var(--aug_l) * (var(--aug_2j) - var(--aug_4s))), calc(var(--aug_3v) + var(--aug_i) * (var(--aug_2i) - var(--aug_4q))) calc(var(--aug_3L) + var(--aug_m) * (var(--aug_2j) - var(--aug_4s))), calc(var(--aug_3v) + var(--aug_h) * (var(--aug_2i) - var(--aug_4q))) calc(var(--aug_3L) + var(--aug_n) * (var(--aug_2j) - var(--aug_4s))), calc(var(--aug_3v) + var(--aug_g) * (var(--aug_2i) - var(--aug_4q))) calc(var(--aug_3L) + var(--aug_o) * (var(--aug_2j) - var(--aug_4s))), );
    --aug_83: var(--aug-round-b1, calc(var(--aug_3w) - var(--aug_g) * (var(--aug_2o) - var(--aug_4p))) calc(var(--aug_3M) + var(--aug_o) * (var(--aug_2p) - var(--aug_4s))), calc(var(--aug_3w) - var(--aug_h) * (var(--aug_2o) - var(--aug_4p))) calc(var(--aug_3M) + var(--aug_n) * (var(--aug_2p) - var(--aug_4s))), calc(var(--aug_3w) - var(--aug_i) * (var(--aug_2o) - var(--aug_4p))) calc(var(--aug_3M) + var(--aug_m) * (var(--aug_2p) - var(--aug_4s))), calc(var(--aug_3w) - var(--aug_j) * (var(--aug_2o) - var(--aug_4p))) calc(var(--aug_3M) + var(--aug_l) * (var(--aug_2p) - var(--aug_4s))), calc(var(--aug_3w) - var(--aug_k) * (var(--aug_2o) - var(--aug_4p))) calc(var(--aug_3M) + var(--aug_k) * (var(--aug_2p) - var(--aug_4s))), calc(var(--aug_3w) - var(--aug_l) * (var(--aug_2o) - var(--aug_4p))) calc(var(--aug_3M) + var(--aug_j) * (var(--aug_2p) - var(--aug_4s))), calc(var(--aug_3w) - var(--aug_m) * (var(--aug_2o) - var(--aug_4p))) calc(var(--aug_3M) + var(--aug_i) * (var(--aug_2p) - var(--aug_4s))), calc(var(--aug_3w) - var(--aug_n) * (var(--aug_2o) - var(--aug_4p))) calc(var(--aug_3M) + var(--aug_h) * (var(--aug_2p) - var(--aug_4s))), calc(var(--aug_3w) - var(--aug_o) * (var(--aug_2o) - var(--aug_4p))) calc(var(--aug_3M) + var(--aug_g) * (var(--aug_2p) - var(--aug_4s))), );
    --aug_84: var(--aug-round-b2, calc(var(--aug_3x) + var(--aug_o) * (var(--aug_2q) - var(--aug_4q))) calc(var(--aug_3N) + var(--aug_g) * (var(--aug_2r) - var(--aug_4s))), calc(var(--aug_3x) + var(--aug_n) * (var(--aug_2q) - var(--aug_4q))) calc(var(--aug_3N) + var(--aug_h) * (var(--aug_2r) - var(--aug_4s))), calc(var(--aug_3x) + var(--aug_m) * (var(--aug_2q) - var(--aug_4q))) calc(var(--aug_3N) + var(--aug_i) * (var(--aug_2r) - var(--aug_4s))), calc(var(--aug_3x) + var(--aug_l) * (var(--aug_2q) - var(--aug_4q))) calc(var(--aug_3N) + var(--aug_j) * (var(--aug_2r) - var(--aug_4s))), calc(var(--aug_3x) + var(--aug_k) * (var(--aug_2q) - var(--aug_4q))) calc(var(--aug_3N) + var(--aug_k) * (var(--aug_2r) - var(--aug_4s))), calc(var(--aug_3x) + var(--aug_j) * (var(--aug_2q) - var(--aug_4q))) calc(var(--aug_3N) + var(--aug_l) * (var(--aug_2r) - var(--aug_4s))), calc(var(--aug_3x) + var(--aug_i) * (var(--aug_2q) - var(--aug_4q))) calc(var(--aug_3N) + var(--aug_m) * (var(--aug_2r) - var(--aug_4s))), calc(var(--aug_3x) + var(--aug_h) * (var(--aug_2q) - var(--aug_4q))) calc(var(--aug_3N) + var(--aug_n) * (var(--aug_2r) - var(--aug_4s))), calc(var(--aug_3x) + var(--aug_g) * (var(--aug_2q) - var(--aug_4q))) calc(var(--aug_3N) + var(--aug_o) * (var(--aug_2r) - var(--aug_4s))), );
    --aug_85: var(--aug-round-bl1, calc(var(--aug_3y) - var(--aug_g) * (var(--aug_2w) - var(--aug_4p))) calc(var(--aug_3O) + var(--aug_o) * (var(--aug_2x) - var(--aug_4s))), calc(var(--aug_3y) - var(--aug_h) * (var(--aug_2w) - var(--aug_4p))) calc(var(--aug_3O) + var(--aug_n) * (var(--aug_2x) - var(--aug_4s))), calc(var(--aug_3y) - var(--aug_i) * (var(--aug_2w) - var(--aug_4p))) calc(var(--aug_3O) + var(--aug_m) * (var(--aug_2x) - var(--aug_4s))), calc(var(--aug_3y) - var(--aug_j) * (var(--aug_2w) - var(--aug_4p))) calc(var(--aug_3O) + var(--aug_l) * (var(--aug_2x) - var(--aug_4s))), calc(var(--aug_3y) - var(--aug_k) * (var(--aug_2w) - var(--aug_4p))) calc(var(--aug_3O) + var(--aug_k) * (var(--aug_2x) - var(--aug_4s))), calc(var(--aug_3y) - var(--aug_l) * (var(--aug_2w) - var(--aug_4p))) calc(var(--aug_3O) + var(--aug_j) * (var(--aug_2x) - var(--aug_4s))), calc(var(--aug_3y) - var(--aug_m) * (var(--aug_2w) - var(--aug_4p))) calc(var(--aug_3O) + var(--aug_i) * (var(--aug_2x) - var(--aug_4s))), calc(var(--aug_3y) - var(--aug_n) * (var(--aug_2w) - var(--aug_4p))) calc(var(--aug_3O) + var(--aug_h) * (var(--aug_2x) - var(--aug_4s))), calc(var(--aug_3y) - var(--aug_o) * (var(--aug_2w) - var(--aug_4p))) calc(var(--aug_3O) + var(--aug_g) * (var(--aug_2x) - var(--aug_4s))), );
    --aug_86: var(--aug-round-bl2, calc(var(--aug_3z) - var(--aug_g) * (var(--aug_2y) - var(--aug_4p))) calc(var(--aug_3P) + var(--aug_o) * (var(--aug_2z) - var(--aug_4s))), calc(var(--aug_3z) - var(--aug_h) * (var(--aug_2y) - var(--aug_4p))) calc(var(--aug_3P) + var(--aug_n) * (var(--aug_2z) - var(--aug_4s))), calc(var(--aug_3z) - var(--aug_i) * (var(--aug_2y) - var(--aug_4p))) calc(var(--aug_3P) + var(--aug_m) * (var(--aug_2z) - var(--aug_4s))), calc(var(--aug_3z) - var(--aug_j) * (var(--aug_2y) - var(--aug_4p))) calc(var(--aug_3P) + var(--aug_l) * (var(--aug_2z) - var(--aug_4s))), calc(var(--aug_3z) - var(--aug_k) * (var(--aug_2y) - var(--aug_4p))) calc(var(--aug_3P) + var(--aug_k) * (var(--aug_2z) - var(--aug_4s))), calc(var(--aug_3z) - var(--aug_l) * (var(--aug_2y) - var(--aug_4p))) calc(var(--aug_3P) + var(--aug_j) * (var(--aug_2z) - var(--aug_4s))), calc(var(--aug_3z) - var(--aug_m) * (var(--aug_2y) - var(--aug_4p))) calc(var(--aug_3P) + var(--aug_i) * (var(--aug_2z) - var(--aug_4s))), calc(var(--aug_3z) - var(--aug_n) * (var(--aug_2y) - var(--aug_4p))) calc(var(--aug_3P) + var(--aug_h) * (var(--aug_2z) - var(--aug_4s))), calc(var(--aug_3z) - var(--aug_o) * (var(--aug_2y) - var(--aug_4p))) calc(var(--aug_3P) + var(--aug_g) * (var(--aug_2z) - var(--aug_4s))), );
    --aug_87: var(--aug-round-l1, calc(var(--aug_3A) - var(--aug_o) * (var(--aug_2E) - var(--aug_4p))) calc(var(--aug_3Q) - var(--aug_g) * (var(--aug_2F) - var(--aug_4r))), calc(var(--aug_3A) - var(--aug_n) * (var(--aug_2E) - var(--aug_4p))) calc(var(--aug_3Q) - var(--aug_h) * (var(--aug_2F) - var(--aug_4r))), calc(var(--aug_3A) - var(--aug_m) * (var(--aug_2E) - var(--aug_4p))) calc(var(--aug_3Q) - var(--aug_i) * (var(--aug_2F) - var(--aug_4r))), calc(var(--aug_3A) - var(--aug_l) * (var(--aug_2E) - var(--aug_4p))) calc(var(--aug_3Q) - var(--aug_j) * (var(--aug_2F) - var(--aug_4r))), calc(var(--aug_3A) - var(--aug_k) * (var(--aug_2E) - var(--aug_4p))) calc(var(--aug_3Q) - var(--aug_k) * (var(--aug_2F) - var(--aug_4r))), calc(var(--aug_3A) - var(--aug_j) * (var(--aug_2E) - var(--aug_4p))) calc(var(--aug_3Q) - var(--aug_l) * (var(--aug_2F) - var(--aug_4r))), calc(var(--aug_3A) - var(--aug_i) * (var(--aug_2E) - var(--aug_4p))) calc(var(--aug_3Q) - var(--aug_m) * (var(--aug_2F) - var(--aug_4r))), calc(var(--aug_3A) - var(--aug_h) * (var(--aug_2E) - var(--aug_4p))) calc(var(--aug_3Q) - var(--aug_n) * (var(--aug_2F) - var(--aug_4r))), calc(var(--aug_3A) - var(--aug_g) * (var(--aug_2E) - var(--aug_4p))) calc(var(--aug_3Q) - var(--aug_o) * (var(--aug_2F) - var(--aug_4r))), );
    --aug_88: var(--aug-round-l2, calc(var(--aug_3B) - var(--aug_g) * (var(--aug_2G) - var(--aug_4p))) calc(var(--aug_3R) + var(--aug_o) * (var(--aug_2H) - var(--aug_4s))), calc(var(--aug_3B) - var(--aug_h) * (var(--aug_2G) - var(--aug_4p))) calc(var(--aug_3R) + var(--aug_n) * (var(--aug_2H) - var(--aug_4s))), calc(var(--aug_3B) - var(--aug_i) * (var(--aug_2G) - var(--aug_4p))) calc(var(--aug_3R) + var(--aug_m) * (var(--aug_2H) - var(--aug_4s))), calc(var(--aug_3B) - var(--aug_j) * (var(--aug_2G) - var(--aug_4p))) calc(var(--aug_3R) + var(--aug_l) * (var(--aug_2H) - var(--aug_4s))), calc(var(--aug_3B) - var(--aug_k) * (var(--aug_2G) - var(--aug_4p))) calc(var(--aug_3R) + var(--aug_k) * (var(--aug_2H) - var(--aug_4s))), calc(var(--aug_3B) - var(--aug_l) * (var(--aug_2G) - var(--aug_4p))) calc(var(--aug_3R) + var(--aug_j) * (var(--aug_2H) - var(--aug_4s))), calc(var(--aug_3B) - var(--aug_m) * (var(--aug_2G) - var(--aug_4p))) calc(var(--aug_3R) + var(--aug_i) * (var(--aug_2H) - var(--aug_4s))), calc(var(--aug_3B) - var(--aug_n) * (var(--aug_2G) - var(--aug_4p))) calc(var(--aug_3R) + var(--aug_h) * (var(--aug_2H) - var(--aug_4s))), calc(var(--aug_3B) - var(--aug_o) * (var(--aug_2G) - var(--aug_4p))) calc(var(--aug_3R) + var(--aug_g) * (var(--aug_2H) - var(--aug_4s))), );
    --aug_89: var(--aug-scoop-tl1, calc(var(--aug_3S) + var(--aug_g) * (var(--aug_1K) - var(--aug_4t))) calc(var(--aug_3T) + var(--aug_o) * (var(--aug_1L) - var(--aug_4v))), calc(var(--aug_3S) + var(--aug_h) * (var(--aug_1K) - var(--aug_4t))) calc(var(--aug_3T) + var(--aug_n) * (var(--aug_1L) - var(--aug_4v))), calc(var(--aug_3S) + var(--aug_i) * (var(--aug_1K) - var(--aug_4t))) calc(var(--aug_3T) + var(--aug_m) * (var(--aug_1L) - var(--aug_4v))), calc(var(--aug_3S) + var(--aug_j) * (var(--aug_1K) - var(--aug_4t))) calc(var(--aug_3T) + var(--aug_l) * (var(--aug_1L) - var(--aug_4v))), calc(var(--aug_3S) + var(--aug_k) * (var(--aug_1K) - var(--aug_4t))) calc(var(--aug_3T) + var(--aug_k) * (var(--aug_1L) - var(--aug_4v))), calc(var(--aug_3S) + var(--aug_l) * (var(--aug_1K) - var(--aug_4t))) calc(var(--aug_3T) + var(--aug_j) * (var(--aug_1L) - var(--aug_4v))), calc(var(--aug_3S) + var(--aug_m) * (var(--aug_1K) - var(--aug_4t))) calc(var(--aug_3T) + var(--aug_i) * (var(--aug_1L) - var(--aug_4v))), calc(var(--aug_3S) + var(--aug_n) * (var(--aug_1K) - var(--aug_4t))) calc(var(--aug_3T) + var(--aug_h) * (var(--aug_1L) - var(--aug_4v))), calc(var(--aug_3S) + var(--aug_o) * (var(--aug_1K) - var(--aug_4t))) calc(var(--aug_3T) + var(--aug_g) * (var(--aug_1L) - var(--aug_4v))), );
    --aug_8a: var(--aug-scoop-tl2, calc(var(--aug_3U) + var(--aug_g) * (var(--aug_1M) - var(--aug_4t))) calc(var(--aug_3V) + var(--aug_o) * (var(--aug_1N) - var(--aug_4v))), calc(var(--aug_3U) + var(--aug_h) * (var(--aug_1M) - var(--aug_4t))) calc(var(--aug_3V) + var(--aug_n) * (var(--aug_1N) - var(--aug_4v))), calc(var(--aug_3U) + var(--aug_i) * (var(--aug_1M) - var(--aug_4t))) calc(var(--aug_3V) + var(--aug_m) * (var(--aug_1N) - var(--aug_4v))), calc(var(--aug_3U) + var(--aug_j) * (var(--aug_1M) - var(--aug_4t))) calc(var(--aug_3V) + var(--aug_l) * (var(--aug_1N) - var(--aug_4v))), calc(var(--aug_3U) + var(--aug_k) * (var(--aug_1M) - var(--aug_4t))) calc(var(--aug_3V) + var(--aug_k) * (var(--aug_1N) - var(--aug_4v))), calc(var(--aug_3U) + var(--aug_l) * (var(--aug_1M) - var(--aug_4t))) calc(var(--aug_3V) + var(--aug_j) * (var(--aug_1N) - var(--aug_4v))), calc(var(--aug_3U) + var(--aug_m) * (var(--aug_1M) - var(--aug_4t))) calc(var(--aug_3V) + var(--aug_i) * (var(--aug_1N) - var(--aug_4v))), calc(var(--aug_3U) + var(--aug_n) * (var(--aug_1M) - var(--aug_4t))) calc(var(--aug_3V) + var(--aug_h) * (var(--aug_1N) - var(--aug_4v))), calc(var(--aug_3U) + var(--aug_o) * (var(--aug_1M) - var(--aug_4t))) calc(var(--aug_3V) + var(--aug_g) * (var(--aug_1N) - var(--aug_4v))), );
    --aug_8b: var(--aug-scoop-t1, calc(var(--aug_3W) - var(--aug_o) * (var(--aug_1S) - var(--aug_4u))) calc(var(--aug_3X) + var(--aug_g) * (var(--aug_1T) - var(--aug_4v))), calc(var(--aug_3W) - var(--aug_n) * (var(--aug_1S) - var(--aug_4u))) calc(var(--aug_3X) + var(--aug_h) * (var(--aug_1T) - var(--aug_4v))), calc(var(--aug_3W) - var(--aug_m) * (var(--aug_1S) - var(--aug_4u))) calc(var(--aug_3X) + var(--aug_i) * (var(--aug_1T) - var(--aug_4v))), calc(var(--aug_3W) - var(--aug_l) * (var(--aug_1S) - var(--aug_4u))) calc(var(--aug_3X) + var(--aug_j) * (var(--aug_1T) - var(--aug_4v))), calc(var(--aug_3W) - var(--aug_k) * (var(--aug_1S) - var(--aug_4u))) calc(var(--aug_3X) + var(--aug_k) * (var(--aug_1T) - var(--aug_4v))), calc(var(--aug_3W) - var(--aug_j) * (var(--aug_1S) - var(--aug_4u))) calc(var(--aug_3X) + var(--aug_l) * (var(--aug_1T) - var(--aug_4v))), calc(var(--aug_3W) - var(--aug_i) * (var(--aug_1S) - var(--aug_4u))) calc(var(--aug_3X) + var(--aug_m) * (var(--aug_1T) - var(--aug_4v))), calc(var(--aug_3W) - var(--aug_h) * (var(--aug_1S) - var(--aug_4u))) calc(var(--aug_3X) + var(--aug_n) * (var(--aug_1T) - var(--aug_4v))), calc(var(--aug_3W) - var(--aug_g) * (var(--aug_1S) - var(--aug_4u))) calc(var(--aug_3X) + var(--aug_o) * (var(--aug_1T) - var(--aug_4v))), );
    --aug_8c: var(--aug-scoop-t2, calc(var(--aug_3Y) + var(--aug_g) * (var(--aug_1U) - var(--aug_4t))) calc(var(--aug_3Z) + var(--aug_o) * (var(--aug_1V) - var(--aug_4v))), calc(var(--aug_3Y) + var(--aug_h) * (var(--aug_1U) - var(--aug_4t))) calc(var(--aug_3Z) + var(--aug_n) * (var(--aug_1V) - var(--aug_4v))), calc(var(--aug_3Y) + var(--aug_i) * (var(--aug_1U) - var(--aug_4t))) calc(var(--aug_3Z) + var(--aug_m) * (var(--aug_1V) - var(--aug_4v))), calc(var(--aug_3Y) + var(--aug_j) * (var(--aug_1U) - var(--aug_4t))) calc(var(--aug_3Z) + var(--aug_l) * (var(--aug_1V) - var(--aug_4v))), calc(var(--aug_3Y) + var(--aug_k) * (var(--aug_1U) - var(--aug_4t))) calc(var(--aug_3Z) + var(--aug_k) * (var(--aug_1V) - var(--aug_4v))), calc(var(--aug_3Y) + var(--aug_l) * (var(--aug_1U) - var(--aug_4t))) calc(var(--aug_3Z) + var(--aug_j) * (var(--aug_1V) - var(--aug_4v))), calc(var(--aug_3Y) + var(--aug_m) * (var(--aug_1U) - var(--aug_4t))) calc(var(--aug_3Z) + var(--aug_i) * (var(--aug_1V) - var(--aug_4v))), calc(var(--aug_3Y) + var(--aug_n) * (var(--aug_1U) - var(--aug_4t))) calc(var(--aug_3Z) + var(--aug_h) * (var(--aug_1V) - var(--aug_4v))), calc(var(--aug_3Y) + var(--aug_o) * (var(--aug_1U) - var(--aug_4t))) calc(var(--aug_3Z) + var(--aug_g) * (var(--aug_1V) - var(--aug_4v))), );
    --aug_8d: var(--aug-scoop-tr1, calc(var(--aug_40) - var(--aug_o) * (var(--aug_20) - var(--aug_4u))) calc(var(--aug_41) + var(--aug_g) * (var(--aug_21) - var(--aug_4v))), calc(var(--aug_40) - var(--aug_n) * (var(--aug_20) - var(--aug_4u))) calc(var(--aug_41) + var(--aug_h) * (var(--aug_21) - var(--aug_4v))), calc(var(--aug_40) - var(--aug_m) * (var(--aug_20) - var(--aug_4u))) calc(var(--aug_41) + var(--aug_i) * (var(--aug_21) - var(--aug_4v))), calc(var(--aug_40) - var(--aug_l) * (var(--aug_20) - var(--aug_4u))) calc(var(--aug_41) + var(--aug_j) * (var(--aug_21) - var(--aug_4v))), calc(var(--aug_40) - var(--aug_k) * (var(--aug_20) - var(--aug_4u))) calc(var(--aug_41) + var(--aug_k) * (var(--aug_21) - var(--aug_4v))), calc(var(--aug_40) - var(--aug_j) * (var(--aug_20) - var(--aug_4u))) calc(var(--aug_41) + var(--aug_l) * (var(--aug_21) - var(--aug_4v))), calc(var(--aug_40) - var(--aug_i) * (var(--aug_20) - var(--aug_4u))) calc(var(--aug_41) + var(--aug_m) * (var(--aug_21) - var(--aug_4v))), calc(var(--aug_40) - var(--aug_h) * (var(--aug_20) - var(--aug_4u))) calc(var(--aug_41) + var(--aug_n) * (var(--aug_21) - var(--aug_4v))), calc(var(--aug_40) - var(--aug_g) * (var(--aug_20) - var(--aug_4u))) calc(var(--aug_41) + var(--aug_o) * (var(--aug_21) - var(--aug_4v))), );
    --aug_8e: var(--aug-scoop-tr2, calc(var(--aug_42) - var(--aug_o) * (var(--aug_22) - var(--aug_4u))) calc(var(--aug_43) + var(--aug_g) * (var(--aug_23) - var(--aug_4v))), calc(var(--aug_42) - var(--aug_n) * (var(--aug_22) - var(--aug_4u))) calc(var(--aug_43) + var(--aug_h) * (var(--aug_23) - var(--aug_4v))), calc(var(--aug_42) - var(--aug_m) * (var(--aug_22) - var(--aug_4u))) calc(var(--aug_43) + var(--aug_i) * (var(--aug_23) - var(--aug_4v))), calc(var(--aug_42) - var(--aug_l) * (var(--aug_22) - var(--aug_4u))) calc(var(--aug_43) + var(--aug_j) * (var(--aug_23) - var(--aug_4v))), calc(var(--aug_42) - var(--aug_k) * (var(--aug_22) - var(--aug_4u))) calc(var(--aug_43) + var(--aug_k) * (var(--aug_23) - var(--aug_4v))), calc(var(--aug_42) - var(--aug_j) * (var(--aug_22) - var(--aug_4u))) calc(var(--aug_43) + var(--aug_l) * (var(--aug_23) - var(--aug_4v))), calc(var(--aug_42) - var(--aug_i) * (var(--aug_22) - var(--aug_4u))) calc(var(--aug_43) + var(--aug_m) * (var(--aug_23) - var(--aug_4v))), calc(var(--aug_42) - var(--aug_h) * (var(--aug_22) - var(--aug_4u))) calc(var(--aug_43) + var(--aug_n) * (var(--aug_23) - var(--aug_4v))), calc(var(--aug_42) - var(--aug_g) * (var(--aug_22) - var(--aug_4u))) calc(var(--aug_43) + var(--aug_o) * (var(--aug_23) - var(--aug_4v))), );
    --aug_8f: var(--aug-scoop-r1, calc(var(--aug_44) - var(--aug_g) * (var(--aug_28) - var(--aug_4u))) calc(var(--aug_45) - var(--aug_o) * (var(--aug_29) - var(--aug_4w))), calc(var(--aug_44) - var(--aug_h) * (var(--aug_28) - var(--aug_4u))) calc(var(--aug_45) - var(--aug_n) * (var(--aug_29) - var(--aug_4w))), calc(var(--aug_44) - var(--aug_i) * (var(--aug_28) - var(--aug_4u))) calc(var(--aug_45) - var(--aug_m) * (var(--aug_29) - var(--aug_4w))), calc(var(--aug_44) - var(--aug_j) * (var(--aug_28) - var(--aug_4u))) calc(var(--aug_45) - var(--aug_l) * (var(--aug_29) - var(--aug_4w))), calc(var(--aug_44) - var(--aug_k) * (var(--aug_28) - var(--aug_4u))) calc(var(--aug_45) - var(--aug_k) * (var(--aug_29) - var(--aug_4w))), calc(var(--aug_44) - var(--aug_l) * (var(--aug_28) - var(--aug_4u))) calc(var(--aug_45) - var(--aug_j) * (var(--aug_29) - var(--aug_4w))), calc(var(--aug_44) - var(--aug_m) * (var(--aug_28) - var(--aug_4u))) calc(var(--aug_45) - var(--aug_i) * (var(--aug_29) - var(--aug_4w))), calc(var(--aug_44) - var(--aug_n) * (var(--aug_28) - var(--aug_4u))) calc(var(--aug_45) - var(--aug_h) * (var(--aug_29) - var(--aug_4w))), calc(var(--aug_44) - var(--aug_o) * (var(--aug_28) - var(--aug_4u))) calc(var(--aug_45) - var(--aug_g) * (var(--aug_29) - var(--aug_4w))), );
    --aug_8g: var(--aug-scoop-r2, calc(var(--aug_46) - var(--aug_o) * (var(--aug_2a) - var(--aug_4u))) calc(var(--aug_47) + var(--aug_g) * (var(--aug_2b) - var(--aug_4v))), calc(var(--aug_46) - var(--aug_n) * (var(--aug_2a) - var(--aug_4u))) calc(var(--aug_47) + var(--aug_h) * (var(--aug_2b) - var(--aug_4v))), calc(var(--aug_46) - var(--aug_m) * (var(--aug_2a) - var(--aug_4u))) calc(var(--aug_47) + var(--aug_i) * (var(--aug_2b) - var(--aug_4v))), calc(var(--aug_46) - var(--aug_l) * (var(--aug_2a) - var(--aug_4u))) calc(var(--aug_47) + var(--aug_j) * (var(--aug_2b) - var(--aug_4v))), calc(var(--aug_46) - var(--aug_k) * (var(--aug_2a) - var(--aug_4u))) calc(var(--aug_47) + var(--aug_k) * (var(--aug_2b) - var(--aug_4v))), calc(var(--aug_46) - var(--aug_j) * (var(--aug_2a) - var(--aug_4u))) calc(var(--aug_47) + var(--aug_l) * (var(--aug_2b) - var(--aug_4v))), calc(var(--aug_46) - var(--aug_i) * (var(--aug_2a) - var(--aug_4u))) calc(var(--aug_47) + var(--aug_m) * (var(--aug_2b) - var(--aug_4v))), calc(var(--aug_46) - var(--aug_h) * (var(--aug_2a) - var(--aug_4u))) calc(var(--aug_47) + var(--aug_n) * (var(--aug_2b) - var(--aug_4v))), calc(var(--aug_46) - var(--aug_g) * (var(--aug_2a) - var(--aug_4u))) calc(var(--aug_47) + var(--aug_o) * (var(--aug_2b) - var(--aug_4v))), );
    --aug_8h: var(--aug-scoop-br1, calc(var(--aug_48) - var(--aug_g) * (var(--aug_2g) - var(--aug_4u))) calc(var(--aug_49) - var(--aug_o) * (var(--aug_2h) - var(--aug_4w))), calc(var(--aug_48) - var(--aug_h) * (var(--aug_2g) - var(--aug_4u))) calc(var(--aug_49) - var(--aug_n) * (var(--aug_2h) - var(--aug_4w))), calc(var(--aug_48) - var(--aug_i) * (var(--aug_2g) - var(--aug_4u))) calc(var(--aug_49) - var(--aug_m) * (var(--aug_2h) - var(--aug_4w))), calc(var(--aug_48) - var(--aug_j) * (var(--aug_2g) - var(--aug_4u))) calc(var(--aug_49) - var(--aug_l) * (var(--aug_2h) - var(--aug_4w))), calc(var(--aug_48) - var(--aug_k) * (var(--aug_2g) - var(--aug_4u))) calc(var(--aug_49) - var(--aug_k) * (var(--aug_2h) - var(--aug_4w))), calc(var(--aug_48) - var(--aug_l) * (var(--aug_2g) - var(--aug_4u))) calc(var(--aug_49) - var(--aug_j) * (var(--aug_2h) - var(--aug_4w))), calc(var(--aug_48) - var(--aug_m) * (var(--aug_2g) - var(--aug_4u))) calc(var(--aug_49) - var(--aug_i) * (var(--aug_2h) - var(--aug_4w))), calc(var(--aug_48) - var(--aug_n) * (var(--aug_2g) - var(--aug_4u))) calc(var(--aug_49) - var(--aug_h) * (var(--aug_2h) - var(--aug_4w))), calc(var(--aug_48) - var(--aug_o) * (var(--aug_2g) - var(--aug_4u))) calc(var(--aug_49) - var(--aug_g) * (var(--aug_2h) - var(--aug_4w))), );
    --aug_8i: var(--aug-scoop-br2, calc(var(--aug_4a) - var(--aug_g) * (var(--aug_2i) - var(--aug_4u))) calc(var(--aug_4b) - var(--aug_o) * (var(--aug_2j) - var(--aug_4w))), calc(var(--aug_4a) - var(--aug_h) * (var(--aug_2i) - var(--aug_4u))) calc(var(--aug_4b) - var(--aug_n) * (var(--aug_2j) - var(--aug_4w))), calc(var(--aug_4a) - var(--aug_i) * (var(--aug_2i) - var(--aug_4u))) calc(var(--aug_4b) - var(--aug_m) * (var(--aug_2j) - var(--aug_4w))), calc(var(--aug_4a) - var(--aug_j) * (var(--aug_2i) - var(--aug_4u))) calc(var(--aug_4b) - var(--aug_l) * (var(--aug_2j) - var(--aug_4w))), calc(var(--aug_4a) - var(--aug_k) * (var(--aug_2i) - var(--aug_4u))) calc(var(--aug_4b) - var(--aug_k) * (var(--aug_2j) - var(--aug_4w))), calc(var(--aug_4a) - var(--aug_l) * (var(--aug_2i) - var(--aug_4u))) calc(var(--aug_4b) - var(--aug_j) * (var(--aug_2j) - var(--aug_4w))), calc(var(--aug_4a) - var(--aug_m) * (var(--aug_2i) - var(--aug_4u))) calc(var(--aug_4b) - var(--aug_i) * (var(--aug_2j) - var(--aug_4w))), calc(var(--aug_4a) - var(--aug_n) * (var(--aug_2i) - var(--aug_4u))) calc(var(--aug_4b) - var(--aug_h) * (var(--aug_2j) - var(--aug_4w))), calc(var(--aug_4a) - var(--aug_o) * (var(--aug_2i) - var(--aug_4u))) calc(var(--aug_4b) - var(--aug_g) * (var(--aug_2j) - var(--aug_4w))), );
    --aug_8j: var(--aug-scoop-b1, calc(var(--aug_4c) + var(--aug_o) * (var(--aug_2o) - var(--aug_4t))) calc(var(--aug_4d) - var(--aug_g) * (var(--aug_2p) - var(--aug_4w))), calc(var(--aug_4c) + var(--aug_n) * (var(--aug_2o) - var(--aug_4t))) calc(var(--aug_4d) - var(--aug_h) * (var(--aug_2p) - var(--aug_4w))), calc(var(--aug_4c) + var(--aug_m) * (var(--aug_2o) - var(--aug_4t))) calc(var(--aug_4d) - var(--aug_i) * (var(--aug_2p) - var(--aug_4w))), calc(var(--aug_4c) + var(--aug_l) * (var(--aug_2o) - var(--aug_4t))) calc(var(--aug_4d) - var(--aug_j) * (var(--aug_2p) - var(--aug_4w))), calc(var(--aug_4c) + var(--aug_k) * (var(--aug_2o) - var(--aug_4t))) calc(var(--aug_4d) - var(--aug_k) * (var(--aug_2p) - var(--aug_4w))), calc(var(--aug_4c) + var(--aug_j) * (var(--aug_2o) - var(--aug_4t))) calc(var(--aug_4d) - var(--aug_l) * (var(--aug_2p) - var(--aug_4w))), calc(var(--aug_4c) + var(--aug_i) * (var(--aug_2o) - var(--aug_4t))) calc(var(--aug_4d) - var(--aug_m) * (var(--aug_2p) - var(--aug_4w))), calc(var(--aug_4c) + var(--aug_h) * (var(--aug_2o) - var(--aug_4t))) calc(var(--aug_4d) - var(--aug_n) * (var(--aug_2p) - var(--aug_4w))), calc(var(--aug_4c) + var(--aug_g) * (var(--aug_2o) - var(--aug_4t))) calc(var(--aug_4d) - var(--aug_o) * (var(--aug_2p) - var(--aug_4w))), );
    --aug_8k: var(--aug-scoop-b2, calc(var(--aug_4e) - var(--aug_g) * (var(--aug_2q) - var(--aug_4u))) calc(var(--aug_4f) - var(--aug_o) * (var(--aug_2r) - var(--aug_4w))), calc(var(--aug_4e) - var(--aug_h) * (var(--aug_2q) - var(--aug_4u))) calc(var(--aug_4f) - var(--aug_n) * (var(--aug_2r) - var(--aug_4w))), calc(var(--aug_4e) - var(--aug_i) * (var(--aug_2q) - var(--aug_4u))) calc(var(--aug_4f) - var(--aug_m) * (var(--aug_2r) - var(--aug_4w))), calc(var(--aug_4e) - var(--aug_j) * (var(--aug_2q) - var(--aug_4u))) calc(var(--aug_4f) - var(--aug_l) * (var(--aug_2r) - var(--aug_4w))), calc(var(--aug_4e) - var(--aug_k) * (var(--aug_2q) - var(--aug_4u))) calc(var(--aug_4f) - var(--aug_k) * (var(--aug_2r) - var(--aug_4w))), calc(var(--aug_4e) - var(--aug_l) * (var(--aug_2q) - var(--aug_4u))) calc(var(--aug_4f) - var(--aug_j) * (var(--aug_2r) - var(--aug_4w))), calc(var(--aug_4e) - var(--aug_m) * (var(--aug_2q) - var(--aug_4u))) calc(var(--aug_4f) - var(--aug_i) * (var(--aug_2r) - var(--aug_4w))), calc(var(--aug_4e) - var(--aug_n) * (var(--aug_2q) - var(--aug_4u))) calc(var(--aug_4f) - var(--aug_h) * (var(--aug_2r) - var(--aug_4w))), calc(var(--aug_4e) - var(--aug_o) * (var(--aug_2q) - var(--aug_4u))) calc(var(--aug_4f) - var(--aug_g) * (var(--aug_2r) - var(--aug_4w))), );
    --aug_8l: var(--aug-scoop-bl1, calc(var(--aug_4g) + var(--aug_o) * (var(--aug_2w) - var(--aug_4t))) calc(var(--aug_4h) - var(--aug_g) * (var(--aug_2x) - var(--aug_4w))), calc(var(--aug_4g) + var(--aug_n) * (var(--aug_2w) - var(--aug_4t))) calc(var(--aug_4h) - var(--aug_h) * (var(--aug_2x) - var(--aug_4w))), calc(var(--aug_4g) + var(--aug_m) * (var(--aug_2w) - var(--aug_4t))) calc(var(--aug_4h) - var(--aug_i) * (var(--aug_2x) - var(--aug_4w))), calc(var(--aug_4g) + var(--aug_l) * (var(--aug_2w) - var(--aug_4t))) calc(var(--aug_4h) - var(--aug_j) * (var(--aug_2x) - var(--aug_4w))), calc(var(--aug_4g) + var(--aug_k) * (var(--aug_2w) - var(--aug_4t))) calc(var(--aug_4h) - var(--aug_k) * (var(--aug_2x) - var(--aug_4w))), calc(var(--aug_4g) + var(--aug_j) * (var(--aug_2w) - var(--aug_4t))) calc(var(--aug_4h) - var(--aug_l) * (var(--aug_2x) - var(--aug_4w))), calc(var(--aug_4g) + var(--aug_i) * (var(--aug_2w) - var(--aug_4t))) calc(var(--aug_4h) - var(--aug_m) * (var(--aug_2x) - var(--aug_4w))), calc(var(--aug_4g) + var(--aug_h) * (var(--aug_2w) - var(--aug_4t))) calc(var(--aug_4h) - var(--aug_n) * (var(--aug_2x) - var(--aug_4w))), calc(var(--aug_4g) + var(--aug_g) * (var(--aug_2w) - var(--aug_4t))) calc(var(--aug_4h) - var(--aug_o) * (var(--aug_2x) - var(--aug_4w))), );
    --aug_8m: var(--aug-scoop-bl2, calc(var(--aug_4i) + var(--aug_o) * (var(--aug_2y) - var(--aug_4t))) calc(var(--aug_4j) - var(--aug_g) * (var(--aug_2z) - var(--aug_4w))), calc(var(--aug_4i) + var(--aug_n) * (var(--aug_2y) - var(--aug_4t))) calc(var(--aug_4j) - var(--aug_h) * (var(--aug_2z) - var(--aug_4w))), calc(var(--aug_4i) + var(--aug_m) * (var(--aug_2y) - var(--aug_4t))) calc(var(--aug_4j) - var(--aug_i) * (var(--aug_2z) - var(--aug_4w))), calc(var(--aug_4i) + var(--aug_l) * (var(--aug_2y) - var(--aug_4t))) calc(var(--aug_4j) - var(--aug_j) * (var(--aug_2z) - var(--aug_4w))), calc(var(--aug_4i) + var(--aug_k) * (var(--aug_2y) - var(--aug_4t))) calc(var(--aug_4j) - var(--aug_k) * (var(--aug_2z) - var(--aug_4w))), calc(var(--aug_4i) + var(--aug_j) * (var(--aug_2y) - var(--aug_4t))) calc(var(--aug_4j) - var(--aug_l) * (var(--aug_2z) - var(--aug_4w))), calc(var(--aug_4i) + var(--aug_i) * (var(--aug_2y) - var(--aug_4t))) calc(var(--aug_4j) - var(--aug_m) * (var(--aug_2z) - var(--aug_4w))), calc(var(--aug_4i) + var(--aug_h) * (var(--aug_2y) - var(--aug_4t))) calc(var(--aug_4j) - var(--aug_n) * (var(--aug_2z) - var(--aug_4w))), calc(var(--aug_4i) + var(--aug_g) * (var(--aug_2y) - var(--aug_4t))) calc(var(--aug_4j) - var(--aug_o) * (var(--aug_2z) - var(--aug_4w))), );
    --aug_8n: var(--aug-scoop-l1, calc(var(--aug_4k) + var(--aug_g) * (var(--aug_2E) - var(--aug_4t))) calc(var(--aug_4l) + var(--aug_o) * (var(--aug_2F) - var(--aug_4v))), calc(var(--aug_4k) + var(--aug_h) * (var(--aug_2E) - var(--aug_4t))) calc(var(--aug_4l) + var(--aug_n) * (var(--aug_2F) - var(--aug_4v))), calc(var(--aug_4k) + var(--aug_i) * (var(--aug_2E) - var(--aug_4t))) calc(var(--aug_4l) + var(--aug_m) * (var(--aug_2F) - var(--aug_4v))), calc(var(--aug_4k) + var(--aug_j) * (var(--aug_2E) - var(--aug_4t))) calc(var(--aug_4l) + var(--aug_l) * (var(--aug_2F) - var(--aug_4v))), calc(var(--aug_4k) + var(--aug_k) * (var(--aug_2E) - var(--aug_4t))) calc(var(--aug_4l) + var(--aug_k) * (var(--aug_2F) - var(--aug_4v))), calc(var(--aug_4k) + var(--aug_l) * (var(--aug_2E) - var(--aug_4t))) calc(var(--aug_4l) + var(--aug_j) * (var(--aug_2F) - var(--aug_4v))), calc(var(--aug_4k) + var(--aug_m) * (var(--aug_2E) - var(--aug_4t))) calc(var(--aug_4l) + var(--aug_i) * (var(--aug_2F) - var(--aug_4v))), calc(var(--aug_4k) + var(--aug_n) * (var(--aug_2E) - var(--aug_4t))) calc(var(--aug_4l) + var(--aug_h) * (var(--aug_2F) - var(--aug_4v))), calc(var(--aug_4k) + var(--aug_o) * (var(--aug_2E) - var(--aug_4t))) calc(var(--aug_4l) + var(--aug_g) * (var(--aug_2F) - var(--aug_4v))), );
    --aug_8o: var(--aug-scoop-l2, calc(var(--aug_4m) + var(--aug_o) * (var(--aug_2G) - var(--aug_4t))) calc(var(--aug_4n) - var(--aug_g) * (var(--aug_2H) - var(--aug_4w))), calc(var(--aug_4m) + var(--aug_n) * (var(--aug_2G) - var(--aug_4t))) calc(var(--aug_4n) - var(--aug_h) * (var(--aug_2H) - var(--aug_4w))), calc(var(--aug_4m) + var(--aug_m) * (var(--aug_2G) - var(--aug_4t))) calc(var(--aug_4n) - var(--aug_i) * (var(--aug_2H) - var(--aug_4w))), calc(var(--aug_4m) + var(--aug_l) * (var(--aug_2G) - var(--aug_4t))) calc(var(--aug_4n) - var(--aug_j) * (var(--aug_2H) - var(--aug_4w))), calc(var(--aug_4m) + var(--aug_k) * (var(--aug_2G) - var(--aug_4t))) calc(var(--aug_4n) - var(--aug_k) * (var(--aug_2H) - var(--aug_4w))), calc(var(--aug_4m) + var(--aug_j) * (var(--aug_2G) - var(--aug_4t))) calc(var(--aug_4n) - var(--aug_l) * (var(--aug_2H) - var(--aug_4w))), calc(var(--aug_4m) + var(--aug_i) * (var(--aug_2G) - var(--aug_4t))) calc(var(--aug_4n) - var(--aug_m) * (var(--aug_2H) - var(--aug_4w))), calc(var(--aug_4m) + var(--aug_h) * (var(--aug_2G) - var(--aug_4t))) calc(var(--aug_4n) - var(--aug_n) * (var(--aug_2H) - var(--aug_4w))), calc(var(--aug_4m) + var(--aug_g) * (var(--aug_2G) - var(--aug_4t))) calc(var(--aug_4n) - var(--aug_o) * (var(--aug_2H) - var(--aug_4w))), );
    --aug_8p: var(--aug_5d) var(--aug_4x) var(--aug_4N) var(--aug_7T) var(--aug_89);
    --aug_8q: var(--aug_5o) var(--aug_4y) var(--aug_4O) var(--aug_7U) var(--aug_8a);
    --aug_8r: var(--aug_5z) var(--aug_4z) var(--aug_4P) var(--aug_7V) var(--aug_8b);
    --aug_8s: var(--aug_5K) var(--aug_4A) var(--aug_4Q) var(--aug_7W) var(--aug_8c);
    --aug_8t: var(--aug_5V) var(--aug_4B) var(--aug_4R) var(--aug_7X) var(--aug_8d);
    --aug_8u: var(--aug_66) var(--aug_4C) var(--aug_4S) var(--aug_7Y) var(--aug_8e);
    --aug_8v: var(--aug_6h) var(--aug_4D) var(--aug_4T) var(--aug_7Z) var(--aug_8f);
    --aug_8w: var(--aug_6s) var(--aug_4E) var(--aug_4U) var(--aug_80) var(--aug_8g);
    --aug_8x: var(--aug_6D) var(--aug_4F) var(--aug_4V) var(--aug_81) var(--aug_8h);
    --aug_8y: var(--aug_6O) var(--aug_4G) var(--aug_4W) var(--aug_82) var(--aug_8i);
    --aug_8z: var(--aug_6Z) var(--aug_4H) var(--aug_4X) var(--aug_83) var(--aug_8j);
    --aug_8A: var(--aug_7a) var(--aug_4I) var(--aug_4Y) var(--aug_84) var(--aug_8k);
    --aug_8B: var(--aug_7l) var(--aug_4J) var(--aug_4Z) var(--aug_85) var(--aug_8l);
    --aug_8C: var(--aug_7w) var(--aug_4K) var(--aug_50) var(--aug_86) var(--aug_8m);
    --aug_8D: var(--aug_7H) var(--aug_4L) var(--aug_51) var(--aug_87) var(--aug_8n);
    --aug_8E: var(--aug_7S) var(--aug_4M) var(--aug_52) var(--aug_88) var(--aug_8o);
    --aug_E: var(--aug_M) var(--aug_4p) var(--aug_4r);
    --aug_8F: var(--aug_D, var(--aug_E, var(--aug_4p) calc(var(--aug_2N) + var(--aug_4r)), calc(var(--aug_4p) + var(--aug_1O) - var(--aug_59)) calc(var(--aug_2N) + var(--aug_4r) - var(--aug_5a)), var(--aug_8p)calc(var(--aug_4p) + var(--aug_1O) + var(--aug_1K) - var(--aug_5b)) calc(var(--aug_1P) + var(--aug_1N) + var(--aug_1Q) + var(--aug_4r) - var(--aug_5c)), calc(var(--aug_4p) + var(--aug_1O) + var(--aug_1K)) calc(var(--aug_1P) + var(--aug_1N) + var(--aug_4r)), calc(var(--aug_4p) + var(--aug_1O) + var(--aug_1K) + var(--aug_1R) - var(--aug_5k)) calc(var(--aug_1P) + var(--aug_1N) + var(--aug_4r) - var(--aug_5l)), var(--aug_8q)calc(var(--aug_2O) + var(--aug_4p) - var(--aug_5m)) calc(var(--aug_1P) + var(--aug_4r) - var(--aug_5n)), calc(var(--aug_2O) + var(--aug_4p)) var(--aug_4r)));
    --aug_F: var(--aug_S);
    --aug_8G: var(--aug_D, var(--aug_F, , calc(var(--aug_33) - var(--aug_4q)) var(--aug_4r), calc(var(--aug_33) - var(--aug_4q) + var(--aug_5v)) calc(var(--aug_4r) + var(--aug_1W) - var(--aug_5w)), var(--aug_8r)calc(var(--aug_33) + var(--aug_1S) - var(--aug_4q) + var(--aug_5x)) calc(var(--aug_4r) + var(--aug_1W) + var(--aug_1T) + var(--aug_5y)), calc(var(--aug_33) + var(--aug_1S) + var(--aug_1Y) + var(--aug_4p) - var(--aug_5G)) calc(var(--aug_4r) + var(--aug_1W) + var(--aug_1T) + var(--aug_5H)), var(--aug_8s)calc(var(--aug_35) + var(--aug_4p) - var(--aug_5I)) calc(var(--aug_1X) + var(--aug_4r) - var(--aug_5J)), calc(var(--aug_35) + var(--aug_4p)) var(--aug_4r)));
    --aug_G: var(--aug_Y) calc(100% - var(--aug_4q)) var(--aug_4r);
    --aug_8H: var(--aug_D, var(--aug_G, calc(var(--aug_2Q) - var(--aug_4q)) var(--aug_4r), calc(var(--aug_2Q) - var(--aug_4q) + var(--aug_5R)) calc(var(--aug_4r) + var(--aug_24) - var(--aug_5S)), var(--aug_8t)calc(var(--aug_2Q) + var(--aug_20) - var(--aug_4q) + var(--aug_5T)) calc(var(--aug_4r) + var(--aug_24) + var(--aug_21) - var(--aug_5U)), calc(100% - (var(--aug_25) + var(--aug_22) + var(--aug_4q))) calc(var(--aug_4r) + var(--aug_24) + var(--aug_21)), calc(100% - (var(--aug_25) + var(--aug_22) + var(--aug_4q) - var(--aug_62))) calc(var(--aug_4r) + var(--aug_24) + var(--aug_21) + var(--aug_27) - var(--aug_63)), var(--aug_8u)calc(100% - var(--aug_25) - var(--aug_4q) + var(--aug_64)) calc(var(--aug_4r) + var(--aug_2T) - var(--aug_65)), calc(100% - var(--aug_4q)) calc(var(--aug_4r) + var(--aug_2T))));
    --aug_H: var(--aug_14);
    --aug_8I: var(--aug_D, var(--aug_H, , calc(100% - var(--aug_4q)) calc(var(--aug_39) - var(--aug_4s)), calc(100% - var(--aug_2c) - var(--aug_4q) + var(--aug_6d)) calc(var(--aug_39) - var(--aug_4s) + var(--aug_6e)), var(--aug_8v)calc(100% - var(--aug_2c) - var(--aug_28) - var(--aug_4q) - var(--aug_6f)) calc(var(--aug_39) + var(--aug_29) - var(--aug_4s) + var(--aug_6g)), calc(100% - var(--aug_2c) - var(--aug_28) - var(--aug_4q) - var(--aug_6o)) calc(var(--aug_39) + var(--aug_29) + var(--aug_2e) + var(--aug_4r) - var(--aug_6p)), var(--aug_8w)calc(100% - var(--aug_2d) - var(--aug_4q) + var(--aug_6q)) calc(var(--aug_3b) + var(--aug_4r) - var(--aug_6r)), calc(100% - var(--aug_4q)) calc(var(--aug_3b) + var(--aug_4r))));
    --aug_I: var(--aug_1a) calc(100% - var(--aug_4q)) calc(100% - var(--aug_4s));
    --aug_8J: var(--aug_D, var(--aug_I, calc(100% - var(--aug_4q)) calc(var(--aug_2V) - var(--aug_4s)), calc(100% - var(--aug_2k) - var(--aug_4q) + var(--aug_6z)) calc(var(--aug_2V) - var(--aug_4s) + var(--aug_6A)), var(--aug_8x)calc(100% - var(--aug_2k) - var(--aug_2g) - var(--aug_4q) + var(--aug_6B)) calc(100% - (var(--aug_2l) + var(--aug_2j) + var(--aug_2m) + var(--aug_4s) - var(--aug_6C))), calc(100% - var(--aug_2k) - var(--aug_2g) - var(--aug_4q)) calc(100% - (var(--aug_2l) + var(--aug_2j) + var(--aug_4s))), calc(100% - var(--aug_2k) - var(--aug_2g) - var(--aug_2n) - var(--aug_4q) + var(--aug_6K)) calc(100% - (var(--aug_2l) + var(--aug_2j) + var(--aug_4s) - var(--aug_6L))), var(--aug_8y)calc(var(--aug_2W) - var(--aug_4q) + var(--aug_6M)) calc(100% - var(--aug_2l) - var(--aug_4s) + var(--aug_6N)), calc(var(--aug_2W) - var(--aug_4q)) calc(100% - var(--aug_4s))));
    --aug_J: var(--aug_1g);
    --aug_8K: var(--aug_D, var(--aug_J, , calc(var(--aug_3d) + var(--aug_4p)) calc(100% - var(--aug_4s)), calc(var(--aug_3d) + var(--aug_4p) - var(--aug_6V)) calc(100% - var(--aug_2s) - var(--aug_4s) + var(--aug_6W)), var(--aug_8z)calc(var(--aug_3d) - var(--aug_2o) + var(--aug_4p) - var(--aug_6X)) calc(100% - var(--aug_2s) - var(--aug_2p) - var(--aug_4s) - var(--aug_6Y)), calc(var(--aug_3d) - var(--aug_2o) - var(--aug_2u) - var(--aug_4q) + var(--aug_76)) calc(100% - var(--aug_2s) - var(--aug_2p) - var(--aug_4s) - var(--aug_77)), var(--aug_8A)calc(var(--aug_3f) - var(--aug_4q) + var(--aug_78)) calc(100% - var(--aug_2t) - var(--aug_4s) + var(--aug_79)), calc(var(--aug_3f) - var(--aug_4q)) calc(100% - var(--aug_4s))));
    --aug_K: var(--aug_1m) var(--aug_4p) calc(100% - var(--aug_4s));
    --aug_8L: var(--aug_D, var(--aug_K, calc(var(--aug_2Y) + var(--aug_4p)) calc(100% - var(--aug_4s)), calc(var(--aug_2Y) + var(--aug_4p) - var(--aug_7h)) calc(100% - var(--aug_2A) - var(--aug_4s) + var(--aug_7i)), var(--aug_8B)calc(var(--aug_2B) + var(--aug_2y) + var(--aug_2C) + var(--aug_4p) - var(--aug_7j)) calc(100% - var(--aug_2A) - var(--aug_2x) - var(--aug_4s) + var(--aug_7k)), calc(var(--aug_2B) + var(--aug_2y) + var(--aug_4p)) calc(100% - var(--aug_2A) - var(--aug_2x) - var(--aug_4s)), calc(var(--aug_2B) + var(--aug_2y) + var(--aug_4p) - var(--aug_7s)) calc(100% - var(--aug_2A) - var(--aug_2x) - var(--aug_2D) - var(--aug_4s) + var(--aug_7t)), var(--aug_8C)calc(var(--aug_2B) + var(--aug_4p) - var(--aug_7u)) calc(var(--aug_31) - var(--aug_4s) + var(--aug_7v)), var(--aug_4p) calc(var(--aug_31) - var(--aug_4s))));
    --aug_L: var(--aug_1s);
    --aug_8M: var(--aug_D, var(--aug_L, , var(--aug_4p) calc(var(--aug_3j) + var(--aug_4r)), calc(var(--aug_2I) + var(--aug_4p) - var(--aug_7D)) calc(var(--aug_3j) + var(--aug_4r) - var(--aug_7E)), var(--aug_8D)calc(var(--aug_2I) + var(--aug_2E) + var(--aug_4p) + var(--aug_7F)) calc(var(--aug_3j) - var(--aug_2F) + var(--aug_4r) - var(--aug_7G)), calc(var(--aug_2I) + var(--aug_2E) + var(--aug_4p) + var(--aug_7O)) calc(var(--aug_3j) - var(--aug_2F) - var(--aug_2K) - var(--aug_4s) + var(--aug_7P)), var(--aug_8E)calc(var(--aug_2J) + var(--aug_4p) - var(--aug_7Q)) calc(var(--aug_3l) - var(--aug_4s) + var(--aug_7R)), var(--aug_4p) calc(var(--aug_3l) - var(--aug_4s))));
    clip-path: polygon(var(--aug_C, var(--aug_8F)) var(--aug_C, var(--aug_8G, )), var(--aug_C, var(--aug_8H)) var(--aug_C, var(--aug_8I, )), var(--aug_C, var(--aug_8J)) var(--aug_C, var(--aug_8K, )), var(--aug_C, var(--aug_8L)) var(--aug_C, var(--aug_8M, ))var(--aug_4o));
  }

  [data-augmented-ui] {
    --aug_1y: var(--aug-border) var(--aug-inlay) static;
    position: var(--aug_1y, relative);
    --aug_8N: var(--aug-step-tl1, var(--aug_1O) calc(var(--aug_1P) + var(--aug_1N) + var(--aug_1Q)), );
    --aug_8O: var(--aug-step-tl2, calc(var(--aug_1O) + var(--aug_1K) + var(--aug_1R)) var(--aug_1P), );
    --aug_8P: var(--aug-step-t1, calc(var(--aug_33) + var(--aug_1S)) var(--aug_1W), );
    --aug_8Q: var(--aug-step-t2, calc(var(--aug_35) - var(--aug_1U)) var(--aug_1X), );
    --aug_8R: var(--aug-step-tr1, calc(var(--aug_2Q) + var(--aug_20)) var(--aug_24), );
    --aug_8S: var(--aug-step-tr2, calc(100% - var(--aug_25)) calc(var(--aug_2T) - var(--aug_23)), );
    --aug_8T: var(--aug-step-r1, calc(100% - var(--aug_2c)) calc(var(--aug_39) + var(--aug_29)), );
    --aug_8U: var(--aug-step-r2, calc(100% - var(--aug_2d)) calc(var(--aug_3b) - var(--aug_2b)), );
    --aug_8V: var(--aug-step-br1, calc(100% - var(--aug_2k)) calc(var(--aug_2V) + var(--aug_2h)), );
    --aug_8W: var(--aug-step-br2, calc(var(--aug_2W) + var(--aug_2i)) calc(100% - var(--aug_2l)), );
    --aug_8X: var(--aug-step-b1, calc(var(--aug_3d) - var(--aug_2o)) calc(100% - var(--aug_2s)), );
    --aug_8Y: var(--aug-step-b2, calc(var(--aug_3f) + var(--aug_2q)) calc(100% - var(--aug_2t)), );
    --aug_8Z: var(--aug-step-bl1, calc(var(--aug_2Y) - var(--aug_2w)) calc(100% - var(--aug_2A)), );
    --aug_90: var(--aug-step-bl2, var(--aug_2B) calc(var(--aug_31) + var(--aug_2z)), );
    --aug_91: var(--aug-step-l1, var(--aug_2I) calc(var(--aug_3j) - var(--aug_2F)), );
    --aug_92: var(--aug-step-l2, var(--aug_2J) calc(var(--aug_3l) + var(--aug_2H)), );
    --aug_93: var(--aug-rect-tl1, var(--aug_3m) var(--aug_3C), );
    --aug_94: var(--aug-rect-tl2, var(--aug_3n) var(--aug_3D), );
    --aug_95: var(--aug-rect-t1, var(--aug_3o) var(--aug_3E), );
    --aug_96: var(--aug-rect-t2, var(--aug_3p) var(--aug_3F), );
    --aug_97: var(--aug-rect-tr1, var(--aug_3q) var(--aug_3G), );
    --aug_98: var(--aug-rect-tr2, var(--aug_3r) var(--aug_3H), );
    --aug_99: var(--aug-rect-r1, var(--aug_3s) var(--aug_3I), );
    --aug_9a: var(--aug-rect-r2, var(--aug_3t) var(--aug_3J), );
    --aug_9b: var(--aug-rect-br1, var(--aug_3u) var(--aug_3K), );
    --aug_9c: var(--aug-rect-br2, var(--aug_3v) var(--aug_3L), );
    --aug_9d: var(--aug-rect-b1, var(--aug_3w) var(--aug_3M), );
    --aug_9e: var(--aug-rect-b2, var(--aug_3x) var(--aug_3N), );
    --aug_9f: var(--aug-rect-bl1, var(--aug_3y) var(--aug_3O), );
    --aug_9g: var(--aug-rect-bl2, var(--aug_3z) var(--aug_3P), );
    --aug_9h: var(--aug-rect-l1, var(--aug_3A) var(--aug_3Q), );
    --aug_9i: var(--aug-rect-l2, var(--aug_3B) var(--aug_3R), );
    --aug_9j: var(--aug-clip-tl1, );
    --aug_9k: var(--aug-clip-tl2, );
    --aug_9l: var(--aug-clip-t1, );
    --aug_9m: var(--aug-clip-t2, );
    --aug_9n: var(--aug-clip-tr1, );
    --aug_9o: var(--aug-clip-tr2, );
    --aug_9p: var(--aug-clip-r1, );
    --aug_9q: var(--aug-clip-r2, );
    --aug_9r: var(--aug-clip-br1, );
    --aug_9s: var(--aug-clip-br2, );
    --aug_9t: var(--aug-clip-b1, );
    --aug_9u: var(--aug-clip-b2, );
    --aug_9v: var(--aug-clip-bl1, );
    --aug_9w: var(--aug-clip-bl2, );
    --aug_9x: var(--aug-clip-l1, );
    --aug_9y: var(--aug-clip-l2, );
    --aug_9z: var(--aug-round-tl1, calc(var(--aug_3m) - var(--aug_o) * var(--aug_1K)) calc(var(--aug_3C) - var(--aug_g) * (var(--aug_1L))), calc(var(--aug_3m) - var(--aug_n) * var(--aug_1K)) calc(var(--aug_3C) - var(--aug_h) * (var(--aug_1L))), calc(var(--aug_3m) - var(--aug_m) * var(--aug_1K)) calc(var(--aug_3C) - var(--aug_i) * (var(--aug_1L))), calc(var(--aug_3m) - var(--aug_l) * var(--aug_1K)) calc(var(--aug_3C) - var(--aug_j) * (var(--aug_1L))), calc(var(--aug_3m) - var(--aug_k) * var(--aug_1K)) calc(var(--aug_3C) - var(--aug_k) * (var(--aug_1L))), calc(var(--aug_3m) - var(--aug_j) * var(--aug_1K)) calc(var(--aug_3C) - var(--aug_l) * (var(--aug_1L))), calc(var(--aug_3m) - var(--aug_i) * var(--aug_1K)) calc(var(--aug_3C) - var(--aug_m) * (var(--aug_1L))), calc(var(--aug_3m) - var(--aug_h) * var(--aug_1K)) calc(var(--aug_3C) - var(--aug_n) * (var(--aug_1L))), calc(var(--aug_3m) - var(--aug_g) * var(--aug_1K)) calc(var(--aug_3C) - var(--aug_o) * (var(--aug_1L))), );
    --aug_9A: var(--aug-round-tl2, calc(var(--aug_3n) - var(--aug_o) * var(--aug_1M)) calc(var(--aug_3D) - var(--aug_g) * var(--aug_1N)), calc(var(--aug_3n) - var(--aug_n) * var(--aug_1M)) calc(var(--aug_3D) - var(--aug_h) * var(--aug_1N)), calc(var(--aug_3n) - var(--aug_m) * var(--aug_1M)) calc(var(--aug_3D) - var(--aug_i) * var(--aug_1N)), calc(var(--aug_3n) - var(--aug_l) * var(--aug_1M)) calc(var(--aug_3D) - var(--aug_j) * var(--aug_1N)), calc(var(--aug_3n) - var(--aug_k) * var(--aug_1M)) calc(var(--aug_3D) - var(--aug_k) * var(--aug_1N)), calc(var(--aug_3n) - var(--aug_j) * var(--aug_1M)) calc(var(--aug_3D) - var(--aug_l) * var(--aug_1N)), calc(var(--aug_3n) - var(--aug_i) * var(--aug_1M)) calc(var(--aug_3D) - var(--aug_m) * var(--aug_1N)), calc(var(--aug_3n) - var(--aug_h) * var(--aug_1M)) calc(var(--aug_3D) - var(--aug_n) * var(--aug_1N)), calc(var(--aug_3n) - var(--aug_g) * var(--aug_1M)) calc(var(--aug_3D) - var(--aug_o) * var(--aug_1N)), );
    --aug_9B: var(--aug-round-t1, calc(var(--aug_3o) + var(--aug_g) * var(--aug_1S)) calc(var(--aug_3E) - var(--aug_o) * var(--aug_1T)), calc(var(--aug_3o) + var(--aug_h) * var(--aug_1S)) calc(var(--aug_3E) - var(--aug_n) * var(--aug_1T)), calc(var(--aug_3o) + var(--aug_i) * var(--aug_1S)) calc(var(--aug_3E) - var(--aug_m) * var(--aug_1T)), calc(var(--aug_3o) + var(--aug_j) * var(--aug_1S)) calc(var(--aug_3E) - var(--aug_l) * var(--aug_1T)), calc(var(--aug_3o) + var(--aug_k) * var(--aug_1S)) calc(var(--aug_3E) - var(--aug_k) * var(--aug_1T)), calc(var(--aug_3o) + var(--aug_l) * var(--aug_1S)) calc(var(--aug_3E) - var(--aug_j) * var(--aug_1T)), calc(var(--aug_3o) + var(--aug_m) * var(--aug_1S)) calc(var(--aug_3E) - var(--aug_i) * var(--aug_1T)), calc(var(--aug_3o) + var(--aug_n) * var(--aug_1S)) calc(var(--aug_3E) - var(--aug_h) * var(--aug_1T)), calc(var(--aug_3o) + var(--aug_o) * var(--aug_1S)) calc(var(--aug_3E) - var(--aug_g) * var(--aug_1T)), );
    --aug_9C: var(--aug-round-t2, calc(var(--aug_3p) - var(--aug_o) * var(--aug_1U)) calc(var(--aug_3F) - var(--aug_g) * var(--aug_1V)), calc(var(--aug_3p) - var(--aug_n) * var(--aug_1U)) calc(var(--aug_3F) - var(--aug_h) * var(--aug_1V)), calc(var(--aug_3p) - var(--aug_m) * var(--aug_1U)) calc(var(--aug_3F) - var(--aug_i) * var(--aug_1V)), calc(var(--aug_3p) - var(--aug_l) * var(--aug_1U)) calc(var(--aug_3F) - var(--aug_j) * var(--aug_1V)), calc(var(--aug_3p) - var(--aug_k) * var(--aug_1U)) calc(var(--aug_3F) - var(--aug_k) * var(--aug_1V)), calc(var(--aug_3p) - var(--aug_j) * var(--aug_1U)) calc(var(--aug_3F) - var(--aug_l) * var(--aug_1V)), calc(var(--aug_3p) - var(--aug_i) * var(--aug_1U)) calc(var(--aug_3F) - var(--aug_m) * var(--aug_1V)), calc(var(--aug_3p) - var(--aug_h) * var(--aug_1U)) calc(var(--aug_3F) - var(--aug_n) * var(--aug_1V)), calc(var(--aug_3p) - var(--aug_g) * var(--aug_1U)) calc(var(--aug_3F) - var(--aug_o) * var(--aug_1V)), );
    --aug_9D: var(--aug-round-tr1, calc(var(--aug_3q) + var(--aug_g) * (var(--aug_20))) calc(var(--aug_3G) - var(--aug_o) * (var(--aug_21))), calc(var(--aug_3q) + var(--aug_h) * (var(--aug_20))) calc(var(--aug_3G) - var(--aug_n) * (var(--aug_21))), calc(var(--aug_3q) + var(--aug_i) * (var(--aug_20))) calc(var(--aug_3G) - var(--aug_m) * (var(--aug_21))), calc(var(--aug_3q) + var(--aug_j) * (var(--aug_20))) calc(var(--aug_3G) - var(--aug_l) * (var(--aug_21))), calc(var(--aug_3q) + var(--aug_k) * (var(--aug_20))) calc(var(--aug_3G) - var(--aug_k) * (var(--aug_21))), calc(var(--aug_3q) + var(--aug_l) * (var(--aug_20))) calc(var(--aug_3G) - var(--aug_j) * (var(--aug_21))), calc(var(--aug_3q) + var(--aug_m) * (var(--aug_20))) calc(var(--aug_3G) - var(--aug_i) * (var(--aug_21))), calc(var(--aug_3q) + var(--aug_n) * (var(--aug_20))) calc(var(--aug_3G) - var(--aug_h) * (var(--aug_21))), calc(var(--aug_3q) + var(--aug_o) * (var(--aug_20))) calc(var(--aug_3G) - var(--aug_g) * (var(--aug_21))), );
    --aug_9E: var(--aug-round-tr2, calc(var(--aug_3r) + var(--aug_g) * (var(--aug_22))) calc(var(--aug_3H) - var(--aug_o) * (var(--aug_23))), calc(var(--aug_3r) + var(--aug_h) * (var(--aug_22))) calc(var(--aug_3H) - var(--aug_n) * (var(--aug_23))), calc(var(--aug_3r) + var(--aug_i) * (var(--aug_22))) calc(var(--aug_3H) - var(--aug_m) * (var(--aug_23))), calc(var(--aug_3r) + var(--aug_j) * (var(--aug_22))) calc(var(--aug_3H) - var(--aug_l) * (var(--aug_23))), calc(var(--aug_3r) + var(--aug_k) * (var(--aug_22))) calc(var(--aug_3H) - var(--aug_k) * (var(--aug_23))), calc(var(--aug_3r) + var(--aug_l) * (var(--aug_22))) calc(var(--aug_3H) - var(--aug_j) * (var(--aug_23))), calc(var(--aug_3r) + var(--aug_m) * (var(--aug_22))) calc(var(--aug_3H) - var(--aug_i) * (var(--aug_23))), calc(var(--aug_3r) + var(--aug_n) * (var(--aug_22))) calc(var(--aug_3H) - var(--aug_h) * (var(--aug_23))), calc(var(--aug_3r) + var(--aug_o) * (var(--aug_22))) calc(var(--aug_3H) - var(--aug_g) * (var(--aug_23))), );
    --aug_9F: var(--aug-round-r1, calc(var(--aug_3s) + var(--aug_o) * var(--aug_28)) calc(var(--aug_3I) + var(--aug_g) * var(--aug_29)), calc(var(--aug_3s) + var(--aug_n) * var(--aug_28)) calc(var(--aug_3I) + var(--aug_h) * var(--aug_29)), calc(var(--aug_3s) + var(--aug_m) * var(--aug_28)) calc(var(--aug_3I) + var(--aug_i) * var(--aug_29)), calc(var(--aug_3s) + var(--aug_l) * var(--aug_28)) calc(var(--aug_3I) + var(--aug_j) * var(--aug_29)), calc(var(--aug_3s) + var(--aug_k) * var(--aug_28)) calc(var(--aug_3I) + var(--aug_k) * var(--aug_29)), calc(var(--aug_3s) + var(--aug_j) * var(--aug_28)) calc(var(--aug_3I) + var(--aug_l) * var(--aug_29)), calc(var(--aug_3s) + var(--aug_i) * var(--aug_28)) calc(var(--aug_3I) + var(--aug_m) * var(--aug_29)), calc(var(--aug_3s) + var(--aug_h) * var(--aug_28)) calc(var(--aug_3I) + var(--aug_n) * var(--aug_29)), calc(var(--aug_3s) + var(--aug_g) * var(--aug_28)) calc(var(--aug_3I) + var(--aug_o) * var(--aug_29)), );
    --aug_9G: var(--aug-round-r2, calc(var(--aug_3t) + var(--aug_g) * var(--aug_2a)) calc(var(--aug_3J) - var(--aug_o) * var(--aug_2b)), calc(var(--aug_3t) + var(--aug_h) * var(--aug_2a)) calc(var(--aug_3J) - var(--aug_n) * var(--aug_2b)), calc(var(--aug_3t) + var(--aug_i) * var(--aug_2a)) calc(var(--aug_3J) - var(--aug_m) * var(--aug_2b)), calc(var(--aug_3t) + var(--aug_j) * var(--aug_2a)) calc(var(--aug_3J) - var(--aug_l) * var(--aug_2b)), calc(var(--aug_3t) + var(--aug_k) * var(--aug_2a)) calc(var(--aug_3J) - var(--aug_k) * var(--aug_2b)), calc(var(--aug_3t) + var(--aug_l) * var(--aug_2a)) calc(var(--aug_3J) - var(--aug_j) * var(--aug_2b)), calc(var(--aug_3t) + var(--aug_m) * var(--aug_2a)) calc(var(--aug_3J) - var(--aug_i) * var(--aug_2b)), calc(var(--aug_3t) + var(--aug_n) * var(--aug_2a)) calc(var(--aug_3J) - var(--aug_h) * var(--aug_2b)), calc(var(--aug_3t) + var(--aug_o) * var(--aug_2a)) calc(var(--aug_3J) - var(--aug_g) * var(--aug_2b)), );
    --aug_9H: var(--aug-round-br1, calc(var(--aug_3u) + var(--aug_o) * var(--aug_2g)) calc(var(--aug_3K) + var(--aug_g) * var(--aug_2h)), calc(var(--aug_3u) + var(--aug_n) * var(--aug_2g)) calc(var(--aug_3K) + var(--aug_h) * var(--aug_2h)), calc(var(--aug_3u) + var(--aug_m) * var(--aug_2g)) calc(var(--aug_3K) + var(--aug_i) * var(--aug_2h)), calc(var(--aug_3u) + var(--aug_l) * var(--aug_2g)) calc(var(--aug_3K) + var(--aug_j) * var(--aug_2h)), calc(var(--aug_3u) + var(--aug_k) * var(--aug_2g)) calc(var(--aug_3K) + var(--aug_k) * var(--aug_2h)), calc(var(--aug_3u) + var(--aug_j) * var(--aug_2g)) calc(var(--aug_3K) + var(--aug_l) * var(--aug_2h)), calc(var(--aug_3u) + var(--aug_i) * var(--aug_2g)) calc(var(--aug_3K) + var(--aug_m) * var(--aug_2h)), calc(var(--aug_3u) + var(--aug_h) * var(--aug_2g)) calc(var(--aug_3K) + var(--aug_n) * var(--aug_2h)), calc(var(--aug_3u) + var(--aug_g) * var(--aug_2g)) calc(var(--aug_3K) + var(--aug_o) * var(--aug_2h)), );
    --aug_9I: var(--aug-round-br2, calc(var(--aug_3v) + var(--aug_o) * var(--aug_2i)) calc(var(--aug_3L) + var(--aug_g) * var(--aug_2j)), calc(var(--aug_3v) + var(--aug_n) * var(--aug_2i)) calc(var(--aug_3L) + var(--aug_h) * var(--aug_2j)), calc(var(--aug_3v) + var(--aug_m) * var(--aug_2i)) calc(var(--aug_3L) + var(--aug_i) * var(--aug_2j)), calc(var(--aug_3v) + var(--aug_l) * var(--aug_2i)) calc(var(--aug_3L) + var(--aug_j) * var(--aug_2j)), calc(var(--aug_3v) + var(--aug_k) * var(--aug_2i)) calc(var(--aug_3L) + var(--aug_k) * var(--aug_2j)), calc(var(--aug_3v) + var(--aug_j) * var(--aug_2i)) calc(var(--aug_3L) + var(--aug_l) * var(--aug_2j)), calc(var(--aug_3v) + var(--aug_i) * var(--aug_2i)) calc(var(--aug_3L) + var(--aug_m) * var(--aug_2j)), calc(var(--aug_3v) + var(--aug_h) * var(--aug_2i)) calc(var(--aug_3L) + var(--aug_n) * var(--aug_2j)), calc(var(--aug_3v) + var(--aug_g) * var(--aug_2i)) calc(var(--aug_3L) + var(--aug_o) * var(--aug_2j)), );
    --aug_9J: var(--aug-round-b1, calc(var(--aug_3w) - var(--aug_g) * var(--aug_2o)) calc(var(--aug_3M) + var(--aug_o) * var(--aug_2p)), calc(var(--aug_3w) - var(--aug_h) * var(--aug_2o)) calc(var(--aug_3M) + var(--aug_n) * var(--aug_2p)), calc(var(--aug_3w) - var(--aug_i) * var(--aug_2o)) calc(var(--aug_3M) + var(--aug_m) * var(--aug_2p)), calc(var(--aug_3w) - var(--aug_j) * var(--aug_2o)) calc(var(--aug_3M) + var(--aug_l) * var(--aug_2p)), calc(var(--aug_3w) - var(--aug_k) * var(--aug_2o)) calc(var(--aug_3M) + var(--aug_k) * var(--aug_2p)), calc(var(--aug_3w) - var(--aug_l) * var(--aug_2o)) calc(var(--aug_3M) + var(--aug_j) * var(--aug_2p)), calc(var(--aug_3w) - var(--aug_m) * var(--aug_2o)) calc(var(--aug_3M) + var(--aug_i) * var(--aug_2p)), calc(var(--aug_3w) - var(--aug_n) * var(--aug_2o)) calc(var(--aug_3M) + var(--aug_h) * var(--aug_2p)), calc(var(--aug_3w) - var(--aug_o) * var(--aug_2o)) calc(var(--aug_3M) + var(--aug_g) * var(--aug_2p)), );
    --aug_9K: var(--aug-round-b2, calc(var(--aug_3x) + var(--aug_o) * var(--aug_2q)) calc(var(--aug_3N) + var(--aug_g) * var(--aug_2r)), calc(var(--aug_3x) + var(--aug_n) * var(--aug_2q)) calc(var(--aug_3N) + var(--aug_h) * var(--aug_2r)), calc(var(--aug_3x) + var(--aug_m) * var(--aug_2q)) calc(var(--aug_3N) + var(--aug_i) * var(--aug_2r)), calc(var(--aug_3x) + var(--aug_l) * var(--aug_2q)) calc(var(--aug_3N) + var(--aug_j) * var(--aug_2r)), calc(var(--aug_3x) + var(--aug_k) * var(--aug_2q)) calc(var(--aug_3N) + var(--aug_k) * var(--aug_2r)), calc(var(--aug_3x) + var(--aug_j) * var(--aug_2q)) calc(var(--aug_3N) + var(--aug_l) * var(--aug_2r)), calc(var(--aug_3x) + var(--aug_i) * var(--aug_2q)) calc(var(--aug_3N) + var(--aug_m) * var(--aug_2r)), calc(var(--aug_3x) + var(--aug_h) * var(--aug_2q)) calc(var(--aug_3N) + var(--aug_n) * var(--aug_2r)), calc(var(--aug_3x) + var(--aug_g) * var(--aug_2q)) calc(var(--aug_3N) + var(--aug_o) * var(--aug_2r)), );
    --aug_9L: var(--aug-round-bl1, calc(var(--aug_3y) - var(--aug_g) * var(--aug_2w)) calc(var(--aug_3O) + var(--aug_o) * var(--aug_2x)), calc(var(--aug_3y) - var(--aug_h) * var(--aug_2w)) calc(var(--aug_3O) + var(--aug_n) * var(--aug_2x)), calc(var(--aug_3y) - var(--aug_i) * var(--aug_2w)) calc(var(--aug_3O) + var(--aug_m) * var(--aug_2x)), calc(var(--aug_3y) - var(--aug_j) * var(--aug_2w)) calc(var(--aug_3O) + var(--aug_l) * var(--aug_2x)), calc(var(--aug_3y) - var(--aug_k) * var(--aug_2w)) calc(var(--aug_3O) + var(--aug_k) * var(--aug_2x)), calc(var(--aug_3y) - var(--aug_l) * var(--aug_2w)) calc(var(--aug_3O) + var(--aug_j) * var(--aug_2x)), calc(var(--aug_3y) - var(--aug_m) * var(--aug_2w)) calc(var(--aug_3O) + var(--aug_i) * var(--aug_2x)), calc(var(--aug_3y) - var(--aug_n) * var(--aug_2w)) calc(var(--aug_3O) + var(--aug_h) * var(--aug_2x)), calc(var(--aug_3y) - var(--aug_o) * var(--aug_2w)) calc(var(--aug_3O) + var(--aug_g) * var(--aug_2x)), );
    --aug_9M: var(--aug-round-bl2, calc(var(--aug_3z) - var(--aug_g) * var(--aug_2y)) calc(var(--aug_3P) + var(--aug_o) * var(--aug_2z)), calc(var(--aug_3z) - var(--aug_h) * var(--aug_2y)) calc(var(--aug_3P) + var(--aug_n) * var(--aug_2z)), calc(var(--aug_3z) - var(--aug_i) * var(--aug_2y)) calc(var(--aug_3P) + var(--aug_m) * var(--aug_2z)), calc(var(--aug_3z) - var(--aug_j) * var(--aug_2y)) calc(var(--aug_3P) + var(--aug_l) * var(--aug_2z)), calc(var(--aug_3z) - var(--aug_k) * var(--aug_2y)) calc(var(--aug_3P) + var(--aug_k) * var(--aug_2z)), calc(var(--aug_3z) - var(--aug_l) * var(--aug_2y)) calc(var(--aug_3P) + var(--aug_j) * var(--aug_2z)), calc(var(--aug_3z) - var(--aug_m) * var(--aug_2y)) calc(var(--aug_3P) + var(--aug_i) * var(--aug_2z)), calc(var(--aug_3z) - var(--aug_n) * var(--aug_2y)) calc(var(--aug_3P) + var(--aug_h) * var(--aug_2z)), calc(var(--aug_3z) - var(--aug_o) * var(--aug_2y)) calc(var(--aug_3P) + var(--aug_g) * var(--aug_2z)), );
    --aug_9N: var(--aug-round-l1, calc(var(--aug_3A) - var(--aug_o) * var(--aug_2E)) calc(var(--aug_3Q) - var(--aug_g) * var(--aug_2F)), calc(var(--aug_3A) - var(--aug_n) * var(--aug_2E)) calc(var(--aug_3Q) - var(--aug_h) * var(--aug_2F)), calc(var(--aug_3A) - var(--aug_m) * var(--aug_2E)) calc(var(--aug_3Q) - var(--aug_i) * var(--aug_2F)), calc(var(--aug_3A) - var(--aug_l) * var(--aug_2E)) calc(var(--aug_3Q) - var(--aug_j) * var(--aug_2F)), calc(var(--aug_3A) - var(--aug_k) * var(--aug_2E)) calc(var(--aug_3Q) - var(--aug_k) * var(--aug_2F)), calc(var(--aug_3A) - var(--aug_j) * var(--aug_2E)) calc(var(--aug_3Q) - var(--aug_l) * var(--aug_2F)), calc(var(--aug_3A) - var(--aug_i) * var(--aug_2E)) calc(var(--aug_3Q) - var(--aug_m) * var(--aug_2F)), calc(var(--aug_3A) - var(--aug_h) * var(--aug_2E)) calc(var(--aug_3Q) - var(--aug_n) * var(--aug_2F)), calc(var(--aug_3A) - var(--aug_g) * var(--aug_2E)) calc(var(--aug_3Q) - var(--aug_o) * var(--aug_2F)), );
    --aug_9O: var(--aug-round-l2, calc(var(--aug_3B) - var(--aug_g) * var(--aug_2G)) calc(var(--aug_3R) + var(--aug_o) * var(--aug_2H)), calc(var(--aug_3B) - var(--aug_h) * var(--aug_2G)) calc(var(--aug_3R) + var(--aug_n) * var(--aug_2H)), calc(var(--aug_3B) - var(--aug_i) * var(--aug_2G)) calc(var(--aug_3R) + var(--aug_m) * var(--aug_2H)), calc(var(--aug_3B) - var(--aug_j) * var(--aug_2G)) calc(var(--aug_3R) + var(--aug_l) * var(--aug_2H)), calc(var(--aug_3B) - var(--aug_k) * var(--aug_2G)) calc(var(--aug_3R) + var(--aug_k) * var(--aug_2H)), calc(var(--aug_3B) - var(--aug_l) * var(--aug_2G)) calc(var(--aug_3R) + var(--aug_j) * var(--aug_2H)), calc(var(--aug_3B) - var(--aug_m) * var(--aug_2G)) calc(var(--aug_3R) + var(--aug_i) * var(--aug_2H)), calc(var(--aug_3B) - var(--aug_n) * var(--aug_2G)) calc(var(--aug_3R) + var(--aug_h) * var(--aug_2H)), calc(var(--aug_3B) - var(--aug_o) * var(--aug_2G)) calc(var(--aug_3R) + var(--aug_g) * var(--aug_2H)), );
    --aug_9P: var(--aug-scoop-tl1, calc(var(--aug_3S) + var(--aug_g) * (var(--aug_1K) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3T) + var(--aug_o) * (var(--aug_1L) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3S) + var(--aug_h) * (var(--aug_1K) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3T) + var(--aug_n) * (var(--aug_1L) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3S) + var(--aug_i) * (var(--aug_1K) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3T) + var(--aug_m) * (var(--aug_1L) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3S) + var(--aug_j) * (var(--aug_1K) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3T) + var(--aug_l) * (var(--aug_1L) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3S) + var(--aug_k) * (var(--aug_1K) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3T) + var(--aug_k) * (var(--aug_1L) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3S) + var(--aug_l) * (var(--aug_1K) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3T) + var(--aug_j) * (var(--aug_1L) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3S) + var(--aug_m) * (var(--aug_1K) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3T) + var(--aug_i) * (var(--aug_1L) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3S) + var(--aug_n) * (var(--aug_1K) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3T) + var(--aug_h) * (var(--aug_1L) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3S) + var(--aug_o) * (var(--aug_1K) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3T) + var(--aug_g) * (var(--aug_1L) - var(--aug_2) - var(--aug_c))), );
    --aug_9Q: var(--aug-scoop-tl2, calc(var(--aug_3U) + var(--aug_g) * (var(--aug_1M) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3V) + var(--aug_o) * (var(--aug_1N) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3U) + var(--aug_h) * (var(--aug_1M) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3V) + var(--aug_n) * (var(--aug_1N) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3U) + var(--aug_i) * (var(--aug_1M) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3V) + var(--aug_m) * (var(--aug_1N) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3U) + var(--aug_j) * (var(--aug_1M) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3V) + var(--aug_l) * (var(--aug_1N) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3U) + var(--aug_k) * (var(--aug_1M) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3V) + var(--aug_k) * (var(--aug_1N) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3U) + var(--aug_l) * (var(--aug_1M) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3V) + var(--aug_j) * (var(--aug_1N) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3U) + var(--aug_m) * (var(--aug_1M) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3V) + var(--aug_i) * (var(--aug_1N) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3U) + var(--aug_n) * (var(--aug_1M) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3V) + var(--aug_h) * (var(--aug_1N) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3U) + var(--aug_o) * (var(--aug_1M) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3V) + var(--aug_g) * (var(--aug_1N) - var(--aug_2) - var(--aug_c))), );
    --aug_9R: var(--aug-scoop-t1, calc(var(--aug_3W) - var(--aug_o) * (var(--aug_1S) - var(--aug_3) - var(--aug_d))) calc(var(--aug_3X) + var(--aug_g) * (var(--aug_1T) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3W) - var(--aug_n) * (var(--aug_1S) - var(--aug_3) - var(--aug_d))) calc(var(--aug_3X) + var(--aug_h) * (var(--aug_1T) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3W) - var(--aug_m) * (var(--aug_1S) - var(--aug_3) - var(--aug_d))) calc(var(--aug_3X) + var(--aug_i) * (var(--aug_1T) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3W) - var(--aug_l) * (var(--aug_1S) - var(--aug_3) - var(--aug_d))) calc(var(--aug_3X) + var(--aug_j) * (var(--aug_1T) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3W) - var(--aug_k) * (var(--aug_1S) - var(--aug_3) - var(--aug_d))) calc(var(--aug_3X) + var(--aug_k) * (var(--aug_1T) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3W) - var(--aug_j) * (var(--aug_1S) - var(--aug_3) - var(--aug_d))) calc(var(--aug_3X) + var(--aug_l) * (var(--aug_1T) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3W) - var(--aug_i) * (var(--aug_1S) - var(--aug_3) - var(--aug_d))) calc(var(--aug_3X) + var(--aug_m) * (var(--aug_1T) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3W) - var(--aug_h) * (var(--aug_1S) - var(--aug_3) - var(--aug_d))) calc(var(--aug_3X) + var(--aug_n) * (var(--aug_1T) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3W) - var(--aug_g) * (var(--aug_1S) - var(--aug_3) - var(--aug_d))) calc(var(--aug_3X) + var(--aug_o) * (var(--aug_1T) - var(--aug_2) - var(--aug_c))), );
    --aug_9S: var(--aug-scoop-t2, calc(var(--aug_3Y) + var(--aug_g) * (var(--aug_1U) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3Z) + var(--aug_o) * (var(--aug_1V) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3Y) + var(--aug_h) * (var(--aug_1U) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3Z) + var(--aug_n) * (var(--aug_1V) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3Y) + var(--aug_i) * (var(--aug_1U) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3Z) + var(--aug_m) * (var(--aug_1V) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3Y) + var(--aug_j) * (var(--aug_1U) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3Z) + var(--aug_l) * (var(--aug_1V) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3Y) + var(--aug_k) * (var(--aug_1U) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3Z) + var(--aug_k) * (var(--aug_1V) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3Y) + var(--aug_l) * (var(--aug_1U) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3Z) + var(--aug_j) * (var(--aug_1V) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3Y) + var(--aug_m) * (var(--aug_1U) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3Z) + var(--aug_i) * (var(--aug_1V) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3Y) + var(--aug_n) * (var(--aug_1U) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3Z) + var(--aug_h) * (var(--aug_1V) - var(--aug_2) - var(--aug_c))), calc(var(--aug_3Y) + var(--aug_o) * (var(--aug_1U) - var(--aug_5) - var(--aug_f))) calc(var(--aug_3Z) + var(--aug_g) * (var(--aug_1V) - var(--aug_2) - var(--aug_c))), );
    --aug_9T: var(--aug-scoop-tr1, calc(var(--aug_40) - var(--aug_o) * (var(--aug_20) - var(--aug_3) - var(--aug_d))) calc(var(--aug_41) + var(--aug_g) * (var(--aug_21) - var(--aug_2) - var(--aug_c))), calc(var(--aug_40) - var(--aug_n) * (var(--aug_20) - var(--aug_3) - var(--aug_d))) calc(var(--aug_41) + var(--aug_h) * (var(--aug_21) - var(--aug_2) - var(--aug_c))), calc(var(--aug_40) - var(--aug_m) * (var(--aug_20) - var(--aug_3) - var(--aug_d))) calc(var(--aug_41) + var(--aug_i) * (var(--aug_21) - var(--aug_2) - var(--aug_c))), calc(var(--aug_40) - var(--aug_l) * (var(--aug_20) - var(--aug_3) - var(--aug_d))) calc(var(--aug_41) + var(--aug_j) * (var(--aug_21) - var(--aug_2) - var(--aug_c))), calc(var(--aug_40) - var(--aug_k) * (var(--aug_20) - var(--aug_3) - var(--aug_d))) calc(var(--aug_41) + var(--aug_k) * (var(--aug_21) - var(--aug_2) - var(--aug_c))), calc(var(--aug_40) - var(--aug_j) * (var(--aug_20) - var(--aug_3) - var(--aug_d))) calc(var(--aug_41) + var(--aug_l) * (var(--aug_21) - var(--aug_2) - var(--aug_c))), calc(var(--aug_40) - var(--aug_i) * (var(--aug_20) - var(--aug_3) - var(--aug_d))) calc(var(--aug_41) + var(--aug_m) * (var(--aug_21) - var(--aug_2) - var(--aug_c))), calc(var(--aug_40) - var(--aug_h) * (var(--aug_20) - var(--aug_3) - var(--aug_d))) calc(var(--aug_41) + var(--aug_n) * (var(--aug_21) - var(--aug_2) - var(--aug_c))), calc(var(--aug_40) - var(--aug_g) * (var(--aug_20) - var(--aug_3) - var(--aug_d))) calc(var(--aug_41) + var(--aug_o) * (var(--aug_21) - var(--aug_2) - var(--aug_c))), );
    --aug_9U: var(--aug-scoop-tr2, calc(var(--aug_42) - var(--aug_o) * (var(--aug_22) - var(--aug_3) - var(--aug_d))) calc(var(--aug_43) + var(--aug_g) * (var(--aug_23) - var(--aug_2) - var(--aug_c))), calc(var(--aug_42) - var(--aug_n) * (var(--aug_22) - var(--aug_3) - var(--aug_d))) calc(var(--aug_43) + var(--aug_h) * (var(--aug_23) - var(--aug_2) - var(--aug_c))), calc(var(--aug_42) - var(--aug_m) * (var(--aug_22) - var(--aug_3) - var(--aug_d))) calc(var(--aug_43) + var(--aug_i) * (var(--aug_23) - var(--aug_2) - var(--aug_c))), calc(var(--aug_42) - var(--aug_l) * (var(--aug_22) - var(--aug_3) - var(--aug_d))) calc(var(--aug_43) + var(--aug_j) * (var(--aug_23) - var(--aug_2) - var(--aug_c))), calc(var(--aug_42) - var(--aug_k) * (var(--aug_22) - var(--aug_3) - var(--aug_d))) calc(var(--aug_43) + var(--aug_k) * (var(--aug_23) - var(--aug_2) - var(--aug_c))), calc(var(--aug_42) - var(--aug_j) * (var(--aug_22) - var(--aug_3) - var(--aug_d))) calc(var(--aug_43) + var(--aug_l) * (var(--aug_23) - var(--aug_2) - var(--aug_c))), calc(var(--aug_42) - var(--aug_i) * (var(--aug_22) - var(--aug_3) - var(--aug_d))) calc(var(--aug_43) + var(--aug_m) * (var(--aug_23) - var(--aug_2) - var(--aug_c))), calc(var(--aug_42) - var(--aug_h) * (var(--aug_22) - var(--aug_3) - var(--aug_d))) calc(var(--aug_43) + var(--aug_n) * (var(--aug_23) - var(--aug_2) - var(--aug_c))), calc(var(--aug_42) - var(--aug_g) * (var(--aug_22) - var(--aug_3) - var(--aug_d))) calc(var(--aug_43) + var(--aug_o) * (var(--aug_23) - var(--aug_2) - var(--aug_c))), );
    --aug_9V: var(--aug-scoop-r1, calc(var(--aug_44) - var(--aug_g) * (var(--aug_28) - var(--aug_3) - var(--aug_d))) calc(var(--aug_45) - var(--aug_o) * (var(--aug_29) - var(--aug_4) - var(--aug_e))), calc(var(--aug_44) - var(--aug_h) * (var(--aug_28) - var(--aug_3) - var(--aug_d))) calc(var(--aug_45) - var(--aug_n) * (var(--aug_29) - var(--aug_4) - var(--aug_e))), calc(var(--aug_44) - var(--aug_i) * (var(--aug_28) - var(--aug_3) - var(--aug_d))) calc(var(--aug_45) - var(--aug_m) * (var(--aug_29) - var(--aug_4) - var(--aug_e))), calc(var(--aug_44) - var(--aug_j) * (var(--aug_28) - var(--aug_3) - var(--aug_d))) calc(var(--aug_45) - var(--aug_l) * (var(--aug_29) - var(--aug_4) - var(--aug_e))), calc(var(--aug_44) - var(--aug_k) * (var(--aug_28) - var(--aug_3) - var(--aug_d))) calc(var(--aug_45) - var(--aug_k) * (var(--aug_29) - var(--aug_4) - var(--aug_e))), calc(var(--aug_44) - var(--aug_l) * (var(--aug_28) - var(--aug_3) - var(--aug_d))) calc(var(--aug_45) - var(--aug_j) * (var(--aug_29) - var(--aug_4) - var(--aug_e))), calc(var(--aug_44) - var(--aug_m) * (var(--aug_28) - var(--aug_3) - var(--aug_d))) calc(var(--aug_45) - var(--aug_i) * (var(--aug_29) - var(--aug_4) - var(--aug_e))), calc(var(--aug_44) - var(--aug_n) * (var(--aug_28) - var(--aug_3) - var(--aug_d))) calc(var(--aug_45) - var(--aug_h) * (var(--aug_29) - var(--aug_4) - var(--aug_e))), calc(var(--aug_44) - var(--aug_o) * (var(--aug_28) - var(--aug_3) - var(--aug_d))) calc(var(--aug_45) - var(--aug_g) * (var(--aug_29) - var(--aug_4) - var(--aug_e))), );
    --aug_9W: var(--aug-scoop-r2, calc(var(--aug_46) - var(--aug_o) * (var(--aug_2a) - var(--aug_3) - var(--aug_d))) calc(var(--aug_47) + var(--aug_g) * (var(--aug_2b) - var(--aug_2) - var(--aug_c))), calc(var(--aug_46) - var(--aug_n) * (var(--aug_2a) - var(--aug_3) - var(--aug_d))) calc(var(--aug_47) + var(--aug_h) * (var(--aug_2b) - var(--aug_2) - var(--aug_c))), calc(var(--aug_46) - var(--aug_m) * (var(--aug_2a) - var(--aug_3) - var(--aug_d))) calc(var(--aug_47) + var(--aug_i) * (var(--aug_2b) - var(--aug_2) - var(--aug_c))), calc(var(--aug_46) - var(--aug_l) * (var(--aug_2a) - var(--aug_3) - var(--aug_d))) calc(var(--aug_47) + var(--aug_j) * (var(--aug_2b) - var(--aug_2) - var(--aug_c))), calc(var(--aug_46) - var(--aug_k) * (var(--aug_2a) - var(--aug_3) - var(--aug_d))) calc(var(--aug_47) + var(--aug_k) * (var(--aug_2b) - var(--aug_2) - var(--aug_c))), calc(var(--aug_46) - var(--aug_j) * (var(--aug_2a) - var(--aug_3) - var(--aug_d))) calc(var(--aug_47) + var(--aug_l) * (var(--aug_2b) - var(--aug_2) - var(--aug_c))), calc(var(--aug_46) - var(--aug_i) * (var(--aug_2a) - var(--aug_3) - var(--aug_d))) calc(var(--aug_47) + var(--aug_m) * (var(--aug_2b) - var(--aug_2) - var(--aug_c))), calc(var(--aug_46) - var(--aug_h) * (var(--aug_2a) - var(--aug_3) - var(--aug_d))) calc(var(--aug_47) + var(--aug_n) * (var(--aug_2b) - var(--aug_2) - var(--aug_c))), calc(var(--aug_46) - var(--aug_g) * (var(--aug_2a) - var(--aug_3) - var(--aug_d))) calc(var(--aug_47) + var(--aug_o) * (var(--aug_2b) - var(--aug_2) - var(--aug_c))), );
    --aug_9X: var(--aug-scoop-br1, calc(var(--aug_48) - var(--aug_g) * (var(--aug_2g) - var(--aug_3) - var(--aug_d))) calc(var(--aug_49) - var(--aug_o) * (var(--aug_2h) - var(--aug_4) - var(--aug_e))), calc(var(--aug_48) - var(--aug_h) * (var(--aug_2g) - var(--aug_3) - var(--aug_d))) calc(var(--aug_49) - var(--aug_n) * (var(--aug_2h) - var(--aug_4) - var(--aug_e))), calc(var(--aug_48) - var(--aug_i) * (var(--aug_2g) - var(--aug_3) - var(--aug_d))) calc(var(--aug_49) - var(--aug_m) * (var(--aug_2h) - var(--aug_4) - var(--aug_e))), calc(var(--aug_48) - var(--aug_j) * (var(--aug_2g) - var(--aug_3) - var(--aug_d))) calc(var(--aug_49) - var(--aug_l) * (var(--aug_2h) - var(--aug_4) - var(--aug_e))), calc(var(--aug_48) - var(--aug_k) * (var(--aug_2g) - var(--aug_3) - var(--aug_d))) calc(var(--aug_49) - var(--aug_k) * (var(--aug_2h) - var(--aug_4) - var(--aug_e))), calc(var(--aug_48) - var(--aug_l) * (var(--aug_2g) - var(--aug_3) - var(--aug_d))) calc(var(--aug_49) - var(--aug_j) * (var(--aug_2h) - var(--aug_4) - var(--aug_e))), calc(var(--aug_48) - var(--aug_m) * (var(--aug_2g) - var(--aug_3) - var(--aug_d))) calc(var(--aug_49) - var(--aug_i) * (var(--aug_2h) - var(--aug_4) - var(--aug_e))), calc(var(--aug_48) - var(--aug_n) * (var(--aug_2g) - var(--aug_3) - var(--aug_d))) calc(var(--aug_49) - var(--aug_h) * (var(--aug_2h) - var(--aug_4) - var(--aug_e))), calc(var(--aug_48) - var(--aug_o) * (var(--aug_2g) - var(--aug_3) - var(--aug_d))) calc(var(--aug_49) - var(--aug_g) * (var(--aug_2h) - var(--aug_4) - var(--aug_e))), );
    --aug_9Y: var(--aug-scoop-br2, calc(var(--aug_4a) - var(--aug_g) * (var(--aug_2i) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4b) - var(--aug_o) * (var(--aug_2j) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4a) - var(--aug_h) * (var(--aug_2i) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4b) - var(--aug_n) * (var(--aug_2j) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4a) - var(--aug_i) * (var(--aug_2i) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4b) - var(--aug_m) * (var(--aug_2j) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4a) - var(--aug_j) * (var(--aug_2i) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4b) - var(--aug_l) * (var(--aug_2j) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4a) - var(--aug_k) * (var(--aug_2i) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4b) - var(--aug_k) * (var(--aug_2j) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4a) - var(--aug_l) * (var(--aug_2i) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4b) - var(--aug_j) * (var(--aug_2j) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4a) - var(--aug_m) * (var(--aug_2i) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4b) - var(--aug_i) * (var(--aug_2j) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4a) - var(--aug_n) * (var(--aug_2i) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4b) - var(--aug_h) * (var(--aug_2j) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4a) - var(--aug_o) * (var(--aug_2i) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4b) - var(--aug_g) * (var(--aug_2j) - var(--aug_4) - var(--aug_e))), );
    --aug_9Z: var(--aug-scoop-b1, calc(var(--aug_4c) + var(--aug_o) * (var(--aug_2o) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4d) - var(--aug_g) * (var(--aug_2p) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4c) + var(--aug_n) * (var(--aug_2o) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4d) - var(--aug_h) * (var(--aug_2p) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4c) + var(--aug_m) * (var(--aug_2o) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4d) - var(--aug_i) * (var(--aug_2p) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4c) + var(--aug_l) * (var(--aug_2o) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4d) - var(--aug_j) * (var(--aug_2p) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4c) + var(--aug_k) * (var(--aug_2o) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4d) - var(--aug_k) * (var(--aug_2p) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4c) + var(--aug_j) * (var(--aug_2o) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4d) - var(--aug_l) * (var(--aug_2p) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4c) + var(--aug_i) * (var(--aug_2o) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4d) - var(--aug_m) * (var(--aug_2p) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4c) + var(--aug_h) * (var(--aug_2o) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4d) - var(--aug_n) * (var(--aug_2p) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4c) + var(--aug_g) * (var(--aug_2o) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4d) - var(--aug_o) * (var(--aug_2p) - var(--aug_4) - var(--aug_e))), );
    --aug_a0: var(--aug-scoop-b2, calc(var(--aug_4e) - var(--aug_g) * (var(--aug_2q) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4f) - var(--aug_o) * (var(--aug_2r) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4e) - var(--aug_h) * (var(--aug_2q) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4f) - var(--aug_n) * (var(--aug_2r) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4e) - var(--aug_i) * (var(--aug_2q) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4f) - var(--aug_m) * (var(--aug_2r) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4e) - var(--aug_j) * (var(--aug_2q) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4f) - var(--aug_l) * (var(--aug_2r) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4e) - var(--aug_k) * (var(--aug_2q) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4f) - var(--aug_k) * (var(--aug_2r) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4e) - var(--aug_l) * (var(--aug_2q) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4f) - var(--aug_j) * (var(--aug_2r) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4e) - var(--aug_m) * (var(--aug_2q) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4f) - var(--aug_i) * (var(--aug_2r) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4e) - var(--aug_n) * (var(--aug_2q) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4f) - var(--aug_h) * (var(--aug_2r) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4e) - var(--aug_o) * (var(--aug_2q) - var(--aug_3) - var(--aug_d))) calc(var(--aug_4f) - var(--aug_g) * (var(--aug_2r) - var(--aug_4) - var(--aug_e))), );
    --aug_a1: var(--aug-scoop-bl1, calc(var(--aug_4g) + var(--aug_o) * (var(--aug_2w) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4h) - var(--aug_g) * (var(--aug_2x) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4g) + var(--aug_n) * (var(--aug_2w) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4h) - var(--aug_h) * (var(--aug_2x) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4g) + var(--aug_m) * (var(--aug_2w) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4h) - var(--aug_i) * (var(--aug_2x) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4g) + var(--aug_l) * (var(--aug_2w) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4h) - var(--aug_j) * (var(--aug_2x) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4g) + var(--aug_k) * (var(--aug_2w) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4h) - var(--aug_k) * (var(--aug_2x) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4g) + var(--aug_j) * (var(--aug_2w) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4h) - var(--aug_l) * (var(--aug_2x) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4g) + var(--aug_i) * (var(--aug_2w) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4h) - var(--aug_m) * (var(--aug_2x) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4g) + var(--aug_h) * (var(--aug_2w) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4h) - var(--aug_n) * (var(--aug_2x) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4g) + var(--aug_g) * (var(--aug_2w) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4h) - var(--aug_o) * (var(--aug_2x) - var(--aug_4) - var(--aug_e))), );
    --aug_a2: var(--aug-scoop-bl2, calc(var(--aug_4i) + var(--aug_o) * (var(--aug_2y) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4j) - var(--aug_g) * (var(--aug_2z) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4i) + var(--aug_n) * (var(--aug_2y) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4j) - var(--aug_h) * (var(--aug_2z) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4i) + var(--aug_m) * (var(--aug_2y) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4j) - var(--aug_i) * (var(--aug_2z) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4i) + var(--aug_l) * (var(--aug_2y) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4j) - var(--aug_j) * (var(--aug_2z) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4i) + var(--aug_k) * (var(--aug_2y) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4j) - var(--aug_k) * (var(--aug_2z) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4i) + var(--aug_j) * (var(--aug_2y) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4j) - var(--aug_l) * (var(--aug_2z) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4i) + var(--aug_i) * (var(--aug_2y) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4j) - var(--aug_m) * (var(--aug_2z) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4i) + var(--aug_h) * (var(--aug_2y) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4j) - var(--aug_n) * (var(--aug_2z) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4i) + var(--aug_g) * (var(--aug_2y) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4j) - var(--aug_o) * (var(--aug_2z) - var(--aug_4) - var(--aug_e))), );
    --aug_a3: var(--aug-scoop-l1, calc(var(--aug_4k) + var(--aug_g) * (var(--aug_2E) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4l) + var(--aug_o) * (var(--aug_2F) - var(--aug_2) - var(--aug_c))), calc(var(--aug_4k) + var(--aug_h) * (var(--aug_2E) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4l) + var(--aug_n) * (var(--aug_2F) - var(--aug_2) - var(--aug_c))), calc(var(--aug_4k) + var(--aug_i) * (var(--aug_2E) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4l) + var(--aug_m) * (var(--aug_2F) - var(--aug_2) - var(--aug_c))), calc(var(--aug_4k) + var(--aug_j) * (var(--aug_2E) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4l) + var(--aug_l) * (var(--aug_2F) - var(--aug_2) - var(--aug_c))), calc(var(--aug_4k) + var(--aug_k) * (var(--aug_2E) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4l) + var(--aug_k) * (var(--aug_2F) - var(--aug_2) - var(--aug_c))), calc(var(--aug_4k) + var(--aug_l) * (var(--aug_2E) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4l) + var(--aug_j) * (var(--aug_2F) - var(--aug_2) - var(--aug_c))), calc(var(--aug_4k) + var(--aug_m) * (var(--aug_2E) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4l) + var(--aug_i) * (var(--aug_2F) - var(--aug_2) - var(--aug_c))), calc(var(--aug_4k) + var(--aug_n) * (var(--aug_2E) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4l) + var(--aug_h) * (var(--aug_2F) - var(--aug_2) - var(--aug_c))), calc(var(--aug_4k) + var(--aug_o) * (var(--aug_2E) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4l) + var(--aug_g) * (var(--aug_2F) - var(--aug_2) - var(--aug_c))), );
    --aug_a4: var(--aug-scoop-l2, calc(var(--aug_4m) + var(--aug_o) * (var(--aug_2G) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4n) - var(--aug_g) * (var(--aug_2H) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4m) + var(--aug_n) * (var(--aug_2G) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4n) - var(--aug_h) * (var(--aug_2H) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4m) + var(--aug_m) * (var(--aug_2G) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4n) - var(--aug_i) * (var(--aug_2H) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4m) + var(--aug_l) * (var(--aug_2G) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4n) - var(--aug_j) * (var(--aug_2H) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4m) + var(--aug_k) * (var(--aug_2G) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4n) - var(--aug_k) * (var(--aug_2H) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4m) + var(--aug_j) * (var(--aug_2G) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4n) - var(--aug_l) * (var(--aug_2H) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4m) + var(--aug_i) * (var(--aug_2G) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4n) - var(--aug_m) * (var(--aug_2H) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4m) + var(--aug_h) * (var(--aug_2G) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4n) - var(--aug_n) * (var(--aug_2H) - var(--aug_4) - var(--aug_e))), calc(var(--aug_4m) + var(--aug_g) * (var(--aug_2G) - var(--aug_5) - var(--aug_f))) calc(var(--aug_4n) - var(--aug_o) * (var(--aug_2H) - var(--aug_4) - var(--aug_e))), );
    --aug_a5: var(--aug_9j) var(--aug_8N) var(--aug_93) var(--aug_9z) var(--aug_9P);
    --aug_a6: var(--aug_9k) var(--aug_8O) var(--aug_94) var(--aug_9A) var(--aug_9Q);
    --aug_a7: var(--aug_9l) var(--aug_8P) var(--aug_95) var(--aug_9B) var(--aug_9R);
    --aug_a8: var(--aug_9m) var(--aug_8Q) var(--aug_96) var(--aug_9C) var(--aug_9S);
    --aug_a9: var(--aug_9n) var(--aug_8R) var(--aug_97) var(--aug_9D) var(--aug_9T);
    --aug_aa: var(--aug_9o) var(--aug_8S) var(--aug_98) var(--aug_9E) var(--aug_9U);
    --aug_ab: var(--aug_9p) var(--aug_8T) var(--aug_99) var(--aug_9F) var(--aug_9V);
    --aug_ac: var(--aug_9q) var(--aug_8U) var(--aug_9a) var(--aug_9G) var(--aug_9W);
    --aug_ad: var(--aug_9r) var(--aug_8V) var(--aug_9b) var(--aug_9H) var(--aug_9X);
    --aug_ae: var(--aug_9s) var(--aug_8W) var(--aug_9c) var(--aug_9I) var(--aug_9Y);
    --aug_af: var(--aug_9t) var(--aug_8X) var(--aug_9d) var(--aug_9J) var(--aug_9Z);
    --aug_ag: var(--aug_9u) var(--aug_8Y) var(--aug_9e) var(--aug_9K) var(--aug_a0);
    --aug_ah: var(--aug_9v) var(--aug_8Z) var(--aug_9f) var(--aug_9L) var(--aug_a1);
    --aug_ai: var(--aug_9w) var(--aug_90) var(--aug_9g) var(--aug_9M) var(--aug_a2);
    --aug_aj: var(--aug_9x) var(--aug_91) var(--aug_9h) var(--aug_9N) var(--aug_a3);
    --aug_ak: var(--aug_9y) var(--aug_92) var(--aug_9i) var(--aug_9O) var(--aug_a4);
    --aug_1z: var(--aug_M) -1px -1px;
    --aug_al: var(--aug_1z, -1px var(--aug_2N), var(--aug_1O) var(--aug_2N), var(--aug_a5)calc(var(--aug_1O) + var(--aug_1K)) calc(var(--aug_1P) + var(--aug_1N) + var(--aug_1Q)), calc(var(--aug_1O) + var(--aug_1K)) calc(var(--aug_1P) + var(--aug_1N)), calc(var(--aug_1O) + var(--aug_1K) + var(--aug_1R)) calc(var(--aug_1P) + var(--aug_1N)), var(--aug_a6)var(--aug_2O) var(--aug_1P), var(--aug_2O) -1px);
    --aug_1A: var(--aug_S);
    --aug_am: var(--aug_1A, , var(--aug_33) -1px, var(--aug_33) var(--aug_1W), var(--aug_a7)calc(var(--aug_33) + var(--aug_1S)) calc(var(--aug_1W) + var(--aug_1T)), calc(var(--aug_33) + var(--aug_1S) + var(--aug_1Y)) calc(var(--aug_1W) + var(--aug_1T)), var(--aug_a8)var(--aug_35) var(--aug_1X), var(--aug_35) -1px);
    --aug_1B: var(--aug_Y) calc(100% + 1px) -1px;
    --aug_an: var(--aug_1B, var(--aug_2Q) -1px, var(--aug_2Q) var(--aug_24), var(--aug_a9)calc(var(--aug_2Q) + var(--aug_20)) calc(var(--aug_24) + var(--aug_21)), calc(100% - (var(--aug_25) + var(--aug_22))) calc(var(--aug_24) + var(--aug_21)), calc(100% - (var(--aug_25) + var(--aug_22))) calc(var(--aug_24) + var(--aug_21) + var(--aug_27)), var(--aug_aa)calc(100% - var(--aug_25)) var(--aug_2T), calc(100% + 1px) var(--aug_2T));
    --aug_1C: var(--aug_14);
    --aug_ao: var(--aug_1C, , calc(100% + 1px) var(--aug_39), calc(100% - var(--aug_2c)) var(--aug_39), var(--aug_ab)calc(100% - var(--aug_2c) - var(--aug_28)) calc(var(--aug_39) + var(--aug_29)), calc(100% - var(--aug_2c) - var(--aug_28)) calc(var(--aug_39) + var(--aug_29) + var(--aug_2e)), var(--aug_ac)calc(100% - var(--aug_2d)) var(--aug_3b), calc(100% + 1px) var(--aug_3b));
    --aug_1D: var(--aug_1a) calc(100% + 1px) calc(100% + 1px);
    --aug_ap: var(--aug_1D, calc(100% + 1px) var(--aug_2V), calc(100% - var(--aug_2k)) var(--aug_2V), var(--aug_ad)calc(100% - var(--aug_2k) - var(--aug_2g)) calc(100% - (var(--aug_2l) + var(--aug_2j) + var(--aug_2m))), calc(100% - var(--aug_2k) - var(--aug_2g)) calc(100% - (var(--aug_2l) + var(--aug_2j))), calc(100% - var(--aug_2k) - var(--aug_2g) - var(--aug_2n)) calc(100% - (var(--aug_2l) + var(--aug_2j))), var(--aug_ae)var(--aug_2W) calc(100% - var(--aug_2l)), var(--aug_2W) calc(100% + 1px));
    --aug_1E: var(--aug_1g);
    --aug_aq: var(--aug_1E, , var(--aug_3d) calc(100% + 1px), var(--aug_3d) calc(100% - var(--aug_2s)), var(--aug_af)calc(var(--aug_3d) - var(--aug_2o)) calc(100% - var(--aug_2s) - var(--aug_2p)), calc(var(--aug_3d) - var(--aug_2o) - var(--aug_2u)) calc(100% - var(--aug_2s) - var(--aug_2p)), var(--aug_ag)var(--aug_3f) calc(100% - var(--aug_2t)), var(--aug_3f) calc(100% + 1px));
    --aug_1F: var(--aug_1m) -1px calc(100% + 1px);
    --aug_ar: var(--aug_1F, var(--aug_2Y) calc(100% + 1px), var(--aug_2Y) calc(100% - var(--aug_2A)), var(--aug_ah)calc(var(--aug_2B) + var(--aug_2y) + var(--aug_2C)) calc(100% - var(--aug_2A) - var(--aug_2x)), calc(var(--aug_2B) + var(--aug_2y)) calc(100% - var(--aug_2A) - var(--aug_2x)), calc(var(--aug_2B) + var(--aug_2y)) calc(100% - var(--aug_2A) - var(--aug_2x) - var(--aug_2D)), var(--aug_ai)var(--aug_2B) var(--aug_31), -1px var(--aug_31));
    --aug_1G: var(--aug_1s);
    --aug_as: var(--aug_1G, , -1px var(--aug_3j), var(--aug_2I) var(--aug_3j), var(--aug_aj)calc(var(--aug_2I) + var(--aug_2E)) calc(var(--aug_3j) - var(--aug_2F)), calc(var(--aug_2I) + var(--aug_2E)) calc(var(--aug_3j) - var(--aug_2F) - var(--aug_2K)), var(--aug_ak)var(--aug_2J) var(--aug_3l), -1px var(--aug_3l));
    --aug_1H: var(--aug_M) var(--aug_S) var(--aug_Y) var(--aug_14) var(--aug_1a) var(--aug_1g) var(--aug_1m) var(--aug_1s);
    --aug_1I: var(--aug_1H) var(--aug-border) var(--aug-inset) auto;
    isolation: var(--aug_1I, isolate);
    --aug_1J: var(--aug_1H) INVAL1D;
    clip-path: polygon(var(--aug_1J, var(--aug_al)) var(--aug_1J, var(--aug_am, )), var(--aug_1J, var(--aug_an)) var(--aug_1J, var(--aug_ao, )), var(--aug_1J, var(--aug_ap)) var(--aug_1J, var(--aug_aq, )), var(--aug_1J, var(--aug_ar)) var(--aug_1J, var(--aug_as, )));
  }
}

@supports (--foo:, 0 0) and (-webkit-clip-path:polygon(0 0, 100% 0, 50% 50%)) and (not (clip-path:polygon(0 0, 100% 0, 50% 50%))) {

  [data-augmented-ui-border],
  [data-augmented-ui]::after,
  [data-augmented-ui-inlay],
  [data-augmented-ui]::before {
    clip-path: polygon(var(--aug_C, var(--aug_8F)) var(--aug_C, var(--aug_8G, )), var(--aug_C, var(--aug_8H)) var(--aug_C, var(--aug_8I, )), var(--aug_C, var(--aug_8J)) var(--aug_C, var(--aug_8K, )), var(--aug_C, var(--aug_8L)) var(--aug_C, var(--aug_8M, ))var(--aug_4o));
    -webkit-clip-path: polygon(var(--aug_C, var(--aug_8F)) var(--aug_C, var(--aug_8G, )), var(--aug_C, var(--aug_8H)) var(--aug_C, var(--aug_8I, )), var(--aug_C, var(--aug_8J)) var(--aug_C, var(--aug_8K, )), var(--aug_C, var(--aug_8L)) var(--aug_C, var(--aug_8M, ))var(--aug_4o));
  }

  [data-augmented-ui] {
    clip-path: polygon(var(--aug_1J, var(--aug_al)) var(--aug_1J, var(--aug_am, )), var(--aug_1J, var(--aug_an)) var(--aug_1J, var(--aug_ao, )), var(--aug_1J, var(--aug_ap)) var(--aug_1J, var(--aug_aq, )), var(--aug_1J, var(--aug_ar)) var(--aug_1J, var(--aug_as, )));;
    -webkit-clip-path: polygon(var(--aug_1J, var(--aug_al)) var(--aug_1J, var(--aug_am, )), var(--aug_1J, var(--aug_an)) var(--aug_1J, var(--aug_ao, )), var(--aug_1J, var(--aug_ap)) var(--aug_1J, var(--aug_aq, )), var(--aug_1J, var(--aug_ar)) var(--aug_1J, var(--aug_as, )));
  }
}

[data-augmented-ui~="both"] {
  --aug-inlay: initial;
  --aug-border: initial;
}

[data-augmented-ui~="inlay"] {
  --aug-inlay: initial;
}

[data-augmented-ui~="border"] {
  --aug-border: initial;
}

[data-augmented-ui~="delegated-inlay"] {
  --aug-inlay: initial;
  --aug-delegated-inlay: initial;
}

[data-augmented-ui~="delegated-border"] {
  --aug-border: initial;
  --aug-delegated-border: initial;
}

[data-augmented-ui~="tl-clip"],
[data-augmented-ui~="tl-clip-x"],
[data-augmented-ui~="tl-clip-y"],
[data-augmented-ui~="tl-clip-inset"],
[data-augmented-ui~="tl-2-clip-x"],
[data-augmented-ui~="tl-2-clip-y"],
[data-augmented-ui~="tl-2-clip-xy"],
[data-augmented-ui~="tl-rect"],
[data-augmented-ui~="tl-rect-x"],
[data-augmented-ui~="tl-rect-y"],
[data-augmented-ui~="tl-2-rect"],
[data-augmented-ui~="tl-2-rect-x"],
[data-augmented-ui~="tl-2-rect-y"],
[data-augmented-ui~="tl-2-rect-xy"],
[data-augmented-ui~="tl-2-rect-inset"],
[data-augmented-ui~="tl-step-inset"],
[data-augmented-ui~="tl-2-step-inset"],
[data-augmented-ui~="tl-round"],
[data-augmented-ui~="tl-round-x"],
[data-augmented-ui~="tl-round-y"],
[data-augmented-ui~="tl-round-inset"],
[data-augmented-ui~="tl-2-round"],
[data-augmented-ui~="tl-2-round-x"],
[data-augmented-ui~="tl-2-round-y"],
[data-augmented-ui~="tl-2-round-xy"],
[data-augmented-ui~="tl-2-round-inset"],
[data-augmented-ui~="tl-scoop"],
[data-augmented-ui~="tl-scoop-x"],
[data-augmented-ui~="tl-scoop-y"],
[data-augmented-ui~="tl-scoop-inset"],
[data-augmented-ui~="tl-2-scoop"],
[data-augmented-ui~="tl-2-scoop-x"],
[data-augmented-ui~="tl-2-scoop-y"],
[data-augmented-ui~="tl-2-scoop-xy"],
[data-augmented-ui~="tl-2-scoop-inset"] {
  --aug-tl: 15px;
  --aug-tl1: var(--aug-tl);
}

[data-augmented-ui~="tl-2-clip-x"],
[data-augmented-ui~="tl-2-clip-y"],
[data-augmented-ui~="tl-2-clip-xy"],
[data-augmented-ui~="tl-2-rect"],
[data-augmented-ui~="tl-2-rect-x"],
[data-augmented-ui~="tl-2-rect-y"],
[data-augmented-ui~="tl-2-rect-xy"],
[data-augmented-ui~="tl-2-rect-inset"],
[data-augmented-ui~="tl-2-step-inset"],
[data-augmented-ui~="tl-2-round"],
[data-augmented-ui~="tl-2-round-x"],
[data-augmented-ui~="tl-2-round-y"],
[data-augmented-ui~="tl-2-round-xy"],
[data-augmented-ui~="tl-2-round-inset"],
[data-augmented-ui~="tl-2-scoop"],
[data-augmented-ui~="tl-2-scoop-x"],
[data-augmented-ui~="tl-2-scoop-y"],
[data-augmented-ui~="tl-2-scoop-xy"],
[data-augmented-ui~="tl-2-scoop-inset"] {
  --aug-tl2: var(--aug-tl1);
}

[data-augmented-ui~="tl-2-clip-x"],
[data-augmented-ui~="tl-2-rect-x"],
[data-augmented-ui~="tl-2-round-x"],
[data-augmented-ui~="tl-2-scoop-x"] {
  --aug-tl-extend2: calc(var(--aug-tl1) * 2);
}

[data-augmented-ui~="tl-2-clip-y"],
[data-augmented-ui~="tl-2-rect-y"],
[data-augmented-ui~="tl-2-round-y"],
[data-augmented-ui~="tl-2-scoop-y"] {
  --aug-tl-extend1: calc(var(--aug-tl1) * 2);
}

[data-augmented-ui~="tl-clip-inset"],
[data-augmented-ui~="tl-2-rect-inset"],
[data-augmented-ui~="tl-step-inset"],
[data-augmented-ui~="tl-2-step-inset"],
[data-augmented-ui~="tl-round-inset"],
[data-augmented-ui~="tl-2-round-inset"],
[data-augmented-ui~="tl-scoop-inset"],
[data-augmented-ui~="tl-2-scoop-inset"] {
  --aug-tl-inset1: var(--aug-tl1);
  --aug-tl-inset2: var(--aug-tl1);
}

[data-augmented-ui~="tl-2-clip-xy"],
[data-augmented-ui~="tl-2-rect-xy"],
[data-augmented-ui~="tl-2-round-xy"],
[data-augmented-ui~="tl-2-scoop-xy"] {
  --aug-tl-extend1: var(--aug-tl1);
  --aug-tl-extend2: var(--aug-tl1);
}

[data-augmented-ui~="tl-clip-x"],
[data-augmented-ui~="tl-rect-x"],
[data-augmented-ui~="tl-round-x"],
[data-augmented-ui~="tl-scoop-x"] {
  --aug-tl-inset1: calc(var(--aug-tl1) * 2);
}

[data-augmented-ui~="tl-clip-y"],
[data-augmented-ui~="tl-rect-y"],
[data-augmented-ui~="tl-round-y"],
[data-augmented-ui~="tl-scoop-y"] {
  --aug-tl-inset2: calc(var(--aug-tl1) * 2);
}

[data-augmented-ui~="tl-clip"],
[data-augmented-ui~="tl-clip-x"],
[data-augmented-ui~="tl-clip-y"],
[data-augmented-ui~="tl-clip-inset"] {
  --aug-clip-tl1: initial;
}

[data-augmented-ui~="tl-2-clip-x"],
[data-augmented-ui~="tl-2-clip-y"],
[data-augmented-ui~="tl-2-clip-xy"] {
  --aug-clip-tl1: initial;
  --aug-clip-tl2: initial;
}

[data-augmented-ui~="tl-rect"],
[data-augmented-ui~="tl-rect-x"],
[data-augmented-ui~="tl-rect-y"] {
  --aug-rect-tl1: initial;
}

[data-augmented-ui~="tl-2-rect"],
[data-augmented-ui~="tl-2-rect-x"],
[data-augmented-ui~="tl-2-rect-y"],
[data-augmented-ui~="tl-2-rect-xy"],
[data-augmented-ui~="tl-2-rect-inset"] {
  --aug-rect-tl1: initial;
  --aug-rect-tl2: initial;
}

[data-augmented-ui~="tl-step-inset"] {
  --aug-step-tl1: initial;
}

[data-augmented-ui~="tl-2-step-inset"] {
  --aug-step-tl1: initial;
  --aug-step-tl2: initial;
}

[data-augmented-ui~="tl-round"],
[data-augmented-ui~="tl-round-x"],
[data-augmented-ui~="tl-round-y"],
[data-augmented-ui~="tl-round-inset"] {
  --aug-round-tl1: initial;
}

[data-augmented-ui~="tl-2-round"],
[data-augmented-ui~="tl-2-round-x"],
[data-augmented-ui~="tl-2-round-y"],
[data-augmented-ui~="tl-2-round-xy"],
[data-augmented-ui~="tl-2-round-inset"] {
  --aug-round-tl1: initial;
  --aug-round-tl2: initial;
}

[data-augmented-ui~="tl-scoop"],
[data-augmented-ui~="tl-scoop-x"],
[data-augmented-ui~="tl-scoop-y"],
[data-augmented-ui~="tl-scoop-inset"] {
  --aug-scoop-tl1: initial;
}

[data-augmented-ui~="tl-2-scoop"],
[data-augmented-ui~="tl-2-scoop-x"],
[data-augmented-ui~="tl-2-scoop-y"],
[data-augmented-ui~="tl-2-scoop-xy"],
[data-augmented-ui~="tl-2-scoop-inset"] {
  --aug-scoop-tl1: initial;
  --aug-scoop-tl2: initial;
}

[data-augmented-ui~="tl-clip-x"],
[data-augmented-ui~="tl-clip-inset"] {
  --aug-tl1-alt-join-in: initial;
}

[data-augmented-ui~="tl-clip-y"],
[data-augmented-ui~="tl-clip-inset"],
[data-augmented-ui~="tl-2-clip-y"],
[data-augmented-ui~="tl-2-clip-xy"] {
  --aug-tl1-alt-join-out: initial;
}

[data-augmented-ui~="tl-2-clip-x"],
[data-augmented-ui~="tl-2-clip-xy"] {
  --aug-tl2-alt-join-in: initial;
}

[data-augmented-ui~="t-clip"],
[data-augmented-ui~="t-clip-x"],
[data-augmented-ui~="t-clip-y"],
[data-augmented-ui~="t-clip-xy"],
[data-augmented-ui~="t-rect"],
[data-augmented-ui~="t-rect-x"],
[data-augmented-ui~="t-rect-y"],
[data-augmented-ui~="t-rect-xy"],
[data-augmented-ui~="t-step-xy"],
[data-augmented-ui~="t-round-x"],
[data-augmented-ui~="t-round-xy"],
[data-augmented-ui~="t-scoop"],
[data-augmented-ui~="t-scoop-x"],
[data-augmented-ui~="t-scoop-y"],
[data-augmented-ui~="t-scoop-xy"] {
  --aug-t: 15px;
  --aug-t1: var(--aug-t);
  --aug-t2: var(--aug-t1);
}

[data-augmented-ui~="t-clip-x"],
[data-augmented-ui~="t-clip-xy"],
[data-augmented-ui~="t-rect-x"],
[data-augmented-ui~="t-rect-xy"],
[data-augmented-ui~="t-step-xy"],
[data-augmented-ui~="t-round-x"],
[data-augmented-ui~="t-round-xy"],
[data-augmented-ui~="t-scoop-x"],
[data-augmented-ui~="t-scoop-xy"] {
  --aug-t-extend1: var(--aug-t1);
}

[data-augmented-ui~="t-clip-y"],
[data-augmented-ui~="t-clip-xy"],
[data-augmented-ui~="t-rect-y"],
[data-augmented-ui~="t-rect-xy"],
[data-augmented-ui~="t-step-xy"],
[data-augmented-ui~="t-round-xy"],
[data-augmented-ui~="t-scoop-y"],
[data-augmented-ui~="t-scoop-xy"] {
  --aug-t-inset1: var(--aug-t1);
}

[data-augmented-ui~="t-clip"],
[data-augmented-ui~="t-clip-x"],
[data-augmented-ui~="t-clip-y"],
[data-augmented-ui~="t-clip-xy"] {
  --aug-clip-t1: initial;
  --aug-clip-t2: initial;
}

[data-augmented-ui~="t-clip"],
[data-augmented-ui~="t-clip-y"] {
  --aug-t1-alt-join-out: initial;
  --aug-t2-alt-join-in: initial;
}

[data-augmented-ui~="t-clip-y"],
[data-augmented-ui~="t-clip-xy"] {
  --aug-t1-alt-join-in: initial;
  --aug-t2-alt-join-out: initial;
}

[data-augmented-ui~="t-rect"],
[data-augmented-ui~="t-rect-x"],
[data-augmented-ui~="t-rect-y"],
[data-augmented-ui~="t-rect-xy"] {
  --aug-rect-t1: initial;
  --aug-rect-t2: initial;
}

[data-augmented-ui~="t-step-xy"] {
  --aug-step-t1: initial;
  --aug-step-t2: initial;
}

[data-augmented-ui~="t-round-x"],
[data-augmented-ui~="t-round-xy"] {
  --aug-round-t1: initial;
  --aug-round-t2: initial;
}

[data-augmented-ui~="t-scoop"],
[data-augmented-ui~="t-scoop-x"],
[data-augmented-ui~="t-scoop-y"],
[data-augmented-ui~="t-scoop-xy"] {
  --aug-scoop-t1: initial;
  --aug-scoop-t2: initial;
}

[data-augmented-ui~="tr-clip"],
[data-augmented-ui~="tr-clip-x"],
[data-augmented-ui~="tr-clip-y"],
[data-augmented-ui~="tr-clip-inset"],
[data-augmented-ui~="tr-2-clip-x"],
[data-augmented-ui~="tr-2-clip-y"],
[data-augmented-ui~="tr-2-clip-xy"],
[data-augmented-ui~="tr-rect"],
[data-augmented-ui~="tr-rect-x"],
[data-augmented-ui~="tr-rect-y"],
[data-augmented-ui~="tr-2-rect"],
[data-augmented-ui~="tr-2-rect-x"],
[data-augmented-ui~="tr-2-rect-y"],
[data-augmented-ui~="tr-2-rect-xy"],
[data-augmented-ui~="tr-2-rect-inset"],
[data-augmented-ui~="tr-step-inset"],
[data-augmented-ui~="tr-2-step-inset"],
[data-augmented-ui~="tr-round"],
[data-augmented-ui~="tr-round-x"],
[data-augmented-ui~="tr-round-y"],
[data-augmented-ui~="tr-round-inset"],
[data-augmented-ui~="tr-2-round"],
[data-augmented-ui~="tr-2-round-x"],
[data-augmented-ui~="tr-2-round-y"],
[data-augmented-ui~="tr-2-round-xy"],
[data-augmented-ui~="tr-2-round-inset"],
[data-augmented-ui~="tr-scoop"],
[data-augmented-ui~="tr-scoop-x"],
[data-augmented-ui~="tr-scoop-y"],
[data-augmented-ui~="tr-scoop-inset"],
[data-augmented-ui~="tr-2-scoop"],
[data-augmented-ui~="tr-2-scoop-x"],
[data-augmented-ui~="tr-2-scoop-y"],
[data-augmented-ui~="tr-2-scoop-xy"],
[data-augmented-ui~="tr-2-scoop-inset"] {
  --aug-tr: 15px;
  --aug-tr1: var(--aug-tr);
}

[data-augmented-ui~="tr-2-clip-x"],
[data-augmented-ui~="tr-2-clip-y"],
[data-augmented-ui~="tr-2-clip-xy"],
[data-augmented-ui~="tr-2-rect"],
[data-augmented-ui~="tr-2-rect-x"],
[data-augmented-ui~="tr-2-rect-y"],
[data-augmented-ui~="tr-2-rect-xy"],
[data-augmented-ui~="tr-2-rect-inset"],
[data-augmented-ui~="tr-2-step-inset"],
[data-augmented-ui~="tr-2-round"],
[data-augmented-ui~="tr-2-round-x"],
[data-augmented-ui~="tr-2-round-y"],
[data-augmented-ui~="tr-2-round-xy"],
[data-augmented-ui~="tr-2-round-inset"],
[data-augmented-ui~="tr-2-scoop"],
[data-augmented-ui~="tr-2-scoop-x"],
[data-augmented-ui~="tr-2-scoop-y"],
[data-augmented-ui~="tr-2-scoop-xy"],
[data-augmented-ui~="tr-2-scoop-inset"] {
  --aug-tr2: var(--aug-tr1);
}

[data-augmented-ui~="tr-2-clip-x"],
[data-augmented-ui~="tr-2-rect-x"],
[data-augmented-ui~="tr-2-round-x"],
[data-augmented-ui~="tr-2-scoop-x"] {
  --aug-tr-extend1: calc(var(--aug-tr1) * 2);
}

[data-augmented-ui~="tr-2-clip-y"],
[data-augmented-ui~="tr-2-rect-y"],
[data-augmented-ui~="tr-2-round-y"],
[data-augmented-ui~="tr-2-scoop-y"] {
  --aug-tr-extend2: calc(var(--aug-tr1) * 2);
}

[data-augmented-ui~="tr-clip-inset"],
[data-augmented-ui~="tr-2-rect-inset"],
[data-augmented-ui~="tr-step-inset"],
[data-augmented-ui~="tr-2-step-inset"],
[data-augmented-ui~="tr-round-inset"],
[data-augmented-ui~="tr-2-round-inset"],
[data-augmented-ui~="tr-scoop-inset"],
[data-augmented-ui~="tr-2-scoop-inset"] {
  --aug-tr-inset1: var(--aug-tr1);
  --aug-tr-inset2: var(--aug-tr1);
}

[data-augmented-ui~="tr-2-clip-xy"],
[data-augmented-ui~="tr-2-rect-xy"],
[data-augmented-ui~="tr-2-round-xy"],
[data-augmented-ui~="tr-2-scoop-xy"] {
  --aug-tr-extend1: var(--aug-tr1);
  --aug-tr-extend2: var(--aug-tr1);
}

[data-augmented-ui~="tr-clip-x"],
[data-augmented-ui~="tr-rect-x"],
[data-augmented-ui~="tr-round-x"],
[data-augmented-ui~="tr-scoop-x"] {
  --aug-tr-inset2: calc(var(--aug-tr1) * 2);
}

[data-augmented-ui~="tr-clip-y"],
[data-augmented-ui~="tr-rect-y"],
[data-augmented-ui~="tr-round-y"],
[data-augmented-ui~="tr-scoop-y"] {
  --aug-tr-inset1: calc(var(--aug-tr1) * 2);
}

[data-augmented-ui~="tr-clip"],
[data-augmented-ui~="tr-clip-x"],
[data-augmented-ui~="tr-clip-y"],
[data-augmented-ui~="tr-clip-inset"] {
  --aug-clip-tr1: initial;
}

[data-augmented-ui~="tr-2-clip-x"],
[data-augmented-ui~="tr-2-clip-y"],
[data-augmented-ui~="tr-2-clip-xy"] {
  --aug-clip-tr1: initial;
  --aug-clip-tr2: initial;
}

[data-augmented-ui~="tr-rect"],
[data-augmented-ui~="tr-rect-x"],
[data-augmented-ui~="tr-rect-y"] {
  --aug-rect-tr1: initial;
}

[data-augmented-ui~="tr-2-rect"],
[data-augmented-ui~="tr-2-rect-x"],
[data-augmented-ui~="tr-2-rect-y"],
[data-augmented-ui~="tr-2-rect-xy"],
[data-augmented-ui~="tr-2-rect-inset"] {
  --aug-rect-tr1: initial;
  --aug-rect-tr2: initial;
}

[data-augmented-ui~="tr-step-inset"] {
  --aug-step-tr1: initial;
}

[data-augmented-ui~="tr-2-step-inset"] {
  --aug-step-tr1: initial;
  --aug-step-tr2: initial;
}

[data-augmented-ui~="tr-round"],
[data-augmented-ui~="tr-round-x"],
[data-augmented-ui~="tr-round-y"],
[data-augmented-ui~="tr-round-inset"] {
  --aug-round-tr1: initial;
}

[data-augmented-ui~="tr-2-round"],
[data-augmented-ui~="tr-2-round-x"],
[data-augmented-ui~="tr-2-round-y"],
[data-augmented-ui~="tr-2-round-xy"],
[data-augmented-ui~="tr-2-round-inset"] {
  --aug-round-tr1: initial;
  --aug-round-tr2: initial;
}

[data-augmented-ui~="tr-scoop"],
[data-augmented-ui~="tr-scoop-x"],
[data-augmented-ui~="tr-scoop-y"],
[data-augmented-ui~="tr-scoop-inset"] {
  --aug-scoop-tr1: initial;
}

[data-augmented-ui~="tr-2-scoop"],
[data-augmented-ui~="tr-2-scoop-x"],
[data-augmented-ui~="tr-2-scoop-y"],
[data-augmented-ui~="tr-2-scoop-xy"],
[data-augmented-ui~="tr-2-scoop-inset"] {
  --aug-scoop-tr1: initial;
  --aug-scoop-tr2: initial;
}

[data-augmented-ui~="tr-clip-x"],
[data-augmented-ui~="tr-clip-inset"],
[data-augmented-ui~="tr-2-clip-x"],
[data-augmented-ui~="tr-2-clip-xy"] {
  --aug-tr1-alt-join-out: initial;
}

[data-augmented-ui~="tr-clip-y"],
[data-augmented-ui~="tr-clip-inset"] {
  --aug-tr1-alt-join-in: initial;
}

[data-augmented-ui~="tr-2-clip-y"],
[data-augmented-ui~="tr-2-clip-xy"] {
  --aug-tr2-alt-join-in: initial;
}

[data-augmented-ui~="r-clip"],
[data-augmented-ui~="r-clip-x"],
[data-augmented-ui~="r-clip-y"],
[data-augmented-ui~="r-clip-xy"],
[data-augmented-ui~="r-rect"],
[data-augmented-ui~="r-rect-x"],
[data-augmented-ui~="r-rect-y"],
[data-augmented-ui~="r-rect-xy"],
[data-augmented-ui~="r-step-xy"],
[data-augmented-ui~="r-round-y"],
[data-augmented-ui~="r-round-xy"],
[data-augmented-ui~="r-scoop"],
[data-augmented-ui~="r-scoop-x"],
[data-augmented-ui~="r-scoop-y"],
[data-augmented-ui~="r-scoop-xy"] {
  --aug-r: 15px;
  --aug-r1: var(--aug-r);
  --aug-r2: var(--aug-r1);
}

[data-augmented-ui~="r-clip-x"],
[data-augmented-ui~="r-clip-xy"],
[data-augmented-ui~="r-rect-x"],
[data-augmented-ui~="r-rect-xy"],
[data-augmented-ui~="r-step-xy"],
[data-augmented-ui~="r-round-xy"],
[data-augmented-ui~="r-scoop-x"],
[data-augmented-ui~="r-scoop-xy"] {
  --aug-r-inset1: var(--aug-r1);
}

[data-augmented-ui~="r-clip-y"],
[data-augmented-ui~="r-clip-xy"],
[data-augmented-ui~="r-rect-y"],
[data-augmented-ui~="r-rect-xy"],
[data-augmented-ui~="r-step-xy"],
[data-augmented-ui~="r-round-y"],
[data-augmented-ui~="r-round-xy"],
[data-augmented-ui~="r-scoop-y"],
[data-augmented-ui~="r-scoop-xy"] {
  --aug-r-extend1: var(--aug-r1);
}

[data-augmented-ui~="r-clip"],
[data-augmented-ui~="r-clip-x"],
[data-augmented-ui~="r-clip-y"],
[data-augmented-ui~="r-clip-xy"] {
  --aug-clip-r1: initial;
  --aug-clip-r2: initial;
}

[data-augmented-ui~="r-clip"],
[data-augmented-ui~="r-clip-x"] {
  --aug-r1-alt-join-out: initial;
  --aug-r2-alt-join-in: initial;
}

[data-augmented-ui~="r-clip-x"],
[data-augmented-ui~="r-clip-xy"] {
  --aug-r1-alt-join-in: initial;
  --aug-r2-alt-join-out: initial;
}

[data-augmented-ui~="r-rect"],
[data-augmented-ui~="r-rect-x"],
[data-augmented-ui~="r-rect-y"],
[data-augmented-ui~="r-rect-xy"] {
  --aug-rect-r1: initial;
  --aug-rect-r2: initial;
}

[data-augmented-ui~="r-step-xy"] {
  --aug-step-r1: initial;
  --aug-step-r2: initial;
}

[data-augmented-ui~="r-round-y"],
[data-augmented-ui~="r-round-xy"] {
  --aug-round-r1: initial;
  --aug-round-r2: initial;
}

[data-augmented-ui~="r-scoop"],
[data-augmented-ui~="r-scoop-x"],
[data-augmented-ui~="r-scoop-y"],
[data-augmented-ui~="r-scoop-xy"] {
  --aug-scoop-r1: initial;
  --aug-scoop-r2: initial;
}

[data-augmented-ui~="br-clip"],
[data-augmented-ui~="br-clip-x"],
[data-augmented-ui~="br-clip-y"],
[data-augmented-ui~="br-clip-inset"],
[data-augmented-ui~="br-2-clip-x"],
[data-augmented-ui~="br-2-clip-y"],
[data-augmented-ui~="br-2-clip-xy"],
[data-augmented-ui~="br-rect"],
[data-augmented-ui~="br-rect-x"],
[data-augmented-ui~="br-rect-y"],
[data-augmented-ui~="br-2-rect"],
[data-augmented-ui~="br-2-rect-x"],
[data-augmented-ui~="br-2-rect-y"],
[data-augmented-ui~="br-2-rect-xy"],
[data-augmented-ui~="br-2-rect-inset"],
[data-augmented-ui~="br-step-inset"],
[data-augmented-ui~="br-2-step-inset"],
[data-augmented-ui~="br-round"],
[data-augmented-ui~="br-round-x"],
[data-augmented-ui~="br-round-y"],
[data-augmented-ui~="br-round-inset"],
[data-augmented-ui~="br-2-round"],
[data-augmented-ui~="br-2-round-x"],
[data-augmented-ui~="br-2-round-y"],
[data-augmented-ui~="br-2-round-xy"],
[data-augmented-ui~="br-2-round-inset"],
[data-augmented-ui~="br-scoop"],
[data-augmented-ui~="br-scoop-x"],
[data-augmented-ui~="br-scoop-y"],
[data-augmented-ui~="br-scoop-inset"],
[data-augmented-ui~="br-2-scoop"],
[data-augmented-ui~="br-2-scoop-x"],
[data-augmented-ui~="br-2-scoop-y"],
[data-augmented-ui~="br-2-scoop-xy"],
[data-augmented-ui~="br-2-scoop-inset"] {
  --aug-br: 15px;
  --aug-br1: var(--aug-br);
}

[data-augmented-ui~="br-2-clip-x"],
[data-augmented-ui~="br-2-clip-y"],
[data-augmented-ui~="br-2-clip-xy"],
[data-augmented-ui~="br-2-rect"],
[data-augmented-ui~="br-2-rect-x"],
[data-augmented-ui~="br-2-rect-y"],
[data-augmented-ui~="br-2-rect-xy"],
[data-augmented-ui~="br-2-rect-inset"],
[data-augmented-ui~="br-2-step-inset"],
[data-augmented-ui~="br-2-round"],
[data-augmented-ui~="br-2-round-x"],
[data-augmented-ui~="br-2-round-y"],
[data-augmented-ui~="br-2-round-xy"],
[data-augmented-ui~="br-2-round-inset"],
[data-augmented-ui~="br-2-scoop"],
[data-augmented-ui~="br-2-scoop-x"],
[data-augmented-ui~="br-2-scoop-y"],
[data-augmented-ui~="br-2-scoop-xy"],
[data-augmented-ui~="br-2-scoop-inset"] {
  --aug-br2: var(--aug-br1);
}

[data-augmented-ui~="br-2-clip-x"],
[data-augmented-ui~="br-2-rect-x"],
[data-augmented-ui~="br-2-round-x"],
[data-augmented-ui~="br-2-scoop-x"] {
  --aug-br-extend2: calc(var(--aug-br1) * 2);
}

[data-augmented-ui~="br-2-clip-y"],
[data-augmented-ui~="br-2-rect-y"],
[data-augmented-ui~="br-2-round-y"],
[data-augmented-ui~="br-2-scoop-y"] {
  --aug-br-extend1: calc(var(--aug-br1) * 2);
}

[data-augmented-ui~="br-clip-inset"],
[data-augmented-ui~="br-2-rect-inset"],
[data-augmented-ui~="br-step-inset"],
[data-augmented-ui~="br-2-step-inset"],
[data-augmented-ui~="br-round-inset"],
[data-augmented-ui~="br-2-round-inset"],
[data-augmented-ui~="br-scoop-inset"],
[data-augmented-ui~="br-2-scoop-inset"] {
  --aug-br-inset1: var(--aug-br1);
  --aug-br-inset2: var(--aug-br1);
}

[data-augmented-ui~="br-2-clip-xy"],
[data-augmented-ui~="br-2-rect-xy"],
[data-augmented-ui~="br-2-round-xy"],
[data-augmented-ui~="br-2-scoop-xy"] {
  --aug-br-extend1: var(--aug-br1);
  --aug-br-extend2: var(--aug-br1);
}

[data-augmented-ui~="br-clip-x"],
[data-augmented-ui~="br-rect-x"],
[data-augmented-ui~="br-round-x"],
[data-augmented-ui~="br-scoop-x"] {
  --aug-br-inset1: calc(var(--aug-br1) * 2);
}

[data-augmented-ui~="br-clip-y"],
[data-augmented-ui~="br-rect-y"],
[data-augmented-ui~="br-round-y"],
[data-augmented-ui~="br-scoop-y"] {
  --aug-br-inset2: calc(var(--aug-br1) * 2);
}

[data-augmented-ui~="br-clip"],
[data-augmented-ui~="br-clip-x"],
[data-augmented-ui~="br-clip-y"],
[data-augmented-ui~="br-clip-inset"] {
  --aug-clip-br1: initial;
}

[data-augmented-ui~="br-2-clip-x"],
[data-augmented-ui~="br-2-clip-y"],
[data-augmented-ui~="br-2-clip-xy"] {
  --aug-clip-br1: initial;
  --aug-clip-br2: initial;
}

[data-augmented-ui~="br-rect"],
[data-augmented-ui~="br-rect-x"],
[data-augmented-ui~="br-rect-y"] {
  --aug-rect-br1: initial;
}

[data-augmented-ui~="br-2-rect"],
[data-augmented-ui~="br-2-rect-x"],
[data-augmented-ui~="br-2-rect-y"],
[data-augmented-ui~="br-2-rect-xy"],
[data-augmented-ui~="br-2-rect-inset"] {
  --aug-rect-br1: initial;
  --aug-rect-br2: initial;
}

[data-augmented-ui~="br-step-inset"] {
  --aug-step-br1: initial;
}

[data-augmented-ui~="br-2-step-inset"] {
  --aug-step-br1: initial;
  --aug-step-br2: initial;
}

[data-augmented-ui~="br-round"],
[data-augmented-ui~="br-round-x"],
[data-augmented-ui~="br-round-y"],
[data-augmented-ui~="br-round-inset"] {
  --aug-round-br1: initial;
}

[data-augmented-ui~="br-2-round"],
[data-augmented-ui~="br-2-round-x"],
[data-augmented-ui~="br-2-round-y"],
[data-augmented-ui~="br-2-round-xy"],
[data-augmented-ui~="br-2-round-inset"] {
  --aug-round-br1: initial;
  --aug-round-br2: initial;
}

[data-augmented-ui~="br-scoop"],
[data-augmented-ui~="br-scoop-x"],
[data-augmented-ui~="br-scoop-y"],
[data-augmented-ui~="br-scoop-inset"] {
  --aug-scoop-br1: initial;
}

[data-augmented-ui~="br-2-scoop"],
[data-augmented-ui~="br-2-scoop-x"],
[data-augmented-ui~="br-2-scoop-y"],
[data-augmented-ui~="br-2-scoop-xy"],
[data-augmented-ui~="br-2-scoop-inset"] {
  --aug-scoop-br1: initial;
  --aug-scoop-br2: initial;
}

[data-augmented-ui~="br-clip-x"],
[data-augmented-ui~="br-clip-inset"] {
  --aug-br1-alt-join-in: initial;
}

[data-augmented-ui~="br-clip-y"],
[data-augmented-ui~="br-clip-inset"],
[data-augmented-ui~="br-2-clip-y"],
[data-augmented-ui~="br-2-clip-xy"] {
  --aug-br1-alt-join-out: initial;
}

[data-augmented-ui~="br-2-clip-x"],
[data-augmented-ui~="br-2-clip-xy"] {
  --aug-br2-alt-join-in: initial;
}

[data-augmented-ui~="b-clip"],
[data-augmented-ui~="b-clip-x"],
[data-augmented-ui~="b-clip-y"],
[data-augmented-ui~="b-clip-xy"],
[data-augmented-ui~="b-rect"],
[data-augmented-ui~="b-rect-x"],
[data-augmented-ui~="b-rect-y"],
[data-augmented-ui~="b-rect-xy"],
[data-augmented-ui~="b-step-xy"],
[data-augmented-ui~="b-round-x"],
[data-augmented-ui~="b-round-xy"],
[data-augmented-ui~="b-scoop"],
[data-augmented-ui~="b-scoop-x"],
[data-augmented-ui~="b-scoop-y"],
[data-augmented-ui~="b-scoop-xy"] {
  --aug-b: 15px;
  --aug-b1: var(--aug-b);
  --aug-b2: var(--aug-b1);
}

[data-augmented-ui~="b-clip-x"],
[data-augmented-ui~="b-clip-xy"],
[data-augmented-ui~="b-rect-x"],
[data-augmented-ui~="b-rect-xy"],
[data-augmented-ui~="b-step-xy"],
[data-augmented-ui~="b-round-x"],
[data-augmented-ui~="b-round-xy"],
[data-augmented-ui~="b-scoop-x"],
[data-augmented-ui~="b-scoop-xy"] {
  --aug-b-extend1: var(--aug-b1);
}

[data-augmented-ui~="b-clip-y"],
[data-augmented-ui~="b-clip-xy"],
[data-augmented-ui~="b-rect-y"],
[data-augmented-ui~="b-rect-xy"],
[data-augmented-ui~="b-step-xy"],
[data-augmented-ui~="b-round-xy"],
[data-augmented-ui~="b-scoop-y"],
[data-augmented-ui~="b-scoop-xy"] {
  --aug-b-inset1: var(--aug-b1);
}

[data-augmented-ui~="b-clip"],
[data-augmented-ui~="b-clip-x"],
[data-augmented-ui~="b-clip-y"],
[data-augmented-ui~="b-clip-xy"] {
  --aug-clip-b1: initial;
  --aug-clip-b2: initial;
}

[data-augmented-ui~="b-clip"],
[data-augmented-ui~="b-clip-y"] {
  --aug-b1-alt-join-out: initial;
  --aug-b2-alt-join-in: initial;
}

[data-augmented-ui~="b-clip-y"],
[data-augmented-ui~="b-clip-xy"] {
  --aug-b1-alt-join-in: initial;
  --aug-b2-alt-join-out: initial;
}

[data-augmented-ui~="b-rect"],
[data-augmented-ui~="b-rect-x"],
[data-augmented-ui~="b-rect-y"],
[data-augmented-ui~="b-rect-xy"] {
  --aug-rect-b1: initial;
  --aug-rect-b2: initial;
}

[data-augmented-ui~="b-step-xy"] {
  --aug-step-b1: initial;
  --aug-step-b2: initial;
}

[data-augmented-ui~="b-round-x"],
[data-augmented-ui~="b-round-xy"] {
  --aug-round-b1: initial;
  --aug-round-b2: initial;
}

[data-augmented-ui~="b-scoop"],
[data-augmented-ui~="b-scoop-x"],
[data-augmented-ui~="b-scoop-y"],
[data-augmented-ui~="b-scoop-xy"] {
  --aug-scoop-b1: initial;
  --aug-scoop-b2: initial;
}

[data-augmented-ui~="bl-clip"],
[data-augmented-ui~="bl-clip-x"],
[data-augmented-ui~="bl-clip-y"],
[data-augmented-ui~="bl-clip-inset"],
[data-augmented-ui~="bl-2-clip-x"],
[data-augmented-ui~="bl-2-clip-y"],
[data-augmented-ui~="bl-2-clip-xy"],
[data-augmented-ui~="bl-rect"],
[data-augmented-ui~="bl-rect-x"],
[data-augmented-ui~="bl-rect-y"],
[data-augmented-ui~="bl-2-rect"],
[data-augmented-ui~="bl-2-rect-x"],
[data-augmented-ui~="bl-2-rect-y"],
[data-augmented-ui~="bl-2-rect-xy"],
[data-augmented-ui~="bl-2-rect-inset"],
[data-augmented-ui~="bl-step-inset"],
[data-augmented-ui~="bl-2-step-inset"],
[data-augmented-ui~="bl-round"],
[data-augmented-ui~="bl-round-x"],
[data-augmented-ui~="bl-round-y"],
[data-augmented-ui~="bl-round-inset"],
[data-augmented-ui~="bl-2-round"],
[data-augmented-ui~="bl-2-round-x"],
[data-augmented-ui~="bl-2-round-y"],
[data-augmented-ui~="bl-2-round-xy"],
[data-augmented-ui~="bl-2-round-inset"],
[data-augmented-ui~="bl-scoop"],
[data-augmented-ui~="bl-scoop-x"],
[data-augmented-ui~="bl-scoop-y"],
[data-augmented-ui~="bl-scoop-inset"],
[data-augmented-ui~="bl-2-scoop"],
[data-augmented-ui~="bl-2-scoop-x"],
[data-augmented-ui~="bl-2-scoop-y"],
[data-augmented-ui~="bl-2-scoop-xy"],
[data-augmented-ui~="bl-2-scoop-inset"] {
  --aug-bl: 15px;
  --aug-bl1: var(--aug-bl);
}

[data-augmented-ui~="bl-2-clip-x"],
[data-augmented-ui~="bl-2-clip-y"],
[data-augmented-ui~="bl-2-clip-xy"],
[data-augmented-ui~="bl-2-rect"],
[data-augmented-ui~="bl-2-rect-x"],
[data-augmented-ui~="bl-2-rect-y"],
[data-augmented-ui~="bl-2-rect-xy"],
[data-augmented-ui~="bl-2-rect-inset"],
[data-augmented-ui~="bl-2-step-inset"],
[data-augmented-ui~="bl-2-round"],
[data-augmented-ui~="bl-2-round-x"],
[data-augmented-ui~="bl-2-round-y"],
[data-augmented-ui~="bl-2-round-xy"],
[data-augmented-ui~="bl-2-round-inset"],
[data-augmented-ui~="bl-2-scoop"],
[data-augmented-ui~="bl-2-scoop-x"],
[data-augmented-ui~="bl-2-scoop-y"],
[data-augmented-ui~="bl-2-scoop-xy"],
[data-augmented-ui~="bl-2-scoop-inset"] {
  --aug-bl2: var(--aug-bl1);
}

[data-augmented-ui~="bl-2-clip-x"],
[data-augmented-ui~="bl-2-rect-x"],
[data-augmented-ui~="bl-2-round-x"],
[data-augmented-ui~="bl-2-scoop-x"] {
  --aug-bl-extend1: calc(var(--aug-bl1) * 2);
}

[data-augmented-ui~="bl-2-clip-y"],
[data-augmented-ui~="bl-2-rect-y"],
[data-augmented-ui~="bl-2-round-y"],
[data-augmented-ui~="bl-2-scoop-y"] {
  --aug-bl-extend2: calc(var(--aug-bl1) * 2);
}

[data-augmented-ui~="bl-clip-inset"],
[data-augmented-ui~="bl-2-rect-inset"],
[data-augmented-ui~="bl-step-inset"],
[data-augmented-ui~="bl-2-step-inset"],
[data-augmented-ui~="bl-round-inset"],
[data-augmented-ui~="bl-2-round-inset"],
[data-augmented-ui~="bl-scoop-inset"],
[data-augmented-ui~="bl-2-scoop-inset"] {
  --aug-bl-inset1: var(--aug-bl1);
  --aug-bl-inset2: var(--aug-bl1);
}

[data-augmented-ui~="bl-2-clip-xy"],
[data-augmented-ui~="bl-2-rect-xy"],
[data-augmented-ui~="bl-2-round-xy"],
[data-augmented-ui~="bl-2-scoop-xy"] {
  --aug-bl-extend1: var(--aug-bl1);
  --aug-bl-extend2: var(--aug-bl1);
}

[data-augmented-ui~="bl-clip-x"],
[data-augmented-ui~="bl-rect-x"],
[data-augmented-ui~="bl-round-x"],
[data-augmented-ui~="bl-scoop-x"] {
  --aug-bl-inset2: calc(var(--aug-bl1) * 2);
}

[data-augmented-ui~="bl-clip-y"],
[data-augmented-ui~="bl-rect-y"],
[data-augmented-ui~="bl-round-y"],
[data-augmented-ui~="bl-scoop-y"] {
  --aug-bl-inset1: calc(var(--aug-bl1) * 2);
}

[data-augmented-ui~="bl-clip"],
[data-augmented-ui~="bl-clip-x"],
[data-augmented-ui~="bl-clip-y"],
[data-augmented-ui~="bl-clip-inset"] {
  --aug-clip-bl1: initial;
}

[data-augmented-ui~="bl-2-clip-x"],
[data-augmented-ui~="bl-2-clip-y"],
[data-augmented-ui~="bl-2-clip-xy"] {
  --aug-clip-bl1: initial;
  --aug-clip-bl2: initial;
}

[data-augmented-ui~="bl-rect"],
[data-augmented-ui~="bl-rect-x"],
[data-augmented-ui~="bl-rect-y"] {
  --aug-rect-bl1: initial;
}

[data-augmented-ui~="bl-2-rect"],
[data-augmented-ui~="bl-2-rect-x"],
[data-augmented-ui~="bl-2-rect-y"],
[data-augmented-ui~="bl-2-rect-xy"],
[data-augmented-ui~="bl-2-rect-inset"] {
  --aug-rect-bl1: initial;
  --aug-rect-bl2: initial;
}

[data-augmented-ui~="bl-step-inset"] {
  --aug-step-bl1: initial;
}

[data-augmented-ui~="bl-2-step-inset"] {
  --aug-step-bl1: initial;
  --aug-step-bl2: initial;
}

[data-augmented-ui~="bl-round"],
[data-augmented-ui~="bl-round-x"],
[data-augmented-ui~="bl-round-y"],
[data-augmented-ui~="bl-round-inset"] {
  --aug-round-bl1: initial;
}

[data-augmented-ui~="bl-2-round"],
[data-augmented-ui~="bl-2-round-x"],
[data-augmented-ui~="bl-2-round-y"],
[data-augmented-ui~="bl-2-round-xy"],
[data-augmented-ui~="bl-2-round-inset"] {
  --aug-round-bl1: initial;
  --aug-round-bl2: initial;
}

[data-augmented-ui~="bl-scoop"],
[data-augmented-ui~="bl-scoop-x"],
[data-augmented-ui~="bl-scoop-y"],
[data-augmented-ui~="bl-scoop-inset"] {
  --aug-scoop-bl1: initial;
}

[data-augmented-ui~="bl-2-scoop"],
[data-augmented-ui~="bl-2-scoop-x"],
[data-augmented-ui~="bl-2-scoop-y"],
[data-augmented-ui~="bl-2-scoop-xy"],
[data-augmented-ui~="bl-2-scoop-inset"] {
  --aug-scoop-bl1: initial;
  --aug-scoop-bl2: initial;
}

[data-augmented-ui~="bl-clip-x"],
[data-augmented-ui~="bl-clip-inset"],
[data-augmented-ui~="bl-2-clip-x"],
[data-augmented-ui~="bl-2-clip-xy"] {
  --aug-bl1-alt-join-out: initial;
}

[data-augmented-ui~="bl-clip-y"],
[data-augmented-ui~="bl-clip-inset"] {
  --aug-bl1-alt-join-in: initial;
}

[data-augmented-ui~="bl-2-clip-y"],
[data-augmented-ui~="bl-2-clip-xy"] {
  --aug-bl2-alt-join-in: initial;
}

[data-augmented-ui~="l-clip"],
[data-augmented-ui~="l-clip-x"],
[data-augmented-ui~="l-clip-y"],
[data-augmented-ui~="l-clip-xy"],
[data-augmented-ui~="l-rect"],
[data-augmented-ui~="l-rect-x"],
[data-augmented-ui~="l-rect-y"],
[data-augmented-ui~="l-rect-xy"],
[data-augmented-ui~="l-step-xy"],
[data-augmented-ui~="l-round-y"],
[data-augmented-ui~="l-round-xy"],
[data-augmented-ui~="l-scoop"],
[data-augmented-ui~="l-scoop-x"],
[data-augmented-ui~="l-scoop-y"],
[data-augmented-ui~="l-scoop-xy"] {
  --aug-l: 15px;
  --aug-l1: var(--aug-l);
  --aug-l2: var(--aug-l1);
}

[data-augmented-ui~="l-clip-x"],
[data-augmented-ui~="l-clip-xy"],
[data-augmented-ui~="l-rect-x"],
[data-augmented-ui~="l-rect-xy"],
[data-augmented-ui~="l-step-xy"],
[data-augmented-ui~="l-round-xy"],
[data-augmented-ui~="l-scoop-x"],
[data-augmented-ui~="l-scoop-xy"] {
  --aug-l-inset1: var(--aug-l1);
}

[data-augmented-ui~="l-clip-y"],
[data-augmented-ui~="l-clip-xy"],
[data-augmented-ui~="l-rect-y"],
[data-augmented-ui~="l-rect-xy"],
[data-augmented-ui~="l-step-xy"],
[data-augmented-ui~="l-round-y"],
[data-augmented-ui~="l-round-xy"],
[data-augmented-ui~="l-scoop-y"],
[data-augmented-ui~="l-scoop-xy"] {
  --aug-l-extend1: var(--aug-l1);
}

[data-augmented-ui~="l-clip"],
[data-augmented-ui~="l-clip-x"],
[data-augmented-ui~="l-clip-y"],
[data-augmented-ui~="l-clip-xy"] {
  --aug-clip-l1: initial;
  --aug-clip-l2: initial;
}

[data-augmented-ui~="l-clip"],
[data-augmented-ui~="l-clip-x"] {
  --aug-l1-alt-join-out: initial;
  --aug-l2-alt-join-in: initial;
}

[data-augmented-ui~="l-clip-x"],
[data-augmented-ui~="l-clip-xy"] {
  --aug-l1-alt-join-in: initial;
  --aug-l2-alt-join-out: initial;
}

[data-augmented-ui~="l-rect"],
[data-augmented-ui~="l-rect-x"],
[data-augmented-ui~="l-rect-y"],
[data-augmented-ui~="l-rect-xy"] {
  --aug-rect-l1: initial;
  --aug-rect-l2: initial;
}

[data-augmented-ui~="l-step-xy"] {
  --aug-step-l1: initial;
  --aug-step-l2: initial;
}

[data-augmented-ui~="l-round-y"],
[data-augmented-ui~="l-round-xy"] {
  --aug-round-l1: initial;
  --aug-round-l2: initial;
}

[data-augmented-ui~="l-scoop"],
[data-augmented-ui~="l-scoop-x"],
[data-augmented-ui~="l-scoop-y"],
[data-augmented-ui~="l-scoop-xy"] {
  --aug-scoop-l1: initial;
  --aug-scoop-l2: initial;
}

[data-augmented-ui~="all-hex"],
[data-augmented-ui~="all-hex-alt"],
[data-augmented-ui~="all-triangle-up"],
[data-augmented-ui~="all-triangle-down"],
[data-augmented-ui~="all-triangle-right"],
[data-augmented-ui~="all-triangle-left"],
[data-augmented-ui~="all-hexangle-up"],
[data-augmented-ui~="all-hexangle-down"],
[data-augmented-ui~="all-hexangle-right"],
[data-augmented-ui~="all-hexangle-left"] {
  --aug-all-width: initial;
  --aug-all-height: initial;
  width: calc(var(--aug_at));
  height: calc(var(--aug_au));
  text-align: center;
}

[data-augmented-ui~="all-hex"],
[data-augmented-ui~="all-hex-alt"],
[data-augmented-ui~="all-hexangle-up"],
[data-augmented-ui~="all-hexangle-down"],
[data-augmented-ui~="all-hexangle-right"],
[data-augmented-ui~="all-hexangle-left"] {
  --aug-clip-tl1: initial;
  --aug-clip-tr1: initial;
  --aug-clip-br1: initial;
  --aug-clip-bl1: initial;
}

[data-augmented-ui~="all-hex"],
[data-augmented-ui~="all-hexangle-right"],
[data-augmented-ui~="all-hexangle-left"] {
  --aug-tl1-clipmod-y: 0.366025405;
  --aug-tl1-clipmod-x: 0.633974595;
  --aug-tr1-clipmod-y: 0.366025405;
  --aug-tr1-clipmod-x: 0.633974595;
  --aug-br1-clipmod-y: 0.366025405;
  --aug-br1-clipmod-x: 0.633974595;
  --aug-bl1-clipmod-y: 0.366025405;
  --aug-bl1-clipmod-x: 0.633974595;
}

[data-augmented-ui~="all-hex-alt"],
[data-augmented-ui~="all-hexangle-top"],
[data-augmented-ui~="all-hexangle-bottom"] {
  --aug-tl1-clipmod-x: 0.366025405;
  --aug-tl1-clipmod-y: 0.633974595;
  --aug-tr1-clipmod-x: 0.366025405;
  --aug-tr1-clipmod-y: 0.633974595;
  --aug-br1-clipmod-x: 0.366025405;
  --aug-br1-clipmod-y: 0.633974595;
  --aug-bl1-clipmod-x: 0.366025405;
  --aug-bl1-clipmod-y: 0.633974595;
}

[data-augmented-ui~="all-hex"] {
  --aug_at: var(--aug-all-width, var(--aug-all-height, 32px) * 3.4641 / 4);
  --aug_au: var(--aug-all-height, var(--aug_at) / 3.4641 * 4);
  --aug_av: calc((var(--aug_at) / 2) / 1.73205);
  --aug-tl1-width: 50%;
  --aug-tl1-height: var(--aug_av);
  --aug-tr1-width: 50%;
  --aug-tr1-height: var(--aug_av);
  --aug-br1-width: 50%;
  --aug-br1-height: var(--aug_av);
  --aug-bl1-width: 50%;
  --aug-bl1-height: var(--aug_av);
}

[data-augmented-ui~="all-hex-alt"] {
  --aug_au: var(--aug-all-height, var(--aug-all-width, 32px) * 3.4641 / 4);
  --aug_at: var(--aug-all-width, var(--aug_au) / 3.4641 * 4);
  --aug_aw: calc((var(--aug_au) / 2) / 1.73205);
  --aug-tl1-width: var(--aug_aw);
  --aug-tl1-height: 50%;
  --aug-tr1-width: var(--aug_aw);
  --aug-tr1-height: 50%;
  --aug-br1-width: var(--aug_aw);
  --aug-br1-height: 50%;
  --aug-bl1-width: var(--aug_aw);
  --aug-bl1-height: 50%;
}

[data-augmented-ui~="all-triangle-up"] {
  --aug_au: var(--aug-all-height, var(--aug-all-width, 32px) * 0.8660254);
  --aug_at: var(--aug-all-width, var(--aug_au) / 0.8660254);
  --aug-clip-tl1: initial;
  --aug-clip-tr1: initial;
  --aug-tl1-width: 50%;
  --aug-tl1-height: 100%;
  --aug-tr1-width: 50%;
  --aug-tr1-height: 100%;
  --aug-tl1-clipmod-x: 0.366025405;
  --aug-tl1-clipmod-y: 0.633974595;
  --aug-tr1-clipmod-x: 0.366025405;
  --aug-tr1-clipmod-y: 0.633974595;
}

[data-augmented-ui~="all-triangle-down"] {
  --aug_au: var(--aug-all-height, var(--aug-all-width, 32px) * 0.8660254);
  --aug_at: var(--aug-all-width, var(--aug_au) / 0.8660254);
  --aug-clip-bl1: initial;
  --aug-clip-br1: initial;
  --aug-bl1-width: 50%;
  --aug-bl1-height: 100%;
  --aug-br1-width: 50%;
  --aug-br1-height: 100%;
  --aug-bl1-clipmod-x: 0.366025405;
  --aug-bl1-clipmod-y: 0.633974595;
  --aug-br1-clipmod-x: 0.366025405;
  --aug-br1-clipmod-y: 0.633974595;
}

[data-augmented-ui~="all-triangle-right"] {
  --aug_at: var(--aug-all-width, var(--aug-all-height, 32px) * 0.8660254);
  --aug_au: var(--aug-all-height, var(--aug_at) / 0.8660254);
  --aug-clip-tr1: initial;
  --aug-clip-br1: initial;
  --aug-tr1-width: 100%;
  --aug-tr1-height: 50%;
  --aug-br1-width: 100%;
  --aug-br1-height: 50%;
  --aug-tr1-clipmod-y: 0.366025405;
  --aug-tr1-clipmod-x: 0.633974595;
  --aug-br1-clipmod-y: 0.366025405;
  --aug-br1-clipmod-x: 0.633974595;
}

[data-augmented-ui~="all-triangle-left"] {
  --aug_at: var(--aug-all-width, var(--aug-all-height, 32px) * 0.8660254);
  --aug_au: var(--aug-all-height, var(--aug_at) / 0.8660254);
  --aug-clip-tl1: initial;
  --aug-clip-bl1: initial;
  --aug-tl1-width: 100%;
  --aug-tl1-height: 50%;
  --aug-bl1-width: 100%;
  --aug-bl1-height: 50%;
  --aug-tl1-clipmod-y: 0.366025405;
  --aug-tl1-clipmod-x: 0.633974595;
  --aug-bl1-clipmod-y: 0.366025405;
  --aug-bl1-clipmod-x: 0.633974595;
}

[data-augmented-ui~="all-hexangle-up"] {
  --aug_au: var(--aug-all-height, var(--aug-all-width, 32px) * 0.857142857);
  --aug_at: var(--aug-all-width, var(--aug_au) / 0.857142857);
  --aug-tl1-width: 35.7142857%;
  --aug-tl1-height: 72.1687836%;
  --aug-tr1-width: 35.7142857%;
  --aug-tr1-height: 72.1687836%;
  --aug-bl1-width: 13.7728802%;
  --aug-bl1-height: 27.8312164%;
  --aug-br1-width: 13.7728802%;
  --aug-br1-height: 27.8312164%;
}

[data-augmented-ui~="all-hexangle-down"] {
  --aug_au: var(--aug-all-height, var(--aug-all-width, 32px) * 0.857142857);
  --aug_at: var(--aug-all-width, var(--aug_au) / 0.857142857);
  --aug-bl1-width: 35.7142857%;
  --aug-bl1-height: 72.1687836%;
  --aug-br1-width: 35.7142857%;
  --aug-br1-height: 72.1687836%;
  --aug-tl1-width: 13.7728802%;
  --aug-tl1-height: 27.8312164%;
  --aug-tr1-width: 13.7728802%;
  --aug-tr1-height: 27.8312164%;
}

[data-augmented-ui~="all-hexangle-right"] {
  --aug_at: var(--aug-all-width, var(--aug-all-height, 32px) * 0.857142857);
  --aug_au: var(--aug-all-height, var(--aug_at) / 0.857142857);
  --aug-tl1-height: 13.7728802%;
  --aug-tl1-width: 27.8312164%;
  --aug-bl1-height: 13.7728802%;
  --aug-bl1-width: 27.8312164%;
  --aug-tr1-height: 35.7142857%;
  --aug-tr1-width: 72.1687836%;
  --aug-br1-height: 35.7142857%;
  --aug-br1-width: 72.1687836%;
}

[data-augmented-ui~="all-hexangle-left"] {
  --aug_at: var(--aug-all-width, var(--aug-all-height, 32px) * 0.857142857);
  --aug_au: var(--aug-all-height, var(--aug_at) / 0.857142857);
  --aug-tr1-height: 13.7728802%;
  --aug-tr1-width: 27.8312164%;
  --aug-br1-height: 13.7728802%;
  --aug-br1-width: 27.8312164%;
  --aug-tl1-height: 35.7142857%;
  --aug-tl1-width: 72.1687836%;
  --aug-bl1-height: 35.7142857%;
  --aug-bl1-width: 72.1687836%;
}
`;

export default AugmentedUI;