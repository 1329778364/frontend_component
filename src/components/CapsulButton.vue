<template>
  <div class="container-capsul">
    <input type="checkbox" name="" id="capsulCheckbox">
    <label for="capsulCheckbox">
      <span></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "CapsulButton"
}
</script>

<style scoped lang="less">
/* 胶囊大小 */
@cap-width: 60px;
@cap-height: 30px;
// 圆点 直径
@circle-radius: 24px;
// 边距
@slot-distance: calc((@cap-height - @circle-radius) / 2);
@half-circle-height: calc(@circle-radius / 2);

.container-capsul {
  width: @cap-width;
  height: @cap-height;
  display: flex;

  input {
    display: none;

    // 表示点击之后的 转变
    &:checked {
      & + label {
        border-color: #5d6baa;
        background-color: #6b7abb;

        &::before {
          border-color: #e8e8ea;
          background-color: white;
          //  关键在于 按钮的 移动 动画的设计
          animation: switch 0.35s forwards;
        }

        &::after {
          opacity: 1;
          transition-delay: 0.25s;
        }

        // 变成 s个点
        span {
          left: calc(@cap-width / 2 - 10px);

          &::before {
            width: 5px;
            height: 5px;
            top: -10px;

          }

          &::after {
            width: 5px;
            height: 5px;
            top: 10px;
            left: -15px;
          }
        }
      }

      //
      //& ~ .background {
      //  background-color: #808fc7;
      //}
    }
  }

  // 初始状态
  label {
    width: @cap-width;
    height: @cap-height;
    border-radius: @cap-height;
    border: 1px solid #6ac2ee;
    position: relative;

    // 圆形开关
    &::before {
      content: "";
      position: absolute;
      box-sizing: border-box;
      width: @circle-radius;
      height: @circle-radius;
      left: calc((@cap-height - @circle-radius * 2) / 2);
      top: calc(50% - @half-circle-height);
      border: 1px solid #f5eb71;
      border-radius: 50%;
      background-color: #fffaa8;
      transition: all 0.35s ease-in;
      animation: switch-reverse 0.35s forwards;
      cursor: pointer;
    }

    // 后面的 装饰点 圆点
    &::after {
      content: "";
      position: absolute;
      width: calc(@cap-height / 4);
      height: calc(@cap-height / 4);
      top: calc(@cap-height / 4);
      right: calc(@cap-height / 15);
      border-radius: 50%;
      box-shadow: -4px 3px 0 0 #e0e0e0;
      transition: all 0.35s ease-in;
      opacity: 0;
    }

    // 两横线 一点
    span {
      display: block;
      position: relative;
      width: @slot-distance;
      height: @slot-distance;
      top: @half-circle-height;
      left: calc(@cap-width - @circle-radius + 5px);
      border-radius: @slot-distance;
      background-color: white;
      transition: all 0.15s ease-in;

      &::before, &::after {
        content: "";
        position: absolute;
        width: calc(@circle-radius / 2 + 5px);
        height: @slot-distance;
        border-radius: @slot-distance;
        background-color: white;
        transition: all 0.15s ease-in;
      }

      &::before {
        top: calc(@slot-distance);
        left: -4px;
      }

      &::after {
        top: calc(-1 * @slot-distance);
        left: -12px;
      }
    }
  }

  //.background {
  //  position: absolute;
  //  width: 100%;
  //  height: 100%;
  //  z-index: -1;
  //  background-color: #bfe5f7;
  //  transition: all 0.35s ease-in;
  //}

  // 动画关键帧
  @keyframes switch {
    0% {
      left: calc((@cap-height - @circle-radius) / 2);
    }
    50% {
      left: calc((@cap-height - @circle-radius) / 2);
      width: calc(@cap-width / 2);
    }
    100% {
      left: calc(@cap-width - @circle-radius - @slot-distance);
    }
  }

  @keyframes switch-reverse {
    0% {
      left: calc(@cap-width - @circle-radius - @slot-distance);
    }
    50% {
      right: @slot-distance;
      width: calc(@cap-width / 2);
    }
    100% {
      left: @slot-distance;
    }
  }
}

;

</style>
