<template>
  <transition name="fade">
    <div class="loading fullscreen">
      <div class="mask">
        <div class="loading-container">
          <div  class="loading-icon icon-load">
            <svg class="circular" viewBox="25 25 50 50">
              <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
            </svg>
          </div>
          <span class="loading-text">
            <slot>{{ loadingtext }}</slot>
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    loadingtext: {
      type: String,
      default() {
        return "loading ...";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$mask-background: rgba(0, 0, 0, 0.8);
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .mask {
    background: $mask-background;
    width: 100%;
    height: 100%;
    .loading-container {
      position: absolute;
      width: 100px;
      height: 100px;
      top: 50%;
      left: 50%;
      margin-top: -50px;
      margin-left: -50px;
      text-align: center;
      .loading-icon {
        position: absolute;
        top: 50%;
        margin-top: -15px;
        left: 50%;
        margin-left: -15px;
        width: 30px;
        height: 30px;
        margin-bottom: 20px;
        svg:not {
          overflow: hidden;
        }
        .circular {
          z-index: 999999;
          -webkit-animation: rotate 2s linear infinite;
          animation: rotate 2s linear infinite;
          height: 100%;
          transform-origin: center center;
          width: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          .path {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
            -webkit-animation: dash 1.5s ease-in-out infinite,
              color 6s ease-in-out infinite;
            animation: dash 1.5s ease-in-out infinite,
              color 6s ease-in-out infinite;
            stroke-linecap: round;
          }
        }
      }
      .icon-load {
        animation: iconload 3s linear infinite;
      }
      .loading-text {
        user-select: none;
        position: absolute;
        bottom: -20px;
        display: block;
        width: 200%;
        left: -50px;
        animation: loadingtext 2s linear infinite;
        color: white;
      }
    }
  }
}

.fullscreen {
  z-index: 999;
}

@keyframes iconload {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }

  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
}

@keyframes color {
  0%,
  100% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%,
  90% {
    stroke: #ffa700;
  }
}
</style>