"use client";

import { useContext, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Timer } from "three/addons/misc/Timer.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LoadingContext } from "../provider/LoadingProvider";
import Loader from "@/components/ui/loader";
gsap.registerPlugin(ScrollTrigger);

export default function Model() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  let model: THREE.Group;

  // three.js
  useEffect(() => {
    if (typeof window === "undefined") return;

    let isMobile = window.innerWidth <= 768;
    let isBigScreen = window.innerWidth >= 1280;

    const SIZES = {
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: Math.min(window.devicePixelRatio, 2),
    };
    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    // マウス動作でカメラを少し動かす
    const mouse = new THREE.Vector2();
    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / SIZES.width) * 2 - 1;
      mouse.y = -(event.clientY / SIZES.height) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(SIZES.width, SIZES.height);
    renderer.setPixelRatio(SIZES.pixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    scene.add(camera);

    let mixer: THREE.AnimationMixer;
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/model/tenhun_falling_spaceman_fanart.glb", (gltf) => {
      mixer = new THREE.AnimationMixer(gltf.scene);
      model = gltf.scene;
      const action = mixer.clipAction(gltf.animations[0]);
      action.play();
      model.rotation.y = (Math.PI / 180) * 140;
      model.position.x = isMobile ? 0 : isBigScreen ? 0.5 : 0.75;
      model.position.z = isMobile ? -3 : isBigScreen ? -2.2 : -2.5;
      model.position.y = isMobile ? -1 : -0.7;
      scene.add(model);

      // GSAPでmodel.position.yをアニメーション
      gsap.from(model.position, {
        y: 2,
        duration: 2,
        ease: "power2.inOut",
      });
      gsap.fromTo(
        model.position,
        {
          y: isMobile ? -1 : -0.7,
        },
        {
          y: 0,
          scrollTrigger: {
            trigger: "canvas",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      // モデル読み込み完了後にローダーを非表示
      setIsLoading(false);
    });

    renderer.render(scene, camera);

    const onResize = () => {
      SIZES.width = window.innerWidth;
      SIZES.height = window.innerHeight;
      SIZES.pixelRatio = Math.min(window.devicePixelRatio, 2);
      camera.aspect = SIZES.width / SIZES.height;
      camera.updateProjectionMatrix();
      renderer.setSize(SIZES.width, SIZES.height);
      renderer.setPixelRatio(SIZES.pixelRatio);
    };
    window.addEventListener("resize", onResize);

    const timer = new Timer();
    const animate = () => {
      timer.update();
      const deltaTime = timer.getDelta();
      mixer?.update(deltaTime);
      renderer.render(scene, camera);

      const targetPositionX = -mouse.x * 0.1;
      const targetPositionY = -mouse.y * 0.1;
      camera.position.x += (targetPositionX - camera.position.x) * 0.02;
      camera.position.y += (targetPositionY - camera.position.y) * 0.02;
      if (model) {
        camera.lookAt(0, 0, -1);
      }
    };
    renderer.setAnimationLoop(animate);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <canvas className="w-full h-full absolute top-0 left-0 -z-10"></canvas>
    </>
  );
}
