/* ============================================================
   Three.js 3D Scene — Emre Öcel Portfolio
   Procedural geometry + particle field + mouse interaction
   ============================================================ */

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.171.0/build/three.module.js';

(function () {
  'use strict';

  // ---- State ----
  const state = {
    mouse: { x: 0, y: 0, targetX: 0, targetY: 0 },
    scroll: 0,
    isMobile: window.innerWidth < 768,
    isReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    isVisible: true,
    animationId: null,
  };

  // Skip entirely if reduced motion
  if (state.isReducedMotion) return;

  // ---- Setup ----
  const container = document.getElementById('three-canvas-container');
  if (!container) return;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 5);

  const renderer = new THREE.WebGLRenderer({
    antialias: !state.isMobile,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  // ---- Lighting ----
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0xe5e5e5, 4, 30);
  pointLight1.position.set(3, 3, 3);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0x888888, 3, 30);
  pointLight2.position.set(-3, -2, 2);
  scene.add(pointLight2);

  // ---- Central Object: Icosahedron wireframe + solid ----
  const centralGroup = new THREE.Group();

  // Inner solid
  const icoGeo = new THREE.IcosahedronGeometry(1.2, 1);
  const icoMat = new THREE.MeshPhysicalMaterial({
    color: 0x111111,
    metalness: 0.9,
    roughness: 0.15,
    transparent: true,
    opacity: 0.85,
    envMapIntensity: 1,
  });
  const icoMesh = new THREE.Mesh(icoGeo, icoMat);
  centralGroup.add(icoMesh);

  // Outer wireframe
  const wireGeo = new THREE.IcosahedronGeometry(1.5, 1);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xe5e5e5,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  });
  const wireMesh = new THREE.Mesh(wireGeo, wireMat);
  centralGroup.add(wireMesh);

  // Edge glow
  const edgesGeo = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.35, 1));
  const edgesMat = new THREE.LineBasicMaterial({
    color: 0xe5e5e5,
    transparent: true,
    opacity: 0.55,
  });
  const edgeLines = new THREE.LineSegments(edgesGeo, edgesMat);
  centralGroup.add(edgeLines);

  scene.add(centralGroup);

  // ---- Floating Particle Field ----
  const particleCount = state.isMobile ? 800 : 2000;
  const particlesGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 20;
    positions[i3 + 1] = (Math.random() - 0.5) * 20;
    positions[i3 + 2] = (Math.random() - 0.5) * 15;

    velocities[i3] = (Math.random() - 0.5) * 0.005;
    velocities[i3 + 1] = (Math.random() - 0.5) * 0.005;
    velocities[i3 + 2] = (Math.random() - 0.5) * 0.003;

    sizes[i] = Math.random() * 2 + 0.5;
  }

  particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particlesGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const particleMat = new THREE.PointsMaterial({
    color: 0xe5e5e5,
    size: state.isMobile ? 1.5 : 2,
    transparent: true,
    opacity: 0.4,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const particles = new THREE.Points(particlesGeo, particleMat);
  scene.add(particles);

  // ---- Connecting Lines (nearest particles) ----
  const linesMat = new THREE.LineBasicMaterial({
    color: 0xe5e5e5,
    transparent: true,
    opacity: 0.06,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  let connectionLines = null;

  function updateConnections() {
    if (connectionLines) {
      scene.remove(connectionLines);
      connectionLines.geometry.dispose();
    }

    const maxDistance = state.isMobile ? 2.5 : 3;
    const maxConnections = state.isMobile ? 50 : 150;
    const linePositions = [];
    let count = 0;

    const pos = particlesGeo.attributes.position.array;

    for (let i = 0; i < particleCount && count < maxConnections; i++) {
      for (let j = i + 1; j < particleCount && count < maxConnections; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          linePositions.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
          linePositions.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
          count++;
        }
      }
    }

    if (linePositions.length > 0) {
      const linesGeo = new THREE.BufferGeometry();
      linesGeo.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
      connectionLines = new THREE.LineSegments(linesGeo, linesMat);
      scene.add(connectionLines);
    }
  }

  // ---- Orbit Rings ----
  function createOrbitRing(radius, opacity) {
    const ringGeo = new THREE.TorusGeometry(radius, 0.005, 8, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xe5e5e5,
      transparent: true,
      opacity: opacity,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    return ring;
  }

  const ring1 = createOrbitRing(2.2, 0.08);
  ring1.rotation.x = Math.PI * 0.35;
  ring1.rotation.y = Math.PI * 0.15;
  scene.add(ring1);

  const ring2 = createOrbitRing(2.8, 0.05);
  ring2.rotation.x = Math.PI * 0.65;
  ring2.rotation.y = Math.PI * -0.25;
  scene.add(ring2);

  // ---- Small Orbiting Spheres ----
  const orbiters = [];
  for (let i = 0; i < 5; i++) {
    const geo = new THREE.SphereGeometry(0.04, 8, 8);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xe5e5e5,
      transparent: true,
      opacity: 0.7,
    });
    const sphere = new THREE.Mesh(geo, mat);
    orbiters.push({
      mesh: sphere,
      radius: 2 + Math.random() * 1,
      speed: 0.3 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2,
      tiltX: (Math.random() - 0.5) * Math.PI * 0.7,
      tiltZ: (Math.random() - 0.5) * Math.PI * 0.3,
    });
    scene.add(sphere);
  }

  // ---- Mouse Tracking ----
  function onMouseMove(e) {
    state.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    state.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
  }

  function onTouchMove(e) {
    if (e.touches.length > 0) {
      state.mouse.targetX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
      state.mouse.targetY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
    }
  }

  window.addEventListener('mousemove', onMouseMove, { passive: true });
  window.addEventListener('touchmove', onTouchMove, { passive: true });

  // ---- Scroll Tracking ----
  window.addEventListener('scroll', function () {
    state.scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  }, { passive: true });

  // ---- Visibility ----
  document.addEventListener('visibilitychange', function () {
    state.isVisible = !document.hidden;
    if (state.isVisible && !state.animationId) {
      animate();
    }
  });

  // ---- Click Interaction ----
  let clickBurst = 0;
  container.addEventListener('click', function () {
    clickBurst = 1;
    container.classList.add('interactive');
  });

  // ---- Resize ----
  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    state.isMobile = window.innerWidth < 768;
  });

  // ---- Theme Change Observer ----
  const themeObserver = new MutationObserver(function () {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    icoMat.color.setHex(isLight ? 0xe8e8e8 : 0x0a0a0a);
    particleMat.color.setHex(isLight ? 0x222222 : 0xe5e5e5);
    wireMat.color.setHex(isLight ? 0x222222 : 0xe5e5e5);
    edgesMat.color.setHex(isLight ? 0x222222 : 0xe5e5e5);
    linesMat.color.setHex(isLight ? 0x222222 : 0xe5e5e5);
    ring1.material.color.setHex(isLight ? 0x222222 : 0xe5e5e5);
    ring2.material.color.setHex(isLight ? 0x222222 : 0xe5e5e5);
    orbiters.forEach(o => o.mesh.material.color.setHex(isLight ? 0x222222 : 0xe5e5e5));
    pointLight1.color.setHex(isLight ? 0x222222 : 0xe5e5e5);
    pointLight2.color.setHex(isLight ? 0x555555 : 0x888888);
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  // Apply initial theme
  const initialIsLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (initialIsLight) {
    icoMat.color.setHex(0xe8e8e8);
    particleMat.color.setHex(0x222222);
    wireMat.color.setHex(0x222222);
    edgesMat.color.setHex(0x222222);
    linesMat.color.setHex(0x222222);
    ring1.material.color.setHex(0x222222);
    ring2.material.color.setHex(0x222222);
    orbiters.forEach(o => o.mesh.material.color.setHex(0x222222));
    pointLight1.color.setHex(0x222222);
    pointLight2.color.setHex(0x555555);
  }

  // ---- Connection update interval ----
  let connectionFrame = 0;

  // ---- Animation Loop ----
  const clock = new THREE.Clock();

  function animate() {
    if (!state.isVisible) {
      state.animationId = null;
      return;
    }

    state.animationId = requestAnimationFrame(animate);

    const elapsed = clock.getElapsedTime();
    const delta = clock.getDelta();

    // Smooth mouse interpolation
    state.mouse.x += (state.mouse.targetX - state.mouse.x) * 0.05;
    state.mouse.y += (state.mouse.targetY - state.mouse.y) * 0.05;

    // ---- Central Object ----
    centralGroup.rotation.y = elapsed * 0.15 + state.mouse.x * 0.5;
    centralGroup.rotation.x = Math.sin(elapsed * 0.1) * 0.2 + state.mouse.y * 0.3;
    centralGroup.rotation.z = Math.cos(elapsed * 0.08) * 0.1;

    // Scale pulse on click
    if (clickBurst > 0) {
      const scale = 1 + clickBurst * 0.3;
      centralGroup.scale.setScalar(scale);
      wireMesh.material.opacity = 0.15 + clickBurst * 0.3;
      edgeLines.material.opacity = 0.3 + clickBurst * 0.5;
      clickBurst *= 0.93;
      if (clickBurst < 0.01) {
        clickBurst = 0;
        centralGroup.scale.setScalar(1);
        wireMesh.material.opacity = 0.15;
        edgeLines.material.opacity = 0.3;
      }
    }

    // ---- Scroll-based camera ----
    camera.position.z = 5 - state.scroll * 2;
    camera.position.y = state.scroll * -1;
    camera.lookAt(0, camera.position.y * 0.5, 0);

    // Fade objects based on scroll
    const heroOpacity = Math.max(0, 1 - state.scroll * 3);
    centralGroup.visible = heroOpacity > 0.01;
    if (centralGroup.visible) {
      icoMat.opacity = 0.6 * heroOpacity;
      wireMat.opacity = 0.15 * heroOpacity;
      edgesMat.opacity = 0.3 * heroOpacity;
    }
    ring1.material.opacity = 0.08 * heroOpacity;
    ring2.material.opacity = 0.05 * heroOpacity;

    // Particles always visible but fade
    const particleOpacity = Math.max(0.1, 0.4 - state.scroll * 0.2);
    particleMat.opacity = particleOpacity;

    // ---- Particle Movement ----
    const posArray = particlesGeo.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      posArray[i3] += velocities[i3];
      posArray[i3 + 1] += velocities[i3 + 1];
      posArray[i3 + 2] += velocities[i3 + 2];

      // Boundary wrap
      if (Math.abs(posArray[i3]) > 10) velocities[i3] *= -1;
      if (Math.abs(posArray[i3 + 1]) > 10) velocities[i3 + 1] *= -1;
      if (Math.abs(posArray[i3 + 2]) > 7.5) velocities[i3 + 2] *= -1;
    }
    particlesGeo.attributes.position.needsUpdate = true;

    // Update connections every 30 frames
    connectionFrame++;
    if (connectionFrame % 30 === 0) {
      updateConnections();
    }

    // ---- Orbit Rings ----
    ring1.rotation.z = elapsed * 0.08;
    ring2.rotation.z = -elapsed * 0.06;

    // ---- Orbiting Spheres ----
    orbiters.forEach(function (o) {
      const angle = elapsed * o.speed + o.offset;
      o.mesh.position.x = Math.cos(angle) * o.radius;
      o.mesh.position.y = Math.sin(angle) * o.radius * Math.cos(o.tiltX);
      o.mesh.position.z = Math.sin(angle) * o.radius * Math.sin(o.tiltZ);
      o.mesh.material.opacity = heroOpacity * 0.7;
    });

    // ---- Point Lights follow mouse subtly ----
    pointLight1.position.x = 3 + state.mouse.x * 2;
    pointLight1.position.y = 3 + state.mouse.y * 2;
    pointLight2.position.x = -3 - state.mouse.x;
    pointLight2.position.y = -2 - state.mouse.y;

    renderer.render(scene, camera);
  }

  // Start
  animate();
  updateConnections();
})();
