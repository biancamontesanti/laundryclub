import {} from '@dcl/sdk/math'
import { engine, GltfContainer, Transform, ColliderLayer } from '@dcl/sdk/ecs'

export function main() {
  // Create entity for the model
  const myModel = engine.addEntity()

  // Add Transform component to position the model
  Transform.create(myModel, {
    position: { x: 2, y: 0, z: 32}, 
    scale: { x: 0.85, y: 0.85, z: 0.85},    
    rotation: { x: 0, y: 0, z: 0, w: 1 }  
  })

  // Add GltfContainer with collision masks
  GltfContainer.create(myModel, {
    src: 'assets/scene/LAUNDROMAT.glb',
    invisibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS
  })
}
