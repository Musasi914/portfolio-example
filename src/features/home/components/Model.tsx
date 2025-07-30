"use client";

import { useContext, useEffect, useCallback, useMemo } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Timer } from "three/addons/misc/Timer.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LoadingContext } from "../provider/LoadingProvider";
import Loader from "@/components/ui/loader";
import { MODEL_CONFIG } from "@/constants";
import { getDeviceType } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface Sizes {
  width: number;
  height: number;
  pixelRatio: number;
}

/**
 * 3Dモデルコンポーネント
 * Three.jsを使用して3Dモデルを表示
 */
export default function Model() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  // デバイスタイプを取得
  const deviceType = useMemo(() => getDeviceType(), []);

  // モデル設定を取得
  const modelConfig = useMemo(() => MODEL_CONFIG[deviceType], [deviceType]);

  // マウス移動ハンドラー
  const handleMouseMove = useCallback((event: MouseEvent, mouse: THREE.Vector2, sizes: Sizes) => {
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    mouse.y = -(event.clientY / sizes.height) * 2 + 1;
  }, []);

  // リサイズハンドラー
  const handleResize = useCallback((camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, sizes: Sizes) => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    sizes.pixelRatio = Math.min(window.devicePixelRatio, 2);

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(sizes.pixelRatio);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // サイズ設定
    const SIZES: Sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: Math.min(window.devicePixelRatio, 2),
    };

    // キャンバス要素の取得
    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    if (!canvas) return;

    // シーンの設定
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, SIZES.width / SIZES.height, 0.1, 100);

    // マウス設定
    const mouse = new THREE.Vector2();
    const mouseMoveHandler = (event: MouseEvent) => handleMouseMove(event, mouse, SIZES);
    window.addEventListener("mousemove", mouseMoveHandler);

    // レンダラーの設定
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(SIZES.width, SIZES.height);
    renderer.setPixelRatio(SIZES.pixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    scene.add(camera);

    // モデルの読み込み
    let mixer: THREE.AnimationMixer;
    let model: THREE.Group;

    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/model/tenhun_falling_spaceman_fanart.glb", (gltf) => {
      mixer = new THREE.AnimationMixer(gltf.scene);
      model = gltf.scene;

      // アニメーションの設定
      const action = mixer.clipAction(gltf.animations[0]);
      action.play();

      // モデルの位置と回転を設定
      model.rotation.y = modelConfig.rotation.y;
      model.position.x = modelConfig.position.x;
      model.position.z = modelConfig.position.z;
      model.position.y = modelConfig.position.y;
      scene.add(model);

      // エントランスアニメーション
      gsap.from(model.position, {
        y: 2,
        duration: 2,
        ease: "power2.inOut",
      });

      // スクロールアニメーション
      gsap.fromTo(
        model.position,
        { y: modelConfig.position.y },
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

      // ローディング完了
      setIsLoading(false);
    });

    // 初期レンダリング
    renderer.render(scene, camera);

    // リサイズハンドラーの設定
    const resizeHandler = () => handleResize(camera, renderer, SIZES);
    window.addEventListener("resize", resizeHandler);

    // アニメーションループ
    const timer = new Timer();
    const animate = () => {
      timer.update();
      const deltaTime = timer.getDelta();

      if (mixer) {
        mixer.update(deltaTime);
      }

      renderer.render(scene, camera);

      // マウスによるカメラ移動
      if (model) {
        const targetPositionX = -mouse.x * 0.1;
        const targetPositionY = -mouse.y * 0.1;
        camera.position.x += (targetPositionX - camera.position.x) * 0.02;
        camera.position.y += (targetPositionY - camera.position.y) * 0.02;
        camera.lookAt(0, 0, -1);
      }
    };

    renderer.setAnimationLoop(animate);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("mousemove", mouseMoveHandler);
      renderer.dispose();
    };
  }, [deviceType, modelConfig, handleMouseMove, handleResize, setIsLoading]);

  return (
    <>
      {isLoading && <Loader />}
      <canvas className="w-full h-full absolute top-0 left-0 -z-10" />
    </>
  );
}
