<template>
    <div ref="main" class="w-24 h-24"></div>
</template>
<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from 'vue';

import * as zrender from 'zrender';
import  gsap from "gsap";
const pageInstance = getCurrentInstance()
const main = ref(null);
onMounted(() => {
    const ele: any = pageInstance?.refs.main
  
    const zr = zrender.init(ele);

    var circle = new zrender.Arc({
        shape: {
            cx: 48,
            cy: 48,
            r: 40,
            startAngle: Math.PI / 2,
            endAngle: Math.PI * 3 / 2,
        },
        style: {
            fill: 'black',
        }
    });
    var circlee = new zrender.Arc({
        shape: {
            cx: 48,
            cy: 48,
            r: 40,
            startAngle: Math.PI * 3 / 2,
            endAngle: Math.PI / 2,
        },
        style: {
            fill: 'white',
        }
    });

    var circle1 = new zrender.Arc({
        shape: {
            cx: 48,
            cy: 28,
            r: 20,
            startAngle: Math.PI / 2,
            endAngle: Math.PI * 3 / 2,
            clockwise: false
        },
        style: {
            fill: 'black',
        }
    });
    var circle2 = new zrender.Arc({
        shape: {
            cx: 48,
            cy: 68,
            r: 20,
            startAngle: Math.PI / 2,
            endAngle: Math.PI * 3 / 2,
            clockwise: true
        },
        style: {
            fill: 'white',
        }
    });

    var circle2 = new zrender.Arc({
        shape: {
            cx: 48,
            cy: 68,
            r: 20,
            startAngle: Math.PI / 2,
            endAngle: Math.PI * 3 / 2,
            clockwise: true
        },
        style: {
            fill: 'white',
        }
    });


    var circle3 = new zrender.Circle({
        shape: {
            cx: 48,
            cy: 28,
            r: 10,
        },
        style: {
            fill: 'white'
        }
    })

    var circle4 = new zrender.Circle({
        shape: {
            cx: 48,
            cy: 68,
            r: 10,
        },
        style: {
            fill: 'black'
        }
    })

    zr.add(circle);
    zr.add(circlee);
    zr.add(circle1);
    zr.add(circle2);
    zr.add(circle3);
    zr.add(circle4);
    gsap.to(ele,{
        rotation: 360,
        repeat:-1,
        ease: "none",
        duration:2
    })
})
</script>