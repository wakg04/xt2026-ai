(() => {
  ////////////////////////////////
  // 场景 / 相机 / 渲染器
  ////////////////////////////////
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.set(10, 15, 20);
  const renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById('scene-container').appendChild(renderer.domElement);

  ////////////////////////////////
  // 光照
  ////////////////////////////////
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(10, 20, 10);
  dirLight.castShadow = true;
  dirLight.shadow.radius = 4;
  scene.add(dirLight);

  ////////////////////////////////
  // 数据 / 持久化
  ////////////////////////////////
  const SIZE = 8;
  const world = [];
  for(let x=0;x<SIZE;x++){
    world[x]=[];
    for(let z=0;z<SIZE;z++){
      world[x][z]={terrain:'grass',kind:null};
    }
  }

  const STORAGE_KEY = 'mini_world_editor';
  function saveWorld(slot){
    localStorage.setItem(`${STORAGE_KEY}_${slot}`, JSON.stringify(world));
  }
  function loadWorld(slot){
    const data = localStorage.getItem(`${STORAGE_KEY}_${slot}`);
    if(data){
      const arr = JSON.parse(data);
      for(let x=0;x<SIZE;x++)
        for(let z=0;z<SIZE;z++)
          world[x][z] = arr[x][z];
    }
  }

  function setCell(x,z,terrain,kind){
    world[x][z] = {terrain,kind};
    updateCellMesh(x,z);
    drawMiniMap();
  }

  ////////////////////////////////
  // 工厂 / 网格创建
  ////////////////////////////////
  const cellMeshes = [];
  function createCellMesh(x,z){
    const group = new THREE.Group();
    const geometry = new THREE.BoxGeometry(1,0.2,1);
    const material = new THREE.MeshStandardMaterial({color:0x2ecc71});
    const base = new THREE.Mesh(geometry, material);
    base.position.y = 0;
    base.receiveShadow = true;
    group.add(base);
    group.position.set(x,0,z);
    scene.add(group);
    return group;
  }

  function updateCellMesh(x,z){
    if(!cellMeshes[x]) cellMeshes[x]=[];
    if(!cellMeshes[x][z]) cellMeshes[x][z]=createCellMesh(x,z);
    const cell = world[x][z];
    const mesh = cellMeshes[x][z];
    const colorMap = {grass:0x2ecc71, path:0xd35400, water:0x3498db, stone:0x95a5a6};
    mesh.children[0].material.color.setHex(colorMap[cell.terrain] || 0x2ecc71);
    // 清除旧物件
    for(let i=mesh.children.length-1;i>0;i--) mesh.remove(mesh.children[i]);
    if(cell.kind==='tree'){
      const tree = new THREE.Mesh(new THREE.ConeGeometry(0.3,0.8,6), new THREE.MeshStandardMaterial({color:0x27ae60}));
      tree.position.y=0.5;
      tree.castShadow=true;
      mesh.add(tree);
    } else if(cell.kind==='house'){
      const house = new THREE.Mesh(new THREE.BoxGeometry(0.8,0.6,0.8), new THREE.MeshStandardMaterial({color:0xe67e22}));
      const roof = new THREE.Mesh(new THREE.ConeGeometry(0.5,0.4,4), new THREE.MeshStandardMaterial({color:0xc0392b}));
      house.position.y=0.3;
      roof.position.y=0.7;
      mesh.add(house,roof);
    }
  }

  ////////////////////////////////
  // 交互
  ////////////////////////////////
  let selectedTool = 'grass';
  document.querySelectorAll('.tool').forEach(el=>{
    el.addEventListener('click',()=>{selectedTool=el.dataset.tool; document.querySelectorAll('.tool').forEach(t=>t.classList.remove('active')); el.classList.add('active');});
  });

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  function onClick(e){
    mouse.x = (e.clientX/window.innerWidth)*2-1;
    mouse.y = -(e.clientY/window.innerHeight)*2+1;
    raycaster.setFromCamera(mouse,camera);
    const intersects = raycaster.intersectObjects(cellMeshes.flat().map(g=>g.children[0]));
    if(intersects.length){
      const g = intersects[0].object.parent;
      const x = Math.round(g.position.x);
      const z = Math.round(g.position.z);
      if(selectedTool==='erase') setCell(x,z,'grass',null);
      else if(['tree','house'].includes(selectedTool)) setCell(x,z,world[x][z].terrain,selectedTool);
      else setCell(x,z,selectedTool,world[x][z].kind);
    }
  }

  renderer.domElement.addEventListener('click',onClick);

  // 鼠标拖拽旋转
  let isDragging=false,prevX=0,prevY=0;
  renderer.domElement.addEventListener('mousedown', e=>{isDragging=true; prevX=e.clientX; prevY=e.clientY;});
  window.addEventListener('mouseup', ()=>{isDragging=false;});
  window.addEventListener('mousemove', e=>{
    if(isDragging){
      const dx = e.clientX-prevX;
      const dy = e.clientY-prevY;
      scene.rotation.y += dx*0.01;
      scene.rotation.x += dy*0.01;
      prevX=e.clientX; prevY=e.clientY;
    }
  });
  window.addEventListener('wheel', e=>{
    camera.position.y += e.deltaY*0.01;
    camera.position.z += e.deltaY*0.01;
  });

  ////////////////////////////////
  // 小地图
  ////////////////////////////////
  const miniMap = document.getElementById('mini-map');
  const mmCtx = miniMap.getContext('2d');
  function drawMiniMap(){
    const cellW = miniMap.width/SIZE;
    const cellH = miniMap.height/SIZE;
    for(let x=0;x<SIZE;x++){
      for(let z=0;z<SIZE;z++){
        const c = world[x][z];
        const colorMap = {grass:'#2ecc71', path:'#d35400', water:'#3498db', stone:'#95a5a6'};
        mmCtx.fillStyle = colorMap[c.terrain]||'#2ecc71';
        mmCtx.fillRect(x*cellW,z*cellH,cellW,cellH);
        if(c.kind==='tree'){ mmCtx.fillStyle='#27ae60'; mmCtx.fillRect(x*cellW,z*cellH,cellW,cellH);}
        if(c.kind==='house'){ mmCtx.fillStyle='#c0392b'; mmCtx.fillRect(x*cellW,z*cellH,cellW,cellH);}
      }
    }
  }

  ////////////////////////////////
  // UI 控件
  ////////////////////////////////
  const worldSelect = document.getElementById('world-select');
  for(let i=1;i<=3;i++){
    const opt = document.createElement('option'); opt.value=i; opt.textContent=`存档${i}`; worldSelect.appendChild(opt);
  }
  worldSelect.addEventListener('change',()=>{loadWorld(worldSelect.value); for(let x=0;x<SIZE;x++) for(let z=0;z<SIZE;z++) updateCellMesh(x,z); drawMiniMap();});
  document.getElementById('reset-btn').addEventListener('click',()=>{generateRandomVillage(); drawMiniMap(); saveWorld(worldSelect.value);});
  document.getElementById('clear-btn').addEventListener('click',()=>{for(let x=0;x<SIZE;x++) for(let z=0;z<SIZE;z++) setCell(x,z,'grass',null); saveWorld(worldSelect.value);});

  ////////////////////////////////
  // 程序化随机村庄
  ////////////////////////////////
  function generateRandomVillage(){
    for(let x=0;x<SIZE;x++)
      for(let z=0;z<SIZE;z++)
        setCell(x,z,'grass',null);
    // 水塘
    const wx = Math.floor(Math.random()*4+2), wz = Math.floor(Math.random()*4+2);
    for(let x=wx;x<wx+2;x++) for(let z=wz;z<wz+2;z++) setCell(x,z,'water',null);
    // 石堆
    for(let i=0;i<3;i++) setCell(Math.floor(Math.random()*SIZE), Math.floor(Math.random()*SIZE),'stone',null);
    // 房子
    for(let i=0;i<2;i++) setCell(Math.floor(Math.random()*SIZE), Math.floor(Math.random()*SIZE),'grass','house');
    // 树
    for(let i=0;i<3;i++) setCell(Math.floor(Math.random()*SIZE), Math.floor(Math.random()*SIZE),'grass','tree');
    // 小路（简单连线）
    setCell(0,0,'path',null);
    setCell(0,1,'path',null);
    setCell(1,1,'path',null);
  }

  ////////////////////////////////
  // 启动
  ////////////////////////////////
  loadWorld(1);
  for(let x=0;x<SIZE;x++) for(let z=0;z<SIZE;z++) updateCellMesh(x,z);
  drawMiniMap();

  // 提示淡出
  setTimeout(()=>{document.getElementById('hint').style.opacity=0;},3000);

  function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
  }
  animate();

})();