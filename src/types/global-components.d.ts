import FadeUp from "@CMPNTS/Base/fade-up.vue"
import GroupFadeRight from "@CMPNTS/Base/transitions/group-fade-right.vue"

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    FadeUp: typeof FadeUp;
  }
}

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    GroupFadeRight: typeof GroupFadeRight;
  }
}
