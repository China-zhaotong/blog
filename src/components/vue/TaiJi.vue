<template>
    <div ref="main" class="w-24 h-24"></div>
</template>
<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from 'vue';
import gsap from "gsap";
import Konva from "konva";
const pageInstance = getCurrentInstance()
const main = ref(null);
onMounted(() => {
    const ele: any = pageInstance?.refs.main
    var stage = new Konva.Stage({
        container: ele,
        width: 96,
        height: 96,
    });

    var layer = new Konva.Layer();


    var circle = new Konva.Arc({
        x: 48,
        y: 48,
        innerRadius: 0,
        outerRadius: 40,
        angle: 180,
        rotation: -90,
        fill: 'white',
    });
    var circlee = new Konva.Arc({
        x: 48,
        y: 48,
        innerRadius: 0,
        outerRadius: 40,
        angle: 180,
        rotation: 90,
        fill: 'black',
    });

    var circle1 = new Konva.Arc({
        x: 48,
        y: 28,
        innerRadius: 0,
        outerRadius: 20,
        angle: 180,
        rotation: -90,
        fill: 'black',
    });

    var circle2 = new Konva.Arc({
        x: 48,
        y: 68,
        innerRadius: 0,
        outerRadius: 20,
        angle: 180,
        rotation: 90,
        fill: 'white',
    });

    var circle3 = new Konva.Circle({
        x: 48,
        y: 28,
        radius: 10,
        fill: 'white',
    });
    var circle4 = new Konva.Circle({
        x: 48,
        y: 68,
        radius: 10,
        fill: 'black',
    });


    layer.add(circle);
    layer.add(circlee);
    layer.add(circle1);
    layer.add(circle2);
    layer.add(circle3);
    layer.add(circle4);
    stage.add(layer);

    gsap.to(ele, {
        rotation: 360,
        repeat: -1,
        ease: "none",
        duration: 2
    })
})
</script>