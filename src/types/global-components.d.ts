import FadeUp from "@CMPNTS/Base/transitions/fade-up.vue"
import GroupFadeRight from "@CMPNTS/Base/transitions/group-fade-right.vue"
import MyButton from "@CMPNTS/Base/my-button.vue"

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

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MyButton: typeof MyButton;
  }
}
