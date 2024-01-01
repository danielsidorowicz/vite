export default class Hex3D {

    constructor(doors1, doors2) {

        const radius = 100 // zmienna wielkość hexagona, a tym samym całego labiryntu

        const container = new Object3D() // kontener na obiekty 3D

        const wall = new Mesh(geometry, material); // prostopadłościan - ściana hex-a

        for (let i = 0; i < 6; i++) {
            let angle = (Math.PI * i) / 3
            let side = wall.clone()            // klon ściany
            side.position.x = angle * radius          // punkt na okręgu, do obliczenia
            side.position.z = angle * radius          // punkt na okręgu, do obliczenia      
            side.lookAt(container.position)    // nakierowanie ściany na środek kontenera 3D  
            container.add(side)                // dodanie ściany do kontenera

        }

        return container

    }


}