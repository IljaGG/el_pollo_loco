class Character extends MovableObject {
    speed = 10;

    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-40.png',
    ];

    IMAGES_DEAD = [
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-57.png'
    ];

    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-43.png'
    ];

    IMAGES_BORED = [
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-1.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-2.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-3.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-4.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-5.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-6.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-7.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-8.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-9.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-10.png'
    ];

    IMAGES_SLEEPING = [
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-11.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-12.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-13.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-14.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-15.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-16.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-17.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-18.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-19.png',
        'img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-20.png'
    ];

    offset = {
        top: 80,
        left: 10,
        right: 10,
        bottom: 20
    };

    world;
    walking_sound = new Audio('audio/walk.mp3');
    
    jump_sound = new Audio('audio/jump.mp3');

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_BORED);
        this.loadImages(this.IMAGES_SLEEPING);
        this.applyGravity();
        // this.applyGravityForDeadPepe();s
    }

    animate() {

        setInterval(() => {
            this.checkCharacterMoving();
        }, 200);

        setInterval(() => {
            this.walking_sound.pause();
           
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -250) {
                this.moveLeft();
                this.otherDirection = true;
                this.walking_sound.play();
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                this.jump_sound.play();
            }
            this.world.camera_x = -this.x + 100;

        }, 1000 / 60);

        setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            }
        }, 130);
        let gameInProgressInterval = setInterval(() => {
            if (this.isDead()) {
                this.gameOverImg();
                this.playAnimation(this.IMAGES_DEAD);
                
                setTimeout(() => {
                    this.gameOver();
                    this.reload();
                    clearInterval(gameInProgressInterval);
                }, 3000);

            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                //walk animation
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.restOrSleepAnimation();
            }
        }, 150);

    }


    gameOver() {
        let startImage = document.getElementById('start-wrapper')
        let startButton = document.getElementById('start-btn');
        let gameCanvas = document.getElementById('canvas');
        let gameOverImg = document.getElementById('game-over-wrapper');
        gameOverImg.classList.add('d-none');
        startImage.classList.remove('d-none');
        startButton.classList.remove('d-none');
        startButton.focus();
        gameCanvas.classList.add('d-none');
    }

    gameOverImg() {
        let gameOverImg = document.getElementById('game-over-wrapper');
        gameOverImg.classList.remove('d-none');
    }

    reload() {
        window.location = 'index.html';
    }
}