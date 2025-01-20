//品牌抬头伸缩图
const header = document.querySelector('.header');

window.addEventListener('scroll', function (event) {
    const scrolldistance = window.scrollY;
    if (scrolldistance > 60) {
        header.classList.add('scrolled');
    } else if (scrolldistance < 60) {
        header.classList.remove('scrolled');
    }
})
//这是品牌抬头伸缩图里面的大小标题
const brandcontent1 = document.querySelector('.brandcontent1');
window.addEventListener('scroll', function () {
    const scrolldistance1 = window.scrollY;
    if (scrolldistance1 > 50) {
        brandcontent1.classList.add('brandscrolled1');
    } else if (scrolldistance1 < 50) {
        brandcontent1.classList.remove('brandscrolled1');
    }
})
const brandcontent2 = document.querySelector('.brandcontent2');
window.addEventListener('scroll', function () {
    const scrolldistance2 = window.scrollY;
    if (scrolldistance2 > 50) {
        brandcontent2.classList.add('brandscrolled2');
    } else if (scrolldistance2 < 50) {
        brandcontent2.classList.remove('brandscrolled2');
    }
})




//轮播图及其组件
document.addEventListener('DOMContentLoaded', function () {
    //获取图像
    const imgs = document.querySelectorAll('.alterimg');
    //获取点
    const dots = document.querySelectorAll('.guidedots .icon-dian');
    //获取图片的容器
    const alterimgs = document.querySelector('.alterimgs');
    //获取箭头
    const arrows = document.querySelectorAll('.arrow');
    let currentIndex = 0;
    const totalimgs = imgs.length;
    let autoplayInterval;

    // 更新轮播图 问题在于圆点在对应图片播放时不亮（问题已解决）
    function updateImgs() {
        alterimgs.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');  // 直接添加 'active' 类到 .icon-dian 元素
            } else {
                dot.classList.remove('active');  // 移除 'active' 类
            }
        });
    }

    // 点击左箭头
    function left() {
        currentIndex = (currentIndex === 0) ? totalimgs - 1 : currentIndex - 1;
        updateImgs();
    }

    // 点击右箭头
    function right() {
        currentIndex = (currentIndex === totalimgs - 1) ? 0 : currentIndex + 1;
        updateImgs();
    }

    // 点击圆点
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            currentIndex = index;
            updateImgs();
        });
    });

    // 左右箭头点击事件
    arrows.forEach(arrow => {
        arrow.addEventListener('click', function () {
            if (arrow.classList.contains('left')) {
                left();
            } else if (arrow.classList.contains('right')) {
                right();
            }
        });
    });

    // 自动轮播
    function startAlterImgs() {
        autoplayInterval = setInterval(() => {
            right();
        }, 6000); // 每3秒切换一次
    }

    // 停止自动轮播
    function stopAlterImgs() {
        clearInterval(autoplayInterval);
    }

    // 鼠标悬停停止自动播放
    document.querySelector('.alternateImgContainer').addEventListener('mouseover', stopAlterImgs)
    document.querySelector('.alternateImgContainer').addEventListener('mouseout', startAlterImgs);

    // 启动自动轮播
    startAlterImgs();
    updateImgs();
});



//金色粒子图
/*
const canvas = document.getElementById('canvas');
        let ctx;

        function initcanvas() {
            ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        initcanvas();

        const particles = [];

        class Particle {
            constructor(x, y, size, color, speedx, speedy) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = color;
                this.speedx = speedx;
                this.speedy = speedy;
            }

            draw() {
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
                gradient.addColorStop(0, 'rgba(0,0,0,1)');
                gradient.addColorStop(1, 'rgba(0,0,0,1)');
                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
                ctx.fill();
            }

            update() {
                this.x += this.speedx;
                this.y += this.speedy;

                // 边界检测，反弹
                if (this.x + this.size > canvas.width || this.x - this.size < 0) {
                    this.speedx = -this.speedx;
                }
                if (this.y + this.size > canvas.height || this.y - this.size < 0) {
                    this.speedy = -this.speedy;
                }
            }
        }

        function initparticles(numofparticles) {
            for (let i = 0; i < numofparticles; i++) {
                const size = Math.random();
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const speedx = Math.random();
                const speedy = Math.random();
                particles.push(new Particle(x, y, size, 'rgba(0,0,0,1)', speedx, speedy));
            }
        }

        function animateparticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.draw();
                particle.update();
            });
            requestAnimationFrame(animateparticles);
        }

        initparticles(200);
        animateparticles();

        window.addEventListener('resize', () => {
            initcanvas();
        });

*/



