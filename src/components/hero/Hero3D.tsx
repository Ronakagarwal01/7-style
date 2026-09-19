import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Group for the 3D '7' and orbiting particles
    const group = new THREE.Group();
    scene.add(group);

    // Build the sculptural '7' shape
    const shape = new THREE.Shape();
    // Start at top-left of top bar
    shape.moveTo(-1.1, 1.4);
    shape.lineTo(1.1, 1.4); // top right
    shape.lineTo(1.1, 1.0); // down right
    shape.lineTo(0.0, -1.4); // bottom diagonal point
    shape.lineTo(-0.55, -1.4); // bottom thickness
    shape.lineTo(0.5, 0.95); // up inner edge
    shape.lineTo(-1.1, 0.95); // left inner edge
    shape.closePath();

    const extrudeSettings = {
      steps: 2,
      depth: 0.38,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.06,
      bevelOffset: 0,
      bevelSegments: 5,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    // Luxurious Champagne Gold Physical Material
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xd4af37),
      emissive: new THREE.Color(0x3a2b10),
      emissiveIntensity: 0.15,
      metalness: 0.88,
      roughness: 0.22,
      clearcoat: 0.5,
      clearcoatRoughness: 0.15,
      reflectivity: 0.9,
    });

    const mesh = new THREE.Mesh(geometry, material);
    group.add(mesh);

    // Subtle floating gold particles around the 7
    const particleCount = 45;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 5;
      particlePositions[i + 1] = (Math.random() - 0.5) * 5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 3;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xe5c384,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfff8ee, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffecd2, 2.5);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xc59d5f, 1.2);
    fillLight.position.set(-4, -2, 3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xfff5ea, 2.0, 10);
    rimLight.position.set(0, 3, -3);
    scene.add(rimLight);

    // Mouse & Touch Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = -(event.clientY / innerHeight - 0.5) * 2;
    };

    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches[0]) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = e.touches[0].clientY - touchStartY;
        mouseX = (deltaX / window.innerWidth) * 3;
        mouseY = -(deltaY / window.innerHeight) * 3;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 300;
      const h = container.clientHeight || 300;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow (lerp)
      targetX += (mouseX * 0.45 - targetX) * 0.05;
      targetY += (mouseY * 0.35 - targetY) * 0.05;

      // Gentle floating sine motion & slow continuous rotation
      group.position.y = Math.sin(elapsedTime * 0.9) * 0.12;
      mesh.rotation.y = targetX + Math.sin(elapsedTime * 0.4) * 0.15;
      mesh.rotation.x = -targetY + Math.cos(elapsedTime * 0.3) * 0.08;

      // Slow particle orbit
      particles.rotation.y = elapsedTime * 0.06;
      particles.rotation.x = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
      }
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[240px] sm:h-[340px] md:h-[480px] flex items-center justify-center">
      <div 
        ref={mountRef} 
        className="w-full h-full max-w-[500px] max-h-[500px] relative z-10 touch-pan-y cursor-grab active:cursor-grabbing" 
      />
      {/* Soft Ambient Gold Radial Glow Behind 3D Object */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-[#C59D5F]/15 rounded-full blur-3xl pointer-events-none -z-1" />
    </div>
  );
};
