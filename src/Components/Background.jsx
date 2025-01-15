import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null); // Create a reference to the canvas element

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    
    const stars = [];

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 1;
        this.speed = Math.random() * 0.5 + 0.03;
        this.opacity = Math.random() +0.1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(175, 0, 181, ${this.opacity})`;
        ctx.fill();
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }
    }

    var starCount = 0;
    if(visualViewport.width < 1000){
        starCount = 100;
    }else{
        starCount = 500;
    }

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.draw();
        star.update();
      });
      requestAnimationFrame(animate);
    };

    animate();

    // Resize canvas when window size changes
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    
    window.addEventListener('mousemove', (event) =>{
        
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        stars.forEach(star => {
            const distance = Math.sqrt(Math.pow(mouseX -star.x,2) +   Math.pow(mouseY- star.y,2));
    
            if (distance < 50) {
                const angle = Math.atan2(star.y - mouseY, star.x - mouseX); 
                star.x +=  Math.cos(angle) * 1 * 2; 
                star.y += Math.sin(angle) * 1 * 2;
            }
        });
    })
    window.addEventListener('mouseup', (event) =>{
        
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        stars.forEach(star => {
            const distance = Math.sqrt(Math.pow(mouseX -star.x,2) +   Math.pow(mouseY- star.y,2));
    
            if (distance < 150) {
                const angle = Math.atan2(star.y - mouseY, star.x - mouseX); 
                star.x +=  Math.cos(angle) * 20 * 5; 
                star.y += Math.sin(angle) * 20 * 5;
            }
        });
    })

    window.addEventListener("keydown", (event) => {if (event.repeat) return;
        if(event.key=='f'){
            stars.forEach(star => {
                star.speed += 3
            });
        }});
        window.addEventListener("keyup", (event) => {
            if(event.key=='f'){
                stars.forEach(star => {
                    star.speed -= 3
                });
            }});



    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return <canvas className="animate-image-hue-shift-long"ref={canvasRef}></canvas>;
};

export default Background;
